# 12 - Styled Components

> **Objetivo desta etapa**
>
> Configurar o Styled Components como solução oficial de estilização da aplicação, preparando a infraestrutura necessária para suportar o tema global, o Design System e os modos claro e escuro.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral
- ✅ 03 - Roadmap de Desenvolvimento
- ✅ 04 - Git Workflow
- ✅ 05 - Setup Inicial
- ✅ 06 - Estrutura de Pastas
- ✅ 07 - ESLint
- ✅ 08 - Prettier
- ✅ 09 - Husky e lint-staged
- ✅ 10 - Commitlint
- ✅ 11 - Aliases de Importação

---

# Por que agora?

Até este momento, toda a infraestrutura de desenvolvimento foi preparada.

Antes de iniciarmos a construção da interface e do Design System, é necessário definir a solução oficial de estilização da aplicação.

Nesta etapa será criada apenas a infraestrutura de estilos. Os tokens de design, temas e componentes visuais serão implementados em etapas específicas.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Styled Components instalado.
- Tipagens configuradas para TypeScript.
- ThemeProvider configurado.
- Estrutura inicial do tema criada.
- GlobalStyle configurado.
- Aplicação utilizando o ThemeProvider.

Nenhum componente visual será criado nesta etapa.

---

# Princípios

## Tema como única fonte de verdade

Todo valor visual deverá ser obtido através do tema.

Não utilizar cores, espaçamentos ou sombras diretamente nos componentes.

---

## Separação de responsabilidades

Esta etapa configura apenas a infraestrutura.

Os Design Tokens serão implementados posteriormente.

---

## Preparação para crescimento

A estrutura criada deverá suportar naturalmente:

- Dark Theme
- Light Theme
- Glassmorphism
- Design System
- Responsividade

Sem necessidade de reorganizações futuras.

---

# Dependências

Instalar:

```bash
npm install styled-components
```

```bash
npm install -D @types/styled-components
```

---

# Estrutura esperada

Ao concluir esta etapa:

```text
src/

styles/
│
├── GlobalStyle.ts
├── index.ts
├── styled.d.ts
│
└── theme/
    └── index.ts
```

---

# Etapa 1 — Instalar as dependências

Executar:

```bash
npm install styled-components
```

Depois:

```bash
npm install -D @types/styled-components
```

---

# Etapa 2 — Criar a estrutura de estilos

Criar:

```text
src/styles/

GlobalStyle.ts

index.ts

styled.d.ts

theme/

theme/index.ts
```

Ainda não criar:

- colors.ts
- spacing.ts
- typography.ts
- breakpoints.ts

Esses arquivos pertencem à etapa de Design Tokens.

---

# Etapa 3 — Configurar o ThemeProvider

Envolver toda a aplicação utilizando o ThemeProvider.

Inicialmente utilizar apenas um tema base.

Não implementar Dark Mode nesta etapa.

---

# Etapa 4 — Configurar o GlobalStyle

Criar o GlobalStyle.

Inicialmente definir apenas:

- reset mínimo;
- box-sizing;
- body;
- fonte padrão;
- background utilizando o tema;
- cor do texto utilizando o tema.

Evitar adicionar estilos específicos de componentes.

---

# Etapa 5 — Configurar a tipagem

Criar a tipagem do tema para o Styled Components.

Garantir que o TypeScript reconheça corretamente todas as propriedades do tema.

---

# Etapa 6 — Validar a configuração

Executar:

```bash
npm run dev
```

Depois:

```bash
npm run lint
```

Confirmar que:

- a aplicação inicia normalmente;
- o ThemeProvider funciona;
- não existem erros de TypeScript;
- não existem erros de lint.

---

# Validação

Confirmar:

- [ ] Styled Components instalado.
- [ ] ThemeProvider funcionando.
- [ ] GlobalStyle aplicado.
- [ ] Tipagem configurada.
- [ ] Projeto executando normalmente.

---

# Arquivos criados

- `src/styles/GlobalStyle.ts`
- `src/styles/index.ts`
- `src/styles/styled.d.ts`
- `src/styles/theme/index.ts`

---

# Arquivos alterados

- `src/main.tsx`

---

# Arquivos removidos

Nenhum.

---

# Branch

Atualizar a `main`.

```bash
git checkout main
git pull origin main
```

Criar a branch:

```bash
git checkout -b chore/styled-components
```

---

# Commits

## Commit 1

Instalação das dependências.

```bash
git add package.json package-lock.json
git commit -m "chore(styles): install styled-components"
```

---

## Commit 2

Criação da estrutura.

```bash
git add src/styles
git commit -m "chore(styles): create styles infrastructure"
```

---

## Commit 3

Configuração do ThemeProvider.

```bash
git add src/main.tsx src/styles
git commit -m "chore(styles): configure ThemeProvider"
```

---

## Commit 4

Validação final.

```bash
git add .
git commit -m "chore(styles): validate styles configuration"
```

---

# Push

```bash
git push -u origin chore/styled-components
```

---

# Pull Request

## Título

```text
chore: configure Styled Components
```

## Descrição

```markdown
## Objetivo

Configurar a infraestrutura de estilização da aplicação utilizando Styled Components.

---

## O que foi realizado

- Instalação do Styled Components.
- Configuração do ThemeProvider.
- Criação do GlobalStyle.
- Criação da estrutura inicial de estilos.
- Configuração das tipagens.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Confirmar que a aplicação inicia normalmente.
4. Executar `npm run lint`.

---

## Checklist

- [ ] Styled Components configurado.
- [ ] ThemeProvider funcionando.
- [ ] GlobalStyle aplicado.
- [ ] Projeto compilando.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d chore/styled-components
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Styled Components instalado.
- [ ] ThemeProvider funcionando.
- [ ] GlobalStyle criado.
- [ ] Tipagem configurada.
- [ ] Projeto compilando.
- [ ] Projeto sem erros de lint.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma infraestrutura sólida para estilização baseada em Styled Components.

Essa infraestrutura servirá como fundação para os Design Tokens, para o sistema de temas e para todo o Design System que será desenvolvido nas próximas etapas.

Nenhum componente visual definitivo deverá existir ao final deste documento.

---

# Próxima etapa

➡️ **13 - React Router**

Na próxima etapa será configurado o React Router, preparando a SPA para suportar navegação, futuras rotas administrativas e organização da estrutura de páginas, mesmo que inicialmente a aplicação possua apenas a rota principal.  

[React Router](./13-react-router.md)

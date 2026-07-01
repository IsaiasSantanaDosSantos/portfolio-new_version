# 06 - Estrutura de Pastas

> **Objetivo desta etapa**
>
> Criar a estrutura inicial do projeto, organizando os diretórios que serão utilizados nas próximas etapas do desenvolvimento e estabelecendo uma base consistente para a evolução da aplicação.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral
- ✅ 03 - Roadmap de Desenvolvimento
- ✅ 04 - Git Workflow
- ✅ 05 - Setup Inicial

---

# Objetivo

Ao final desta etapa, o projeto deverá possuir uma estrutura inicial organizada, suficiente para suportar as próximas implementações sem criar diretórios desnecessários.

A arquitetura continuará evoluindo ao longo do desenvolvimento, acompanhando as necessidades reais da aplicação.

---

# Princípios

Durante esta etapa deverão ser seguidos os seguintes princípios.

## Criar apenas o necessário

Somente serão criados diretórios que serão utilizados nas próximas etapas.

Evitar estruturas vazias.

---

## Responsabilidade única

Cada diretório deverá possuir apenas uma responsabilidade claramente definida.

---

## Evolução incremental

Novas pastas poderão surgir futuramente, desde que representem uma nova responsabilidade dentro da aplicação.

---

# Estrutura inicial

Criar a seguinte estrutura dentro da pasta `src`:

```text
src/
│
├── assets/
│
├── components/
│
├── hooks/
│
├── pages/
│
├── providers/
│
├── styles/
│
├── types/
│
├── utils/
│
├── App.tsx
└── main.tsx
```

---

# Responsabilidade de cada diretório

## assets/

Arquivos estáticos utilizados pela aplicação.

Exemplos futuros:

- imagens
- ícones SVG
- vídeos
- fontes
- arquivos JSON estáticos

---

## components/

Componentes reutilizáveis da aplicação.

Nesta fase, permanecerá vazio até o início do Design System.

---

## hooks/

Custom Hooks compartilhados.

Exemplo futuro:

- useTheme
- useMediaQuery
- useScrollPosition

---

## pages/

Responsável pelas páginas da aplicação.

Inicialmente conterá apenas a página principal da SPA.

---

## providers/

Context Providers da aplicação.

Exemplos futuros:

- ThemeProvider
- I18nProvider
- ToastProvider
- AuthProvider

---

## styles/

Arquivos globais de estilo.

Inicialmente será utilizado para armazenar:

- estilos globais;
- reset CSS;
- temas;
- variáveis visuais.

---

## types/

Tipos compartilhados.

Interfaces globais.

Enums.

Tipos utilitários.

---

## utils/

Funções utilitárias puras.

Exemplos futuros:

- formatadores;
- validadores;
- helpers.

Nenhum arquivo desta pasta deverá depender de React.

---

# Diretórios que NÃO serão criados agora

Os seguintes diretórios fazem parte da arquitetura, porém ainda não deverão existir.

```text
design-system/
features/
layouts/
routes/
services/
translations/
```

Esses diretórios serão criados nas etapas em que passarem a ser utilizados.

---

# Organização do projeto

Ao concluir esta etapa, a estrutura esperada será:

```text
portfolio/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── providers/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

# Etapa 1 — Criar os diretórios

Criar os diretórios definidos anteriormente dentro de `src`.

Não criar arquivos vazios, exceto quando necessário para manter a estrutura versionada.

Caso o Git não reconheça uma pasta vazia, utilizar um arquivo `.gitkeep`.

---

# Validação

Após a criação da estrutura, verificar:

- [ ] Todos os diretórios foram criados.
- [ ] Nenhum diretório extra foi criado.
- [ ] A aplicação continua executando normalmente.
- [ ] Não existem erros de compilação.

Executar:

```bash
npm run dev
```

A página padrão do Vite deverá continuar sendo exibida.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch da etapa:

```bash
git checkout -b chore/folder-structure
```

---

# Commit

Após validar a estrutura:

```bash
git add .
git commit -m "chore(structure): create initial project folders"
```

---

# Push

```bash
git push -u origin chore/folder-structure
```

---

# Pull Request

## Título

```text
chore: create initial project folder structure
```

## Descrição

```markdown
## Objetivo

Criar a estrutura inicial de diretórios da aplicação.

---

## O que foi realizado

- Criação dos diretórios base da aplicação.
- Organização inicial da pasta `src`.
- Preparação para as próximas etapas do projeto.

---

## Como testar

1. Executar `npm install`, caso necessário.
2. Executar `npm run dev`.
3. Confirmar que a aplicação inicia normalmente.

---

## Checklist

- [ ] Estrutura criada conforme documentação.
- [ ] Projeto executando normalmente.
- [ ] Nenhum erro de compilação.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/folder-structure
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Estrutura inicial criada.
- [ ] Projeto executando normalmente.
- [ ] Nenhum diretório desnecessário.
- [ ] Commit realizado.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação possuirá uma estrutura inicial organizada, limpa e preparada para receber as configurações das próximas etapas.

Toda a organização física do projeto deverá refletir os princípios arquiteturais definidos anteriormente, evitando diretórios sem responsabilidade ou criados de forma antecipada.

---

# Próxima etapa

➡️ **07 - ESLint**

Na próxima etapa será configurado o ESLint utilizando a configuração mais atual do ecossistema JavaScript/TypeScript (Flat Config), estabelecendo as regras de qualidade de código que serão seguidas durante todo o desenvolvimento do projeto.

[ESLint](./07-eslint.md)

# 14 - Internacionalização

> **Objetivo desta etapa**
>
> Configurar a infraestrutura de internacionalização da aplicação utilizando i18next, preparando o projeto para suportar múltiplos idiomas, tanto para textos estáticos quanto, futuramente, para conteúdos dinâmicos provenientes do backend.

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
- ✅ 12 - Styled Components
- ✅ 13 - React Router

---

# Por que agora?

A internacionalização faz parte da arquitetura da aplicação.

Configurá-la antes da implementação da interface evita retrabalho e garante que todos os componentes já sejam desenvolvidos preparados para múltiplos idiomas.

Nesta etapa será criada apenas a infraestrutura da internacionalização.

Os conteúdos dinâmicos do Dashboard serão integrados futuramente.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- i18next configurado.
- react-i18next configurado.
- Detecção automática do idioma do navegador.
- Estrutura inicial de traduções.
- Provider integrado à aplicação.
- Idioma padrão definido.

Nenhuma tela será traduzida nesta etapa.

---

# Princípios

## Separação de responsabilidades

Os arquivos de tradução deverão conter apenas textos estáticos da interface.

Conteúdos dinâmicos permanecerão sob responsabilidade do backend.

---

## Escalabilidade

A estrutura deverá suportar naturalmente novos idiomas sem necessidade de reorganização.

---

## Evolução incremental

A integração entre internacionalização e Dashboard será realizada em etapas futuras.

---

# Dependências

Instalar:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

---

# Estrutura esperada

Ao concluir esta etapa:

```text
src/

translations/
│
├── index.ts
├── i18n.ts
│
├── pt-BR/
│   └── common.json
│
├── en/
│   └── common.json
│
└── es/
    └── common.json
```

---

# Etapa 1 — Instalar as dependências

Executar:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

---

# Etapa 2 — Criar a estrutura

Criar:

```text
src/translations/

index.ts

i18n.ts

pt-BR/common.json

en/common.json

es/common.json
```

Inicialmente criar apenas o namespace `common`.

Novos namespaces serão adicionados conforme a aplicação crescer.

---

# Etapa 3 — Configurar o i18next

Configurar:

- idioma padrão;
- idiomas suportados;
- namespace inicial;
- fallback language;
- detector do idioma do navegador.

Utilizar a configuração oficial do i18next.

---

# Etapa 4 — Integrar ao projeto

Inicializar o i18next no ponto de entrada da aplicação.

Garantir que toda a aplicação utilize o Provider do react-i18next.

---

# Etapa 5 — Validar a configuração

Criar temporariamente uma chave de tradução.

Exemplo:

```json
{
  "hello": "Olá"
}
```

Consumir essa chave em um componente.

Confirmar que a tradução é renderizada corretamente.

Após a validação, manter apenas as traduções que fizerem sentido para a aplicação.

---

# Validação

Confirmar:

- [ ] i18next instalado.
- [ ] react-i18next instalado.
- [ ] Detector funcionando.
- [ ] Provider configurado.
- [ ] Traduções funcionando.
- [ ] Projeto compilando normalmente.

Executar:

```bash
npm run dev
```

Depois:

```bash
npm run lint
```

---

# Arquivos criados

- `src/translations/index.ts`
- `src/translations/i18n.ts`
- `src/translations/pt-BR/common.json`
- `src/translations/en/common.json`
- `src/translations/es/common.json`

---

# Arquivos alterados

- `src/main.tsx`

---

# Arquivos removidos

Nenhum.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch:

```bash
git checkout -b chore/internationalization
```

---

# Commits

## Commit 1

Após instalar as dependências:

```bash
git add package.json package-lock.json
git commit -m "chore(i18n): install internationalization dependencies"
```

---

## Commit 2

Após criar a estrutura:

```bash
git add src/translations
git commit -m "chore(i18n): create translation infrastructure"
```

---

## Commit 3

Após integrar à aplicação:

```bash
git add src/main.tsx src/translations
git commit -m "chore(i18n): configure application internationalization"
```

---

## Commit 4

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(i18n): validate internationalization setup"
```

---

# Push

```bash
git push -u origin chore/internationalization
```

---

# Pull Request

## Título

```text
chore: configure internationalization
```

## Descrição

```markdown
## Objetivo

Configurar a infraestrutura de internacionalização da aplicação utilizando i18next.

---

## O que foi realizado

- Instalação do i18next.
- Configuração do react-i18next.
- Configuração do detector de idioma.
- Criação da estrutura de traduções.
- Integração com a aplicação.
- Validação da configuração.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Alterar o idioma do navegador (ou forçar outro idioma na configuração do i18next).
4. Confirmar que as traduções são carregadas corretamente.
5. Executar `npm run lint`.

---

## Checklist

- [ ] i18next configurado.
- [ ] Estrutura criada.
- [ ] Traduções funcionando.
- [ ] Projeto validado.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d chore/internationalization
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] i18next instalado.
- [ ] Estrutura criada.
- [ ] Provider configurado.
- [ ] Traduções funcionando.
- [ ] Projeto compilando.
- [ ] Projeto sem erros de lint.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação possuirá uma infraestrutura sólida de internacionalização, preparada para suportar múltiplos idiomas de forma escalável.

A arquitetura permitirá que, nas etapas futuras, os textos estáticos sejam traduzidos através do i18next, enquanto os conteúdos dinâmicos poderão ser internacionalizados por meio da integração com o backend, sem necessidade de alterações estruturais.

---

# Próxima etapa

➡️ **15 - Design System**

Na próxima etapa será definida a arquitetura do Design System, estabelecendo seus princípios, organização, convenções e a estrutura dos componentes reutilizáveis que servirão de base para toda a interface da aplicação.

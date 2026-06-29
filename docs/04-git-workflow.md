# 04 - Git Workflow

> **Objetivo desta etapa**
>
> Definir o fluxo oficial de versionamento do projeto, estabelecendo padrões para criação de branches, commits, Pull Requests e integração de código, garantindo um histórico limpo, consistente e fácil de manter.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral
- ✅ 03 - Roadmap de Desenvolvimento

---

# Objetivo

Todo o desenvolvimento deste projeto será realizado utilizando Git como sistema de controle de versão.

Este documento define as regras oficiais para versionamento do projeto.

Nenhuma implementação deverá ser realizada diretamente na branch principal.

---

# Estratégia de Branches

O projeto utilizará um fluxo simplificado baseado em branches de curta duração.

```text
main
│
├── feature/*
├── fix/*
├── refactor/*
├── docs/*
├── test/*
├── chore/*
└── ci/*
```

A branch `main` representará sempre a versão mais estável do projeto.

---

# Branch Principal

## main

Responsável por armazenar apenas código validado e funcional.

Regras:

- Nunca desenvolver diretamente nesta branch.
- Sempre atualizar antes de criar uma nova branch.
- Todo merge deverá ocorrer através de Pull Request.
- O projeto deverá estar compilando corretamente antes de qualquer merge.

---

# Tipos de Branch

## feature/

Utilizada para implementação de novas funcionalidades.

Exemplos:

```text
feature/project-setup
feature/design-system
feature/home-page
feature/dashboard
feature/firebase
```

---

## fix/

Correções de bugs.

Exemplos:

```text
fix/theme-toggle
fix/mobile-menu
fix/contact-form
```

---

## refactor/

Melhorias internas sem alteração de comportamento.

Exemplos:

```text
refactor/button-component
refactor/hooks
```

---

## docs/

Atualizações na documentação.

Exemplos:

```text
docs/project-guide
docs/readme
```

---

## test/

Implementação ou melhoria de testes.

Exemplos:

```text
test/button
test/dashboard
```

---

## chore/

Tarefas técnicas.

Exemplos:

```text
chore/eslint
chore/storybook
chore/dependencies
```

---

## ci/

Configurações relacionadas à integração contínua.

Exemplos:

```text
ci/github-actions
ci/vercel
```

---

# Convenção para nomes de Branch

Os nomes deverão seguir o padrão:

```text
tipo/descricao-em-kebab-case
```

Exemplos:

```text
feature/project-setup
feature/design-system
feature/home-page
feature/dashboard
refactor/app-header
docs/project-guide
test/button-component
```

Evitar:

```text
feature/NovaTela
feature/Teste
feature/Ajustes
```

Os nomes devem descrever claramente o objetivo da branch.

---

# Fluxo de Desenvolvimento

Para cada nova etapa do projeto deverá ser seguido o fluxo abaixo.

```text
Atualizar main

↓

Criar nova branch

↓

Implementar

↓

Executar testes

↓

Executar lint

↓

Realizar commit(s)

↓

Enviar para o GitHub

↓

Abrir Pull Request

↓

Revisar

↓

Merge

↓

Excluir branch

↓

Atualizar main
```

---

# Política de Commits

Os commits deverão ser pequenos e representar apenas uma alteração lógica.

Evitar commits contendo múltiplas funcionalidades.

Sempre que possível, realizar commits incrementais.

---

# Conventional Commits

Todos os commits seguirão o padrão Conventional Commits.

Estrutura:

```text
tipo(escopo): descrição
```

---

## Tipos permitidos

### feat

Nova funcionalidade.

Exemplo:

```text
feat(button): add loading state
```

---

### fix

Correção.

```text
fix(theme): resolve toggle persistence
```

---

### refactor

Refatoração.

```text
refactor(header): simplify navigation logic
```

---

### docs

Documentação.

```text
docs(project-guide): add roadmap section
```

---

### style

Alterações visuais sem mudança de lógica.

```text
style(button): adjust spacing
```

---

### test

Testes.

```text
test(card): add unit tests
```

---

### chore

Configuração.

```text
chore(eslint): configure flat config
```

---

### ci

Integração contínua.

```text
ci(actions): add build workflow
```

---

# Quantidade de Commits

Sempre que possível:

- Um commit por alteração lógica.
- Evitar commits gigantes.
- Evitar commits de "ajustes diversos".

---

# Pull Requests

Toda branch deverá ser integrada através de Pull Request.

Mesmo sendo um projeto individual, esse processo ajuda a manter um histórico organizado.

---

# Estrutura da Pull Request

Todas as PRs deverão seguir este modelo.

## Título

```text
feat: implement Design System foundation
```

---

## Descrição

```markdown
## Objetivo

Descreva resumidamente o objetivo da implementação.

---

## O que foi realizado

- Item 1
- Item 2
- Item 3

---

## Como testar

Passos necessários para validar a implementação.

---

## Checklist

- [ ] Código revisado
- [ ] Projeto compilando
- [ ] Lint executado
- [ ] Testes executados
- [ ] Documentação atualizada
```

---

# Quando realizar Merge

O merge somente deverá ocorrer quando:

- O projeto estiver funcionando.
- Não existirem erros de lint.
- Não existirem erros de TypeScript.
- A documentação da etapa estiver atualizada.
- A Pull Request estiver revisada.

---

# Exclusão de Branches

Após o merge:

- Excluir a branch remota.
- Excluir a branch local.
- Atualizar a branch `main`.

Isso evita acúmulo de branches obsoletas.

---

# Versionamento

Durante o desenvolvimento inicial não serão utilizadas tags de versão.

As versões oficiais serão criadas apenas após a primeira publicação pública do projeto.

---

# Boas Práticas

Sempre:

- Criar uma branch para cada objetivo.
- Atualizar a `main` antes de iniciar uma nova etapa.
- Escrever commits descritivos.
- Manter Pull Requests pequenas.
- Revisar o código antes do merge.
- Atualizar a documentação sempre que necessário.

---

# O que evitar

Nunca:

- Desenvolver diretamente na `main`.
- Criar branches genéricas como `teste` ou `ajustes`.
- Misturar múltiplas funcionalidades em uma única branch.
- Realizar commits com mensagens pouco descritivas.
- Ignorar erros de lint ou TypeScript antes do merge.

---

# Checklist

Antes de finalizar uma etapa, confirme:

- [ ] Branch criada corretamente.
- [ ] Commits seguindo Conventional Commits.
- [ ] Pull Request criada.
- [ ] Projeto compilando.
- [ ] Lint sem erros.
- [ ] Documentação atualizada.
- [ ] Branch removida após merge.

---

# Resultado esperado desta etapa

Ao concluir este documento deverá estar completamente definido o fluxo oficial de versionamento do projeto.

Todas as próximas etapas do desenvolvimento deverão seguir rigorosamente estas convenções, garantindo um histórico consistente, organizado e alinhado às boas práticas utilizadas no mercado.

---

# Próxima etapa

➡️ **05 - Setup do Projeto**

Nesta etapa será iniciado o desenvolvimento do projeto. Serão criados o repositório, a aplicação React com Vite e TypeScript, além da configuração inicial das ferramentas que servirão de base para todas as implementações seguintes.

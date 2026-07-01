# 15 - Design System

> **Objetivo desta etapa**
>
> Definir a arquitetura do Design System da aplicação, estabelecendo seus princípios, responsabilidades, organização e convenções para garantir consistência visual, reutilização de componentes e escalabilidade durante todo o desenvolvimento do projeto.

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
- ✅ 14 - Internacionalização

---

# Por que agora?

Toda a infraestrutura necessária para o desenvolvimento da aplicação já foi configurada.

Antes da implementação das páginas e funcionalidades, é necessário definir como os componentes serão organizados, reutilizados e evoluirão ao longo do projeto.

Este documento estabelece as diretrizes do Design System, sem implementar componentes específicos.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Estrutura inicial do Design System.
- Convenções de organização.
- Responsabilidades de cada camada.
- Padrões de nomenclatura.
- Critérios para criação de novos componentes.
- Estrutura preparada para futura documentação com Storybook.

Nenhum componente visual definitivo será implementado nesta etapa.

---

# Princípios

## Reutilização

Todo componente deverá ser desenvolvido pensando em reutilização.

Não criar componentes exclusivos para uma única tela quando um componente genérico atender ao mesmo objetivo.

---

## Separação de responsabilidades

O Design System deverá conter apenas componentes reutilizáveis.

Regras de negócio deverão permanecer fora desta camada.

---

## Consistência

Todos os componentes deverão utilizar exclusivamente:

- Theme;
- Design Tokens;
- Hooks compartilhados;
- Utilitários comuns.

Nenhum valor visual deverá ser definido diretamente dentro dos componentes.

---

## Composição

Os componentes deverão ser pequenos, independentes e facilmente combináveis.

A composição será responsabilidade da aplicação, e não do Design System.

---

## Acessibilidade

Todo componente deverá ser desenvolvido considerando:

- navegação por teclado;
- foco visível;
- atributos ARIA quando aplicáveis;
- contraste adequado;
- semântica HTML.

A acessibilidade fará parte da definição de pronto (Definition of Done) de cada componente.

---

# Estrutura esperada

Ao concluir esta etapa:

```text
src/

design-system/
│
├── components/
├── foundations/
├── hooks/
├── patterns/
├── utils/
└── index.ts
```

Essa estrutura representa apenas a arquitetura inicial.

Os conteúdos de cada diretório serão implementados nas próximas etapas.

---

# Responsabilidades

## Foundations

Conterá os elementos fundamentais do Design System.

Exemplos futuros:

- Design Tokens;
- Tipografia;
- Espaçamentos;
- Grid;
- Breakpoints;
- Sombras;
- Bordas;
- Elevações.

---

## Components

Conterá componentes reutilizáveis.

Exemplos futuros:

- Button;
- Input;
- Card;
- Badge;
- Avatar;
- Tooltip;
- Modal.

Nenhum componente conhecerá regras de negócio.

---

## Patterns

Conterá padrões de composição.

Exemplos futuros:

- Form layouts;
- Page sections;
- Hero layouts;
- Content blocks.

---

## Hooks

Conterá hooks reutilizáveis pelo Design System.

---

## Utils

Funções auxiliares utilizadas exclusivamente pelo Design System.

---

# Convenções

## Nome dos componentes

Utilizar PascalCase.

Exemplo:

```text
Button

Card

Section

Container
```

---

## Nome dos arquivos

Mesmo nome do componente.

Exemplo:

```text
Button.tsx

Card.tsx
```

---

## Exportações

Preferencialmente através de arquivos `index.ts`.

Evitar imports profundos quando houver uma API pública disponível.

---

## Responsabilidade única

Cada componente deverá possuir uma responsabilidade claramente definida.

Evitar componentes excessivamente grandes ou multifuncionais.

---

# Critérios para criação de novos componentes

Antes de criar um novo componente, responder às seguintes perguntas:

- Ele poderá ser reutilizado em outra tela?
- Ele depende de regra de negócio?
- Ele pode ser composto por componentes existentes?
- Ele realmente precisa existir?

Caso a maioria das respostas seja negativa, reavaliar a necessidade da criação do componente.

---

# Validação

Confirmar:

- [ ] Estrutura criada.
- [ ] Organização definida.
- [ ] Convenções documentadas.
- [ ] Responsabilidades estabelecidas.

Nenhum componente definitivo deverá existir ao final desta etapa.

---

# Arquivos criados

- `src/design-system/index.ts`

---

# Arquivos alterados

Nenhum.

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
git checkout -b docs/design-system
```

---

# Commits

## Commit 1

Após criar a estrutura inicial:

```bash
git add src/design-system
git commit -m "docs(design-system): define initial architecture"
```

---

## Commit 2

Após concluir a documentação:

```bash
git add .
git commit -m "docs(design-system): document architecture guidelines"
```

---

# Push

```bash
git push -u origin docs/design-system
```

---

# Pull Request

## Título

```text
docs: define Design System architecture
```

## Descrição

```markdown
## Objetivo

Definir a arquitetura e as convenções do Design System que servirão como base para todos os componentes reutilizáveis da aplicação.

---

## O que foi realizado

- Definição da estrutura inicial.
- Organização por responsabilidades.
- Definição das convenções.
- Estabelecimento dos princípios de reutilização, composição e acessibilidade.

---

## Como validar

1. Conferir a estrutura proposta.
2. Verificar se as responsabilidades estão claramente definidas.
3. Confirmar que nenhum componente de negócio faz parte do Design System.

---

## Checklist

- [ ] Estrutura documentada.
- [ ] Convenções definidas.
- [ ] Responsabilidades estabelecidas.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/design-system
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estrutura do Design System definida.
- [ ] Convenções documentadas.
- [ ] Responsabilidades estabelecidas.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma arquitetura sólida para o Design System, definindo como seus componentes serão organizados, evoluirão e serão reutilizados ao longo do desenvolvimento.

Essa base garantirá consistência, previsibilidade e facilitará a futura documentação dos componentes no Storybook.

---

# Próxima etapa

➡️ **16 - Tema e Design Tokens**

Na próxima etapa serão definidos os Design Tokens da aplicação, estabelecendo a base visual compartilhada por todo o projeto, incluindo cores, tipografia, espaçamentos, bordas, sombras, elevações, breakpoints e demais propriedades utilizadas pelo tema. Esses tokens servirão como única fonte de verdade para a construção dos componentes do Design System e para a implementação dos modos claro e escuro, garantindo consistência, escalabilidade e facilidade de manutenção.

[Tema e Design Tokens](./16-theme-and-design-tokens.md)

# 17 - Arquitetura dos Componentes

> **Objetivo desta etapa**
>
> Definir a arquitetura dos componentes React da aplicação, estabelecendo padrões de organização, composição, responsabilidades e reutilização para garantir um código consistente, escalável e de fácil manutenção.

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
- ✅ 15 - Design System
- ✅ 16 - Tema e Design Tokens

---

# Por que agora?

Com a infraestrutura, o Design System e os Design Tokens definidos, é o momento de estabelecer como os componentes serão estruturados.

Esta etapa define regras de arquitetura e desenvolvimento. Os componentes concretos serão implementados posteriormente, seguindo os padrões definidos neste documento.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Convenções para criação de componentes.
- Organização por responsabilidade.
- Padrões de composição.
- Diretrizes para reutilização.
- Critérios para separação entre apresentação e lógica.

Nenhum componente definitivo será implementado nesta etapa.

---

# Princípios

## Responsabilidade única

Cada componente deverá possuir uma única responsabilidade claramente definida.

Evitar componentes que concentrem múltiplas funcionalidades.

---

## Separação entre apresentação e lógica

Os componentes visuais deverão ser responsáveis apenas pela renderização da interface.

Toda lógica de negócio deverá permanecer em hooks, serviços ou camadas específicas.

---

## Composição acima de herança

Os componentes deverão ser construídos para serem compostos entre si, evitando hierarquias complexas.

---

## Reutilização

Antes de criar um novo componente, verificar se um componente existente pode ser reutilizado ou estendido.

---

## Acessibilidade

Todo componente deverá atender aos requisitos mínimos de acessibilidade:

- navegação por teclado;
- foco visível;
- atributos ARIA quando necessários;
- semântica HTML adequada.

---

# Estrutura esperada

Ao concluir esta etapa:

```text
src/

components/
│
├── ui/
├── layout/
├── feedback/
├── forms/
├── navigation/
├── sections/
└── index.ts
```

Os componentes específicos de negócio deverão permanecer fora desta estrutura.

---

# Categorias de Componentes

## UI

Componentes básicos e reutilizáveis.

Exemplos futuros:

- Button
- Card
- Badge
- Avatar
- Chip

---

## Layout

Responsáveis pela organização visual.

Exemplos futuros:

- Container
- Stack
- Grid
- Section

---

## Feedback

Responsáveis por comunicar estados ao usuário.

Exemplos futuros:

- Toast
- Alert
- Spinner
- Skeleton
- EmptyState

---

## Forms

Componentes relacionados à entrada de dados.

Exemplos futuros:

- Input
- TextArea
- Select
- Checkbox
- Switch

---

## Navigation

Componentes responsáveis pela navegação.

Exemplos futuros:

- Navbar
- Sidebar
- Breadcrumb
- Pagination

---

## Sections

Blocos reutilizáveis de páginas.

Exemplos futuros:

- HeroSection
- AboutSection
- ContactSection
- FooterSection

---

# Convenções

## Nome dos componentes

Utilizar PascalCase.

Exemplo:

```text
Button
HeroSection
LoadingSpinner
```

---

## Nome dos arquivos

Mesmo nome do componente.

Exemplo:

```text
Button.tsx
Button.styles.ts
Button.types.ts
index.ts
```

Criar arquivos auxiliares apenas quando houver necessidade.

---

## Props

As interfaces de propriedades deverão ser tipadas utilizando TypeScript.

Sempre que possível, estender as propriedades nativas do elemento HTML correspondente.

---

## Exportações

Preferencialmente através de arquivos `index.ts`, evitando imports profundos.

---

# Regras de desenvolvimento

## Componentes não acessam APIs

Nenhum componente deverá realizar chamadas diretas para APIs ou serviços externos.

---

## Componentes não conhecem regras de negócio

Toda regra de negócio deverá permanecer fora da camada de apresentação.

---

## Componentes consomem Design Tokens

Todos os estilos deverão utilizar exclusivamente o tema e os Design Tokens definidos anteriormente.

---

## Evitar duplicação

Antes de criar um novo componente, avaliar se a necessidade pode ser atendida por composição de componentes existentes.

---

# Validação

Confirmar:

- [ ] Arquitetura documentada.
- [ ] Responsabilidades definidas.
- [ ] Convenções estabelecidas.
- [ ] Estrutura preparada para implementação.

Nenhum componente definitivo deverá existir ao final desta etapa.

---

# Arquivos criados

Nenhum.

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
git checkout -b docs/component-architecture
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(components): define component architecture"
```

---

# Push

```bash
git push -u origin docs/component-architecture
```

---

# Pull Request

## Título

```text
docs: define component architecture
```

## Descrição

```markdown
## Objetivo

Definir a arquitetura dos componentes React da aplicação.

---

## O que foi realizado

- Definição das categorias de componentes.
- Convenções de organização.
- Regras de reutilização.
- Diretrizes de composição.
- Critérios para separação entre apresentação e lógica.

---

## Como validar

1. Revisar a documentação.
2. Confirmar que todas as convenções estão claras.
3. Verificar se a arquitetura atende aos princípios definidos pelo Design System.

---

## Checklist

- [ ] Convenções definidas.
- [ ] Estrutura organizada.
- [ ] Responsabilidades documentadas.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/component-architecture
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Arquitetura documentada.
- [ ] Convenções definidas.
- [ ] Responsabilidades estabelecidas.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá um conjunto claro de diretrizes para o desenvolvimento de componentes React, garantindo consistência, previsibilidade e facilidade de manutenção. Todos os componentes implementados nas próximas etapas deverão seguir essa arquitetura, respeitando os princípios de responsabilidade única, composição, reutilização e separação entre lógica e apresentação.

---

# Próxima etapa

➡️ **18 - Desenvolvimento da SPA**

Na próxima etapa será definido o plano de implementação da Single Page Application, estabelecendo a ordem de construção das seções, a estratégia de desenvolvimento incremental, os critérios de validação e a sequência recomendada para implementar cada parte da interface sem comprometer a arquitetura construída até aqui.
[Desenvolvimento da SPA](./18-spa-development.md)

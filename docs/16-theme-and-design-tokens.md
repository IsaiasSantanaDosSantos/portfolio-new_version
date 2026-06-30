# 16 - Tema e Design Tokens

> **Objetivo desta etapa**
>
> Definir a arquitetura do tema e dos Design Tokens da aplicação, estabelecendo uma única fonte de verdade para todos os atributos visuais utilizados pelo projeto, garantindo consistência, reutilização, escalabilidade e facilidade de manutenção.

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

---

# Por que agora?

Após definir a arquitetura do Design System, é necessário estabelecer a linguagem visual que será compartilhada por toda a aplicação.

Nesta etapa serão definidos os Design Tokens que servirão como única fonte de verdade para qualquer propriedade visual utilizada pelos componentes.

Nenhum componente deverá definir cores, espaçamentos, sombras ou medidas diretamente.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Estrutura de tokens definida.
- Tema base estruturado.
- Tema preparado para Dark e Light Mode.
- Convenções para utilização dos tokens.
- Organização escalável para futuras evoluções.

Nenhum componente visual será implementado nesta etapa.

---

# Princípios

## Fonte única de verdade

Toda propriedade visual deverá ser obtida através dos Design Tokens.

---

## Tokens semânticos

Os componentes deverão consumir intenções de design, e não valores absolutos.

Exemplo:

✔ `theme.colors.text.primary`

Evitar:

✖ `theme.colors.blue500`

---

## Consistência

Jamais utilizar valores mágicos diretamente nos componentes.

Todo valor deverá possuir um token correspondente.

---

## Escalabilidade

A estrutura deverá suportar naturalmente novos temas, novas identidades visuais e futuras evoluções sem necessidade de reorganização.

---

# Estrutura esperada

Ao concluir esta etapa:

```text
src/

styles/
│
├── theme/
│   ├── index.ts
│   ├── light.ts
│   ├── dark.ts
│   └── tokens/
│       ├── colors.ts
│       ├── typography.ts
│       ├── spacing.ts
│       ├── borderRadius.ts
│       ├── borders.ts
│       ├── shadows.ts
│       ├── opacity.ts
│       ├── blur.ts
│       ├── breakpoints.ts
│       ├── transitions.ts
│       ├── zIndex.ts
│       └── index.ts
```

---

# Categorias de Design Tokens

## Colors

Responsável por:

- cores da marca;
- superfícies;
- textos;
- estados;
- feedback;
- overlays.

---

## Typography

Responsável por:

- famílias tipográficas;
- pesos;
- tamanhos;
- line-heights;
- letter-spacing.

---

## Spacing

Escala oficial de espaçamentos utilizada em toda a aplicação.

---

## Border Radius

Escala oficial de arredondamentos.

---

## Borders

Espessuras e estilos de borda.

---

## Shadows

Sombras utilizadas em componentes e superfícies.

---

## Opacity

Níveis oficiais de transparência.

---

## Blur

Tokens específicos para os efeitos de glassmorphism.

---

## Breakpoints

Larguras oficiais para responsividade.

---

## Transitions

Duração e curvas de animação.

---

## Z-Index

Camadas oficiais da aplicação.

---

# Organização dos temas

Criar dois temas:

- Light Theme
- Dark Theme

Ambos deverão consumir os mesmos Design Tokens, alterando apenas os valores necessários para representar cada modo de exibição.

A estrutura deverá permitir a troca de tema sem necessidade de alterações nos componentes.

---

# Convenções

## Nunca utilizar valores fixos

Evitar:

```tsx
padding: 24px;
color: #FFFFFF;
border-radius: 16px;
```

Utilizar:

```tsx
padding: theme.spacing.lg;
color: theme.colors.text.primary;
border-radius: theme.borderRadius.md;
```

---

## Componentes desacoplados

Os componentes conhecerão apenas os tokens.

Jamais conhecerão os valores utilizados pelo tema.

---

## Glassmorphism

Todos os efeitos relacionados ao visual glass deverão consumir tokens específicos de:

- blur;
- transparência;
- bordas;
- sombras.

---

# Validação

Confirmar:

- [ ] Estrutura criada.
- [ ] Tokens organizados.
- [ ] Light Theme criado.
- [ ] Dark Theme criado.
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

- `src/styles/theme/light.ts`
- `src/styles/theme/dark.ts`
- `src/styles/theme/index.ts`
- `src/styles/theme/tokens/colors.ts`
- `src/styles/theme/tokens/typography.ts`
- `src/styles/theme/tokens/spacing.ts`
- `src/styles/theme/tokens/borderRadius.ts`
- `src/styles/theme/tokens/borders.ts`
- `src/styles/theme/tokens/shadows.ts`
- `src/styles/theme/tokens/opacity.ts`
- `src/styles/theme/tokens/blur.ts`
- `src/styles/theme/tokens/breakpoints.ts`
- `src/styles/theme/tokens/transitions.ts`
- `src/styles/theme/tokens/zIndex.ts`
- `src/styles/theme/tokens/index.ts`

---

# Arquivos alterados

- `src/styles/theme/index.ts`

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
git checkout -b feat/theme-design-tokens
```

---

# Commits

## Commit 1

Criar a estrutura de tokens.

```bash
git add src/styles/theme
git commit -m "feat(theme): create design tokens structure"
```

---

## Commit 2

Criar os temas base.

```bash
git add src/styles/theme
git commit -m "feat(theme): configure light and dark themes"
```

---

## Commit 3

Validar a configuração.

```bash
git add .
git commit -m "feat(theme): validate theme configuration"
```

---

# Push

```bash
git push -u origin feat/theme-design-tokens
```

---

# Pull Request

## Título

```text
feat: create theme and design tokens foundation
```

## Descrição

```markdown
## Objetivo

Definir a arquitetura do tema e dos Design Tokens que servirão como base visual para toda a aplicação.

---

## O que foi realizado

- Estrutura de Design Tokens.
- Configuração dos temas Light e Dark.
- Organização dos tokens por responsabilidade.
- Definição das convenções de utilização.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Confirmar que a aplicação inicia normalmente.
4. Executar `npm run lint`.

---

## Checklist

- [ ] Tokens organizados.
- [ ] Light Theme criado.
- [ ] Dark Theme criado.
- [ ] Projeto validado.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d feat/theme-design-tokens
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estrutura de tokens criada.
- [ ] Temas Light e Dark configurados.
- [ ] Convenções definidas.
- [ ] Projeto compilando.
- [ ] Projeto sem erros de lint.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação possuirá uma fundação visual consistente e escalável, baseada em Design Tokens e temas reutilizáveis. Todos os componentes desenvolvidos a partir deste ponto deverão consumir exclusivamente essa camada de abstração, garantindo uniformidade entre os modos claro e escuro, facilitando futuras evoluções e preservando a consistência visual em toda a interface.

---

# Próxima etapa

➡️ **17 - Arquitetura dos Componentes**

Na próxima etapa será definida a arquitetura dos componentes da aplicação, estabelecendo padrões de organização, composição, reutilização e responsabilidades para todos os componentes que serão desenvolvidos nas etapas seguintes.

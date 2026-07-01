# 22 - Storybook

> **Objetivo desta etapa**
>
> Definir a estratégia de documentação visual dos componentes da aplicação utilizando o Storybook, estabelecendo padrões para criação de histórias, organização da documentação e validação do Design System.

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
- ✅ 17 - Arquitetura dos Componentes
- ✅ 18 - Desenvolvimento da SPA
- ✅ 19 - Dashboard Administrativo
- ✅ 20 - Firebase
- ✅ 21 - Testes

---

# Por que agora?

Com a arquitetura do projeto consolidada e a estratégia de testes definida, é o momento de documentar visualmente os componentes reutilizáveis.

O Storybook será utilizado como uma documentação viva do Design System, permitindo visualizar, validar e evoluir cada componente de forma isolada da aplicação principal.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Estratégia de documentação dos componentes.
- Organização das Stories.
- Convenções de nomenclatura.
- Critérios para criação de novas histórias.
- Integração com o Design System.

A implementação efetiva do Storybook ocorrerá durante o desenvolvimento dos componentes.

---

# Princípios

## Documentação viva

Toda alteração realizada em um componente reutilizável deverá ser refletida em sua respectiva Story.

---

## Componentes isolados

As Stories deverão representar o comportamento do componente de forma independente da aplicação.

---

## Reutilização

As Stories deverão utilizar os mesmos componentes, temas e Design Tokens empregados pela aplicação principal.

---

## Clareza

Cada Story deverá demonstrar um único comportamento ou cenário específico.

---

# Estrutura esperada

```text
src/

components/
│
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Button.stories.tsx
│   ├── Button.types.ts
│   └── index.ts
```

Cada componente reutilizável deverá seguir essa organização, adaptando os arquivos conforme sua complexidade.

---

# Organização das Stories

Cada componente deverá possuir histórias para seus principais estados.

Exemplo para um botão:

- Default
- Primary
- Secondary
- Disabled
- Loading
- With Icon
- Full Width
- Dark Theme
- Light Theme

Nem todas as variações serão obrigatórias para todos os componentes. Devem ser documentados apenas os estados realmente suportados.

---

# Documentação das Stories

Cada Story deverá conter:

- descrição do componente;
- objetivo;
- exemplos de utilização;
- propriedades disponíveis;
- observações relevantes.

Sempre que possível, utilizar os recursos de documentação automática do Storybook.

---

# Integração com o Design System

O Storybook deverá utilizar exatamente a mesma infraestrutura visual da aplicação:

- ThemeProvider;
- Design Tokens;
- Tipografia;
- Espaçamentos;
- Componentes compartilhados.

Isso garante consistência entre a documentação e a interface real da aplicação.

---

# Boas práticas

- Documentar apenas componentes reutilizáveis.
- Evitar Stories redundantes.
- Manter as histórias simples e objetivas.
- Atualizar a documentação sempre que um componente for alterado.
- Utilizar controles (Controls) para facilitar a inspeção das propriedades dos componentes.

---

# O que não documentar

Não criar Stories para:

- páginas completas;
- componentes temporários;
- componentes exclusivos de uma única tela;
- componentes internos sem potencial de reutilização.

---

# Validação

Confirmar:

- [ ] Estratégia documentada.
- [ ] Convenções definidas.
- [ ] Organização estabelecida.
- [ ] Integração com o Design System prevista.

Quando o Storybook estiver implementado, validar:

```bash
npm run storybook
```

Confirmar:

- abertura correta da interface;
- carregamento dos componentes;
- funcionamento dos temas;
- renderização das Stories.

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
git checkout -b docs/storybook
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(storybook): define component documentation strategy"
```

---

# Push

```bash
git push -u origin docs/storybook
```

---

# Pull Request

## Título

```text
docs: define Storybook strategy
```

## Descrição

```markdown
## Objetivo

Documentar a estratégia oficial para utilização do Storybook como documentação viva do Design System.

---

## O que foi realizado

- Definição da organização das Stories.
- Convenções de nomenclatura.
- Estratégia de documentação.
- Integração com o Design System.

---

## Como validar

1. Revisar a documentação.
2. Confirmar que as convenções estão claras.
3. Verificar o alinhamento com a arquitetura definida anteriormente.

---

## Checklist

- [ ] Estratégia documentada.
- [ ] Convenções definidas.
- [ ] Organização validada.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/storybook
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estratégia documentada.
- [ ] Convenções estabelecidas.
- [ ] Organização definida.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma estratégia clara para documentar visualmente todos os componentes reutilizáveis do Design System. O Storybook atuará como uma documentação viva, garantindo consistência entre implementação e documentação, facilitando manutenção, onboarding e futuras evoluções da interface.

---

# Próxima etapa

➡️ **23 - SEO**

Na próxima etapa será definida a estratégia de otimização para mecanismos de busca, incluindo metadados, Open Graph, Twitter Cards, dados estruturados, sitemap, robots.txt, acessibilidade relacionada ao SEO e boas práticas para maximizar a visibilidade do portfólio em buscadores.

[SEO](./23-seo.md)

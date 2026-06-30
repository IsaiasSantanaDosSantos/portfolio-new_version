# 21 - Testes

> **Objetivo desta etapa**
>
> Definir a estratégia oficial de testes da aplicação, estabelecendo quais tipos de testes serão utilizados, quando deverão ser implementados, quais ferramentas serão adotadas e quais critérios mínimos deverão ser atendidos durante todo o desenvolvimento.

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

---

# Por que agora?

Com a arquitetura do projeto completamente definida, é necessário estabelecer uma estratégia única para garantir a qualidade e a estabilidade da aplicação durante toda sua evolução.

Os testes deverão acompanhar o desenvolvimento desde as primeiras funcionalidades, servindo como uma camada adicional de segurança contra regressões e mudanças inesperadas.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Estratégia oficial de testes.
- Ferramentas utilizadas.
- Organização dos arquivos.
- Convenções.
- Critérios mínimos para Pull Requests.
- Critérios para cobertura.

Nenhuma suíte completa será implementada nesta etapa.

---

# Princípios

## Testes fazem parte do desenvolvimento

Nenhuma funcionalidade deverá ser considerada concluída sem os testes aplicáveis.

---

## Testar comportamento

Os testes deverão validar o comportamento esperado da aplicação e não detalhes internos de implementação.

---

## Simplicidade

Os testes deverão ser claros, objetivos e fáceis de compreender.

---

## Independência

Cada teste deverá poder ser executado isoladamente.

---

## Regressão

Toda correção de bug deverá incluir um teste que impeça o problema de ocorrer novamente.

---

# Ferramentas

A estratégia de testes utilizará:

- Jest
- React Testing Library
- @testing-library/user-event

Outras ferramentas poderão ser incorporadas futuramente quando houver necessidade.

---

# Tipos de testes

## Testes Unitários

Responsáveis por validar:

- funções utilitárias;
- hooks;
- services;
- repositories;
- helpers;
- models.

---

## Testes de Componentes

Responsáveis por validar:

- renderização;
- interação do usuário;
- estados;
- acessibilidade básica.

---

## Testes de Integração

Responsáveis por validar:

- comunicação entre componentes;
- integração entre hooks e serviços;
- fluxos importantes da aplicação.

---

## Testes End-to-End

Serão utilizados apenas para os fluxos mais críticos da aplicação, quando necessário.

Exemplos:

- autenticação;
- edição de conteúdo no Dashboard;
- envio de formulários.

---

# Estrutura esperada

```text
src/

components/
hooks/
services/
utils/

tests/
│
├── unit/
├── integration/
├── e2e/
├── mocks/
└── fixtures/
```

Arquivos de teste também poderão permanecer próximos ao código quando fizer sentido.

---

# Convenções

## Nome dos arquivos

Utilizar:

```text
Button.test.tsx
useTheme.test.ts
formatDate.test.ts
```

---

## Organização

Cada teste deverá possuir:

- descrição clara;
- preparação;
- execução;
- validação.

---

## Mocks

Utilizar mocks apenas quando realmente necessários.

Evitar excesso de simulações que escondam problemas reais.

---

## Snapshot Tests

Utilizar apenas quando houver benefício claro.

Evitar snapshots extensos e difíceis de manter.

---

# O que testar

Priorizar:

- regras de negócio;
- lógica;
- estados;
- validações;
- transformações de dados;
- fluxos críticos.

---

# O que evitar

Evitar testes para:

- componentes puramente visuais sem comportamento;
- detalhes internos de implementação;
- bibliotecas externas.

---

# Cobertura

A cobertura deverá ser utilizada como indicador de qualidade e não como objetivo principal.

O foco deverá permanecer na proteção dos comportamentos mais importantes da aplicação.

---

# Critérios para Pull Requests

Uma Pull Request somente poderá ser aprovada quando:

- todos os testes forem executados com sucesso;
- nenhuma regressão for identificada;
- novos comportamentos relevantes estiverem acompanhados de testes.

---

# Validação

Executar:

```bash
npm run test
```

Depois:

```bash
npm run lint
```

Confirmar:

- [ ] Todos os testes aprovados.
- [ ] Nenhum erro de lint.
- [ ] Cobertura atualizada quando aplicável.

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
git checkout -b docs/testing-strategy
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(testing): define testing strategy"
```

---

# Push

```bash
git push -u origin docs/testing-strategy
```

---

# Pull Request

## Título

```text
docs: define testing strategy
```

## Descrição

```markdown
## Objetivo

Documentar a estratégia oficial de testes da aplicação.

---

## O que foi realizado

- Definição dos tipos de testes.
- Organização da estrutura.
- Convenções de nomenclatura.
- Critérios para Pull Requests.
- Estratégia de cobertura.

---

## Como validar

1. Revisar a documentação.
2. Confirmar que a estratégia atende aos requisitos do projeto.
3. Verificar se os critérios de qualidade estão claros.

---

## Checklist

- [ ] Estratégia documentada.
- [ ] Convenções definidas.
- [ ] Critérios estabelecidos.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/testing-strategy
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estratégia documentada.
- [ ] Convenções definidas.
- [ ] Estrutura estabelecida.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma estratégia de testes consistente e alinhada às boas práticas de desenvolvimento moderno. Os testes passarão a fazer parte do fluxo de desenvolvimento desde a criação de novas funcionalidades, aumentando a confiabilidade da aplicação, reduzindo regressões e facilitando futuras manutenções.

---

# Próxima etapa

➡️ **22 - Storybook**

Na próxima etapa será definida a estratégia para documentação visual dos componentes através do Storybook, estabelecendo padrões para criação de histórias, organização da documentação e integração com o Design System.

# 25 - CI/CD

> **Objetivo desta etapa**
>
> Definir a estratégia de Integração Contínua (CI) e Entrega Contínua (CD) da aplicação, estabelecendo processos automatizados para validação da qualidade do código, execução de testes, geração de builds e publicação da aplicação.

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
- ✅ 22 - Storybook
- ✅ 23 - SEO
- ✅ 24 - Performance

---

# Por que agora?

Após definir toda a arquitetura da aplicação e os critérios de qualidade, é necessário automatizar a validação dessas regras.

O CI/CD garantirá que toda alteração passe pelos mesmos processos de verificação antes de ser integrada à branch principal e disponibilizada em produção.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Estratégia de CI.
- Estratégia de CD.
- Fluxo de validações automáticas.
- Processo de deploy.
- Critérios para aprovação de Pull Requests.

A implementação das pipelines ocorrerá durante a configuração do repositório.

---

# Princípios

## Automação

Toda validação repetitiva deverá ser automatizada.

---

## Reprodutibilidade

As mesmas verificações executadas localmente deverão ser reproduzidas no ambiente de integração contínua.

---

## Segurança

Nenhuma alteração deverá chegar à `main` sem passar pelas validações definidas.

---

## Confiabilidade

Cada pipeline deverá produzir resultados consistentes e previsíveis.

---

# Estratégia de Integração Contínua (CI)

A cada Pull Request ou atualização em uma branch de desenvolvimento, deverão ser executadas automaticamente as seguintes etapas:

1. Checkout do código.
2. Instalação das dependências.
3. Verificação de formatação (quando aplicável).
4. Execução do ESLint.
5. Verificação de tipagem (TypeScript).
6. Execução da suíte de testes.
7. Geração da build da aplicação.

Caso qualquer etapa falhe, a pipeline deverá ser interrompida.

---

# Estratégia de Entrega Contínua (CD)

Após o merge na branch `main` e a conclusão bem-sucedida da pipeline de CI:

- gerar a build de produção;
- publicar automaticamente a aplicação;
- registrar logs da execução.

O processo deverá ocorrer sem intervenções manuais.

---

# Fluxo esperado

```text
Feature Branch

↓

Push

↓

Pull Request

↓

GitHub Actions

↓

Lint

↓

Type Check

↓

Tests

↓

Build

↓

Code Review

↓

Merge

↓

Deploy
```

---

# GitHub Actions

As pipelines deverão ser organizadas em workflows independentes.

Exemplo:

```text
.github/

workflows/

├── ci.yml
├── deploy.yml
└── dependabot.yml
```

Cada workflow deverá possuir responsabilidade única.

---

# Branch Protection

A branch `main` deverá possuir regras de proteção, incluindo:

- Pull Request obrigatório;
- aprovação antes do merge;
- conclusão da pipeline obrigatória;
- bloqueio de pushes diretos.

---

# Boas práticas

- manter workflows simples e objetivos;
- reutilizar ações oficiais sempre que possível;
- utilizar cache para dependências quando apropriado;
- manter segredos (Secrets) protegidos;
- evitar duplicação de etapas entre workflows.

---

# O que evitar

Evitar:

- deploy manual em produção;
- merges sem validação;
- pipelines excessivamente complexas;
- segredos armazenados no código-fonte.

---

# Validação

Confirmar:

- [ ] Estratégia documentada.
- [ ] Fluxo definido.
- [ ] Pipelines planejadas.
- [ ] Processo de deploy estabelecido.

Após a implementação, validar:

- execução automática da pipeline;
- falha em caso de erro de lint, testes ou build;
- deploy automático após merge na `main`.

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
git checkout -b docs/ci-cd
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(ci): define CI/CD strategy"
```

---

# Push

```bash
git push -u origin docs/ci-cd
```

---

# Pull Request

## Título

```text
docs: define CI/CD strategy
```

## Descrição

```markdown
## Objetivo

Documentar a estratégia oficial de Integração Contínua e Entrega Contínua da aplicação.

---

## O que foi realizado

- Definição da estratégia de CI.
- Definição da estratégia de CD.
- Organização dos workflows.
- Critérios para aprovação de Pull Requests.
- Estratégia de deploy.

---

## Como validar

1. Revisar a documentação.
2. Confirmar que o fluxo está alinhado ao Git Workflow.
3. Verificar se as validações cobrem os requisitos definidos anteriormente.

---

## Checklist

- [ ] Estratégia documentada.
- [ ] Fluxo definido.
- [ ] Critérios estabelecidos.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/ci-cd
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estratégia documentada.
- [ ] Fluxo estabelecido.
- [ ] Pipelines definidas.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma estratégia de CI/CD padronizada e alinhada às boas práticas de engenharia de software. Todas as alterações passarão por validações automáticas antes de serem integradas à branch principal, reduzindo riscos, aumentando a confiabilidade do processo de desenvolvimento e permitindo deploys consistentes e automatizados.

---

# Próxima etapa

➡️ **26 - Checklist de Produção**

Na próxima etapa será consolidado um checklist completo para validar que o projeto está realmente pronto para produção, reunindo todos os critérios definidos ao longo deste guia em uma única referência para a entrega final da aplicação.

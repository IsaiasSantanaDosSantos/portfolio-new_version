# 09 - Husky e lint-staged

> **Objetivo desta etapa**
>
> Configurar o Husky e o lint-staged para automatizar a execução do ESLint e do Prettier antes de cada commit, garantindo que apenas código validado e formatado seja enviado ao repositório.

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

---

# Por que agora?

Até este ponto, a qualidade e a formatação do código dependem da execução manual dos comandos de lint e formatação.

O Husky permite automatizar esse processo através dos Git Hooks.

Combinado com o lint-staged, ele executará essas validações apenas nos arquivos modificados, tornando os commits mais rápidos e garantindo que o repositório permaneça consistente.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Husky configurado.
- lint-staged configurado.
- Hook `pre-commit` criado.
- ESLint executando automaticamente antes dos commits.
- Prettier formatando automaticamente os arquivos alterados.
- Commits bloqueados em caso de erro de lint.

---

# Dependências

Instalar:

```bash
npm install -D husky lint-staged
```

---

# Estrutura esperada

Ao concluir esta etapa, o projeto deverá possuir:

```text
portfolio/
│
├── .husky/
│   └── pre-commit
│
├── package.json
└── ...
```

---

# Etapa 1 — Instalar as dependências

Executar:

```bash
npm install -D husky lint-staged
```

---

# Etapa 2 — Inicializar o Husky

Executar:

```bash
npx husky init
```

Esse comando deverá:

- criar a pasta `.husky`;
- criar o hook `pre-commit`;
- adicionar o script `prepare` ao `package.json`.

Verificar se foi adicionado:

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

---

# Etapa 3 — Configurar o lint-staged

Adicionar ao `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,scss,md,yml,yaml}": ["prettier --write"]
  }
}
```

Essa configuração garante que apenas os arquivos modificados sejam processados.

---

# Etapa 4 — Configurar o pre-commit

Editar o arquivo:

```text
.husky/pre-commit
```

Conteúdo:

```sh
npx lint-staged
```

Nenhum outro comando será executado neste momento.

Novas verificações poderão ser adicionadas futuramente.

---

# Etapa 5 — Validar a configuração

Modificar propositalmente um arquivo.

Executar:

```bash
git add .
git commit -m "test: validate husky"
```

Confirmar que:

- o Prettier foi executado;
- o ESLint foi executado;
- o commit somente é concluído se não existirem erros.

Após a validação, desfazer ou ajustar esse commit de teste conforme necessário.

---

# Validação

Confirmar:

- [ ] Husky instalado.
- [ ] lint-staged instalado.
- [ ] Hook `pre-commit` criado.
- [ ] Formatação automática funcionando.
- [ ] ESLint executando automaticamente.
- [ ] Commit bloqueado em caso de erro.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch:

```bash
git checkout -b chore/husky
```

---

# Commits

## Commit 1

Após instalar as dependências:

```bash
git add package.json package-lock.json
git commit -m "chore(husky): install Husky and lint-staged"
```

---

## Commit 2

Após configurar o Husky:

```bash
git add .husky package.json
git commit -m "chore(husky): configure Git hooks"
```

---

## Commit 3

Após configurar o lint-staged:

```bash
git add package.json
git commit -m "chore(husky): configure lint-staged"
```

---

## Commit 4

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(husky): validate pre-commit workflow"
```

---

# Push

```bash
git push -u origin chore/husky
```

---

# Pull Request

## Título

```text
chore: configure Husky and lint-staged
```

## Descrição

```markdown
## Objetivo

Automatizar a validação e a formatação do código antes de cada commit.

---

## O que foi realizado

- Instalação do Husky.
- Instalação do lint-staged.
- Configuração do hook `pre-commit`.
- Configuração do lint-staged.
- Validação completa do fluxo.

---

## Como testar

1. Executar `npm install`.
2. Alterar um arquivo do projeto.
3. Executar um commit.
4. Confirmar que o Prettier e o ESLint são executados automaticamente.

---

## Checklist

- [ ] Husky configurado.
- [ ] lint-staged configurado.
- [ ] Hook funcionando.
- [ ] Projeto validado.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/husky
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Husky instalado.
- [ ] lint-staged instalado.
- [ ] Hook `pre-commit` funcionando.
- [ ] ESLint executando automaticamente.
- [ ] Prettier executando automaticamente.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, todo commit realizado no projeto será automaticamente validado e formatado antes de ser aceito pelo Git.

Isso garante que o repositório permaneça consistente, reduzindo erros simples e padronizando a qualidade do código sem depender da execução manual dos comandos.

---

# Próxima etapa

➡️ **10 - Commitlint**

Na próxima etapa será configurado o Commitlint para validar automaticamente as mensagens de commit, garantindo conformidade com o padrão Conventional Commits definido no Git Workflow.

[Commitlint](./10-commitlint.md)

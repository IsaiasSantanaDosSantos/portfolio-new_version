# 08 - Prettier

> **Objetivo desta etapa**
>
> Configurar o Prettier como ferramenta oficial de formatação de código do projeto, integrando-o ao ESLint para evitar conflitos e garantir um padrão consistente de escrita em toda a aplicação.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral
- ✅ 03 - Roadmap de Desenvolvimento
- ✅ 04 - Git Workflow
- ✅ 05 - Setup Inicial
- ✅ 06 - Estrutura de Pastas
- ✅ 07 - ESLint

---

# Por que agora?

Após definir as regras de qualidade do código com o ESLint, o próximo passo é padronizar sua formatação.

Separar qualidade de código e formatação torna a configuração mais simples, reduz conflitos entre ferramentas e facilita a manutenção do projeto.

Essa configuração servirá de base para as próximas etapas, além de preparar o ambiente para a futura integração com o VS Code e com o Husky.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Prettier configurado.
- Integração com o ESLint através do `eslint-config-prettier`.
- Arquivo de configuração do Prettier.
- Arquivo `.prettierignore`.
- Scripts para formatação e verificação.
- Projeto formatando corretamente sem conflitos com o ESLint.

---

# Dependências

Instalar as dependências de desenvolvimento:

```bash
npm install -D prettier eslint-config-prettier
```

---

# Estrutura esperada

Ao concluir esta etapa, o projeto deverá possuir:

```text
portfolio/
│
├── .prettierignore
├── .prettierrc.json
├── eslint.config.js
├── package.json
└── ...
```

---

# Etapa 1 — Instalar o Prettier

Executar:

```bash
npm install -D prettier eslint-config-prettier
```

---

# Validação

Confirmar que as dependências foram adicionadas ao `package.json`.

---

# Etapa 2 — Configurar o Prettier

Criar o arquivo:

```text
.prettierrc.json
```

Inicialmente utilizar apenas as configurações realmente necessárias.

Exemplo:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

Evitar adicionar regras sem necessidade.

Sempre priorizar a configuração padrão do Prettier.

---

# Etapa 3 — Criar o `.prettierignore`

Criar o arquivo:

```text
.prettierignore
```

Adicionar os diretórios que não deverão ser formatados.

Exemplo:

```text
dist
node_modules
coverage
storybook-static
```

Novos diretórios poderão ser adicionados futuramente conforme necessário.

---

# Etapa 4 — Integrar ao ESLint

Atualizar o arquivo `eslint.config.js`.

Adicionar o `eslint-config-prettier` ao final da configuração.

Essa integração garante que o ESLint não tente validar regras que são responsabilidade exclusiva do Prettier.

---

# Etapa 5 — Adicionar scripts

Atualizar o `package.json`.

Adicionar:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

Caso os scripts anteriores já existam, apenas acrescentar os novos.

---

# Etapa 6 — Validar a configuração

Executar:

```bash
npm run format
```

Em seguida:

```bash
npm run format:check
```

Por fim:

```bash
npm run lint
```

Todos os comandos deverão finalizar sem erros.

---

# Validação

Confirmar:

- [ ] Prettier instalado.
- [ ] Arquivo `.prettierrc.json` criado.
- [ ] Arquivo `.prettierignore` criado.
- [ ] ESLint integrado ao Prettier.
- [ ] Scripts adicionados.
- [ ] Projeto formatado corretamente.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch:

```bash
git checkout -b chore/prettier
```

---

# Commits

## Commit 1

Após instalar as dependências:

```bash
git add package.json package-lock.json
git commit -m "chore(prettier): install Prettier dependencies"
```

---

## Commit 2

Após criar a configuração:

```bash
git add .prettierrc.json .prettierignore eslint.config.js package.json
git commit -m "chore(prettier): configure code formatting"
```

---

## Commit 3

Após validar a configuração:

```bash
git add .
git commit -m "chore(prettier): validate formatting configuration"
```

---

# Push

```bash
git push -u origin chore/prettier
```

---

# Pull Request

## Título

```text
chore: configure Prettier and integrate with ESLint
```

## Descrição

```markdown
## Objetivo

Configurar o Prettier como ferramenta oficial de formatação do projeto.

---

## O que foi realizado

- Instalação do Prettier.
- Integração com o ESLint.
- Criação do arquivo de configuração.
- Criação do `.prettierignore`.
- Adição dos scripts de formatação.
- Validação da configuração.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run format`.
3. Executar `npm run format:check`.
4. Executar `npm run lint`.

---

## Checklist

- [ ] Prettier instalado.
- [ ] Configuração criada.
- [ ] Integração com ESLint concluída.
- [ ] Scripts adicionados.
- [ ] Projeto validado.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/prettier
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Prettier instalado.
- [ ] Integração com o ESLint concluída.
- [ ] Scripts configurados.
- [ ] Projeto executando normalmente.
- [ ] `npm run lint` sem erros.
- [ ] `npm run format:check` sem erros.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto contará com um padrão único de formatação de código, compartilhado por todos os arquivos e integrado ao ESLint, reduzindo divergências de estilo e facilitando a revisão de código.

A partir deste momento, toda alteração no projeto deverá respeitar tanto as regras de qualidade definidas pelo ESLint quanto a formatação automática definida pelo Prettier.

---

# Próxima etapa

➡️ **09 - Husky e lint-staged**

Na próxima etapa serão configurados o Husky e o lint-staged para automatizar a execução do ESLint e do Prettier antes de cada commit, impedindo que código fora do padrão seja versionado.  

[Husky e lint-staged](./09-husky.md)

# 07 - ESLint

> **Objetivo desta etapa**
>
> Configurar o ESLint utilizando o novo modelo Flat Config, definindo as regras de qualidade de código que serão aplicadas durante todo o desenvolvimento do projeto.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral
- ✅ 03 - Roadmap de Desenvolvimento
- ✅ 04 - Git Workflow
- ✅ 05 - Setup Inicial
- ✅ 06 - Estrutura de Pastas

---

# Por que agora?

Antes de criarmos qualquer componente ou funcionalidade, precisamos estabelecer um padrão de qualidade para o código.

Configurar o ESLint neste momento garante que todo código produzido a partir das próximas etapas já siga as convenções definidas pelo projeto.

Isso reduz retrabalho, evita inconsistências e melhora a legibilidade do código desde o primeiro componente.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- ESLint 9 configurado.
- Flat Config como padrão.
- Regras para React.
- Regras para TypeScript.
- Suporte ao React Hooks.
- Suporte ao React Refresh.
- Scripts de lint configurados.
- Projeto validando corretamente.

Nenhuma regra personalizada será criada neste momento.

Primeiro utilizaremos uma configuração sólida baseada nas recomendações oficiais.

As customizações serão adicionadas apenas quando houver necessidade real.

---

# Dependências

Instalar as dependências de desenvolvimento:

```bash
npm install -D \
eslint \
@eslint/js \
typescript-eslint \
eslint-plugin-react-hooks \
eslint-plugin-react-refresh \
globals
```

---

# Estrutura esperada

Ao concluir esta etapa, o projeto deverá possuir:

```text
portfolio/
│
├── eslint.config.js
├── package.json
└── ...
```

---

# Etapa 1 — Instalar o ESLint

Executar:

```bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```

---

# Validação

Executar:

```bash
npx eslint --version
```

Confirmar que a versão instalada pertence à série 9.x.

---

# Etapa 2 — Criar a configuração

Criar o arquivo:

```text
eslint.config.js
```

Utilizar o padrão Flat Config recomendado pela documentação oficial do ESLint e do Vite para projetos React + TypeScript.

A configuração deverá incluir:

- JavaScript recomendado.
- TypeScript recomendado.
- React Hooks.
- React Refresh.
- Ignorar a pasta `dist`.

Nenhuma regra personalizada deverá ser adicionada neste momento.

---

# Etapa 3 — Adicionar os scripts

Atualizar o `package.json`.

Adicionar:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Caso outros scripts já existam, apenas acrescentar os novos.

---

# Etapa 4 — Executar o lint

Executar:

```bash
npm run lint
```

Caso existam erros, corrigi-los antes de prosseguir.

O projeto deverá terminar esta etapa sem erros de lint.

---

# Validação

Confirmar:

- [ ] ESLint instalado.
- [ ] Flat Config criada.
- [ ] Scripts adicionados.
- [ ] `npm run lint` executa corretamente.
- [ ] Nenhum erro encontrado.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch:

```bash
git checkout -b chore/eslint
```

---

# Commits

## Commit 1

Após instalar as dependências:

```bash
git add package.json package-lock.json
git commit -m "chore(eslint): install ESLint dependencies"
```

---

## Commit 2

Após criar a configuração:

```bash
git add eslint.config.js package.json
git commit -m "chore(eslint): configure Flat Config"
```

---

## Commit 3

Após validar e corrigir possíveis problemas:

```bash
git add .
git commit -m "chore(eslint): validate lint configuration"
```

---

# Push

```bash
git push -u origin chore/eslint
```

---

# Pull Request

## Título

```text
chore: configure ESLint with Flat Config
```

## Descrição

```markdown
## Objetivo

Configurar o ESLint utilizando a abordagem Flat Config para projetos React + TypeScript.

---

## O que foi realizado

- Instalação do ESLint.
- Configuração do Flat Config.
- Configuração das regras para React e TypeScript.
- Adição dos scripts de lint.
- Validação da configuração.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run lint`.
3. Confirmar que não existem erros de lint.

---

## Checklist

- [ ] ESLint instalado.
- [ ] Flat Config criada.
- [ ] Scripts configurados.
- [ ] Projeto validado.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/eslint
```

Remover também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] ESLint instalado.
- [ ] Flat Config criada.
- [ ] Scripts adicionados.
- [ ] Projeto executando normalmente.
- [ ] `npm run lint` sem erros.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto contará com uma configuração moderna do ESLint, preparada para React e TypeScript, garantindo um padrão consistente de qualidade de código desde as próximas implementações.

A partir deste momento, qualquer alteração no projeto deverá respeitar as regras definidas pelo lint.

---

# Próxima etapa

➡️ **08 - Prettier**

Na próxima etapa será configurado o Prettier e integrada sua atuação ao ESLint, garantindo padronização automática de formatação em todo o projeto e evitando conflitos entre regras de lint e estilo de código.

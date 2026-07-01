# 05 - Setup Inicial do Projeto

> **Objetivo desta etapa**
>
> Criar a base do projeto, inicializar o repositório Git, criar a aplicação React utilizando Vite e TypeScript e garantir que o ambiente esteja pronto para receber as próximas configurações.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral
- ✅ 03 - Roadmap de Desenvolvimento
- ✅ 04 - Git Workflow

---

# Objetivo

Ao final desta etapa deveremos possuir:

- Repositório Git criado.
- Projeto React criado utilizando Vite.
- TypeScript configurado pelo template oficial.
- Projeto executando corretamente.
- Primeiro commit realizado.
- Primeira Pull Request concluída.

Nenhuma biblioteca adicional será instalada nesta etapa.

O objetivo é criar uma base mínima e estável para as próximas configurações.

---

# Tecnologias utilizadas

Nesta etapa serão utilizadas apenas:

- Git
- Node.js (LTS)
- npm
- Vite
- React
- TypeScript

---

# Estrutura esperada

Ao final desta etapa, a estrutura do projeto deverá ser semelhante a:

```text
portfolio/
│
├── public/
├── src/
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Nenhuma reorganização da estrutura será realizada neste momento.

Isso acontecerá em uma etapa posterior.

---

# Etapa 1 — Criar o repositório

## Objetivo

Criar o repositório remoto no GitHub.

## Nome sugerido

```text
portfolio
```

ou

```text
portfolio-v2
```

Caso o domínio utilize outro nome, manter consistência entre o nome do repositório e o projeto.

---

## Configurações iniciais

Ao criar o repositório:

- Público.
- Sem README.
- Sem `.gitignore`.
- Sem licença.

Esses arquivos serão criados automaticamente pelo Vite.

---

# Etapa 2 — Clonar o repositório

```bash
git clone <url-do-repositorio>
```

Entrar na pasta criada:

```bash
cd portfolio
```

---

# Etapa 3 — Criar a aplicação

Executar:

```bash
npm create vite@latest .
```

Selecionar:

```text
Framework:
React
```

Depois:

```text
Variant:
TypeScript
```

---

# Etapa 4 — Instalar as dependências

```bash
npm install
```

---

# Etapa 5 — Executar o projeto

```bash
npm run dev
```

Verificar se o projeto inicia corretamente.

O navegador deverá exibir a página padrão do Vite.

Nenhum erro deverá aparecer no terminal.

---

# Validação da etapa

Antes de continuar, confirmar:

- [ ] Projeto criado.
- [ ] Dependências instaladas.
- [ ] Aplicação executando.
- [ ] Sem erros no terminal.

Caso algum erro seja encontrado, ele deverá ser resolvido antes de prosseguir.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch da etapa:

```bash
git checkout -b chore/project-setup
```

---

# Commit

Após validar que o projeto está funcionando:

```bash
git add .
git commit -m "chore(setup): initialize React project with Vite"
```

---

# Push

```bash
git push -u origin chore/project-setup
```

---

# Pull Request

## Título

```text
chore: initialize project with React, Vite and TypeScript
```

## Descrição

```markdown
## Objetivo

Inicializar a estrutura base do projeto utilizando React, Vite e TypeScript.

---

## O que foi realizado

- Criação do repositório.
- Inicialização do projeto com Vite.
- Configuração do template React + TypeScript.
- Instalação das dependências.
- Validação da execução local.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Verificar se a página padrão do Vite é exibida.

---

## Checklist

- [ ] Projeto executando corretamente.
- [ ] Sem erros no terminal.
- [ ] Estrutura inicial criada.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/project-setup
```

Opcionalmente, excluir também a branch remota pelo GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Repositório criado.
- [ ] Projeto React criado.
- [ ] Projeto utilizando TypeScript.
- [ ] Aplicação executando normalmente.
- [ ] Branch criada seguindo o padrão.
- [ ] Commit realizado.
- [ ] Pull Request criada e aprovada.
- [ ] Branch removida após o merge.
- [ ] `main` atualizada.

Nenhuma configuração adicional deverá ser realizada antes da próxima etapa.

---

# Resultado esperado

Ao concluir este documento, deverá existir um projeto React funcional, executando localmente com Vite e TypeScript, servindo como base para todas as configurações que serão realizadas nas próximas etapas.

O projeto deverá permanecer o mais próximo possível do template oficial, evitando customizações prematuras.

---

# Próxima etapa

➡️ **06 - Estrutura de Pastas**

Na próxima etapa será criada a estrutura inicial de diretórios do projeto, preparando a organização física da aplicação antes da configuração das ferramentas de desenvolvimento.

[Estrutura de Pastas](./06-folder-structure.md)

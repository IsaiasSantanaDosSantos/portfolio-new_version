# 11 - Aliases de Importação

> **Objetivo desta etapa**
>
> Configurar aliases de importação para eliminar caminhos relativos complexos, tornando o código mais legível, desacoplado da estrutura física das pastas e mais fácil de manter.

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

---

# Por que agora?

Até este momento a estrutura do projeto já está definida.

Antes de iniciarmos a implementação da arquitetura da aplicação, é importante configurar os aliases de importação para evitar caminhos relativos longos e frágeis.

Essa configuração permitirá reorganizar diretórios futuramente com um impacto mínimo sobre o restante do código.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Aliases configurados no TypeScript.
- Aliases configurados no Vite.
- Imports absolutos funcionando corretamente.
- Estrutura preparada para crescer sem depender de caminhos relativos.

Os aliases deverão refletir apenas os diretórios atualmente existentes.

Novos aliases serão adicionados conforme novas estruturas forem surgindo.

---

# Princípios

Durante esta etapa deverão ser seguidos os seguintes princípios.

## Arquitetura antes de conveniência

Os aliases deverão representar responsabilidades da aplicação e não apenas facilitar a escrita dos imports.

---

## Evitar alias genérico

Não será utilizado:

```text
@/*
```

Cada responsabilidade possuirá seu próprio alias.

---

## Evolução incremental

Novos aliases somente serão criados quando novos diretórios passarem a existir.

---

# Aliases desta etapa

Configurar os seguintes aliases:

| Alias         | Diretório        |
| ------------- | ---------------- |
| `@assets`     | `src/assets`     |
| `@components` | `src/components` |
| `@hooks`      | `src/hooks`      |
| `@pages`      | `src/pages`      |
| `@providers`  | `src/providers`  |
| `@styles`     | `src/styles`     |
| `@types`      | `src/types`      |
| `@utils`      | `src/utils`      |

---

# Etapa 1 — Configurar o TypeScript

Atualizar o arquivo:

```text
tsconfig.app.json
```

Adicionar a configuração de `baseUrl` e `paths`, mapeando todos os aliases definidos anteriormente.

Utilizar sempre caminhos relativos ao diretório `src`.

---

# Etapa 2 — Configurar o Vite

Atualizar o arquivo:

```text
vite.config.ts
```

Adicionar a resolução dos aliases utilizando a API oficial do Vite.

Os aliases deverão corresponder exatamente aos definidos no TypeScript.

---

# Etapa 3 — Validar a configuração

Criar temporariamente um import utilizando um dos aliases.

Exemplo:

```ts
import {} from '@utils';
```

Confirmar que:

- o TypeScript reconhece o alias;
- o Vite resolve corretamente o caminho;
- não existem erros durante a compilação.

Após a validação, remover imports temporários que não sejam necessários.

---

# Validação

Confirmar:

- [ ] Todos os aliases configurados.
- [ ] TypeScript reconhece os aliases.
- [ ] Vite resolve corretamente os imports.
- [ ] Projeto executando normalmente.
- [ ] Nenhum erro de compilação.

Executar:

```bash
npm run dev
```

Em seguida:

```bash
npm run lint
```

Todos os comandos deverão finalizar sem erros.

---

# Arquivos criados

Nenhum.

---

# Arquivos alterados

- `tsconfig.app.json`
- `vite.config.ts`

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
git checkout -b chore/path-aliases
```

---

# Commits

## Commit 1

Após configurar o TypeScript:

```bash
git add tsconfig.app.json
git commit -m "chore(paths): configure TypeScript path aliases"
```

---

## Commit 2

Após configurar o Vite:

```bash
git add vite.config.ts
git commit -m "chore(paths): configure Vite path aliases"
```

---

## Commit 3

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(paths): validate path aliases"
```

---

# Push

```bash
git push -u origin chore/path-aliases
```

---

# Pull Request

## Título

```text
chore: configure path aliases
```

## Descrição

```markdown
## Objetivo

Configurar aliases de importação para simplificar a navegação entre módulos e desacoplar o código da estrutura física de diretórios.

---

## O que foi realizado

- Configuração dos aliases no TypeScript.
- Configuração dos aliases no Vite.
- Validação dos imports absolutos.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Criar um import utilizando um alias.
4. Confirmar que a aplicação compila normalmente.

---

## Checklist

- [ ] Aliases configurados.
- [ ] TypeScript validando corretamente.
- [ ] Vite resolvendo corretamente.
- [ ] Projeto funcionando normalmente.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/path-aliases
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Aliases configurados.
- [ ] Projeto compilando normalmente.
- [ ] `npm run dev` executando sem erros.
- [ ] `npm run lint` executando sem erros.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto contará com um sistema consistente de aliases de importação, reduzindo o uso de caminhos relativos extensos e preparando a aplicação para crescer de forma organizada.

A partir deste momento, todos os novos imports deverão utilizar os aliases definidos sempre que fizer sentido, mantendo a consistência e a legibilidade do código.

---

# Próxima etapa

➡️ **12 - Styled Components**

Na próxima etapa será configurado o Styled Components, juntamente com a estrutura inicial de tema, preparando o projeto para receber o Design System e suportar os modos claro e escuro definidos na arquitetura.

[Styled Components](./12-styled-components.md)

# 10 - Commitlint

> **Objetivo desta etapa**
>
> Configurar o Commitlint para validar automaticamente as mensagens de commit, garantindo que todo o histórico do projeto siga o padrão Conventional Commits definido no Git Workflow.

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

---

# Por que agora?

Até este ponto, já automatizamos a qualidade do código e sua formatação.

O próximo passo é padronizar também o histórico do Git.

Mensagens de commit consistentes facilitam a leitura do histórico, a geração automática de changelogs, a revisão de código e futuras integrações com pipelines de CI/CD.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Commitlint instalado.
- Configuração baseada em Conventional Commits.
- Hook `commit-msg` configurado.
- Validação automática das mensagens de commit.
- Bloqueio de commits com mensagens inválidas.

Nenhuma regra personalizada será criada nesta etapa.

Será utilizada apenas a configuração oficial recomendada pela documentação do Commitlint.

---

# Dependências

Instalar as dependências de desenvolvimento:

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

---

# Estrutura esperada

Ao concluir esta etapa, o projeto deverá possuir:

```text
portfolio/
│
├── .husky/
│   ├── pre-commit
│   └── commit-msg
│
├── commitlint.config.js
└── ...
```

---

# Etapa 1 — Instalar o Commitlint

Executar:

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

---

# Validação

Confirmar que as dependências foram adicionadas ao `package.json`.

---

# Etapa 2 — Criar a configuração

Criar o arquivo:

```text
commitlint.config.js
```

Conteúdo:

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
};
```

Essa configuração utiliza o conjunto oficial de regras do Conventional Commits.

---

# Etapa 3 — Configurar o hook `commit-msg`

Criar o hook utilizando o Husky:

```bash
npx husky add .husky/commit-msg "npx --no -- commitlint --edit \$1"
```

Caso a versão do Husky utilizada não possua mais o comando `add`, criar o arquivo manualmente em `.husky/commit-msg` seguindo a documentação oficial.

O arquivo deverá executar:

```bash
npx --no -- commitlint --edit "$1"
```

---

# Etapa 4 — Validar a configuração

Executar um commit de teste utilizando uma mensagem inválida:

```bash
git commit -m "ajustes"
```

O commit deverá ser bloqueado.

Em seguida, realizar um commit válido:

```bash
git commit -m "chore(commitlint): validate commit messages"
```

O commit deverá ser aceito.

Após a validação, manter apenas os commits necessários para a etapa.

---

# Validação

Confirmar:

- [ ] Commitlint instalado.
- [ ] Arquivo de configuração criado.
- [ ] Hook `commit-msg` configurado.
- [ ] Commits inválidos bloqueados.
- [ ] Commits válidos aceitos.

---

# Branch

Atualizar a `main`:

```bash
git checkout main
git pull origin main
```

Criar a branch:

```bash
git checkout -b chore/commitlint
```

---

# Commits

## Commit 1

Após instalar as dependências:

```bash
git add package.json package-lock.json
git commit -m "chore(commitlint): install Commitlint dependencies"
```

---

## Commit 2

Após criar a configuração:

```bash
git add commitlint.config.js
git commit -m "chore(commitlint): configure Conventional Commits"
```

---

## Commit 3

Após configurar o hook:

```bash
git add .husky/commit-msg
git commit -m "chore(commitlint): configure commit-msg hook"
```

---

## Commit 4

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(commitlint): validate commit message workflow"
```

---

# Push

```bash
git push -u origin chore/commitlint
```

---

# Pull Request

## Título

```text
chore: configure Commitlint
```

## Descrição

```markdown
## Objetivo

Configurar o Commitlint para validar automaticamente as mensagens de commit.

---

## O que foi realizado

- Instalação do Commitlint.
- Configuração baseada em Conventional Commits.
- Criação do hook `commit-msg`.
- Validação do fluxo de commits.

---

## Como testar

1. Executar `npm install`.
2. Tentar criar um commit com uma mensagem inválida.
3. Confirmar que o commit é bloqueado.
4. Criar um commit seguindo o padrão Conventional Commits.
5. Confirmar que o commit é aceito.

---

## Checklist

- [ ] Commitlint instalado.
- [ ] Configuração criada.
- [ ] Hook funcionando.
- [ ] Fluxo validado.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/commitlint
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Commitlint instalado.
- [ ] Configuração criada.
- [ ] Hook `commit-msg` funcionando.
- [ ] Mensagens inválidas bloqueadas.
- [ ] Mensagens válidas aceitas.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto contará com uma camada adicional de qualidade, garantindo que todo o histórico de commits siga o padrão Conventional Commits definido no Git Workflow.

A partir deste momento, nenhuma mensagem de commit fora do padrão será aceita pelo repositório.

---

# Próxima etapa

➡️ **11 - Aliases de Importação**

Na próxima etapa serão configurados os aliases de importação do TypeScript e do Vite, eliminando imports relativos complexos e tornando a navegação e manutenção do código mais simples e consistente.  

[Aliases de Importação](./11-path-aliases.md)

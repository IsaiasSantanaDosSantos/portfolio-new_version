# Criando um Novo Projeto a partir do Template

> **Objetivo desta etapa**
>
> Utilizar o repositório base (Template) para iniciar um novo projeto React + TypeScript já contendo toda a configuração de arquitetura, ferramentas e boas práticas definidas anteriormente, evitando retrabalho e garantindo padronização entre todos os projetos.

---

# Quando utilizar

Este procedimento deverá ser seguido sempre que um novo projeto React + TypeScript for iniciado.

O repositório Template deverá permanecer exclusivamente como base para novos projetos, sem conter qualquer regra de negócio.

---

# Pré-requisitos

- Git instalado.
- Conta no GitHub.
- Template atualizado.
- Permissão para criar novos repositórios no GitHub.

---

# Visão Geral

O fluxo será:

1. Manter um repositório Template.
2. Criar um novo repositório utilizando o Template.
3. Clonar o novo repositório.
4. Alterar apenas as informações específicas do projeto.
5. Iniciar o desenvolvimento.

---

# Etapa 1 — Criar o Template

O Template deverá conter apenas configurações reutilizáveis.

Exemplos:

- React
- Vite
- TypeScript
- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint
- Path Aliases
- Estrutura de pastas
- Configuração de testes
- Configuração de CI/CD
- Configuração do VS Code
- Documentação do projeto

O Template **não deverá conter**:

- regras de negócio;
- páginas da aplicação;
- componentes específicos;
- autenticação;
- integração com APIs;
- Firebase;
- banco de dados;
- temas específicos;
- qualquer código exclusivo de um projeto.

---

# Etapa 2 — Transformar o repositório em Template

No GitHub:

1. Acesse o repositório do Template.
2. Clique em **Settings**.
3. Localize a seção **General**.
4. Marque a opção:

```
Template repository
```

Após salvar, o GitHub disponibilizará o botão:

```
Use this template
```

---

# Etapa 3 — Criar um novo projeto

Na página do Template, clique em:

```
Use this template
```

Em seguida:

1. Escolha:

```
Create a new repository
```

2. Informe o nome do novo projeto.

Exemplo:

```
financial-dashboard
```

3. Defina a visibilidade:

- Public
- Private

4. Clique em:

```
Create repository
```

O GitHub criará um novo repositório contendo todos os arquivos do Template, porém sem copiar o histórico de commits.

---

# Etapa 4 — Clonar o novo repositório

Copie a URL do novo repositório.

Exemplo:

```text
https://github.com/usuario/financial-dashboard.git
```

No terminal, execute:

```bash
git clone https://github.com/usuario/financial-dashboard.git
```

Acesse a pasta:

```bash
cd financial-dashboard
```

---

# Etapa 5 — Instalar as dependências

Caso o projeto utilize pnpm:

```bash
pnpm install
```

Caso utilize npm:

```bash
npm install
```

---

# Etapa 6 — Atualizar as informações do projeto

Antes de iniciar o desenvolvimento, personalize o projeto.

Atualize informações como:

- nome do projeto;
- descrição;
- README;
- package.json;
- licença;
- favicon;
- título da aplicação;
- informações do autor (caso necessário).

---

# Etapa 7 — Validar o Template

Execute:

```bash
pnpm dev
```

ou

```bash
npm run dev
```

Verifique se a aplicação inicia normalmente.

Depois execute:

```bash
pnpm lint
```

ou

```bash
npm run lint
```

Se houver testes configurados:

```bash
pnpm test
```

ou

```bash
npm test
```

Todos os comandos deverão finalizar sem erros.

---

# Etapa 8 — Criar a branch de desenvolvimento

Após validar o Template, crie a branch principal de desenvolvimento.

Exemplo:

```bash
git checkout -b development
```

Faça o primeiro commit do projeto.

Exemplo:

```bash
git add .
git commit -m "chore: initialize project"
```

Envie a branch para o GitHub:

```bash
git push -u origin development
```

Caso a estratégia do projeto utilize outra branch principal, adapte este passo conforme o Git Workflow definido.

---

# Boas práticas

Sempre mantenha o Template atualizado.

Sempre que uma melhoria genérica for criada durante um projeto, avalie se ela também faz sentido para os próximos projetos.

Caso positivo:

- implemente a melhoria no Template;
- documente a alteração;
- utilize o Template atualizado nos próximos projetos.

Evite copiar configurações manualmente entre projetos.

O Template deverá ser a única fonte de verdade para todas as configurações iniciais.

---

# Vantagens desta abordagem

- Padronização entre projetos.
- Menor tempo de configuração.
- Redução de erros.
- Evolução contínua do setup.
- Melhor reaproveitamento de código.
- Documentação centralizada.
- Histórico limpo para cada novo projeto.

---

# Validação

Confirmar:

- [ ] O Template está atualizado.
- [ ] O novo repositório foi criado utilizando **Use this template**.
- [ ] O histórico de commits do Template não foi copiado.
- [ ] As dependências foram instaladas.
- [ ] A aplicação inicia normalmente.
- [ ] O lint executa sem erros.
- [ ] A documentação foi atualizada, quando necessário.
- [ ] O projeto está pronto para iniciar o desenvolvimento.

---

# Observações

Sempre que novas ferramentas, configurações ou boas práticas forem incorporadas ao setup, elas deverão ser adicionadas primeiramente ao Template.

Dessa forma, todos os projetos futuros iniciarão com uma base consistente, moderna e padronizada, reduzindo significativamente o tempo gasto com configurações iniciais.
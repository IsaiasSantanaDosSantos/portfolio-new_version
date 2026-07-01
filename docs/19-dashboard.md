# 19 - Dashboard Administrativo

> **Objetivo desta etapa**
>
> Definir a arquitetura do Dashboard Administrativo da aplicação, estabelecendo sua organização, responsabilidades, fluxo de autenticação e estratégia para gerenciamento de conteúdo, garantindo que os dados da SPA possam ser administrados de forma segura, escalável e desacoplada da implementação do backend.

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

---

# Por que agora?

Após definir a estratégia de desenvolvimento da SPA, é necessário planejar a área administrativa que permitirá gerenciar os conteúdos da aplicação.

Nesta etapa será definida apenas a arquitetura do Dashboard.

A implementação da autenticação e da integração com o backend será realizada em etapas posteriores.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Arquitetura do Dashboard.
- Organização das funcionalidades.
- Estratégia de gerenciamento de conteúdo.
- Fluxo de autenticação.
- Organização das entidades.
- Estratégia de desacoplamento do backend.

Nenhuma funcionalidade definitiva será implementada nesta etapa.

---

# Princípios

## Separação entre área pública e administrativa

A SPA pública e o Dashboard compartilharão a mesma base tecnológica, porém permanecerão isolados em relação às suas responsabilidades.

---

## Conteúdo orientado por entidades

Toda edição deverá ocorrer sobre entidades da aplicação e não sobre páginas.

---

## Reutilização

O Dashboard deverá reutilizar integralmente o Design System e os componentes compartilhados da aplicação.

---

## Desacoplamento

O Dashboard nunca deverá conhecer detalhes específicos do provedor de banco de dados utilizado.

Toda comunicação deverá ocorrer através de uma camada de abstração.

---

# Estrutura esperada

```text
src/

dashboard/
│
├── pages/
├── components/
├── hooks/
├── services/
├── repositories/
├── layouts/
├── routes/
└── index.ts
```

Essa estrutura representa apenas a organização inicial da área administrativa.

---

# Funcionalidades previstas

O Dashboard deverá permitir gerenciar:

- Hero
- Sobre
- Skills
- Projetos
- Experiência
- Formação
- Certificações
- Contatos
- Redes Sociais
- Configurações Gerais

Cada módulo deverá evoluir de forma independente.

---

# Fluxo de autenticação

O acesso ao Dashboard deverá seguir o fluxo abaixo:

```text
Usuário

↓

Login

↓

Autenticação

↓

Validação da sessão

↓

Dashboard
```

Rotas administrativas deverão permanecer protegidas.

---

# Estratégia para gerenciamento de conteúdo

Inicialmente, todos os conteúdos da SPA serão estáticos.

Posteriormente, cada seção será migrada individualmente para consumir dados do backend.

A migração deverá ocorrer de forma incremental, evitando alterações estruturais na aplicação.

---

# Estratégia de internacionalização

Os textos administrativos poderão utilizar o mesmo sistema de internacionalização da aplicação.

Os conteúdos dinâmicos deverão ser armazenados por idioma, permitindo a edição independente de cada tradução.

---

# Estratégia de persistência

O Dashboard deverá comunicar-se apenas com repositórios.

Exemplo:

```text
Dashboard

↓

Repository

↓

Provider (Firebase ou Supabase)

↓

Banco de Dados
```

Isso permitirá substituir o provedor futuramente com impacto mínimo na aplicação.

---

# Critérios de qualidade

Toda funcionalidade administrativa deverá:

- reutilizar componentes do Design System;
- utilizar Design Tokens;
- respeitar a arquitetura de componentes;
- ser internacionalizada;
- ser responsiva;
- possuir tratamento adequado para estados de carregamento, sucesso e erro.

---

# Validação

Confirmar:

- [ ] Arquitetura documentada.
- [ ] Estrutura definida.
- [ ] Fluxo de autenticação estabelecido.
- [ ] Estratégia de persistência documentada.
- [ ] Estratégia de internacionalização definida.

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
git checkout -b docs/dashboard
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(dashboard): define dashboard architecture"
```

---

# Push

```bash
git push -u origin docs/dashboard
```

---

# Pull Request

## Título

```text
docs: define dashboard architecture
```

## Descrição

```markdown
## Objetivo

Documentar a arquitetura do Dashboard Administrativo da aplicação.

---

## O que foi realizado

- Definição da arquitetura.
- Organização das funcionalidades.
- Estratégia de autenticação.
- Estratégia de persistência.
- Estratégia de internacionalização.

---

## Como validar

1. Revisar a arquitetura proposta.
2. Confirmar que a organização está alinhada ao restante da aplicação.
3. Verificar o desacoplamento entre Dashboard e backend.

---

## Checklist

- [ ] Estrutura documentada.
- [ ] Fluxos definidos.
- [ ] Estratégia validada.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/dashboard
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Arquitetura documentada.
- [ ] Estrutura organizada.
- [ ] Fluxos definidos.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação possuirá uma arquitetura clara para sua área administrativa, preparada para evoluir de forma incremental e desacoplada do provedor de banco de dados. Essa abordagem permitirá substituir gradualmente os conteúdos estáticos da SPA por dados gerenciados dinamicamente, preservando a consistência arquitetural e a reutilização dos componentes compartilhados.

---

# Próxima etapa

➡️ **20 - Firebase**

Na próxima etapa será definida a arquitetura de integração com o Firebase, incluindo autenticação, banco de dados, armazenamento, regras de segurança e estratégia de acesso aos dados, sempre mantendo o desacoplamento entre a aplicação e a infraestrutura de backend.  

[Firebase](./20-firebase.md)

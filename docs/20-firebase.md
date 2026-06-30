# 20 - Firebase

> **Objetivo desta etapa**
>
> Definir a arquitetura de integração com o Firebase, estabelecendo padrões para autenticação, banco de dados, armazenamento, organização do código e acesso às informações da aplicação, garantindo baixo acoplamento e facilidade de manutenção.

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

---

# Por que agora?

Após definir a arquitetura da aplicação, da SPA e do Dashboard Administrativo, é o momento de documentar como a infraestrutura de backend será integrada ao projeto.

O objetivo desta etapa é estabelecer uma arquitetura desacoplada, permitindo que o Firebase atue apenas como provedor de serviços, sem impactar diretamente a camada de apresentação ou as regras de negócio.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Estrutura de integração com o Firebase.
- Organização dos módulos.
- Estratégia de autenticação.
- Estratégia para acesso ao Firestore.
- Estratégia para armazenamento de arquivos.
- Padrões para comunicação entre aplicação e backend.

Nenhuma integração definitiva será implementada nesta etapa.

---

# Princípios

## Baixo acoplamento

A aplicação nunca deverá depender diretamente das APIs do Firebase.

Toda comunicação deverá ocorrer por meio de Services e Repositories.

---

## Responsabilidade única

Cada módulo do Firebase deverá possuir uma responsabilidade específica.

---

## Tipagem completa

Toda comunicação com o backend deverá utilizar modelos TypeScript previamente definidos.

---

## Centralização

Configurações, nomes de coleções e constantes deverão permanecer centralizados.

---

# Serviços previstos

A arquitetura deverá considerar os seguintes serviços:

- Firebase Authentication
- Cloud Firestore
- Cloud Storage

Outros serviços poderão ser adicionados futuramente, caso haja necessidade.

---

# Estrutura esperada

```text
src/

services/
│
├── firebase/
│   ├── config.ts
│   ├── auth.ts
│   ├── firestore.ts
│   ├── storage.ts
│   ├── collections.ts
│   └── index.ts
│
repositories/
│
├── ProjectRepository.ts
├── SkillRepository.ts
├── HeroRepository.ts
├── ExperienceRepository.ts
└── ...
```

---

# Fluxo da aplicação

Toda comunicação deverá seguir o fluxo abaixo:

```text
Component

↓

Hook

↓

Service

↓

Repository

↓

Firebase

↓

Cloud Firestore
```

Essa arquitetura evita dependências diretas da infraestrutura.

---

# Organização das coleções

As coleções deverão possuir nomes padronizados e centralizados.

Exemplo:

- HERO
- ABOUT
- SKILLS
- PROJECTS
- EXPERIENCES
- EDUCATION
- CERTIFICATES
- SOCIAL_LINKS
- SETTINGS

Esses identificadores deverão ser reutilizados por toda a aplicação.

---

# Estratégia para autenticação

O Dashboard utilizará autenticação baseada no Firebase Authentication.

As rotas administrativas deverão validar a sessão antes de permitir acesso às funcionalidades protegidas.

A lógica de autenticação permanecerá isolada em serviços específicos.

---

# Estratégia para armazenamento

Arquivos enviados pelo Dashboard deverão ser armazenados utilizando o Cloud Storage.

Os metadados desses arquivos deverão permanecer no Firestore.

---

# Estratégia para internacionalização

Os documentos armazenados no banco deverão permitir múltiplos idiomas.

Cada conteúdo editável deverá possuir estrutura compatível com o sistema de internacionalização definido anteriormente.

---

# Estratégia para migração

A migração ocorrerá de forma incremental.

Cada seção da SPA substituirá gradualmente os dados estáticos por dados provenientes dos Repositories.

Nenhuma alteração estrutural deverá ser necessária durante essa transição.

---

# Segurança

O acesso ao Firestore deverá ser protegido por regras específicas.

Os usuários não autenticados deverão possuir apenas permissões de leitura para os conteúdos públicos.

As operações de escrita deverão ser restritas ao Dashboard autenticado.

---

# Validação

Confirmar:

- [ ] Arquitetura documentada.
- [ ] Fluxo de acesso definido.
- [ ] Organização dos módulos estabelecida.
- [ ] Estratégia de autenticação definida.
- [ ] Estratégia de armazenamento documentada.

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
git checkout -b docs/firebase-architecture
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(firebase): define backend integration architecture"
```

---

# Push

```bash
git push -u origin docs/firebase-architecture
```

---

# Pull Request

## Título

```text
docs: define Firebase integration architecture
```

## Descrição

```markdown
## Objetivo

Documentar a arquitetura de integração entre a aplicação e o Firebase.

---

## O que foi realizado

- Definição da estrutura dos serviços.
- Organização dos Repositories.
- Estratégia de autenticação.
- Estratégia de acesso ao Firestore.
- Estratégia para armazenamento.
- Definição do fluxo de comunicação.

---

## Como validar

1. Revisar a arquitetura proposta.
2. Confirmar o desacoplamento entre a aplicação e o Firebase.
3. Verificar se a estrutura atende às necessidades futuras da aplicação.

---

## Checklist

- [ ] Fluxos definidos.
- [ ] Estrutura organizada.
- [ ] Estratégia validada.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/firebase-architecture
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Arquitetura documentada.
- [ ] Fluxos definidos.
- [ ] Estratégia de autenticação estabelecida.
- [ ] Estratégia de persistência definida.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma arquitetura de integração com o Firebase organizada, desacoplada e preparada para evoluir. A infraestrutura de backend ficará isolada da camada de apresentação, permitindo que futuras mudanças de provedor ou de implementação ocorram com impacto mínimo no restante da aplicação.

---

# Próxima etapa

➡️ **21 - Testes**

Na próxima etapa será definida a estratégia de testes da aplicação, incluindo testes unitários, de integração e de componentes, além das ferramentas, convenções e critérios mínimos de cobertura que deverão ser adotados durante todo o desenvolvimento.

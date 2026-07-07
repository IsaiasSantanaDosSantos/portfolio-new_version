# 13 - React Router

> **Objetivo desta etapa**
>
> Configurar o React Router como solução oficial de roteamento da aplicação, preparando a arquitetura da SPA para suportar futuras páginas públicas, rotas administrativas e autenticação, mantendo a organização e a escalabilidade do projeto.

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

---

# Por que agora?

Embora a aplicação inicialmente possua apenas uma página, sua arquitetura já prevê futuras rotas públicas, páginas administrativas, autenticação e tratamento de páginas inexistentes.

Configurar o React Router nesta etapa evita refatorações futuras e estabelece uma base consistente para a navegação da aplicação.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- React Router instalado.
- Estrutura inicial de roteamento criada.
- Componente responsável pelo roteamento da aplicação.
- Rota principal configurada.
- Estrutura preparada para crescimento.

Nesta etapa será criada apenas a infraestrutura de navegação. As rotas protegidas e demais páginas serão implementadas em etapas futuras.

---

# Princípios

## Arquitetura antes da implementação

Mesmo existindo apenas uma rota, a estrutura deverá refletir a arquitetura definitiva da aplicação.

---

## Separação de responsabilidades

O roteamento deverá ficar centralizado em um diretório próprio, evitando acoplamento com `main.tsx`.

---

## Evolução incremental

Arquivos como `ProtectedRoute`, `PublicRoute` e `AdminRoute` serão criados apenas quando houver necessidade.

---

# Dependências

Instalar:

```bash
npm install react-router-dom
```

---

# Estrutura esperada

Ao concluir esta etapa:

```text
src/

routes/
│
├── index.tsx
└── AppRoutes.tsx
```

---

# Etapa 1 — Instalar o React Router

Executar:

```bash
npm install react-router-dom
```

Ao concluir a instalação, confirme se a dependência foi adicionada ao arquivo `package.json`:

```json
{
  "dependencies": {
    "react-router-dom": "^7.x.x"
  }
}
```

> A versão pode variar conforme a data da instalação.

Após a instalação, não é necessário realizar nenhuma configuração adicional nesta etapa.

---

# Etapa 2 — Criar a estrutura de roteamento

Criar a seguinte estrutura:

```text
src/
└── routes/
    ├── index.tsx
    └── AppRoutes.tsx
```

## Responsabilidade de cada arquivo

### `src/routes/index.tsx`

Será responsável por configurar o provedor de roteamento da aplicação (`BrowserRouter`).

Todo o roteamento deverá ficar encapsulado neste arquivo, evitando adicionar configurações diretamente no `main.tsx`.

Criar o arquivo:

```tsx
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';

export function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
```

---

### `src/routes/AppRoutes.tsx`

Será responsável exclusivamente pela definição das rotas da aplicação.

Criar o arquivo:

```tsx
import { Routes, Route } from 'react-router-dom';

import { Home } from '@/pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
```

> Nesta etapa existirá apenas uma rota (`/`), porém todas as futuras rotas deverão ser adicionadas neste arquivo.

---

# Etapa 3 — Configurar a rota principal

A primeira rota da aplicação será a raiz (`/`).

Ela deverá renderizar a página inicial da aplicação.

Caso a página `Home` ainda não exista, criá-la antes de prosseguir.

Estrutura esperada:

```text
src/
└── pages/
    └── Home/
        └── index.tsx
```

Exemplo de implementação:

```tsx
export function Home() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
```

Com isso, a configuração da rota permanecerá:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

Nesta etapa não serão criadas rotas como:

- `/about`
- `/contact`
- `/login`
- `/dashboard`
- `*` (Not Found)

Essas rotas serão adicionadas conforme a evolução do projeto.

---

# Etapa 4 — Integrar ao projeto

Após criar a infraestrutura de roteamento, atualizar o ponto de entrada da aplicação.

O arquivo `main.tsx` **não** deverá possuir nenhuma configuração relacionada ao `BrowserRouter`.

Toda essa responsabilidade ficará centralizada em `src/routes/index.tsx`.

Exemplo:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

Em seguida, atualizar o `App.tsx` para utilizar o componente de roteamento criado.

Exemplo:

```tsx
import { Router } from '@/routes';

function App() {
  return <Router />;
}

export default App;
```

Com essa organização:

- `main.tsx` permanece responsável apenas por iniciar a aplicação;
- `App.tsx` atua como componente raiz da aplicação;
- `src/routes/index.tsx` concentra toda a configuração do React Router;
- `AppRoutes.tsx` define exclusivamente as rotas disponíveis.

Essa separação reduz o acoplamento e facilita a evolução da arquitetura conforme novas páginas forem sendo adicionadas.

---

# Etapa 5 — Validar a configuração

Executar:

```bash
npm run dev
```

Depois:

```bash
npm run lint
```

Confirmar que:

- a aplicação inicia normalmente;
- a rota principal é renderizada corretamente;
- não existem erros de TypeScript;
- não existem erros de lint.

---

# Validação

Confirmar:

- [ ] React Router instalado.
- [ ] Estrutura de rotas criada.
- [ ] Rota principal funcionando.
- [ ] Projeto compilando normalmente.
- [ ] Nenhum erro de lint.

---

# Arquivos criados

- `src/routes/index.tsx`
- `src/routes/AppRoutes.tsx`

---

# Arquivos alterados

- `src/app.tsx`

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
git checkout -b chore/react-router
```

---

# Commits

## Commit 1

Após instalar a dependência:

```bash
git add package.json package-lock.json
git commit -m "chore(router): install React Router"
```

---

## Commit 2

Após criar a estrutura:

```bash
git add src/routes
git commit -m "chore(router): create routing infrastructure"
```

---

## Commit 3

Após integrar ao projeto:

```bash
git add src/main.tsx src/routes
git commit -m "chore(router): configure application routing"
```

---

## Commit 4

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(router): validate routing configuration"
```

---

# Push

```bash
git push -u origin chore/react-router
```

---

# Pull Request

## Título

```text
chore: configure React Router
```

## Descrição

```markdown
## Objetivo

Configurar a infraestrutura de roteamento da aplicação utilizando React Router.

---

## O que foi realizado

- Instalação do React Router.
- Criação da estrutura de rotas.
- Configuração da rota principal.
- Integração com a aplicação.
- Validação da configuração.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Confirmar que a aplicação é carregada corretamente.
4. Executar `npm run lint`.

---

## Checklist

- [ ] React Router instalado.
- [ ] Estrutura criada.
- [ ] Rota principal funcionando.
- [ ] Projeto validado.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d chore/react-router
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] React Router instalado.
- [ ] Estrutura de rotas criada.
- [ ] Aplicação compilando.
- [ ] `npm run dev` funcionando.
- [ ] `npm run lint` sem erros.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação contará com uma infraestrutura de roteamento desacoplada, preparada para crescer de forma organizada conforme novas páginas e funcionalidades forem sendo adicionadas.

Embora exista apenas uma rota inicial, a arquitetura estará pronta para suportar autenticação, rotas protegidas e futuras áreas administrativas sem necessidade de refatorações estruturais.

---

# Próxima etapa

➡️ **14 - Internacionalização**

Na próxima etapa será configurada a infraestrutura de internacionalização utilizando i18next, preparando a aplicação para suportar múltiplos idiomas tanto para textos estáticos quanto, futuramente, para conteúdos dinâmicos provenientes do backend.

[Internacionalização](./14-internationalization.md)

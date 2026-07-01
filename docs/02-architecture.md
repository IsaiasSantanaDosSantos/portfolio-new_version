# 02 - Arquitetura Geral

> **Objetivo desta etapa**
>
> Definir a arquitetura estrutural do projeto antes da implementação, estabelecendo responsabilidades claras para cada diretório, regras de organização e princípios que deverão ser seguidos durante todo o desenvolvimento.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto

---

# Objetivo da Arquitetura

A arquitetura deste projeto foi projetada para atender quatro objetivos principais:

- Organização.
- Escalabilidade.
- Reutilização.
- Facilidade de manutenção.

Toda decisão estrutural deverá respeitar esses princípios.

Sempre que surgir uma nova funcionalidade, ela deverá se encaixar na arquitetura existente, evitando reorganizações frequentes.

---

# Filosofia da Arquitetura

Este projeto seguirá uma arquitetura baseada em responsabilidades.

Ou seja, cada pasta possuirá apenas uma responsabilidade claramente definida.

Não serão criadas pastas apenas para "organizar visualmente" arquivos.

Cada diretório deverá possuir um propósito funcional.

---

# Estrutura Geral

```text
src/
│
├── assets/
├── components/
├── design-system/
├── features/
├── hooks/
├── layouts/
├── pages/
├── providers/
├── routes/
├── services/
├── styles/
├── translations/
├── types/
├── utils/
├── App.tsx
├── main.tsx
```

Essa estrutura poderá evoluir durante o projeto, porém nenhuma alteração deverá ser feita sem necessidade real.

---

# Responsabilidade de cada diretório

## assets/

Responsável pelos arquivos estáticos.

Exemplos:

- imagens
- vídeos
- ícones SVG
- fontes
- animações
- arquivos JSON estáticos

Nunca deverá conter lógica.

---

## components/

Componentes reutilizáveis da aplicação.

Aqui ficarão componentes que representam funcionalidades da aplicação, mas que não fazem parte do Design System.

Exemplos:

- Header
- Footer
- Sidebar
- ContactForm
- Timeline
- ProjectCard
- SocialLinks

---

## design-system/

Responsável exclusivamente pelo Design System.

Nenhum componente desta pasta deverá possuir conhecimento sobre regras de negócio.

Os componentes deverão ser totalmente reutilizáveis.

Exemplos:

- Button
- Input
- Card
- Badge
- Typography
- Container
- Stack
- Grid
- Divider
- Modal
- Tooltip
- Loader
- Skeleton

---

## features/

Responsável por funcionalidades específicas.

Cada funcionalidade possuirá seu próprio conjunto de componentes, hooks, serviços e tipos.

Exemplo:

```text
features/

contact/

projects/

dashboard/

experience/
```

Caso uma funcionalidade cresça significativamente, ela poderá ser isolada dentro desta pasta.

---

## hooks/

Todos os Custom Hooks.

Exemplos:

- useTheme
- useLanguage
- useScrollSpy
- useBreakpoint
- useLocalStorage

---

## layouts/

Layouts reutilizáveis.

Exemplo:

- PublicLayout
- DashboardLayout

Os layouts serão responsáveis apenas pela estrutura da página.

Nunca deverão conter regras de negócio.

---

## pages/

Responsável apenas pelas páginas.

Cada página deverá montar os componentes necessários.

A lógica deverá permanecer fora dela sempre que possível.

---

## providers/

Context Providers da aplicação.

Exemplos:

- ThemeProvider
- I18nProvider
- ToastProvider
- AuthProvider

---

## routes/

Configuração do React Router.

Separar rotas públicas e privadas.

---

## services/

Comunicação com serviços externos.

Exemplos:

- Firebase
- Supabase
- APIs REST
- Analytics

Nunca colocar componentes nesta pasta.

---

## styles/

Arquivos globais.

Exemplos:

- GlobalStyle
- Reset
- Theme

Não deverão existir estilos específicos de componentes aqui.

---

## translations/

Arquivos do i18next.

Estrutura prevista:

```text
translations/

pt/

en/
```

Toda tradução ficará centralizada nesta pasta.

---

## types/

Tipos globais.

Interfaces compartilhadas.

Enums.

Tipos utilitários.

---

## utils/

Funções puras.

Helpers.

Formatadores.

Validações.

Nunca deverão depender de React.

---

# Organização interna dos componentes

Todos os componentes deverão seguir a mesma estrutura.

Exemplo:

```text
Button/

index.ts

Button.tsx

Button.styles.ts

Button.types.ts

Button.test.tsx

Button.stories.tsx

Button.docs.ts

README.md (opcional)
```

Nem todos esses arquivos existirão desde o início.

Serão criados conforme houver necessidade.

---

# Responsabilidades

Cada componente deverá possuir apenas uma responsabilidade.

Se um componente começar a assumir múltiplas funções, ele deverá ser dividido.

---

# Fluxo de dependências

A arquitetura deverá seguir o seguinte fluxo:

```text
Pages

↓

Layouts

↓

Components

↓

Design System

↓

Styles
```

Ou seja:

Pages podem utilizar Components.

Components podem utilizar Design System.

Design System não poderá depender de Components.

---

# Regras de importação

Durante todo o projeto serão seguidas as seguintes regras.

✅ Permitido

Pages → Components

Pages → Features

Pages → Hooks

Components → Design System

Features → Services

Features → Hooks

Design System → Styles

---

❌ Não permitido

Design System importar Components.

Utils importar React.

Services importar componentes.

Styles depender de Components.

---

# Organização por responsabilidade

Sempre que surgir um novo arquivo, a pergunta deverá ser:

> Qual responsabilidade ele possui?

E não:

> Em qual pasta ele cabe?

Essa diferença evita uma arquitetura desorganizada ao longo do tempo.

---

# Crescimento da aplicação

A arquitetura deverá permitir crescimento sem necessidade de reorganização.

Novas páginas.

Novas funcionalidades.

Novos idiomas.

Novo banco de dados.

Novos componentes.

Tudo deverá ser incorporado sem quebrar a estrutura existente.

---

# Critérios para criação de novas pastas

Uma nova pasta somente deverá ser criada quando:

- existir responsabilidade própria;
- houver ganho real de organização;
- evitar duplicação;
- facilitar manutenção.

Nunca criar diretórios preventivamente.

---

# O que evitar

Durante todo o desenvolvimento evitar:

- Componentes gigantes.
- Pastas genéricas.
- Helpers com múltiplas responsabilidades.
- Imports circulares.
- Arquivos utilitários sem propósito claro.
- Misturar regras de negócio com componentes visuais.

---

# Checklist

Antes de iniciar o desenvolvimento confirme que:

- [ ] A estrutura geral foi definida.
- [ ] Todas as responsabilidades estão claras.
- [ ] Não existem diretórios redundantes.
- [ ] O fluxo de dependências está definido.
- [ ] A arquitetura permite crescimento futuro.

---

# Resultado esperado desta etapa

Ao concluir este documento deverá estar claro:

- Como o projeto será organizado.
- Qual a responsabilidade de cada diretório.
- Como novos módulos deverão ser adicionados.
- Como evitar acoplamento entre partes da aplicação.
- Como manter a arquitetura consistente durante todo o desenvolvimento.

Nenhuma pasta deverá ser criada durante o desenvolvimento sem respeitar os princípios definidos neste documento.

---

# Próxima etapa

➡️ **03 - Roadmap de Desenvolvimento**

Neste documento será definida toda a sequência de implementação do projeto, especificando a ordem correta das etapas, suas dependências e os marcos de desenvolvimento, garantindo que nenhuma funcionalidade seja implementada antes da infraestrutura necessária.  

[Development-roadmap](./03-development-roadmap.md)

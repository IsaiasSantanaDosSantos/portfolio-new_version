# 18 - Desenvolvimento da SPA

> **Objetivo desta etapa**
>
> Iniciar o desenvolvimento efetivo da aplicação utilizando toda a infraestrutura criada nas etapas anteriores.
>
> Nesta etapa não será mais construída a arquitetura base do projeto, mas sim utilizada para implementar as páginas da aplicação, reutilizando os componentes do Design System, os componentes de layout, navegação, formulários, feedback, seções e demais recursos previamente desenvolvidos.
>
> Ao concluir esta etapa, a aplicação deverá possuir sua primeira versão totalmente funcional, composta por uma área pública (SPA) e pela estrutura inicial da área administrativa, servindo como base para todas as funcionalidades futuras.

---

# Pré-requisitos

Esta etapa pressupõe que toda a infraestrutura técnica do projeto já foi concluída.

Antes de iniciar qualquer implementação, todas as etapas abaixo deverão estar finalizadas.

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

---

# Por que esta etapa existe?

Durante as etapas anteriores foram desenvolvidas todas as fundações da aplicação.

Foram definidos:

- Arquitetura do projeto;
- Estrutura de pastas;
- Sistema de rotas;
- Internacionalização;
- Design Tokens;
- Tema claro e escuro;
- Design System;
- Componentes reutilizáveis;
- Componentes de Layout;
- Componentes de Navegação;
- Componentes de Feedback;
- Componentes de Formulários;
- Componentes de Interface (UI);
- Arquitetura dos Componentes;
- Configuração de qualidade de código.

A partir deste momento não estamos mais preparando a infraestrutura.

Agora ela passa a ser utilizada para construir a aplicação.

Esta etapa representa o início do desenvolvimento do produto propriamente dito.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- SPA pública completamente funcional;
- Estrutura inicial da área administrativa;
- Navegação funcionando;
- Internacionalização aplicada;
- Tema claro e escuro funcionando;
- Responsividade implementada;
- Componentes reutilizados em toda aplicação;
- Código organizado conforme a arquitetura definida anteriormente.

---

# Princípio Fundamental

A partir desta etapa, nenhum componente deverá ser criado apenas para atender uma única tela sem antes verificar se a necessidade já pode ser atendida pelos componentes existentes.

A prioridade do desenvolvimento passa a ser:

1. Reutilizar componentes existentes.
2. Compor novos layouts utilizando os componentes já desenvolvidos.
3. Criar novos componentes apenas quando realmente necessário.

Toda nova implementação deverá respeitar integralmente a arquitetura definida nas etapas anteriores.

---

# Componentes disponíveis

Durante esta etapa deverão ser utilizados, prioritariamente, os componentes já existentes no projeto.

## Feedback

```text
src/components/feedback

Alert
EmptyState
Skeleton
Spinner
Toast
```

Esses componentes deverão ser utilizados sempre que houver necessidade de informar estados da aplicação ao usuário.

Exemplos:

- carregamento;
- erro;
- sucesso;
- ausência de dados;
- mensagens temporárias;
- notificações.

Nunca criar implementações próprias quando um destes componentes atender ao cenário.

---

## Formulários

```text
src/components/forms

Checkbox
Input
Select
Switch
Textarea
```

Todos os formulários da aplicação deverão utilizar exclusivamente estes componentes.

Isso garante:

- consistência visual;
- acessibilidade;
- padronização;
- facilidade de manutenção.

---

## Layout

```text
src/components/layout

Container
Grid
Section
Stack
```

Esses componentes serão responsáveis pela estrutura da interface.

Nenhuma página deverá utilizar estruturas arbitrárias antes de verificar se estes componentes já atendem ao layout necessário.

Como regra geral:

Container

Responsável por limitar a largura máxima do conteúdo.

Grid

Responsável pela distribuição de elementos em colunas.

Stack

Responsável pelo espaçamento vertical ou horizontal entre elementos.

Section

Responsável por representar cada grande bloco da página.

---

## Navegação

```text
src/components/navigation

Breadcrumb
Navbar
Pagination
Sidebar
```

Esses componentes deverão ser utilizados sempre que houver navegação entre áreas da aplicação.

Cada um possui um objetivo específico.

Navbar

Responsável pela navegação principal da SPA.

Sidebar

Responsável pela navegação da área administrativa.

Breadcrumb

Responsável por indicar ao usuário sua localização dentro da aplicação.

Pagination

Responsável pela navegação entre listas paginadas.

---

## UI

```text
src/components/ui

Avatar
Badge
Button
Card
Chip
```

Esses componentes deverão ser utilizados para construir toda interface visual.

Exemplos:

Button

Botões.

Badge

Indicadores.

Chip

Filtros.

Card

Cartões de conteúdo.

Avatar

Representação visual do usuário.

---

## Sections

```text
src/components/sections

AboutSection
ContactSection
FooterSection
HeroSection
```

Esses componentes representam grandes blocos reutilizáveis da aplicação.

Durante o desenvolvimento da Home, eles deverão servir como base da composição da página.

Sempre que uma seção crescer excessivamente, sua estrutura interna deverá ser quebrada em novos componentes menores, mantendo a organização prevista na Arquitetura dos Componentes.

---

# Estrutura final esperada da aplicação

Ao final desta etapa, a aplicação deverá possuir duas áreas claramente separadas.

```text
/
├── Área Pública (SPA)
│
│   Home
│
└── Área Administrativa
    │
    Login
    Dashboard
```

A área pública será responsável pela apresentação do portfólio.

A área administrativa será responsável pelo gerenciamento futuro do conteúdo da aplicação.

Embora nesta etapa o Dashboard ainda possua funcionalidades limitadas, sua estrutura deverá estar preparada para crescer nas próximas etapas.

---

# Área Pública (SPA)

A área pública representa o principal objetivo desta aplicação.

Ela será responsável por apresentar o desenvolvedor, demonstrar suas habilidades, exibir seus projetos, sua trajetória profissional e disponibilizar formas de contato.

Toda a Home deverá ser implementada como uma **Single Page Application (SPA)**, utilizando navegação por âncoras (scroll navigation), sem necessidade de múltiplas páginas públicas.

A estrutura esperada será semelhante ao exemplo abaixo.

```text
/
│
├── Navbar
├── HeroSection
├── AboutSection
├── SkillsSection
├── ProjectsSection
├── ExperienceSection
├── EducationSection
├── ContactSection
└── FooterSection
```

Cada uma dessas seções deverá ocupar um bloco claramente definido da página e possuir um identificador (`id`) próprio para permitir a navegação por scroll através do menu principal.

Exemplo:

```html
<section id="hero">
...
</section>

<section id="about">
...
</section>

<section id="projects">
...
</section>
```

---

# Página Home

A página `Home` será responsável apenas por organizar as seções da aplicação.

Ela não deverá conter regras de negócio complexas.

Seu principal objetivo será compor a interface utilizando componentes reutilizáveis.

Exemplo simplificado:

```text
Home

Navbar

↓

HeroSection

↓

AboutSection

↓

SkillsSection

↓

ProjectsSection

↓

ExperienceSection

↓

EducationSection

↓

ContactSection

↓

FooterSection
```

Cada seção deverá possuir responsabilidade única.

Sempre que uma seção crescer excessivamente, sua implementação deverá ser dividida em componentes menores.

Exemplo:

```text
HeroSection

HeroContent

HeroImage

HeroButtons

HeroSocialLinks

HeroBackground
```

Isso mantém a organização prevista pela Arquitetura dos Componentes.

---

# Ordem oficial de implementação

A Home deverá ser construída exatamente na seguinte sequência.

1. Navbar
2. Hero
3. About
4. Skills
5. Projects
6. Experience
7. Education
8. Contact
9. Footer

Essa ordem deverá ser respeitada durante todo o desenvolvimento.

A implementação sequencial facilita:

- validação incremental;
- revisão de código;
- criação de Pull Requests menores;
- menor risco de regressões.

Cada seção somente deverá ser iniciada após a conclusão da anterior.

---

# Desenvolvimento da Navbar

A Navbar será o principal mecanismo de navegação da SPA.

Ela deverá permanecer consistente em todas as resoluções suportadas.

## Objetivos

Permitir acesso rápido às seções da página.

Disponibilizar mudança de idioma.

Disponibilizar troca entre tema claro e escuro.

Permitir navegação responsiva em dispositivos móveis.

---

## Conteúdo mínimo

A Navbar deverá conter, no mínimo:

- Logotipo ou nome do portfólio;
- Links para todas as seções;
- Alternador de idioma;
- Alternador de tema;
- Botão de menu responsivo.

Exemplo:

```text
+---------------------------------------------------------------+

Logo

Sobre

Skills

Projetos

Experiência

Formação

Contato

🌎

🌙

☰

+---------------------------------------------------------------+
```

---

## Componentes recomendados

Durante a implementação deverão ser reutilizados:

```text
Navbar

Container

Stack

Button

Chip (quando necessário)

Dropdown (caso exista futuramente)
```

---

## Funcionalidades obrigatórias

A Navbar deverá oferecer:

- navegação por scroll suave;
- destaque do item ativo;
- funcionamento em desktop;
- funcionamento em tablet;
- funcionamento em dispositivos móveis;
- abertura e fechamento do menu responsivo;
- internacionalização;
- suporte aos dois temas.

---

## Critérios de conclusão

A Navbar somente poderá ser considerada concluída quando:

- todos os links estiverem funcionando;
- o scroll suave estiver implementado;
- o menu mobile funcionar corretamente;
- o tema alterar toda a aparência;
- a troca de idioma atualizar os textos;
- a acessibilidade estiver validada;
- não houver erros de lint ou TypeScript.

---

# Desenvolvimento da HeroSection

A Hero representa a primeira impressão do visitante.

Ela deverá comunicar rapidamente quem é o profissional, qual sua especialidade e incentivar o visitante a explorar o restante da página.

---

## Objetivos

Apresentar o desenvolvedor.

Apresentar sua principal especialidade.

Exibir chamadas para ação.

Criar impacto visual.

---

## Conteúdo mínimo obrigatório

A Hero deverá conter pelo menos:

- nome completo;
- cargo principal;
- breve apresentação;
- fotografia ou avatar;
- botões principais;
- links para redes sociais;
- elemento visual de destaque (background, ilustração ou animação).

Exemplo:

```text
+-------------------------------------------------------------+

Olá!

Meu nome é

Isaias Santana

Front-end Developer

Especialista em React,
TypeScript e desenvolvimento
de interfaces modernas.

[ Conheça meus projetos ]

[ Download CV ]

GitHub

LinkedIn

Email

(Foto)

+-------------------------------------------------------------+
```

---

## Componentes recomendados

Durante a implementação deverão ser reutilizados:

```text
Container

Section

Stack

Button

Avatar

Chip

Badge
```

---

## Funcionalidades obrigatórias

A Hero deverá possuir:

- layout responsivo;
- imagem adaptável;
- textos internacionalizados;
- botões reutilizando Button;
- suporte ao tema claro e escuro;
- animações discretas;
- acessibilidade.

---

## Recomendações

Evitar excesso de texto.

A Hero deve comunicar rapidamente:

Quem é o profissional.

O que ele faz.

Como entrar em contato.

Onde visualizar seus projetos.

---

## Critérios de conclusão

A Hero somente será considerada concluída quando:

- todos os textos estiverem internacionalizados;
- todos os botões funcionarem;
- os links externos abrirem corretamente;
- o layout estiver responsivo;
- o contraste atender aos critérios de acessibilidade;
- não houver problemas de layout em diferentes resoluções.

---

# Desenvolvimento da AboutSection

A seção "Sobre" deverá aprofundar a apresentação realizada na Hero.

Seu objetivo é fornecer contexto profissional ao visitante.

---

## Objetivos

Apresentar a trajetória profissional.

Demonstrar experiência.

Destacar diferenciais.

Mostrar objetivos de carreira.

---

## Conteúdo mínimo obrigatório

A seção deverá conter pelo menos:

- fotografia;
- biografia;
- resumo profissional;
- tempo de experiência;
- tecnologias principais;
- principais conquistas;
- botão para download do currículo.

Exemplo:

```text
+---------------------------------------------------------+

Sobre Mim

(Foto)

Sou Desenvolvedor Front-end com experiência na criação de aplicações modernas utilizando React, TypeScript e Firebase...

Experiência

✔ React

✔ TypeScript

✔ Firebase

✔ Vite

✔ Styled Components

[ Download CV ]

+---------------------------------------------------------+
```

---

## Componentes recomendados

```text
Container

Section

Stack

Grid

Avatar

Button

Badge

Card
```

---

## Funcionalidades obrigatórias

A About deverá:

- utilizar Grid para organização do conteúdo;
- adaptar-se aos diferentes tamanhos de tela;
- reutilizar Button para ações;
- internacionalizar todos os textos;
- respeitar completamente os Design Tokens.

---

## Critérios de conclusão

A seção somente poderá ser considerada finalizada quando:

- possuir layout responsivo;
- utilizar exclusivamente componentes reutilizáveis;
- possuir tipografia consistente;
- utilizar corretamente os componentes de layout;
- apresentar boa legibilidade em ambos os temas;
- não possuir código duplicado.

---
# Desenvolvimento da SkillsSection

A seção **Skills** será responsável por apresentar todas as tecnologias, ferramentas e conhecimentos do desenvolvedor.

Diferentemente da seção "Sobre", cujo objetivo é apresentar a trajetória profissional, a Skills deverá permitir que o visitante visualize rapidamente as competências técnicas dominadas.

Esta seção deverá ser facilmente expansível, permitindo a inclusão de novas tecnologias futuramente sem necessidade de alterações estruturais significativas.

---

## Objetivos

A Skills deverá:

- demonstrar as competências técnicas;
- organizar as tecnologias por categorias;
- facilitar a leitura;
- reforçar a especialidade profissional;
- servir como evidência das tecnologias utilizadas nos projetos.

---

## Conteúdo mínimo obrigatório

A seção deverá conter, no mínimo, as seguintes categorias:

- Front-end
- Back-end
- Mobile
- Banco de Dados
- Cloud
- Ferramentas
- Metodologias

Exemplo:

```text
Frontend

React
TypeScript
JavaScript
HTML
CSS
Styled Components
Sass
Vite

----------------------------

Backend

Node.js
Firebase Functions
Express

----------------------------

Database

Firestore
Realtime Database
Supabase
SQL

----------------------------

Cloud

Firebase
Vercel
GitHub Actions

----------------------------

Ferramentas

Git
GitHub
Figma
VS Code
Postman

----------------------------

Metodologias

Scrum
Kanban
Git Flow
Clean Code
```

---

## Componentes recomendados

A implementação deverá reutilizar prioritariamente:

```text
Container

Section

Grid

Stack

Card

Chip

Badge
```

Cada categoria poderá ser representada por um Card.

Cada tecnologia poderá ser representada por um Badge ou Chip.

---

## Organização recomendada

Exemplo estrutural:

```text
SkillsSection

↓

Container

↓

Título

↓

Grid

↓

Card

↓

Frontend

↓

Badge

↓

React

↓

TypeScript

↓

Vite

↓

Styled Components
```

A repetição dessa estrutura facilita futuras manutenções.

---

## Funcionalidades obrigatórias

A Skills deverá possuir:

- layout responsivo;
- categorias organizadas;
- espaçamento consistente;
- internacionalização;
- suporte aos dois temas;
- animações discretas na entrada dos elementos.

---

## Critérios de conclusão

A seção somente poderá ser considerada concluída quando:

- todas as categorias estiverem implementadas;
- todas utilizarem componentes reutilizáveis;
- o layout estiver validado em desktop, tablet e mobile;
- o tema claro e escuro estiver funcionando;
- todos os textos estiverem internacionalizados.

---

# Desenvolvimento da ProjectsSection

A seção **Projects** será uma das áreas mais importantes do portfólio.

Seu objetivo é demonstrar, através de projetos reais, a experiência técnica do desenvolvedor.

Esta seção deverá ser construída de forma totalmente reutilizável, permitindo adicionar novos projetos apenas alterando os dados utilizados pela aplicação.

Inicialmente poderão ser utilizados dados estáticos.

Posteriormente esses dados serão substituídos pelo Dashboard Administrativo.

---

## Objetivos

A seção deverá:

- apresentar os projetos;
- demonstrar tecnologias utilizadas;
- permitir acesso ao código fonte;
- permitir acesso à demonstração online;
- servir como portfólio profissional.

---

## Conteúdo mínimo obrigatório

Cada projeto deverá conter:

- imagem;
- nome;
- descrição;
- tecnologias utilizadas;
- categoria;
- status;
- links externos;
- botão de detalhes.

Exemplo:

```text
------------------------------------------------

Imagem

GestyloPro

Sistema completo para gestão
de salões de beleza.

React
Firebase
TypeScript

GitHub

Demo

Detalhes

------------------------------------------------
```

---

## Componentes recomendados

```text
Container

Section

Grid

Card

Badge

Chip

Button
```

---

## Estrutura recomendada

```text
ProjectsSection

↓

Container

↓

Título

↓

Filtros

↓

Grid

↓

ProjectCard

↓

Imagem

↓

Nome

↓

Descrição

↓

Badges

↓

Botões
```

---

## Filtros

Caso sejam implementados filtros, recomenda-se utilizar:

```text
Todos

Frontend

Backend

Mobile

Open Source

Freelancer
```

Os filtros deverão utilizar Chip ou Button reutilizáveis.

---

## Modal de detalhes

Caso seja implementado um modal de detalhes, este deverá conter:

- descrição completa;
- tecnologias;
- desafios;
- soluções adotadas;
- imagens;
- links;
- funcionalidades.

---

## Funcionalidades obrigatórias

A seção deverá permitir:

- abrir links externos;
- abrir detalhes do projeto;
- adaptar-se a qualquer resolução;
- carregar imagens corretamente;
- reutilizar componentes existentes.

---

## Critérios de conclusão

A seção será considerada concluída quando:

- todos os projetos forem exibidos corretamente;
- os filtros funcionarem (quando implementados);
- os links estiverem funcionando;
- o layout estiver responsivo;
- a acessibilidade estiver validada.

---

# Desenvolvimento da ExperienceSection

Esta seção apresentará a experiência profissional do desenvolvedor.

Seu objetivo é demonstrar evolução na carreira.

---

## Objetivos

A Experience deverá:

- apresentar empresas;
- apresentar cargos;
- apresentar responsabilidades;
- demonstrar evolução profissional.

---

## Conteúdo mínimo obrigatório

Cada experiência deverá conter:

- empresa;
- cargo;
- período;
- descrição;
- principais atividades;
- tecnologias utilizadas.

Exemplo:

```text
DRM Educação

Desenvolvedor Front-end

2022 - Atual

• Desenvolvimento de aplicações React.

• Integração com APIs.

• Criação de Design System.

React

TypeScript

Firebase
```

---

## Componentes recomendados

```text
Container

Section

Stack

Card

Badge
```

---

## Organização recomendada

A apresentação poderá utilizar:

- Cards;
- Timeline vertical;
- Lista cronológica.

A escolha deverá priorizar legibilidade.

---

## Funcionalidades obrigatórias

A seção deverá:

- apresentar informações em ordem cronológica;
- manter consistência visual;
- reutilizar componentes existentes;
- funcionar nos dois temas.

---

## Critérios de conclusão

A seção somente será considerada finalizada quando:

- todas as experiências estiverem cadastradas;
- o layout estiver responsivo;
- os textos estiverem internacionalizados;
- não houver duplicação de componentes.

---

# Desenvolvimento da EducationSection

A Education apresentará toda a formação acadêmica e certificações.

---

## Objetivos

Demonstrar capacitação profissional.

---

## Conteúdo mínimo obrigatório

A seção deverá conter:

- formação acadêmica;
- certificações;
- cursos relevantes;
- plataformas utilizadas.

Exemplo:

```text
Graduação

Análise e Desenvolvimento
de Sistemas

Anhanguera

------------------------

Certificações

React

TypeScript

Firebase

AWS

Scrum
```

---

## Componentes recomendados

```text
Container

Section

Grid

Card

Badge
```

---

## Critérios de conclusão

A seção será considerada concluída quando:

- todas as formações forem apresentadas;
- todas as certificações estiverem organizadas;
- o layout estiver validado em todas as resoluções.

---

# Desenvolvimento da ContactSection

A Contact representa o principal canal de comunicação entre o visitante e o desenvolvedor.

Ela deverá facilitar ao máximo o contato.

---

## Objetivos

Permitir que qualquer visitante consiga entrar em contato rapidamente.

---

## Conteúdo mínimo obrigatório

A seção deverá conter:

- e-mail;
- telefone (opcional);
- LinkedIn;
- GitHub;
- localização;
- formulário de contato (caso previsto).

Exemplo:

```text
Entre em contato

Email

LinkedIn

GitHub

WhatsApp

Localização

--------------------

Nome

Email

Mensagem

Enviar
```

---

## Componentes recomendados

```text
Container

Section

Stack

Input

Textarea

Checkbox

Button

Alert

Toast
```

---

## Funcionalidades obrigatórias

Caso exista formulário, ele deverá possuir:

- validação;
- mensagens de erro;
- mensagens de sucesso;
- estados de carregamento;
- acessibilidade;
- internacionalização.

---

## Critérios de conclusão

A Contact será considerada concluída quando:

- todos os contatos funcionarem;
- o formulário estiver validado;
- os componentes reutilizáveis forem utilizados;
- o layout estiver responsivo.

---

# Desenvolvimento da FooterSection

A Footer representa o encerramento da aplicação.

Apesar de simples, ela deverá manter a identidade visual do projeto.

---

## Objetivos

Fornecer informações complementares.

---

## Conteúdo mínimo obrigatório

A Footer deverá conter:

- logotipo;
- direitos autorais;
- links rápidos;
- redes sociais;
- versão da aplicação (opcional).

Exemplo:

```text
Logo

Home

Projetos

Contato

GitHub

LinkedIn

© 2026 Isaias Santana

Todos os direitos reservados.
```

---

## Componentes recomendados

```text
Container

Section

Stack

Button (quando necessário)
```

---

## Critérios de conclusão

A Footer somente poderá ser considerada concluída quando:

- todos os links funcionarem;
- o layout estiver responsivo;
- os temas estiverem funcionando corretamente;
- não houver inconsistências visuais.

---

# Conclusão da Área Pública

Ao finalizar todas as seções descritas anteriormente, a SPA pública deverá possuir:

- Navegação totalmente funcional;
- Scroll suave entre seções;
- Internacionalização completa;
- Tema claro e escuro;
- Responsividade em todos os dispositivos;
- Componentes reutilizáveis em toda a interface;
- Layout consistente com o Design System;
- Código organizado conforme a Arquitetura dos Componentes.

Nenhuma funcionalidade da área administrativa deverá interferir no funcionamento da área pública.

A Home deverá permanecer totalmente funcional mesmo antes da implementação do Dashboard Administrativo.

---

# Área Administrativa

Embora o foco principal da aplicação seja a SPA pública, o projeto deverá possuir uma área administrativa responsável por gerenciar dinamicamente todas as informações exibidas no portfólio.

Nesta etapa **não serão implementadas todas as funcionalidades administrativas**, mas sim criada toda a estrutura necessária para suportar sua evolução nas próximas etapas.

A área administrativa deverá ser desenvolvida desde o início seguindo exatamente os mesmos princípios arquiteturais adotados na área pública.

---

# Objetivos

Ao concluir esta etapa, a área administrativa deverá possuir:

- autenticação preparada para integração futura;
- layout administrativo;
- navegação interna;
- dashboard inicial;
- estrutura preparada para receber módulos;
- reutilização completa dos componentes existentes.

---

# Estrutura esperada

A estrutura mínima recomendada será semelhante ao exemplo abaixo.

```text
src/

pages/

├── Home/
│
├── Admin/
│   │
│   ├── Login/
│   ├── Dashboard/
│   └── NotFound/

layouts/

├── PublicLayout/
└── AdminLayout/

routes/

├── public.routes.tsx
├── admin.routes.tsx
└── index.tsx
```

O objetivo desta estrutura é separar claramente a área pública da área administrativa, facilitando futuras expansões da aplicação.

---

# Organização das Rotas

As rotas deverão ser separadas conforme sua responsabilidade.

Exemplo:

```text
Rotas Públicas

/

-------------------------

Rotas Privadas

/admin

/admin/dashboard
```

Posteriormente poderão ser adicionadas novas rotas administrativas sem necessidade de reorganizar a estrutura existente.

Exemplo:

```text
/admin/projects

/admin/skills

/admin/experience

/admin/education

/admin/contact

/admin/settings
```

---

# Desenvolvimento da Página de Login

A página de Login será a porta de entrada da área administrativa.

Mesmo que inicialmente a autenticação ainda não esteja integrada ao backend, a interface deverá ser construída de forma definitiva.

---

## Objetivos

A tela deverá permitir futuramente:

- autenticação;
- recuperação de senha;
- controle de sessão;
- redirecionamento para o Dashboard.

---

## Conteúdo mínimo obrigatório

A página deverá conter:

- logotipo;
- título;
- campo de e-mail;
- campo de senha;
- botão de login;
- indicador de carregamento;
- mensagens de erro.

Exemplo:

```text
+--------------------------------------+

Logo

Área Administrativa

Email

______________________

Senha

______________________

[ Entrar ]

Esqueci minha senha

+--------------------------------------+
```

---

## Componentes recomendados

A implementação deverá reutilizar:

```text
Container

Card

Stack

Input

Button

Alert

Spinner

Toast
```

---

## Funcionalidades obrigatórias

A tela deverá possuir:

- validação dos campos;
- acessibilidade;
- internacionalização;
- suporte aos dois temas;
- layout responsivo;
- componentes reutilizáveis.

---

## Critérios de conclusão

A página somente poderá ser considerada concluída quando:

- todos os componentes reutilizáveis forem utilizados;
- não existirem estilos duplicados;
- o layout funcionar em desktop e mobile;
- todos os textos estiverem internacionalizados.

---

# Desenvolvimento do Dashboard

O Dashboard será a primeira tela exibida após a autenticação.

Nesta etapa ele terá apenas caráter estrutural.

Seu objetivo será validar toda a arquitetura da área administrativa.

---

## Objetivos

Preparar a aplicação para receber futuramente:

- gerenciamento dos projetos;
- gerenciamento das habilidades;
- gerenciamento da experiência;
- gerenciamento da formação;
- gerenciamento das informações de contato;
- configurações gerais.

---

## Estrutura mínima

```text
+-----------------------------------------------------------+

Sidebar

↓

Header

↓

Área de Conteúdo

↓

Cards de Resumo

↓

Conteúdo Futuro

+-----------------------------------------------------------+
```

---

## Conteúdo mínimo obrigatório

Inicialmente deverão existir apenas alguns cards informativos.

Exemplo:

```text
Projetos

12

----------------------

Skills

34

----------------------

Experiências

5

----------------------

Certificações

18
```

Os valores poderão ser estáticos nesta etapa.

Posteriormente serão carregados pelo backend.

---

## Componentes recomendados

```text
Sidebar

Container

Grid

Card

Badge

Chip

Button
```

---

# Sidebar Administrativa

A Sidebar será responsável pela navegação interna.

---

## Itens mínimos

```text
Dashboard

Projetos

Skills

Experiências

Formação

Contato

Configurações

Sair
```

Cada item deverá possuir:

- ícone;
- texto;
- estado ativo;
- feedback visual ao passar o mouse.

---

## Funcionalidades obrigatórias

A Sidebar deverá possuir:

- recolhimento em resoluções menores;
- navegação entre páginas;
- indicação da rota ativa;
- suporte aos temas.

---

# Header Administrativo

O Header deverá complementar a Sidebar.

---

## Conteúdo mínimo

```text
Título da página

↓

Pesquisa (opcional)

↓

Alternador de tema

↓

Idioma

↓

Avatar

↓

Menu do usuário
```

O Header deverá permanecer consistente em todas as páginas administrativas.

---

# Preparação para integração futura

Embora nesta etapa ainda não exista integração com backend, toda a arquitetura deverá ser preparada para isso.

As páginas não deverão depender diretamente de dados fixos.

Sempre que possível, utilizar uma camada de abstração para facilitar a futura substituição por dados provenientes da API ou Firebase.

Exemplo:

```text
Hoje

↓

Dados estáticos

↓

JSON

↓

Componentes

----------------------------

Futuro

↓

Firebase

↓

Services

↓

Hooks

↓

Componentes
```

Essa organização reduzirá significativamente o retrabalho nas próximas etapas.

---

# Fluxo oficial de desenvolvimento

Toda nova funcionalidade deverá seguir exatamente o fluxo abaixo.

```text
Planejamento

↓

Criar Branch

↓

Criar Página

↓

Montar Layout

↓

Adicionar Componentes

↓

Adicionar Responsividade

↓

Aplicar Tema

↓

Internacionalizar

↓

Adicionar Acessibilidade

↓

Executar Testes

↓

Executar Lint

↓

Code Review

↓

Pull Request

↓

Merge
```

Nenhuma etapa deverá ser ignorada.

---

# Ordem recomendada para implementação

A implementação desta etapa deverá seguir exatamente esta sequência:

```text
1.

Página Home

↓

2.

Navbar

↓

3.

Hero

↓

4.

About

↓

5.

Skills

↓

6.

Projects

↓

7.

Experience

↓

8.

Education

↓

9.

Contact

↓

10.

Footer

↓

11.

Login

↓

12.

Dashboard

↓

13.

Sidebar

↓

14.

Header Administrativo
```

Essa ordem garante que a aplicação permaneça funcional durante toda a evolução do projeto.

---

# Regras obrigatórias durante o desenvolvimento

Durante toda esta etapa deverão ser respeitadas as seguintes diretrizes.

## Reutilização de Componentes

Antes de criar qualquer novo componente, deverá ser verificado se a necessidade já pode ser atendida pelos componentes existentes.

Sempre reutilizar:

- UI Components;
- Layout Components;
- Navigation Components;
- Form Components;
- Feedback Components;
- Sections.

---

## Organização do Código

Cada arquivo deverá possuir responsabilidade única.

Arquivos excessivamente grandes deverão ser divididos em componentes menores.

---

## Tipagem

Todo novo código deverá ser desenvolvido utilizando TypeScript.

Não será permitido utilizar tipos genéricos como `any`, salvo em situações extremamente específicas e devidamente justificadas.

---

## Estilização

Toda estilização deverá utilizar exclusivamente:

- Styled Components;
- Tema;
- Design Tokens.

Não utilizar valores fixos de cores, tipografia ou espaçamento quando já existirem tokens correspondentes.

---

## Internacionalização

Todo texto visível ao usuário deverá ser internacionalizado.

Não deverão existir textos fixos diretamente dentro dos componentes.

---

## Acessibilidade

Todos os componentes deverão respeitar as boas práticas de acessibilidade.

Isso inclui:

- navegação por teclado;
- contraste adequado;
- utilização correta de elementos semânticos;
- atributos ARIA quando necessários;
- foco visível.

---

## Responsividade

Nenhuma funcionalidade poderá ser considerada concluída sem validação nos seguintes pontos de quebra:

- Mobile;
- Tablet;
- Desktop;
- Monitores de alta resolução.

---

# Resultado esperado desta etapa

Ao concluir esta etapa, o projeto deverá possuir sua primeira versão funcional, composta por uma SPA pública totalmente implementada e por uma estrutura administrativa preparada para evoluir nas próximas etapas.

Toda a interface deverá utilizar exclusivamente a infraestrutura construída nas etapas anteriores, garantindo consistência visual, reutilização de componentes, padronização arquitetural e facilidade de manutenção.

A partir deste ponto, as próximas etapas do projeto deverão concentrar-se exclusivamente na evolução das funcionalidades da área administrativa e na substituição gradual dos dados estáticos por conteúdos dinâmicos provenientes do backend.

---

# Próxima etapa

➡️ **19 - Dashboard Administrativo**

Na próxima etapa será detalhada toda a arquitetura interna do Dashboard Administrativo, incluindo autenticação, gerenciamento de conteúdo, permissões de acesso, integração com o backend, organização dos módulos administrativos e definição do fluxo completo de gerenciamento dos dados da aplicação.

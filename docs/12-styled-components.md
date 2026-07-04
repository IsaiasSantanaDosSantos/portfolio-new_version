# 12 - Styled Components

> **Objetivo desta etapa**
>
> Configurar toda a infraestrutura de estilização da aplicação utilizando Styled Components, preparando o projeto para suportar um Design System escalável, temas (Light e Dark), Design Tokens, Glassmorphism, componentes reutilizáveis e futuras evoluções, mantendo uma arquitetura organizada e fortemente tipada com TypeScript.

---

# Pré-requisitos

Antes de iniciar esta etapa, certifique-se de que as etapas anteriores foram concluídas com sucesso.

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

---

# Por que configurar o Styled Components agora?

Até este momento toda a infraestrutura do projeto foi preparada.

Já possuímos:

- ambiente configurado;
- TypeScript;
- ESLint;
- Prettier;
- Husky;
- aliases de importação;
- organização das pastas.

O próximo passo é definir como toda a interface será construída.

Embora seja perfeitamente possível criar estilos utilizando arquivos CSS, CSS Modules ou até mesmo Tailwind, este projeto utilizará exclusivamente o **Styled Components**.

Essa decisão foi tomada porque o Styled Components oferece diversas vantagens para um projeto que pretende crescer de forma organizada.

Entre elas:

- encapsulamento dos estilos;
- integração total com TypeScript;
- suporte nativo a temas;
- reutilização de estilos;
- criação de componentes altamente reutilizáveis;
- facilidade para manutenção;
- excelente integração com React.

Além disso, toda a arquitetura do projeto foi planejada considerando o uso do ThemeProvider.

Isso significa que nenhum componente deverá utilizar valores fixos de:

- cores;
- fontes;
- espaçamentos;
- sombras;
- bordas;
- transições;
- breakpoints.

Todos esses valores serão centralizados no tema da aplicação.

---

# Objetivo desta etapa

Ao concluir este documento o projeto deverá possuir uma infraestrutura completa de estilização.

Isso inclui:

- Styled Components instalado;
- ThemeProvider configurado;
- GlobalStyle funcionando;
- tema inicial criado;
- tipagem do tema configurada;
- estrutura preparada para crescimento.

Nesta etapa ainda **não serão criados componentes visuais**, como botões, cards ou inputs.

O objetivo aqui é apenas construir a fundação sobre a qual todo o restante do projeto será desenvolvido.

---

# Arquitetura esperada

Ao final desta etapa a estrutura deverá ficar exatamente assim.

```text
src/

styles/
│
├── GlobalStyle.ts
├── index.ts
├── styled.d.ts
│
└── theme/
    └── index.ts
```

Neste momento ainda **não serão criados** arquivos separados para:

```text
colors.ts
fonts.ts
spacing.ts
typography.ts
breakpoints.ts
glass.ts
shadows.ts
```

Embora essa divisão seja uma boa prática em projetos grandes, inicialmente manteremos todos os Design Tokens dentro de um único arquivo (`theme/index.ts`).

Essa abordagem possui algumas vantagens.

- reduz a quantidade de arquivos;
- facilita o entendimento da estrutura;
- simplifica a configuração inicial.

Nas próximas etapas, quando o Design System começar a crescer, esses tokens poderão ser divididos em arquivos menores sem qualquer impacto nos componentes já desenvolvidos.

---

# Princípios desta arquitetura

Antes de começar a implementação, é importante entender alguns princípios que serão seguidos durante todo o desenvolvimento do projeto.

Eles influenciarão diretamente todas as decisões tomadas nas próximas etapas.

## 1. O tema será a única fonte de verdade

Nenhum componente deverá utilizar valores fixos.

Por exemplo:

❌ Errado

```tsx
background: #f5df4e;

color: #ffffff;

padding: 16px;
```

O correto será utilizar sempre o tema.

✅ Correto

```tsx
background: ${({ theme }) => theme.colors.primary};

color: ${({ theme }) => theme.colors.white};

padding: ${({ theme }) => theme.spacing.md};
```

Essa abordagem oferece diversas vantagens.

Caso seja necessário alterar a cor principal do projeto, basta modificar apenas um único local.

O mesmo vale para:

- espaçamentos;
- tipografia;
- sombras;
- animações;
- bordas.

---

## 2. Preparação para Dark Mode

Embora nesta etapa exista apenas um tema, toda a estrutura será construída pensando em suportar múltiplos temas.

No futuro teremos algo semelhante a:

```text
theme/

index.ts

light.ts

dark.ts
```

Como todos os componentes utilizarão apenas:

```tsx
theme.colors.primary;
```

trocar completamente a identidade visual da aplicação exigirá apenas substituir o objeto de tema fornecido pelo ThemeProvider.

Nenhum componente precisará ser alterado.

---

## 3. Preparação para Glassmorphism

Este portfólio utilizará diversos elementos com efeito de vidro (Glassmorphism).

Por esse motivo, o tema já será preparado para armazenar propriedades relacionadas a esse efeito.

Ao invés de espalhar valores como:

```css
backdrop-filter: blur(12px);

background: rgba(255, 255, 255, 0.08);

border: rgba(255, 255, 255, 0.15);
```

esses valores ficarão centralizados.

Por exemplo:

```tsx
theme.glass.background;

theme.glass.border;

theme.glass.blur;

theme.glass.shadow;
```

Assim será possível alterar toda a identidade visual do efeito glass modificando apenas o tema.

---

## 4. Escalabilidade

Mesmo sendo um portfólio, este projeto foi planejado como uma aplicação profissional.

Por esse motivo, toda a arquitetura será construída pensando em crescimento.

Não será necessário reorganizar pastas quando surgirem novos componentes.

A estrutura atual deverá suportar naturalmente:

- Design System;
- Dark Mode;
- animações;
- responsividade;
- internacionalização;
- acessibilidade;
- novos temas.

---

# Dependências

O primeiro passo é instalar o Styled Components.

Como o projeto utiliza TypeScript, também será necessário instalar suas tipagens.

Caso esteja utilizando **pnpm**, execute:

```bash
pnpm add styled-components
```

<!-- Depois:

```bash
pnpm add -D @types/styled-components
``` -->

Caso esteja utilizando **npm**, execute:

```bash
npm install styled-components
```

<!-- Depois:

```bash
npm install -D @types/styled-components
``` -->

---

# Etapa 1 — Instalar as dependências

Após executar os comandos acima, o arquivo `package.json` deverá possuir dependência semelhante a esta.

```json
{
  "dependencies": {
    "styled-components": "^6.x.x"
  }

  //   "devDependencies": {
  //     "@types/styled-components": "^5.x.x"
  //   }
}
```

> Os números das versões podem variar conforme a versão disponível no momento da instalação.

Após finalizar a instalação, execute:

```bash
pnpm install
```

ou

```bash
npm install
```

caso ainda não tenha feito isso.

Em seguida, confirme que o projeto continua compilando normalmente.

```bash
pnpm dev
```

ou

```bash
npm run dev
```

O projeto ainda não apresentará nenhuma mudança visual.

Nesta etapa apenas adicionamos uma nova dependência ao projeto.

---

# Etapa 2 — Criar a estrutura inicial de estilos

Agora criaremos a estrutura responsável por concentrar todos os estilos da aplicação.

Crie exatamente a seguinte estrutura.

```text
src/

styles/
│
├── GlobalStyle.ts
├── index.ts
├── styled.d.ts
│
└── theme/
    └── index.ts
```

Cada arquivo possui uma responsabilidade específica.

Nos próximos tópicos criaremos cada um deles individualmente, explicando sua finalidade, quando ele será utilizado e qual deverá ser seu conteúdo inicial.

---

## Conhecendo a responsabilidade de cada arquivo

Antes de começar a criar os arquivos, é importante entender o papel de cada um deles dentro da arquitetura do projeto.

Essa compreensão facilitará bastante as próximas etapas e ajudará a evitar que responsabilidades sejam misturadas futuramente.

### `theme/index.ts`

Este será o coração de toda a estilização da aplicação.

Nele ficarão centralizados todos os **Design Tokens**, ou seja, todos os valores visuais que poderão ser reutilizados durante o desenvolvimento.

Isso significa que nenhuma cor, sombra, espaçamento ou tamanho de fonte deverá ser definido diretamente dentro dos componentes.

Por exemplo, ao invés de escrever:

```tsx
const Button = styled.button`
  background: #f5df4e;
  color: #1a1a1a;
  padding: 16px;
  border-radius: 8px;
`;
```

Será utilizado:

```tsx
const Button = styled.button`
  background: ${({ theme }) => theme.colors.primaryYellow};
  color: ${({ theme }) => theme.colors.primaryBlack};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
```

Embora o código fique um pouco maior, ele se torna muito mais consistente e fácil de manter.

Imagine, por exemplo, que daqui a alguns meses você deseje alterar a cor principal do portfólio.

Se ela estiver espalhada por dezenas de componentes, será necessário localizar cada ocorrência manualmente.

Utilizando o tema, basta alterar um único valor.

Da mesma forma, caso seja necessário criar um modo escuro, um tema especial para alguma campanha ou até mesmo uma nova identidade visual, praticamente nenhum componente precisará ser modificado.

---

### `GlobalStyle.ts`

Este arquivo será responsável pelos estilos globais da aplicação.

Enquanto os componentes estilizados cuidam apenas da aparência de um componente específico, o `GlobalStyle` define regras que devem ser aplicadas em toda a aplicação.

Alguns exemplos:

- Reset CSS;
- `box-sizing`;
- remoção de margens padrão;
- configuração do `body`;
- tipografia padrão;
- suavização das fontes;
- cor de fundo da aplicação;
- comportamento de rolagem;
- estilos básicos para links, listas, botões e imagens.

Uma boa prática é manter este arquivo o mais enxuto possível.

Ele **não deve** conter estilos específicos de componentes.

Por exemplo, não seria adequado definir estilos para um card, um botão ou um formulário neste arquivo.

Esses estilos pertencem aos próprios componentes.

---

### `styled.d.ts`

Este talvez seja o arquivo menos intuitivo para quem está começando com Styled Components e TypeScript.

Sua função é informar ao TypeScript qual é exatamente o formato do objeto `theme`.

Sem ele, o seguinte código produziria erro:

```tsx
theme.colors.primaryYellow;
```

Isso acontece porque o TypeScript não sabe quais propriedades existem dentro do tema.

Ao criarmos o arquivo `styled.d.ts`, estaremos estendendo a interface `DefaultTheme`, permitindo que o editor reconheça automaticamente todas as propriedades disponíveis.

Isso proporciona diversas vantagens.

- autocomplete;
- validação em tempo de compilação;
- prevenção de erros de digitação;
- refatoração muito mais segura.

Durante a criação desse arquivo veremos exatamente como isso funciona.

---

### `index.ts`

Este arquivo funcionará como um ponto central de exportação.

Ao invés de importar cada recurso individualmente:

```tsx
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';
```

Poderemos simplesmente escrever:

```tsx
import { theme, GlobalStyle } from '@/styles';
```

Esse padrão simplifica as importações e reduz a quantidade de caminhos espalhados pelo projeto.

---

# Estrutura inicial do tema

Agora criaremos o primeiro arquivo da pasta `theme`.

Crie o arquivo:

```text
src/styles/theme/index.ts
```

Este arquivo armazenará todos os Design Tokens da aplicação.

Embora, futuramente, esses tokens sejam separados em arquivos específicos (`colors.ts`, `spacing.ts`, `typography.ts`, `glass.ts` etc.), nesta etapa manteremos tudo centralizado para facilitar o entendimento da estrutura.

O objetivo não é apenas armazenar cores.

Na verdade, praticamente todas as características visuais da aplicação serão definidas aqui.

Nosso tema será composto pelos seguintes grupos:

- cores;
- efeitos Glassmorphism;
- tipografia;
- tamanhos de fonte;
- pesos de fonte;
- espaçamentos;
- larguras padrão;
- bordas;
- sombras;
- transições;
- opacidades;
- breakpoints.

Essa organização facilitará bastante a manutenção do projeto conforme ele crescer.

---

# Criando o objeto `theme`

No arquivo `src/styles/theme/index.ts`, adicione o seguinte conteúdo.

```ts
export const theme = {
  colors: {
    // == Cores Primárias ==

    primaryYellow: '#f5df4e',
    primaryBlack: '#1a1a1a',
    primaryWhite: '#ffffff',

    // == Tons de amarelo ==

    yellowDark: '#d4bf3a',
    yellowLight: '#fff6b3',
    yellowGlow: 'rgba(245, 223, 78, 0.30)',

    // == Escala de cinza ==

    grayDarker: '#0a0a0a',
    grayDark: '#222222',
    grayMedium: '#666666',
    grayLight: '#e0e0e0',
    grayLighter: '#f5f5f5',

    // == Cores semânticas ==

    success: '#2dd36f',
    warning: '#ffc409',
    danger: '#eb445a',
    info: '#3dc2ff',
  },

  glass: {},

  fonts: {},

  fontSize: {},

  spacing: {},

  width: {},

  borderRadius: {},

  shadows: {},

  transitions: {},

  opacity: {},

  breakpoints: {},
};
```

Neste primeiro momento criamos apenas a estrutura geral do objeto.

Em seguida preencheremos cada grupo individualmente.

Essa abordagem facilita bastante o entendimento da organização do tema antes de adicionarmos todos os valores.

---

# Configurando as cores

As cores utilizadas neste projeto foram definidas com base na identidade visual do portfólio.

O amarelo será a principal cor de destaque.

Já os tons de preto e cinza serão responsáveis por criar contraste e profundidade.

Além das cores tradicionais, também foram adicionadas cores semânticas.

Essas cores serão utilizadas para representar estados específicos da interface, como mensagens de sucesso, avisos, erros e informações.

Por exemplo:

- sucesso em formulários;
- alertas;
- notificações;
- mensagens de erro;
- indicadores de carregamento.

Dessa forma evitamos reutilizar a cor principal do projeto para representar significados completamente diferentes.

Nas próximas seções continuaremos preenchendo os demais grupos do tema, iniciando pela configuração completa do efeito Glassmorphism, seguida pelas tipografias, espaçamentos, sombras e demais Design Tokens.

---

# Configurando o Glassmorphism

Um dos principais elementos visuais deste portfólio será o efeito conhecido como **Glassmorphism**.

Esse estilo cria a sensação de que determinados elementos são feitos de vidro fosco, permitindo visualizar parcialmente o conteúdo existente atrás deles.

Algumas características desse efeito são:

- fundo semitransparente;
- desfoque (blur);
- bordas claras;
- sombras suaves;
- sensação de profundidade.

Ao invés de repetir esses valores em todos os componentes, eles ficarão centralizados no tema.

Dessa forma, caso seja necessário alterar toda a aparência do efeito glass, bastará modificar um único local.

Substitua o objeto `glass` pelo seguinte conteúdo.

```ts
glass: {
  background: "rgba(255, 255, 255, 0.08)",
  backgroundLight: "rgba(255, 255, 255, 0.05)",
  backgroundStrong: "rgba(255, 255, 255, 0.12)",

  border: "rgba(255, 255, 255, 0.18)",
  borderStrong: "rgba(255, 255, 255, 0.25)",

  blur: "10px",
  blurStrong: "20px",

  shadow: "0 8px 32px rgba(0, 0, 0, 0.20)",
},
```

Cada propriedade possui uma finalidade específica.

| Propriedade        | Finalidade                                              |
| ------------------ | ------------------------------------------------------- |
| `background`       | Fundo padrão dos componentes glass.                     |
| `backgroundLight`  | Utilizado quando for necessário um vidro mais discreto. |
| `backgroundStrong` | Utilizado em componentes com maior destaque.            |
| `border`           | Borda padrão do efeito glass.                           |
| `borderStrong`     | Borda utilizada quando houver maior contraste.          |
| `blur`             | Intensidade padrão do desfoque.                         |
| `blurStrong`       | Desfoque mais intenso.                                  |
| `shadow`           | Sombra padrão utilizada em componentes glass.           |

Posteriormente um componente poderá utilizar essas propriedades da seguinte maneira.

```tsx
const GlassCard = styled.div`
  background: ${({ theme }) => theme.glass.background};

  border: 1px solid ${({ theme }) => theme.glass.border};

  backdrop-filter: blur(${({ theme }) => theme.glass.blur});

  box-shadow: ${({ theme }) => theme.glass.shadow};
`;
```

Observe que nenhum valor foi escrito diretamente no componente.

Tudo foi obtido através do tema.

---

# Configurando as fontes

O projeto utilizará duas famílias tipográficas.

## Poppins

Será utilizada como fonte principal da interface.

Ela será aplicada na maior parte do conteúdo.

Exemplos:

- textos;
- botões;
- formulários;
- menus;
- cards.

## Barlow

Será utilizada em elementos que precisam de maior destaque visual.

Exemplos:

- títulos;
- seções principais;
- números;
- destaques.

Substitua o objeto `fonts` pelo seguinte conteúdo.

```ts
fonts: {
  primary: "'Poppins', sans-serif",
  secondary: "'Barlow', sans-serif",
},
```

> **Importante**
>
> Nesta etapa apenas registraremos os nomes das famílias tipográficas.
>
> A importação das fontes será realizada posteriormente no `GlobalStyle`.

---

# Configurando os tamanhos de fonte

Manter os tamanhos padronizados evita inconsistências entre componentes.

Substitua o objeto `fontSize` por:

```ts
fontSize: {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  md: "1.125rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2rem",
  "3xl": "2.5rem",
},
```

Sempre que possível utilize esses valores.

Exemplo:

```tsx
font-size: ${({ theme }) => theme.fontSize.lg};
```

Evite escrever:

```tsx
font-size: 20px;
```

---

# Configurando os espaçamentos

Espaçamentos padronizados deixam toda a interface visualmente consistente.

Substitua o objeto `spacing`.

```ts
spacing: {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
},
```

Ao desenvolver componentes utilize:

```tsx
padding: ${({ theme }) => theme.spacing.md};

margin-bottom: ${({ theme }) => theme.spacing.lg};

gap: ${({ theme }) => theme.spacing.sm};
```

Isso evita dezenas de valores diferentes espalhados pela aplicação.

---

# Configurando as larguras padrão

Alguns containers do projeto possuirão uma largura máxima.

Isso melhora bastante a leitura do conteúdo em telas grandes.

Substitua o objeto `width`.

```ts
width: {
  min: "95%",
  max: "800px",
},
```

Mais adiante será comum encontrar componentes como:

```tsx
width: ${({ theme }) => theme.width.min};

max-width: ${({ theme }) => theme.width.max};

margin: 0 auto;
```

---

# Configurando os arredondamentos

Os raios das bordas também deverão permanecer padronizados.

Substitua o objeto `borderRadius`.

```ts
borderRadius: {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
},
```

Isso permitirá criar componentes visualmente consistentes.

---

# Configurando as sombras

Sombras serão utilizadas para gerar profundidade na interface.

Substitua o objeto `shadows`.

```ts
shadows: {
  sm: "0 2px 4px rgba(0,0,0,.10)",
  md: "0 4px 8px rgba(0,0,0,.15)",
  lg: "0 8px 16px rgba(0,0,0,.20)",
  xl: "0 12px 24px rgba(0,0,0,.25)",
},
```

Cada componente deverá escolher a sombra de acordo com sua importância visual.

---

# Configurando as transições

Animações suaves tornam a interface mais agradável.

Centralizar esses valores evita pequenas diferenças de tempo entre componentes.

Substitua o objeto `transitions`.

```ts
transitions: {
  fast: "150ms ease",
  base: "300ms ease",
  slow: "500ms ease",
},
```

Exemplo de utilização.

```tsx
transition: ${({ theme }) => theme.transitions.base};
```

---

# Configurando os níveis de opacidade

Alguns elementos reutilizam constantemente os mesmos níveis de transparência.

Ao invés de escrever números "mágicos", utilizaremos valores nomeados.

Substitua o objeto `opacity`.

```ts
opacity: {
  disabled: 0.5,
  hover: 0.8,
  overlay: 0.7,
},
```

Isso melhora bastante a legibilidade do código.

---

# Configurando os Breakpoints

A aplicação será totalmente responsiva.

Por esse motivo os breakpoints também ficarão centralizados.

Substitua o objeto `breakpoints`.

```ts
breakpoints: {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
},
```

Mais adiante será comum encontrar algo semelhante a:

```tsx
@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  ...
}
```

Caso algum breakpoint precise ser alterado futuramente, bastará modificar apenas este arquivo.

---

# Resultado esperado do arquivo `theme/index.ts`

Após concluir todas as etapas anteriores, o arquivo deverá conter um único objeto exportado, organizado por grupos de responsabilidade.

Sua estrutura geral deverá ser semelhante à apresentada abaixo.

```text
theme
│
├── colors
├── glass
├── fonts
├── fontSize
├── spacing
├── width
├── borderRadius
├── shadows
├── transitions
├── opacity
└── breakpoints
```

Observe que essa organização foi planejada para acompanhar o crescimento do projeto.

À medida que novos componentes forem sendo desenvolvidos, todos eles consultarão esse objeto para obter informações de estilo.

Nenhum componente deverá declarar valores fixos de cor, fonte, espaçamento ou sombra.

O tema passa a ser, oficialmente, a única fonte de verdade para todas as decisões visuais da aplicação.

---

# Validando o arquivo criado

Antes de prosseguir para os próximos arquivos, revise cuidadosamente o conteúdo de `src/styles/theme/index.ts`.

Verifique principalmente os seguintes pontos.

- Todos os grupos foram criados.
- Nenhum grupo ficou vazio.
- Todos os valores estão escritos como `string`, exceto as opacidades, que podem permanecer como valores numéricos.
- O objeto `theme` está sendo exportado utilizando `export const theme`.
- Não existem erros de sintaxe.
- O editor não apresenta erros de TypeScript.

Após essa conferência, salve o arquivo.

Neste momento o tema ainda não estará sendo utilizado pela aplicação.

Isso é esperado.

Nos próximos passos criaremos os arquivos responsáveis por disponibilizar esse tema para toda a aplicação através do `ThemeProvider`, além de configurar os estilos globais e a tipagem do Styled Components.

---

# Criando o GlobalStyle

O próximo arquivo que criaremos será o `GlobalStyle.ts`.

Até agora definimos **quais informações visuais existirão** através do tema.

Agora precisamos criar um mecanismo que aplique essas configurações globalmente à aplicação.

É exatamente essa a responsabilidade do `GlobalStyle`.

Crie o arquivo:

```text
src/styles/GlobalStyle.ts
```

Antes de escrever qualquer código, é importante entender o papel desse arquivo dentro do projeto.

---

# O que é o GlobalStyle?

No Styled Components, normalmente cada componente possui seus próprios estilos.

Por exemplo:

```tsx
const Button = styled.button`
  ...
`;
```

ou

```tsx
const Card = styled.div`
  ...
`;
```

Esses estilos afetam apenas aquele componente.

Entretanto, existem algumas regras que devem ser aplicadas em toda a aplicação.

Por exemplo:

- remover margens padrão;
- remover paddings padrão;
- definir o `box-sizing`;
- configurar a fonte padrão;
- definir a cor de fundo;
- definir a cor padrão dos textos;
- melhorar a renderização das fontes;
- configurar a rolagem da página;
- remover estilos padrão de listas;
- configurar imagens responsivas.

Essas configurações não pertencem a um componente específico.

Elas pertencem à aplicação inteira.

É exatamente para isso que existe o `createGlobalStyle`.

---

# O que é o `createGlobalStyle`?

O `createGlobalStyle` é uma função disponibilizada pelo Styled Components.

Sua função é gerar um componente React responsável por inserir estilos globais na aplicação.

Na prática, ele funciona de maneira semelhante a um arquivo CSS global.

Porém, com diversas vantagens.

Entre elas:

- acesso ao ThemeProvider;
- acesso às propriedades do tema;
- integração com TypeScript;
- escopo controlado;
- facilidade de manutenção.

Isso significa que poderemos escrever algo como:

```tsx
background: ${({ theme }) => theme.colors.primaryBlack};
```

mesmo estando dentro de um estilo global.

Essa é uma das grandes vantagens do Styled Components.

---

# Importando o `createGlobalStyle`

Começaremos importando a função responsável por criar os estilos globais.

Adicione o seguinte código.

```ts
import { createGlobalStyle } from 'styled-components';
```

Até esse momento o arquivo ficará assim.

```ts
import { createGlobalStyle } from 'styled-components';
```

Em seguida criaremos o componente responsável por armazenar todos os estilos globais.

---

# Criando o componente GlobalStyle

Logo abaixo da importação, adicione:

```ts
export const GlobalStyle = createGlobalStyle`

`;
```

O arquivo agora ficará assim.

```ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

`;
```

Observe que utilizamos uma _Template String_ (`` ` ` ``).

Todo o CSS global será escrito dentro dela.

Embora pareça um arquivo CSS comum, esse código possui acesso completo ao tema da aplicação.

---

# Configurando o Reset CSS

O primeiro passo será remover os estilos padrões aplicados pelos navegadores.

Cada navegador adiciona automaticamente margens, paddings e diversos estilos próprios.

Caso esses estilos não sejam removidos, diferentes navegadores poderão apresentar pequenas diferenças visuais.

Adicione o seguinte bloco.

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

O arquivo ficará semelhante ao exemplo abaixo.

```ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

`;
```

Vamos entender o que cada linha faz.

### `*`

Seleciona absolutamente todos os elementos da página.

### `*::before`

Seleciona todos os pseudo-elementos `::before`.

### `*::after`

Seleciona todos os pseudo-elementos `::after`.

Esses três seletores garantem que qualquer elemento criado na aplicação utilize exatamente o mesmo comportamento.

---

## Removendo margens

```css
margin: 0;
```

Os navegadores adicionam margens automaticamente em diversos elementos.

Por exemplo:

- `<body>`
- `<h1>`
- `<p>`
- `<ul>`

Remover essas margens proporciona uma base muito mais previsível para o desenvolvimento.

---

## Removendo paddings

```css
padding: 0;
```

Da mesma forma, diversos elementos recebem paddings automaticamente.

Ao zerarmos esse valor, passamos a controlar completamente os espaçamentos da aplicação.

---

## Configurando o `box-sizing`

```css
box-sizing: border-box;
```

Essa talvez seja uma das propriedades mais importantes do Reset CSS.

Sem ela:

```text
width + padding + border
```

alteram o tamanho final do elemento.

Com `border-box`, o cálculo passa a considerar padding e borda dentro da largura definida.

Exemplo.

Sem `border-box`.

```text
width:300px

padding:20px

Resultado final:

340px
```

Com `border-box`.

```text
width:300px

padding:20px

Resultado final:

300px
```

Isso facilita bastante o desenvolvimento responsivo.

---

# Configurando o elemento HTML

Logo abaixo do Reset CSS, adicione.

```css
html {
  scroll-behavior: smooth;
}
```

O arquivo ficará semelhante a:

```ts
...

html{
    scroll-behavior:smooth;
}

`;
```

---

## O que faz `scroll-behavior: smooth`?

Essa propriedade faz com que qualquer rolagem realizada através de âncoras ou JavaScript aconteça suavemente.

Sem ela:

```text
Clique no menu

↓

A página "salta" imediatamente.
```

Com ela:

```text
Clique no menu

↓

A página desliza suavemente.
```

Como este portfólio possuirá diversas seções na mesma página, esse comportamento melhora bastante a experiência do usuário.

---

# Configurando o Body

Agora adicionaremos o bloco mais importante do GlobalStyle.

Logo abaixo do bloco `html`, adicione.

```css
body{
    background:${({ theme }) => theme.colors.primaryBlack};

    color:${({ theme }) => theme.colors.primaryWhite};

    font-family:${({ theme }) => theme.fonts.primary};

    font-size:${({ theme }) => theme.fontSize.base};

    line-height:1.5;

    min-height:100vh;

    text-rendering:optimizeLegibility;

    -webkit-font-smoothing:antialiased;

    -moz-osx-font-smoothing:grayscale;
}
```

Observe que já estamos utilizando o tema.

Nenhum valor foi escrito diretamente.

Todas as propriedades relacionadas às cores e fontes foram obtidas através do objeto `theme`.

---

## Cor de fundo

```css
background:${({ theme }) => theme.colors.primaryBlack};
```

Define a cor principal do fundo da aplicação.

Caso futuramente seja criado um tema claro, essa linha continuará exatamente igual.

A única mudança será o objeto fornecido ao `ThemeProvider`.

---

## Cor padrão dos textos

```css
color:${({ theme }) => theme.colors.primaryWhite};
```

Todo texto da aplicação herdará essa cor automaticamente.

Naturalmente, componentes específicos poderão sobrescrever esse comportamento.

---

## Fonte principal

```css
font-family:${({ theme }) => theme.fonts.primary};
```

Define a fonte padrão utilizada em praticamente toda a aplicação.

A fonte secundária (`Barlow`) será utilizada apenas em elementos específicos, como títulos e destaques.

---

## Tamanho da fonte

```css
font-size:${({ theme }) => theme.fontSize.base};
```

Define o tamanho base da tipografia.

Os demais tamanhos serão utilizados conforme a necessidade de cada componente.

---

## Altura das linhas

```css
line-height: 1.5;
```

Melhora significativamente a legibilidade dos textos.

---

## Altura mínima

```css
min-height: 100vh;
```

Garante que o corpo da página ocupe sempre toda a altura da janela do navegador.

---

## Renderização das fontes

```css
text-rendering: optimizeLegibility;
```

Solicita ao navegador que utilize algoritmos de renderização voltados para melhor leitura.

---

## Suavização das fontes

```css
-webkit-font-smoothing: antialiased;

-moz-osx-font-smoothing: grayscale;
```

Essas propriedades melhoram a renderização das fontes em diferentes sistemas operacionais.

Embora sejam pouco conhecidas, são amplamente utilizadas em aplicações modernas.

---

# Configurando imagens

Logo abaixo do bloco `body`, adicione.

```css
img {
  display: block;

  max-width: 100%;
}
```

Essas propriedades garantem que imagens:

- não criem espaços indesejados;
- nunca ultrapassem a largura do elemento pai;
- comportem-se corretamente em layouts responsivos.

---

# Configurando links

Adicione.

```css
a {
  color: inherit;

  text-decoration: none;
}
```

Isso faz com que os links utilizem a cor herdada do elemento pai.

Posteriormente, componentes específicos poderão aplicar estilos próprios.

---

# Configurando listas

Adicione.

```css
ul,
ol {
  list-style: none;
}
```

Essa configuração remove os marcadores padrões.

Quando desejarmos utilizar listas com marcadores, elas poderão ser estilizadas individualmente.

---

# Configurando botões

Adicione.

```css
button {
  font: inherit;

  cursor: pointer;

  border: none;

  background: none;
}
```

Essas propriedades removem estilos padrões dos navegadores e garantem que os botões herdem automaticamente a tipografia definida no `body`.

Mais adiante, todos os botões do projeto serão componentes estilizados próprios.

---

# Resultado esperado do arquivo `GlobalStyle.ts`

Ao concluir esta etapa, o arquivo deverá possuir uma estrutura semelhante à seguinte.

```text
GlobalStyle
│
├── Importação do createGlobalStyle
│
├── Reset CSS
│
├── html
│
├── body
│
├── img
│
├── a
│
├── ul
│
└── button
```

Observe que nenhum estilo específico de componentes foi adicionado.

O objetivo deste arquivo é fornecer apenas uma base consistente para toda a aplicação.

Nos próximos passos criaremos o arquivo responsável por centralizar as exportações da pasta `styles` e, em seguida, configuraremos a tipagem do tema para que o TypeScript reconheça automaticamente todas as propriedades do objeto `theme`.

---

# Criando o arquivo `index.ts`

Até este momento já criamos dois arquivos dentro da pasta `styles`.

```text
styles/

├── GlobalStyle.ts
└── theme/
    └── index.ts
```

Poderíamos importar esses arquivos diretamente em qualquer componente.

Por exemplo:

```tsx
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';
```

Embora funcione perfeitamente, conforme a quantidade de arquivos crescer, esse tipo de importação começará a ficar repetitivo.

Uma prática bastante utilizada em projetos React é criar um **Barrel File**.

## O que é um Barrel File?

Um Barrel File é um arquivo responsável por centralizar as exportações de uma determinada pasta.

Em vez de importar arquivos individuais, todos passam a ser exportados por um único ponto.

Isso reduz o acoplamento entre a estrutura de pastas e os componentes da aplicação.

Crie o arquivo:

```text
src/styles/index.ts
```

Adicione o seguinte conteúdo.

```ts
export { theme } from './theme';

export { GlobalStyle } from './GlobalStyle';
```

A partir desse momento poderemos escrever apenas:

```tsx
import { theme, GlobalStyle } from '@/styles';
```

Esse padrão será utilizado durante todo o projeto.

---

# Criando o arquivo `styled.d.ts`

Chegamos agora ao arquivo mais importante para a integração entre Styled Components e TypeScript.

Crie o arquivo:

```text
src/styles/styled.d.ts
```

Antes de escrever qualquer código, vamos entender sua finalidade.

---

# Por que esse arquivo existe?

Imagine o seguinte componente.

```tsx
const Button = styled.button`
  background: ${({ theme }) => theme.colors.primaryYellow};
`;
```

Para nós é evidente que `theme.colors.primaryYellow` existe.

Entretanto, o TypeScript não sabe disso.

Para ele, a propriedade `theme` possui o tipo `DefaultTheme`.

E, inicialmente, essa interface está vazia.

Isso significa que o editor exibirá erros semelhantes aos seguintes.

```text
Property 'colors' does not exist on type 'DefaultTheme'.
```

Além disso, não haverá:

- autocomplete;
- validação;
- sugestões;
- navegação pelas propriedades.

Precisamos ensinar ao TypeScript qual é exatamente o formato do nosso tema.

É isso que faremos agora.

---

# Entendendo o `declare module`

Adicione o seguinte código.

```ts
import 'styled-components';

declare module 'styled-components' {}
```

Vamos analisar esse trecho.

Primeiro importamos o módulo.

```ts
import 'styled-components';
```

Essa importação não serve para utilizar nenhuma função.

Ela informa ao TypeScript que iremos complementar as definições de tipos existentes dentro desse pacote.

Em seguida utilizamos:

```ts
declare module 'styled-components' {}
```

Essa sintaxe recebe o nome de **Module Augmentation**.

Ela permite acrescentar novas informações de tipagem a um módulo já existente.

No nosso caso, iremos complementar a interface `DefaultTheme`.

---

# Estendendo a interface `DefaultTheme`

Dentro do bloco anterior, adicione:

```ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryYellow: string;
      primaryBlack: string;
      primaryWhite: string;

      yellowDark: string;
      yellowLight: string;
      yellowGlow: string;

      grayDarker: string;
      grayDark: string;
      grayMedium: string;
      grayLight: string;
      grayLighter: string;

      success: string;
      warning: string;
      danger: string;
      info: string;
    };

    glass: {
      background: string;
      backgroundLight: string;
      backgroundStrong: string;

      border: string;
      borderStrong: string;

      blur: string;
      blurStrong: string;

      shadow: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };

    width: {
      min: string;
      max: string;
    };

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    transitions: {
      fast: string;
      base: string;
      slow: string;
    };

    opacity: {
      disabled: number;
      hover: number;
      overlay: number;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }
}
```

Embora o arquivo seja relativamente grande, ele é bastante simples.

Cada grupo representa exatamente a estrutura criada anteriormente em `theme/index.ts`.

Isso significa que o TypeScript passará a conhecer todas essas propriedades.

---

# O que acontece depois dessa configuração?

Agora o editor conseguirá sugerir automaticamente todas as propriedades do tema.

Por exemplo.

Ao escrever:

```tsx
theme.
```

O IntelliSense exibirá sugestões semelhantes a:

```text
colors

glass

fonts

fontSize

spacing

width

borderRadius

shadows

transitions

opacity

breakpoints
```

Ao acessar:

```tsx
theme.colors.
```

Novamente o editor sugerirá todas as cores disponíveis.

Esse recurso reduz significativamente erros de digitação.

---

# Configurando o `ThemeProvider`

Até agora criamos:

- tema;
- estilos globais;
- tipagem.

Entretanto, nenhum componente conhece esse tema.

Precisamos disponibilizá-lo para toda a aplicação.

Isso será feito através do `ThemeProvider`.

---

# Antes da alteração

Considere o arquivo `src/main.tsx` criado pelo Vite.

Ele normalmente possui uma estrutura semelhante à seguinte.

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

# Depois da alteração

Substitua o conteúdo pelo seguinte.

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import App from './App';

import { GlobalStyle, theme } from '@/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <App />
    </ThemeProvider>
  </StrictMode>,
);
```

---

# Entendendo cada alteração

## Importação do `ThemeProvider`

```tsx
import { ThemeProvider } from 'styled-components';
```

Esse componente será responsável por disponibilizar o objeto `theme` para toda a árvore de componentes da aplicação.

Sem ele, qualquer tentativa de acessar:

```tsx
theme.colors.primaryYellow;
```

resultará em erro.

---

## Importação do tema

```tsx
import { GlobalStyle, theme } from '@/styles';
```

Observe que utilizamos o Barrel File criado anteriormente.

Isso evita importações como:

```tsx
import { theme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';
```

---

## Envolvendo a aplicação

```tsx
<ThemeProvider theme={theme}>
```

A propriedade `theme` recebe exatamente o objeto exportado por:

```text
src/styles/theme/index.ts
```

A partir desse momento qualquer componente estilizado poderá acessar esse objeto.

---

## Aplicando o `GlobalStyle`

```tsx
<GlobalStyle />
```

Embora pareça um componente React comum, ele possui uma responsabilidade diferente.

Ao ser renderizado pela primeira vez, ele injeta todos os estilos globais definidos anteriormente.

Ele deve aparecer apenas uma única vez na aplicação.

Por isso é comum adicioná-lo logo abaixo do `ThemeProvider`.

---

# Estrutura final da pasta `styles`

Ao concluir esta etapa, a pasta deverá possuir exatamente a seguinte estrutura.

```text
styles/
│
├── GlobalStyle.ts
├── index.ts
├── styled.d.ts
│
└── theme/
    └── index.ts
```

Todos esses arquivos trabalham em conjunto.

```text
theme/index.ts
        │
        ▼
ThemeProvider
        │
        ▼
GlobalStyle
        │
        ▼
Componentes estilizados
```

Essa será a base utilizada por todo o restante do projeto.

---

# Validando a configuração

Antes de realizar qualquer commit, confirme que tudo está funcionando corretamente.

Execute:

```bash
pnpm dev
```

ou

```bash
npm run dev
```

Verifique se:

- a aplicação inicia normalmente;
- nenhuma mensagem de erro é exibida no terminal;
- o navegador abre corretamente.

Em seguida execute:

```bash
pnpm lint
```

ou

```bash
npm run lint
```

Confirme que não existem erros de ESLint.

Caso utilize TypeScript, execute também:

```bash
pnpm tsc --noEmit
```

ou

```bash
npx tsc --noEmit
```

Esse comando verifica toda a tipagem da aplicação sem gerar arquivos de saída.

Caso nenhum erro seja apresentado, a configuração foi realizada corretamente.

---

# Arquivos criados

- `src/styles/theme/index.ts`
- `src/styles/GlobalStyle.ts`
- `src/styles/index.ts`
- `src/styles/styled.d.ts`

---

# Arquivos alterados

- `src/main.tsx`

---

# Arquivos removidos

Nenhum.

---

# Branch

Atualize a branch principal.

```bash
git checkout main

git pull origin main
```

Crie uma nova branch para esta implementação.

```bash
git checkout -b chore/styled-components
```

---

# Commits

## Commit 1 — Instalação das dependências

```bash
git add package.json pnpm-lock.yaml

git commit -m "chore(styles): install styled-components"
```

> Caso esteja utilizando **npm**, substitua `pnpm-lock.yaml` por `package-lock.json`.

---

## Commit 2 — Criação da infraestrutura

```bash
git add src/styles

git commit -m "chore(styles): create styles infrastructure"
```

---

## Commit 3 — Configuração do ThemeProvider

```bash
git add src/main.tsx

git commit -m "chore(styles): configure theme provider"
```

---

## Commit 4 — Validação final

```bash
git add .

git commit -m "chore(styles): validate styled-components configuration"
```

---

# Push

Após concluir todos os commits, envie a branch para o repositório remoto.

```bash
git push -u origin chore/styled-components
```

---

# Pull Request

## Título

```text
chore: configure styled-components
```

## Descrição

```markdown
## Objetivo

Configurar toda a infraestrutura de estilização da aplicação utilizando Styled Components.

---

## O que foi realizado

- Instalação do Styled Components.
- Criação do tema inicial.
- Configuração do ThemeProvider.
- Criação do GlobalStyle.
- Configuração da tipagem do tema.
- Organização da pasta `styles`.

---

## Como testar

1. Execute `pnpm install`.
2. Execute `pnpm dev`.
3. Verifique se a aplicação inicia normalmente.
4. Execute `pnpm lint`.
5. Execute `pnpm tsc --noEmit`.

---

## Checklist

- [ ] ThemeProvider funcionando.
- [ ] GlobalStyle aplicado.
- [ ] Tipagem funcionando.
- [ ] Projeto compilando sem erros.
- [ ] ESLint sem erros.
```

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/styled-components
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

Antes de iniciar o próximo documento, confirme que todos os itens abaixo foram atendidos.

Styled Components instalado.
Estrutura da pasta styles criada.
Tema inicial configurado.
Design Tokens organizados.
Glassmorphism preparado.
GlobalStyle criado.
Barrel File criado.
Tipagem do tema funcionando.
ThemeProvider configurado.
Aplicação compilando normalmente.
ESLint sem erros.
TypeScript sem erros.
Commits realizados.
Push realizado.
Pull Request criada.
Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma infraestrutura sólida, escalável e totalmente tipada para gerenciamento de estilos com Styled Components.

A partir deste momento, todos os componentes visuais desenvolvidos no projeto deverão utilizar exclusivamente os Design Tokens definidos no tema, garantindo consistência visual, facilidade de manutenção e suporte para futuras evoluções, como novos temas, Design System, responsividade e efeitos de Glassmorphism.

Essa infraestrutura servirá como base para todas as próximas etapas do desenvolvimento.

Próxima etapa

➡️ 13 - React Router

Na próxima etapa será configurado o React Router, preparando a aplicação para funcionar como uma Single Page Application (SPA), organizando a estrutura de páginas e estabelecendo a base para futuras rotas públicas e administrativas, mesmo que inicialmente exista apenas uma única rota visível.

[React Router](./13-react-router.md)

**Uma observação importante sobre o documento:** eu faria apenas um ajuste em relação ao que escrevi anteriormente. Hoje o projeto utiliza o **Styled Components v6**, que já possui tipagens próprias. Portanto, em projetos novos normalmente **não é necessário instalar `@types/styled-components`**. Como sua documentação é para servir de base em projetos futuros, eu atualizaria essa parte para refletir a versão atual da biblioteca e evitar uma dependência desnecessária. Isso deixará o documento tecnicamente alinhado com o ecossistema atual.

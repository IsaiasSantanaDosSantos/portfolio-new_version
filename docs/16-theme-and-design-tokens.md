# 16 - Tema e Design Tokens

> **Objetivo desta etapa**
>
> Definir a arquitetura do Tema e dos Design Tokens da aplicação, estabelecendo uma única fonte de verdade para todas as propriedades visuais utilizadas pelo projeto, garantindo consistência, reutilização, escalabilidade e facilidade de manutenção.

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

---

# Por que agora?

No documento anterior foi definida toda a arquitetura do Design System.

Entretanto, ainda não existe nenhuma definição oficial sobre como os componentes obterão suas cores, tipografia, espaçamentos, bordas, sombras e demais propriedades visuais.

Se cada componente definir seus próprios valores, rapidamente a aplicação passará a possuir:

- cores duplicadas;
- tamanhos inconsistentes;
- espaçamentos diferentes para situações iguais;
- dificuldades para manutenção;
- dificuldade para implementar Dark Mode;
- baixa escalabilidade.

É justamente para evitar esse problema que utilizamos **Design Tokens**.

Os Design Tokens representam uma camada de abstração responsável por armazenar todas as propriedades visuais da aplicação em um único lugar.

A partir deste momento, qualquer componente desenvolvido deverá consumir exclusivamente esses tokens.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- arquitetura completa de Design Tokens;
- tema centralizado;
- suporte para Light Theme;
- suporte para Dark Theme;
- organização escalável;
- convenções para utilização dos tokens;
- estrutura preparada para futuras identidades visuais.

Nenhum componente visual será criado nesta etapa.

Nosso objetivo é construir apenas a fundação visual da aplicação.

---

# O que são Design Tokens?

Design Tokens são valores reutilizáveis responsáveis por representar todas as propriedades visuais utilizadas pela interface.

Em vez de escrever valores diretamente dentro dos componentes, criamos uma camada intermediária responsável por armazenar esses valores.

Por exemplo, ao invés de escrever:

```tsx
color: #FFFFFF;
padding: 24px;
border-radius: 16px;
```

passaremos a utilizar:

```tsx
color: theme.colors.text.primary;
padding: theme.spacing.lg;
border-radius: theme.borderRadius.md;
```

Dessa forma:

- alterações futuras são centralizadas;
- evita duplicação;
- melhora a consistência visual;
- facilita manutenção;
- facilita criação de novos temas.

---

# Diferença entre Tokens e Tema

Embora muitas vezes sejam utilizados como sinônimos, Design Tokens e Theme possuem responsabilidades diferentes.

## Design Tokens

Representam valores reutilizáveis.

Exemplos:

- cores
- espaçamentos
- sombras
- tipografia
- bordas

Os Tokens não conhecem contexto.

Eles apenas armazenam valores.

---

## Theme

O Theme é responsável por organizar e disponibilizar os Tokens para a aplicação.

Além disso, ele pode sobrescrever determinados valores dependendo do modo de exibição.

Exemplo:

Light Theme:

```text
background = branco
text = preto
```

Dark Theme:

```text
background = preto
text = branco
```

Observe que os componentes continuam utilizando:

```tsx
theme.colors.background;
```

Sem precisar saber se a aplicação está utilizando Light ou Dark Mode.

---

# Benefícios dessa arquitetura

Essa abordagem oferece diversas vantagens.

## Centralização

Existe apenas um local responsável por armazenar as propriedades visuais.

---

## Reutilização

Todos os componentes reutilizam exatamente os mesmos valores.

---

## Consistência

Toda a aplicação utiliza a mesma escala de:

- cores;
- tipografia;
- espaçamentos;
- bordas;
- sombras.

---

## Escalabilidade

Novos temas poderão ser adicionados sem alterar os componentes.

---

## Facilidade de manutenção

Alterar uma cor no tema automaticamente atualiza toda a aplicação.

---

# Princípios

## Fonte única de verdade

Todo atributo visual deverá existir apenas dentro do tema.

Jamais repetir valores diretamente nos componentes.

---

## Semântica

Os componentes devem consumir intenções de design.

Correto:

```tsx
theme.colors.text.primary;
```

Evitar:

```tsx
theme.colors.blue500;
```

O componente deve conhecer apenas o propósito daquela cor, e não seu valor absoluto.

---

## Desacoplamento

Os componentes jamais deverão conhecer:

- hexadecimal de cores;
- pixels;
- medidas;
- sombras.

Toda informação deverá ser obtida através do Theme.

---

## Escalabilidade

A arquitetura deverá permitir:

- novos temas;
- novas marcas;
- white-label;
- redesign completo;

sem necessidade de alterar componentes existentes.

---

# Estrutura esperada

Ao concluir esta etapa, o projeto deverá possuir exatamente a seguinte estrutura:

```text
src/
│
└── styles/
    │
    └── theme/
        │
        ├── index.ts
        ├── light.ts
        ├── dark.ts
        │
        └── tokens/
            │
            ├── colors.ts
            ├── typography.ts
            ├── spacing.ts
            ├── borderRadius.ts
            ├── borders.ts
            ├── shadows.ts
            ├── opacity.ts
            ├── blur.ts
            ├── breakpoints.ts
            ├── transitions.ts
            ├── zIndex.ts
            └── index.ts
```

Cada arquivo possuirá uma única responsabilidade.

---

# Responsabilidade de cada arquivo

| Arquivo         | Responsabilidade              |
| --------------- | ----------------------------- |
| colors.ts       | Todas as cores da aplicação   |
| typography.ts   | Tipografia                    |
| spacing.ts      | Escala oficial de espaçamento |
| borderRadius.ts | Arredondamentos               |
| borders.ts      | Bordas                        |
| shadows.ts      | Sombras                       |
| opacity.ts      | Transparência                 |
| blur.ts         | Glassmorphism                 |
| breakpoints.ts  | Responsividade                |
| transitions.ts  | Animações                     |
| zIndex.ts       | Camadas                       |
| light.ts        | Tema Claro                    |
| dark.ts         | Tema Escuro                   |
| index.ts        | API pública do tema           |

---

# Passo 1 — Criando a estrutura

Criar o seguinte diretório:

```text
src/styles/theme
```

Dentro dele, criar a pasta:

```text
tokens
```

Ao final, a estrutura deverá ser:

```text
theme/
│
├── tokens/
│
├── light.ts
├── dark.ts
└── index.ts
```

---

# Passo 2 — Criando os arquivos

Criar exatamente os seguintes arquivos:

```text
src/styles/theme/light.ts

src/styles/theme/dark.ts

src/styles/theme/index.ts

src/styles/theme/tokens/colors.ts

src/styles/theme/tokens/typography.ts

src/styles/theme/tokens/spacing.ts

src/styles/theme/tokens/borderRadius.ts

src/styles/theme/tokens/borders.ts

src/styles/theme/tokens/shadows.ts

src/styles/theme/tokens/opacity.ts

src/styles/theme/tokens/blur.ts

src/styles/theme/tokens/breakpoints.ts

src/styles/theme/tokens/transitions.ts

src/styles/theme/tokens/zIndex.ts

src/styles/theme/tokens/index.ts
```

Nesta etapa criaremos apenas a estrutura completa.

Os conteúdos serão implementados nos próximos passos.

---

# Passo 3 — Criando o arquivo `colors.ts`

Este arquivo será responsável por armazenar absolutamente todas as cores utilizadas pela aplicação.

Nenhuma cor deverá existir fora deste arquivo.

Isso inclui:

- cores principais;
- superfícies;
- textos;
- estados;
- feedback;
- overlays;
- glassmorphism.

## Estrutura inicial

```ts
export const colors = {};
```

Inicialmente manteremos apenas a exportação do objeto.

Nos próximos passos esse objeto será expandido para suportar toda a identidade visual da aplicação.

---

# Responsabilidade

Este arquivo deverá conter exclusivamente definições relacionadas às cores.

Jamais adicionar:

- espaçamentos;
- sombras;
- tipografia;
- animações.

Cada categoria possui seu próprio arquivo.

---

# Organização futura

Nos próximos passos o arquivo evoluirá para algo semelhante a:

```ts
export const colors = {
  brand: {},
  background: {},
  surface: {},
  text: {},
  border: {},
  feedback: {},
  overlay: {},
};
```

Cada grupo representará uma responsabilidade específica, facilitando a manutenção e a evolução da identidade visual.

# Passo 4 — Criando o arquivo `typography.ts`

A tipografia é um dos pilares da identidade visual de qualquer aplicação.

Este arquivo será responsável por centralizar todas as configurações relacionadas aos textos utilizados pelo projeto.

Nenhum componente deverá definir manualmente:

- família tipográfica;
- tamanho da fonte;
- peso;
- altura da linha;
- espaçamento entre letras.

Tudo deverá ser consumido através deste arquivo.

---

## Estrutura inicial

```ts
export const typography = {};
```

Assim como ocorreu com `colors.ts`, inicialmente criaremos apenas a estrutura básica.

Nas próximas etapas esse objeto será expandido conforme a necessidade da aplicação.

---

# Responsabilidade

Este arquivo deverá armazenar exclusivamente configurações relacionadas à tipografia.

Não adicionar:

- cores;
- espaçamentos;
- bordas;
- sombras.

---

# Organização futura

Posteriormente a estrutura poderá evoluir para algo semelhante a:

```ts
export const typography = {
  fontFamily: {},
  fontWeight: {},
  fontSize: {},
  lineHeight: {},
  letterSpacing: {},
};
```

Cada grupo representará um aspecto específico da tipografia, mantendo a organização do tema.

---

# Passo 5 — Criando o arquivo `spacing.ts`

Uma das maiores causas de inconsistência visual em aplicações é a utilização de espaçamentos arbitrários.

Exemplo:

```tsx
padding: 17px;
margin: 23px;
gap: 11px;
```

Esses valores tornam a interface inconsistente e dificultam a manutenção.

Para evitar esse problema, toda a aplicação deverá utilizar uma escala oficial de espaçamentos.

Essa escala ficará centralizada neste arquivo.

---

## Estrutura inicial

```ts
export const spacing = {};
```

---

# Responsabilidade

Este arquivo será responsável apenas pela escala de espaçamento utilizada pela aplicação.

Exemplos de utilização futura:

- padding;
- margin;
- gap;
- inset;
- posicionamentos.

Jamais utilizar este arquivo para armazenar:

- bordas;
- tipografia;
- animações.

---

# Organização futura

Posteriormente poderá possuir uma estrutura semelhante a:

```ts
export const spacing = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
};
```

Essa padronização garante consistência entre todos os componentes.

---

# Passo 6 — Criando o arquivo `borderRadius.ts`

Os arredondamentos utilizados pelos componentes também deverão possuir uma escala oficial.

Isso evita situações onde cada componente utiliza valores diferentes para representar o mesmo padrão visual.

Exemplo incorreto:

```tsx
border-radius: 7px;

border-radius: 12px;

border-radius: 18px;
```

O correto é utilizar tokens oficiais.

---

## Estrutura inicial

```ts
export const borderRadius = {};
```

---

# Responsabilidade

Este arquivo armazenará apenas os níveis oficiais de arredondamento.

Exemplos futuros:

- botões;
- cards;
- inputs;
- modais;
- badges.

---

# Organização futura

```ts
export const borderRadius = {
  none: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  full: '',
};
```

---

# Passo 7 — Criando o arquivo `borders.ts`

Além dos arredondamentos, as próprias bordas também deverão ser padronizadas.

Esse arquivo será responsável por definir:

- espessuras;
- estilos;
- combinações reutilizáveis.

---

## Estrutura inicial

```ts
export const borders = {};
```

---

# Responsabilidade

Este arquivo deverá conter apenas informações relacionadas às bordas.

Não adicionar:

- cores;
- sombras;
- transparências.

As cores continuarão pertencendo ao arquivo `colors.ts`.

---

# Organização futura

```ts
export const borders = {
  thin: '',
  medium: '',
  thick: '',
};
```

Posteriormente poderão existir outras categorias conforme a evolução do Design System.

---

# Passo 8 — Criando o arquivo `shadows.ts`

As sombras representam diferentes níveis de elevação dos componentes.

Centralizar essas definições facilita alterações futuras e garante consistência visual.

---

## Estrutura inicial

```ts
export const shadows = {};
```

---

# Responsabilidade

Este arquivo deverá armazenar apenas as sombras oficiais utilizadas pela aplicação.

Exemplos de utilização futura:

- cards;
- menus;
- modais;
- popovers;
- tooltips.

---

# Organização futura

```ts
export const shadows = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
};
```

Cada nível representará uma intensidade específica de elevação.

---

# Passo 9 — Criando o arquivo `opacity.ts`

Alguns componentes utilizam diferentes níveis de transparência para representar estados da interface.

Esses valores também deverão ser centralizados.

---

## Estrutura inicial

```ts
export const opacity = {};
```

---

# Responsabilidade

Este arquivo armazenará todos os níveis oficiais de transparência utilizados pelo projeto.

Exemplos futuros:

- hover;
- disabled;
- overlays;
- glassmorphism.

---

# Organização futura

```ts
export const opacity = {
  disabled: '',
  hover: '',
  overlay: '',
};
```

---

# Passo 10 — Criando o arquivo `blur.ts`

Este arquivo será responsável pelos níveis oficiais de desfoque (Blur).

Esses valores serão utilizados principalmente em componentes com efeito Glassmorphism.

---

## Estrutura inicial

```ts
export const blur = {};
```

---

# Responsabilidade

Centralizar todos os níveis de blur utilizados pela aplicação.

Não adicionar:

- transparência;
- sombras.

Cada categoria deverá permanecer em seu respectivo arquivo.

---

# Organização futura

```ts
export const blur = {
  sm: '',
  md: '',
  lg: '',
};
```

---

# Continuação

Na próxima parte serão criados:

- `breakpoints.ts`
- `transitions.ts`
- `zIndex.ts`
- `tokens/index.ts`

mantendo exatamente este mesmo padrão de detalhamento antes de iniciarmos a criação dos arquivos `light.ts`, `dark.ts` e `theme/index.ts`.

# Passo 11 — Criando o arquivo `breakpoints.ts`

Este arquivo será responsável por armazenar todos os breakpoints oficiais utilizados pela aplicação.

Os breakpoints definem em quais larguras de tela o layout poderá sofrer alterações para adaptar a interface a diferentes dispositivos.

Centralizar esses valores evita que cada componente utilize larguras diferentes para representar o mesmo comportamento responsivo.

---

## Estrutura inicial

```ts
export const breakpoints = {};
```

---

# Responsabilidade

Este arquivo deverá conter exclusivamente os breakpoints oficiais da aplicação.

Esses valores serão utilizados por:

- Media Queries;
- Layouts responsivos;
- Grid;
- Containers;
- Hooks de responsividade;
- Utilitários do Design System.

---

# Organização futura

Posteriormente este arquivo poderá evoluir para algo semelhante a:

```ts
export const breakpoints = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
};
```

Essa estrutura padroniza toda a responsividade da aplicação.

Nenhum componente deverá criar Media Queries utilizando valores fixos.

---

# Passo 12 — Criando o arquivo `transitions.ts`

Animações fazem parte da experiência do usuário.

Entretanto, assim como qualquer outra propriedade visual, elas também precisam seguir um padrão.

Este arquivo será responsável por armazenar todas as transições oficiais utilizadas pela aplicação.

---

## Estrutura inicial

```ts
export const transitions = {};
```

---

# Responsabilidade

Centralizar:

- duração das animações;
- curvas de aceleração;
- transições reutilizáveis.

Isso evita que diferentes componentes utilizem tempos distintos para animações semelhantes.

---

# Organização futura

Posteriormente poderá possuir uma estrutura semelhante a:

```ts
export const transitions = {
  fast: '',
  base: '',
  slow: '',
};
```

Caso seja necessário, novos níveis poderão ser adicionados futuramente sem impactar a arquitetura existente.

---

# Passo 13 — Criando o arquivo `zIndex.ts`

Conforme a aplicação cresce, diversos componentes passam a disputar diferentes níveis de sobreposição.

Exemplos:

- Header;
- Sidebar;
- Modal;
- Drawer;
- Tooltip;
- Toast;
- Dropdown.

Utilizar valores arbitrários rapidamente gera conflitos.

Para evitar esse problema, todos os níveis de empilhamento deverão ser centralizados neste arquivo.

---

## Estrutura inicial

```ts
export const zIndex = {};
```

---

# Responsabilidade

Este arquivo deverá armazenar exclusivamente os níveis oficiais de empilhamento da aplicação.

Jamais utilizar valores diretamente nos componentes.

Evitar:

```tsx
z-index: 9999;
```

Utilizar:

```tsx
z-index: ${({ theme }) => theme.zIndex.modal};
```

Essa abordagem facilita a manutenção e elimina conflitos entre componentes.

---

# Organização futura

Posteriormente este arquivo poderá possuir uma estrutura semelhante a:

```ts
export const zIndex = {
  base: '',
  dropdown: '',
  sticky: '',
  fixed: '',
  overlay: '',
  modal: '',
  toast: '',
  tooltip: '',
};
```

Cada nível possuirá uma responsabilidade específica dentro da interface.

---

# Passo 14 — Criando o arquivo `tokens/index.ts`

Após criar todos os arquivos de tokens, é necessário disponibilizá-los através de uma API pública.

Esse arquivo será responsável por centralizar todas as exportações dos Design Tokens.

Dessa forma, os demais arquivos do projeto não precisarão conhecer a estrutura interna da pasta `tokens`.

---

## Conteúdo inicial

```ts
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './borderRadius';
export * from './borders';
export * from './shadows';
export * from './opacity';
export * from './blur';
export * from './breakpoints';
export * from './transitions';
export * from './zIndex';
```

---

# Por que utilizar um arquivo `index.ts`?

Essa abordagem cria uma API pública para a pasta `tokens`.

Ao invés de importar arquivos individuais:

```ts
import { colors } from './tokens/colors';
import { spacing } from './tokens/spacing';
import { shadows } from './tokens/shadows';
```

poderemos utilizar:

```ts
import { colors, spacing, shadows } from './tokens';
```

Além de reduzir a quantidade de imports, essa estratégia facilita futuras alterações na estrutura interna da pasta sem impactar os arquivos consumidores.

---

# Estrutura atual dos Tokens

Ao concluir esta etapa, a pasta `tokens` deverá possuir exatamente a seguinte estrutura:

```text
tokens/
│
├── colors.ts
├── typography.ts
├── spacing.ts
├── borderRadius.ts
├── borders.ts
├── shadows.ts
├── opacity.ts
├── blur.ts
├── breakpoints.ts
├── transitions.ts
├── zIndex.ts
└── index.ts
```

Todos os arquivos deverão existir, mesmo que inicialmente contenham apenas a exportação do objeto correspondente.

Essa organização garante que a arquitetura esteja completamente preparada para receber os valores oficiais do tema nas próximas etapas.

---

# Continuação

Na próxima parte serão criados os arquivos responsáveis pela definição dos temas da aplicação:

- `light.ts`
- `dark.ts`
- `theme/index.ts`

Além disso, será demonstrado como os Design Tokens serão reutilizados pelos temas, como os componentes consumirão essa estrutura e quais convenções deverão ser seguidas durante o desenvolvimento da aplicação.

# Passo 15 — Criando o arquivo `light.ts`

Após organizar todos os Design Tokens, chegou o momento de criar o primeiro tema da aplicação.

O Light Theme será responsável por disponibilizar todos os tokens utilizados quando a interface estiver no modo claro.

Neste momento ainda não iremos definir valores específicos para cada token.

Nosso objetivo é estruturar corretamente a arquitetura que será utilizada durante todo o desenvolvimento da aplicação.

---

## Estrutura inicial

Criar o arquivo:

```text
src/styles/theme/light.ts
```

Adicionar o seguinte conteúdo:

```ts
import {
  colors,
  typography,
  spacing,
  borderRadius,
  borders,
  shadows,
  opacity,
  blur,
  breakpoints,
  transitions,
  zIndex,
} from './tokens';

export const lightTheme = {
  colors,
  typography,
  spacing,
  borderRadius,
  borders,
  shadows,
  opacity,
  blur,
  breakpoints,
  transitions,
  zIndex,
};
```

---

# Explicação

Cada propriedade representa uma categoria de Design Tokens.

Observe que o tema não cria novos valores.

Ele apenas reúne todos os tokens em um único objeto que será disponibilizado para toda a aplicação.

Essa abordagem mantém uma clara separação entre:

- definição dos tokens;
- configuração do tema;
- consumo pelos componentes.

---

# Responsabilidade

O arquivo `light.ts` deverá possuir apenas a responsabilidade de montar o tema claro da aplicação.

Não adicionar:

- componentes;
- estilos;
- regras de negócio;
- funções auxiliares.

---

# Organização futura

Conforme a aplicação evoluir, este arquivo poderá sobrescrever apenas os valores necessários para representar o modo claro.

Toda a estrutura continuará exatamente a mesma.

---

# Passo 16 — Criando o arquivo `dark.ts`

O Dark Theme seguirá exatamente a mesma arquitetura utilizada pelo Light Theme.

A única diferença será a possibilidade de substituir determinados valores para representar corretamente o modo escuro.

Essa abordagem permite que os componentes permaneçam completamente desacoplados da implementação dos temas.

---

## Estrutura inicial

Criar o arquivo:

```text
src/styles/theme/dark.ts
```

Adicionar o seguinte conteúdo:

```ts
import {
  colors,
  typography,
  spacing,
  borderRadius,
  borders,
  shadows,
  opacity,
  blur,
  breakpoints,
  transitions,
  zIndex,
} from './tokens';

export const darkTheme = {
  colors,
  typography,
  spacing,
  borderRadius,
  borders,
  shadows,
  opacity,
  blur,
  breakpoints,
  transitions,
  zIndex,
};
```

---

# Explicação

Neste primeiro momento os dois temas possuem exatamente a mesma estrutura.

Isso é esperado.

Posteriormente apenas os valores necessários serão personalizados para representar corretamente cada modo da interface.

Os componentes continuarão utilizando exatamente as mesmas propriedades do objeto `theme`, independentemente do tema ativo.

---

# Responsabilidade

O arquivo `dark.ts` deverá conter exclusivamente a configuração do tema escuro.

Toda a definição dos tokens continuará sendo responsabilidade da pasta `tokens`.

---

# Passo 17 — Criando o arquivo `index.ts`

Após criar os dois temas, é necessário disponibilizá-los através de um ponto único de exportação.

Esse será o papel do arquivo `index.ts`.

---

## Estrutura inicial

Criar o arquivo:

```text
src/styles/theme/index.ts
```

Adicionar o seguinte conteúdo:

```ts
export { lightTheme } from './light';

export { darkTheme } from './dark';
```

---

# Explicação

Assim como ocorreu com os Design Tokens, o arquivo `index.ts` cria uma API pública para toda a pasta `theme`.

Em vez de importar diretamente cada arquivo:

```ts
import { lightTheme } from '@/styles/theme/light';

import { darkTheme } from '@/styles/theme/dark';
```

será possível utilizar:

```ts
import {
  lightTheme,
  darkTheme,
} from '@/styles/theme';
```

Essa abordagem reduz o acoplamento entre os arquivos e facilita futuras alterações na estrutura interna da pasta.

---

# Estrutura final

Ao concluir esta etapa, a pasta `theme` deverá possuir exatamente a seguinte estrutura:

```text
theme/
│
├── index.ts
├── light.ts
├── dark.ts
│
└── tokens/
    │
    ├── colors.ts
    ├── typography.ts
    ├── spacing.ts
    ├── borderRadius.ts
    ├── borders.ts
    ├── shadows.ts
    ├── opacity.ts
    ├── blur.ts
    ├── breakpoints.ts
    ├── transitions.ts
    ├── zIndex.ts
    └── index.ts
```

---

# Continuação

Na próxima parte serão apresentados exemplos de consumo do tema pelos componentes, as convenções de utilização, a validação da configuração, os commits, o Pull Request e os critérios para considerar esta etapa concluída.

# Como os componentes consumirão o Theme

Após configurar os Design Tokens e os temas da aplicação, todos os componentes deverão consumir exclusivamente essa camada de abstração.

A partir deste momento, nenhum componente deverá conhecer valores absolutos como:

- cores;
- espaçamentos;
- sombras;
- bordas;
- tipografia.

Toda informação deverá ser obtida através da propriedade `theme`.

---

## Exemplo

Evitar:

```tsx
const Card = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
`;
```

Utilizar:

```tsx
const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};

  padding: ${({ theme }) => theme.spacing.lg};

  border-radius: ${({ theme }) => theme.borderRadius.md};

  box-shadow: ${({ theme }) => theme.shadows.md};
`;
```

Observe que o componente não conhece nenhum valor absoluto.

Toda a responsabilidade fica centralizada no Theme.

---

# Convenções

Durante o desenvolvimento do projeto, deverão ser seguidas as seguintes convenções.

## Nunca utilizar valores fixos

Evitar:

```tsx
padding: 24px;

margin: 32px;

border-radius: 12px;

font-size: 18px;

color: #ffffff;
```

Utilizar:

```tsx
padding: theme.spacing.lg;

margin: theme.spacing.xl;

border-radius: theme.borderRadius.md;

font-size: theme.typography.fontSize.md;

color: theme.colors.text.primary;
```

---

## Nunca duplicar tokens

Caso um novo componente necessite de um valor visual que ainda não exista, o correto é adicionar um novo Design Token.

Jamais criar valores locais dentro do componente.

---

## Componentes desacoplados

Os componentes deverão conhecer apenas o objeto `theme`.

Eles jamais deverão conhecer:

- Light Theme;
- Dark Theme;
- valores absolutos;
- códigos hexadecimais;
- pixels.

Essa responsabilidade pertence exclusivamente ao tema.

---

## Organização

Cada categoria de token deverá permanecer em seu respectivo arquivo.

Exemplo:

| Categoria | Arquivo |
|-----------|----------|
| Cores | colors.ts |
| Tipografia | typography.ts |
| Espaçamentos | spacing.ts |
| Bordas | borders.ts |
| Sombras | shadows.ts |
| Blur | blur.ts |
| Opacidade | opacity.ts |
| Breakpoints | breakpoints.ts |
| Transições | transitions.ts |
| Z-Index | zIndex.ts |

Essa organização facilita a localização das informações e evita responsabilidades duplicadas.

---

# Validação

Após concluir esta etapa, confirmar:

- [ ] Estrutura criada.
- [ ] Pasta `tokens` criada.
- [ ] Todos os arquivos criados.
- [ ] `light.ts` criado.
- [ ] `dark.ts` criado.
- [ ] `theme/index.ts` criado.
- [ ] Projeto compilando normalmente.

Executar:

```bash
npm run dev
```

Depois executar:

```bash
npm run lint
```

Caso ambos os comandos sejam executados sem erros, a configuração inicial do tema poderá ser considerada válida.

---

# Arquivos criados

- `src/styles/theme/light.ts`
- `src/styles/theme/dark.ts`
- `src/styles/theme/index.ts`
- `src/styles/theme/tokens/colors.ts`
- `src/styles/theme/tokens/typography.ts`
- `src/styles/theme/tokens/spacing.ts`
- `src/styles/theme/tokens/borderRadius.ts`
- `src/styles/theme/tokens/borders.ts`
- `src/styles/theme/tokens/shadows.ts`
- `src/styles/theme/tokens/opacity.ts`
- `src/styles/theme/tokens/blur.ts`
- `src/styles/theme/tokens/breakpoints.ts`
- `src/styles/theme/tokens/transitions.ts`
- `src/styles/theme/tokens/zIndex.ts`
- `src/styles/theme/tokens/index.ts`

---

# Arquivos alterados

- `src/styles/theme/index.ts`

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
git checkout -b feat/theme-design-tokens
```

---

# Commits

## Commit 1

Criar a estrutura de Design Tokens.

```bash
git add src/styles/theme

git commit -m "feat(theme): create design tokens structure"
```

---

## Commit 2

Configurar os temas da aplicação.

```bash
git add src/styles/theme

git commit -m "feat(theme): configure light and dark themes"
```

---

## Commit 3

Validar toda a configuração.

```bash
git add .

git commit -m "feat(theme): validate theme configuration"
```

---

# Push

```bash
git push -u origin feat/theme-design-tokens
```

---

# Pull Request

## Título

```text
feat: create theme and design tokens foundation
```

## Descrição

```markdown
## Objetivo

Definir a arquitetura do Tema e dos Design Tokens que servirão como base visual para toda a aplicação.

---

## O que foi realizado

- Estrutura de Design Tokens criada.
- Organização dos tokens por responsabilidade.
- Configuração dos temas Light e Dark.
- Definição da API pública dos tokens.
- Definição da API pública dos temas.
- Padronização da utilização dos Design Tokens.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Confirmar que a aplicação inicia normalmente.
4. Executar `npm run lint`.

---

## Checklist

- [ ] Estrutura criada.
- [ ] Tokens organizados.
- [ ] Light Theme criado.
- [ ] Dark Theme criado.
- [ ] Projeto compilando.
- [ ] Lint executado sem erros.
```

---

# Após o Merge

```bash
git checkout main

git pull origin main

git branch -d feat/theme-design-tokens
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estrutura de Design Tokens criada.
- [ ] Todos os arquivos de tokens criados.
- [ ] Light Theme configurado.
- [ ] Dark Theme configurado.
- [ ] API pública do tema criada.
- [ ] Projeto compilando normalmente.
- [ ] Projeto sem erros de lint.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação possuirá uma fundação visual consistente, escalável e reutilizável.

Todos os componentes desenvolvidos nas próximas etapas deverão consumir exclusivamente o Theme e os Design Tokens definidos nesta documentação.

Essa abordagem garantirá consistência visual, facilidade de manutenção, reutilização de código e suporte à evolução futura da identidade visual da aplicação.

---

# Próxima etapa

➡️ **17 - Arquitetura dos Componentes**

Na próxima etapa será definida a arquitetura dos componentes da aplicação, estabelecendo padrões de organização, responsabilidades, composição e reutilização que serão seguidos durante todo o desenvolvimento do projeto.

[Arquitetura dos Componentes](./17-component-architecture.md)

# 15 - Design System

> **Objetivo desta etapa**
>
> Definir a arquitetura do Design System da aplicação, estabelecendo seus princípios, responsabilidades, organização e convenções para garantir consistência visual, reutilização de componentes e escalabilidade durante todo o desenvolvimento do projeto.

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

---

# Por que agora?

Toda a infraestrutura necessária para o desenvolvimento da aplicação já foi configurada.

Antes da implementação das páginas e funcionalidades, é necessário definir como os componentes serão organizados, reutilizados e evoluirão ao longo do projeto.

Este documento estabelece as diretrizes do Design System, sem implementar componentes específicos.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- Estrutura inicial do Design System.
- Convenções de organização.
- Responsabilidades de cada camada.
- Padrões de nomenclatura.
- Critérios para criação de novos componentes.
- Estrutura preparada para futura documentação com Storybook.

Nenhum componente visual definitivo será implementado nesta etapa.

---

# Princípios

## Reutilização

Todo componente deverá ser desenvolvido pensando em reutilização.

Não criar componentes exclusivos para uma única tela quando um componente genérico atender ao mesmo objetivo.

---

## Separação de responsabilidades

O Design System deverá conter apenas componentes reutilizáveis.

Regras de negócio deverão permanecer fora desta camada.

---

## Consistência

Todos os componentes deverão utilizar exclusivamente:

- Theme;
- Design Tokens;
- Hooks compartilhados;
- Utilitários comuns.

Nenhum valor visual deverá ser definido diretamente dentro dos componentes.

---

## Composição

Os componentes deverão ser pequenos, independentes e facilmente combináveis.

A composição será responsabilidade da aplicação, e não do Design System.

---

## Acessibilidade

Todo componente deverá ser desenvolvido considerando:

- navegação por teclado;
- foco visível;
- atributos ARIA quando aplicáveis;
- contraste adequado;
- semântica HTML.

A acessibilidade fará parte da definição de pronto (Definition of Done) de cada componente.

---

# Estrutura esperada

Ao concluir esta etapa, a estrutura do projeto deverá ser exatamente esta:

```text
src/
│
├── design-system/
│   │
│   ├── components/
│   │   └── index.ts
│   │
│   ├── foundations/
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   └── index.ts
│   │
│   ├── patterns/
│   │   └── index.ts
│   │
│   ├── utils/
│   │   └── index.ts
│   │
│   └── index.ts
```

Todos os diretórios já devem possuir seu arquivo `index.ts`, mesmo que inicialmente estejam vazios.

Isso garante que toda a API pública do Design System já exista desde o início do projeto.

---

# Passo 1 — Criando a estrutura

Criar o seguinte diretório:

```text
src/design-system
```

Dentro dele, criar as seguintes pastas:

```text
components
foundations
hooks
patterns
utils
```

---

# Passo 2 — Criando os arquivos

Após criar as pastas, criar exatamente estes arquivos:

```text
src/design-system/components/index.ts

src/design-system/foundations/index.ts

src/design-system/hooks/index.ts

src/design-system/patterns/index.ts

src/design-system/utils/index.ts

src/design-system/index.ts
```

---

# Conteúdo inicial dos arquivos

## `src/design-system/components/index.ts`

```ts
// Componentes reutilizáveis do Design System.
//
// Exemplo:
//
// export * from './Button';
// export * from './Card';
```

---

## `src/design-system/foundations/index.ts`

```ts
// Exportações da camada Foundation.
//
// Exemplo:
//
// export * from './colors';
// export * from './typography';
// export * from './spacing';
```

---

## `src/design-system/hooks/index.ts`

```ts
// Hooks reutilizáveis.
//
// Exemplo:
//
// export * from './useBreakpoint';
```

---

## `src/design-system/patterns/index.ts`

```ts
// Componentes compostos.
//
// Exemplo:
//
// export * from './PageLayout';
```

---

## `src/design-system/utils/index.ts`

```ts
// Utilidades do Design System.
//
// Exemplo:
//
// export * from './clamp';
// export * from './mediaQuery';
```

---

## `src/design-system/index.ts`

Este será o ponto de entrada do Design System.

```ts
export * from './components';
export * from './foundations';
export * from './hooks';
export * from './patterns';
export * from './utils';
```

---

# O que ficará em cada diretório

## Foundations

Essa pasta conterá os elementos fundamentais do Design System.

Nesta etapa ainda não criaremos arquivos adicionais. Porém, futuramente ela poderá possuir esta estrutura:

```text
foundations/
│
├── colors.ts
├── spacing.ts
├── typography.ts
├── shadows.ts
├── borderRadius.ts
├── breakpoints.ts
├── transitions.ts
└── index.ts
```

Como você já possui um tema centralizado em:

```text
src/styles/theme/index.ts
```

esses arquivos funcionarão apenas como uma camada de exportação do tema.

### Exemplo futuro

#### `colors.ts`

```ts
import { theme } from '@/styles';

export const colors = theme.colors;
```

---

#### `spacing.ts`

```ts
import { theme } from '@/styles';

export const spacing = theme.spacing;
```

---

#### `typography.ts`

```ts
import { theme } from '@/styles';

export const typography = {
  fontFamily: theme.fonts,
  fontSize: theme.fontSize,
};
```

---

#### `breakpoints.ts`

```ts
import { theme } from '@/styles';

export const breakpoints = theme.breakpoints;
```

---

#### `borderRadius.ts`

```ts
import { theme } from '@/styles';

export const borderRadius = theme.borderRadius;
```

---

#### `shadows.ts`

```ts
import { theme } from '@/styles';

export const shadows = theme.shadows;
```

---

#### `transitions.ts`

```ts
import { theme } from '@/styles';

export const transitions = theme.transitions;
```

Dessa forma, o Design System reutiliza exatamente os tokens já definidos em `src/styles/theme/index.ts`, evitando duplicação de configurações.

---

## Components

Esta pasta conterá todos os componentes reutilizáveis do projeto.

A principal responsabilidade desta camada é fornecer componentes puramente visuais, desacoplados de regras de negócio, permitindo que sejam reutilizados em qualquer página da aplicação.

Nesta etapa ainda não criaremos componentes reais, porém deixaremos toda a arquitetura preparada para recebê-los futuramente.

---

### Estrutura futura

```text
components/
│
├── Avatar/
├── Badge/
├── Button/
├── Card/
├── Container/
├── Input/
├── Modal/
├── Section/
├── Tooltip/
└── index.ts
```

Cada componente possuirá seu próprio diretório.

Isso facilita a manutenção, escalabilidade e organização do projeto.

---

# Estrutura padrão de um componente

Todos os componentes deverão seguir exatamente esta estrutura:

```text
Button/
│
├── Button.tsx
├── styles.ts
├── types.ts
└── index.ts
```

Cada arquivo possui uma responsabilidade específica.

---

# Button.tsx

Arquivo responsável pela implementação do componente.

Exemplo:

```tsx
import * as S from './styles';

import { ButtonProps } from './types';

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>;
}
```

Responsabilidades:

- implementar a estrutura JSX;
- receber as propriedades;
- aplicar os estilos;
- não conter regras de negócio.

---

# styles.ts

Responsável por toda estilização utilizando Styled Components.

Exemplo:

```tsx
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.md};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background: ${({ theme }) => theme.colors.primaryYellow};
  color: ${({ theme }) => theme.colors.primaryBlack};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.base};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.hover};
  }
`;
```

Responsabilidades:

- conter apenas estilos;
- nunca possuir lógica de renderização;
- consumir exclusivamente os Design Tokens do tema.

---

# types.ts

Responsável pelas tipagens do componente.

Exemplo:

```ts
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
```

Responsabilidades:

- centralizar todas as interfaces;
- evitar tipagens espalhadas pelo componente.

---

# index.ts

Arquivo responsável pela exportação pública do componente.

Exemplo:

```ts
export * from './Button';
```

Dessa forma o componente poderá ser importado utilizando:

```ts
import { Button } from '@/design-system';
```

ao invés de:

```ts
import { Button } from '@/design-system/components/Button/Button';
```

---

# Exemplo completo da estrutura Button

```text
Button/
│
├── Button.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## Button.tsx

```tsx
import * as S from './styles';

import { ButtonProps } from './types';

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>;
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.md};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background: ${({ theme }) => theme.colors.primaryYellow};
  color: ${({ theme }) => theme.colors.primaryBlack};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.base};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.hover};
  }
`;
```

---

## types.ts

```ts
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
```

---

## index.ts

```ts
export * from './Button';
```

---

# Exemplo futuro — Card

A estrutura será exatamente a mesma.

```text
Card/
│
├── Card.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## Card.tsx

```tsx
import * as S from './styles';

import { CardProps } from './types';

export function Card({ children }: CardProps) {
  return <S.Container>{children}</S.Container>;
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.glass.background};

  border: 1px solid ${({ theme }) => theme.glass.border};

  backdrop-filter: blur(${({ theme }) => theme.glass.blur});

  border-radius: ${({ theme }) => theme.borderRadius.lg};

  padding: ${({ theme }) => theme.spacing.lg};

  box-shadow: ${({ theme }) => theme.glass.shadow};
`;
```

---

## types.ts

```ts
import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}
```

---

## index.ts

```ts
export * from './Card';
```

---

# Exemplo futuro — Input

```text
Input/
│
├── Input.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## Input.tsx

```tsx
import * as S from './styles';

import { InputProps } from './types';

export function Input(props: InputProps) {
  return <S.Container {...props} />;
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.borderRadius.md};

  border: 1px solid ${({ theme }) => theme.colors.grayLight};

  background: ${({ theme }) => theme.colors.primaryWhite};

  font-family: ${({ theme }) => theme.fonts.primary};

  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.primaryYellow};
  }
`;
```

---

## types.ts

```ts
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
```

---

## index.ts

```ts
export * from './Input';
```

---

# API pública dos componentes

O arquivo `src/design-system/components/index.ts` será responsável por centralizar todas as exportações.

Exemplo futuro:

```ts
export * from './Avatar';
export * from './Badge';
export * from './Button';
export * from './Card';
export * from './Container';
export * from './Input';
export * from './Modal';
export * from './Section';
export * from './Tooltip';
```

Dessa forma, qualquer componente poderá ser importado através da API pública do Design System:

```ts
import { Button, Card, Input } from '@/design-system';
```

Essa abordagem evita imports profundos, melhora a organização do projeto e facilita a manutenção da arquitetura conforme novos componentes forem sendo adicionados.

## Patterns

A pasta `patterns` conterá componentes compostos (Composite Components), responsáveis por organizar e combinar componentes básicos do Design System em estruturas reutilizáveis de interface.

Enquanto os componentes da pasta `components` representam elementos individuais (Button, Card, Input etc.), os **Patterns** representam blocos completos de interface, compostos por diversos componentes trabalhando em conjunto.

Esses componentes também **não devem conter regras de negócio**. Sua responsabilidade é apenas organizar layout, composição e reutilização.

---

# Estrutura futura

```text
patterns/
│
├── ContentSection/
├── EmptyState/
├── FormLayout/
├── Hero/
├── PageLayout/
├── PageSection/
├── SectionHeader/
└── index.ts
```

Cada Pattern possuirá seu próprio diretório.

Essa organização facilita a manutenção, reutilização e escalabilidade do projeto.

---

# Estrutura padrão de um Pattern

Todos os Patterns deverão seguir exatamente esta estrutura:

```text
PageLayout/
│
├── PageLayout.tsx
├── styles.ts
├── types.ts
└── index.ts
```

Cada arquivo possui uma responsabilidade específica.

---

# PageLayout.tsx

Responsável por montar a estrutura visual do Pattern.

Exemplo:

```tsx
import * as S from './styles';

import { PageLayoutProps } from './types';

export function PageLayout({ children }: PageLayoutProps) {
  return <S.Container>{children}</S.Container>;
}
```

Responsabilidades:

- organizar a composição dos componentes;
- receber propriedades;
- não conter regras de negócio;
- não realizar chamadas de API;
- não acessar Context API diretamente.

---

# styles.ts

Responsável por toda estilização do Pattern.

Exemplo:

```tsx
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};

  margin: 0 auto;

  padding: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;
```

Responsabilidades:

- conter apenas estilos;
- consumir exclusivamente os tokens do tema;
- nunca possuir lógica.

---

# types.ts

Responsável pelas tipagens.

Exemplo:

```ts
import { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode;
}
```

---

# index.ts

Responsável pela exportação pública.

```ts
export * from './PageLayout';
```

---

# Exemplo completo — PageLayout

Estrutura:

```text
PageLayout/
│
├── PageLayout.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## PageLayout.tsx

```tsx
import * as S from './styles';

import { PageLayoutProps } from './types';

export function PageLayout({ children }: PageLayoutProps) {
  return <S.Container>{children}</S.Container>;
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};

  margin: 0 auto;

  padding: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.xl};
`;
```

---

## types.ts

```ts
import { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode;
}
```

---

## index.ts

```ts
export * from './PageLayout';
```

---

# Exemplo completo — Hero

O Pattern Hero representa normalmente o primeiro bloco de uma página.

Estrutura:

```text
Hero/
│
├── Hero.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## Hero.tsx

```tsx
import * as S from './styles';

import { HeroProps } from './types';

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: ${({ theme }) => theme.spacing['2xl']} 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};

  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};

  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.grayLight};
`;
```

---

## types.ts

```ts
export interface HeroProps {
  title: string;

  subtitle: string;
}
```

---

## index.ts

```ts
export * from './Hero';
```

---

# Exemplo completo — SectionHeader

Este Pattern será reutilizado em diversas seções da aplicação.

Estrutura:

```text
SectionHeader/
│
├── SectionHeader.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## SectionHeader.tsx

```tsx
import * as S from './styles';

import { SectionHeaderProps } from './types';

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['2xl']};

  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};

  font-size: ${({ theme }) => theme.fontSize.base};
`;
```

---

## types.ts

```ts
export interface SectionHeaderProps {
  title: string;

  description?: string;
}
```

---

## index.ts

```ts
export * from './SectionHeader';
```

---

# Exemplo completo — EmptyState

Este Pattern será utilizado sempre que uma tela não possuir conteúdo.

Estrutura:

```text
EmptyState/
│
├── EmptyState.tsx
├── styles.ts
├── types.ts
└── index.ts
```

---

## EmptyState.tsx

```tsx
import * as S from './styles';

import { EmptyStateProps } from './types';

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
```

---

## styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.grayMedium};
`;
```

---

## types.ts

```ts
export interface EmptyStateProps {
  title: string;

  message: string;
}
```

---

## index.ts

```ts
export * from './EmptyState';
```

---

# API pública dos Patterns

O arquivo `src/design-system/patterns/index.ts` será responsável por centralizar todas as exportações.

Exemplo futuro:

```ts
export * from './ContentSection';
export * from './EmptyState';
export * from './FormLayout';
export * from './Hero';
export * from './PageLayout';
export * from './PageSection';
export * from './SectionHeader';
```

Assim, qualquer Pattern poderá ser importado através da API pública do Design System:

```ts
import { Hero, PageLayout, SectionHeader, EmptyState } from '@/design-system';
```

---

# Diferença entre Components e Patterns

É importante compreender a responsabilidade de cada camada do Design System.

## Components

Representam elementos individuais e reutilizáveis.

Exemplos:

- Button
- Card
- Input
- Avatar
- Badge
- Tooltip

Esses componentes podem ser utilizados em qualquer lugar da aplicação e não conhecem o contexto onde serão renderizados.

---

## Patterns

Representam blocos completos de interface compostos por diversos Components.

Exemplos:

- Hero
- PageLayout
- SectionHeader
- EmptyState
- FormLayout

Os Patterns organizam e combinam Components para formar estruturas maiores, promovendo consistência visual e evitando duplicação de layouts.

---

# Boas práticas

Ao criar um novo Pattern, verifique se ele atende aos seguintes critérios:

- Possui uma estrutura reutilizável?
- É composto por dois ou mais Components?
- Não possui regras de negócio?
- Não realiza chamadas de API?
- Não depende de uma página específica?
- Pode ser reutilizado em diferentes partes da aplicação?

Se a resposta para a maioria dessas perguntas for **sim**, o componente provavelmente pertence à pasta `patterns`.

## Hooks

A pasta `hooks` conterá todos os hooks personalizados (Custom Hooks) utilizados pelo Design System.

Os hooks têm como objetivo encapsular lógicas reutilizáveis relacionadas à interface, comportamento dos componentes e acesso a informações compartilhadas da aplicação.

Diferentemente dos componentes, os hooks **não renderizam elementos JSX**. Eles apenas fornecem estados, comportamentos e funções reutilizáveis.

Nesta etapa ainda não criaremos hooks reais, porém deixaremos toda a arquitetura preparada para recebê-los futuramente.

---

# Estrutura futura

```text
hooks/
│
├── useBreakpoint/
├── useClickOutside/
├── useDebounce/
├── useLocalStorage/
├── useMediaQuery/
├── useThemeMode/
└── index.ts
```

Cada hook possuirá seu próprio diretório.

Essa organização facilita manutenção, testes e escalabilidade do projeto.

---

# Estrutura padrão de um Hook

Todos os hooks deverão seguir exatamente esta estrutura:

```text
useBreakpoint/
│
├── useBreakpoint.ts
├── types.ts
└── index.ts
```

Caso o hook não utilize interfaces, o arquivo `types.ts` poderá ser omitido.

---

# useBreakpoint.ts

Responsável pela implementação da lógica do hook.

Exemplo:

```tsx
import { theme } from '@/styles';

export function useBreakpoint() {
  return theme.breakpoints;
}
```

Responsabilidades:

- encapsular lógica reutilizável;
- não renderizar JSX;
- não conter estilos;
- ser independente de qualquer página da aplicação.

---

# types.ts

Quando necessário, este arquivo conterá todas as interfaces utilizadas pelo hook.

Exemplo:

```ts
export interface Breakpoint {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}
```

---

# index.ts

Responsável pela exportação pública do hook.

```ts
export * from './useBreakpoint';
```

---

# Exemplo completo — useBreakpoint

Este hook disponibiliza todos os breakpoints definidos no tema.

Estrutura:

```text
useBreakpoint/
│
├── useBreakpoint.ts
├── types.ts
└── index.ts
```

---

## useBreakpoint.ts

```tsx
import { theme } from '@/styles';

export function useBreakpoint() {
  return theme.breakpoints;
}
```

---

## types.ts

```ts
export interface Breakpoint {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}
```

---

## index.ts

```ts
export * from './useBreakpoint';
```

---

# Exemplo completo — useMediaQuery

Este hook verifica se determinada Media Query está ativa.

Estrutura:

```text
useMediaQuery/
│
├── useMediaQuery.ts
├── types.ts
└── index.ts
```

---

## useMediaQuery.ts

```tsx
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const media = window.matchMedia(query);

  const [matches, setMatches] = useState(media.matches);

  useEffect(() => {
    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [media]);

  return matches;
}
```

---

## types.ts

```ts
export interface MediaQueryOptions {
  query: string;
}
```

---

## index.ts

```ts
export * from './useMediaQuery';
```

---

# Exemplo completo — useThemeMode

Este hook controla o modo claro e escuro da aplicação.

Estrutura:

```text
useThemeMode/
│
├── useThemeMode.ts
├── types.ts
└── index.ts
```

---

## useThemeMode.ts

```tsx
import { useState } from 'react';

export function useThemeMode() {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((previous) => !previous);
  }

  return {
    isDark,
    toggleTheme,
  };
}
```

---

## types.ts

```ts
export interface ThemeMode {
  isDark: boolean;

  toggleTheme(): void;
}
```

---

## index.ts

```ts
export * from './useThemeMode';
```

---

# Exemplo completo — useDebounce

Este hook evita chamadas consecutivas de uma mesma função.

Estrutura:

```text
useDebounce/
│
├── useDebounce.ts
├── types.ts
└── index.ts
```

---

## useDebounce.ts

```tsx
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}
```

---

## types.ts

```ts
export interface UseDebounceOptions {
  delay?: number;
}
```

---

## index.ts

```ts
export * from './useDebounce';
```

---

# Exemplo completo — useClickOutside

Este hook identifica cliques realizados fora de um determinado elemento.

Estrutura:

```text
useClickOutside/
│
├── useClickOutside.ts
├── types.ts
└── index.ts
```

---

## useClickOutside.ts

```tsx
import { RefObject, useEffect } from 'react';

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}
```

---

## types.ts

```ts
import { RefObject } from 'react';

export interface ClickOutsideProps {
  ref: RefObject<HTMLElement>;

  callback(): void;
}
```

---

## index.ts

```ts
export * from './useClickOutside';
```

---

# Exemplo completo — useLocalStorage

Este hook simplifica o acesso ao Local Storage.

Estrutura:

```text
useLocalStorage/
│
├── useLocalStorage.ts
├── types.ts
└── index.ts
```

---

## useLocalStorage.ts

```tsx
import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(initialValue);

  function save(newValue: T) {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  }

  return {
    value,
    save,
  };
}
```

---

## types.ts

```ts
export interface LocalStorageOptions<T> {
  key: string;

  initialValue: T;
}
```

---

## index.ts

```ts
export * from './useLocalStorage';
```

---

# API pública dos Hooks

O arquivo `src/design-system/hooks/index.ts` será responsável por centralizar todas as exportações.

Exemplo futuro:

```ts
export * from './useBreakpoint';
export * from './useClickOutside';
export * from './useDebounce';
export * from './useLocalStorage';
export * from './useMediaQuery';
export * from './useThemeMode';
```

Assim, qualquer hook poderá ser importado através da API pública do Design System:

```tsx
import {
  useBreakpoint,
  useClickOutside,
  useDebounce,
  useLocalStorage,
  useMediaQuery,
  useThemeMode,
} from '@/design-system';
```

---

# Boas práticas

Ao criar um novo hook, verifique se ele atende aos seguintes critérios:

- Encapsula uma lógica reutilizável?
- Não renderiza JSX?
- Não possui estilos?
- Não depende de uma página específica?
- Pode ser utilizado por diferentes componentes?
- Possui apenas uma responsabilidade?

Se a resposta para a maioria dessas perguntas for **sim**, ele provavelmente pertence à pasta `hooks`.

---

# Diferença entre Components, Patterns e Hooks

| Camada         | Responsabilidade                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------- |
| **Components** | Componentes visuais reutilizáveis.                                                                |
| **Patterns**   | Composição de diversos Components formando blocos de interface.                                   |
| **Hooks**      | Encapsulamento de comportamentos, estados e lógicas reutilizáveis, sem renderização de interface. |

Essa separação torna a arquitetura mais organizada, facilita a reutilização de código e mantém o Design System desacoplado das regras de negócio da aplicação.

---

## Utils

A pasta `utils` conterá todas as funções utilitárias utilizadas pelo Design System.

Seu principal objetivo é centralizar funções puras e reutilizáveis que auxiliam na construção dos componentes, evitando duplicação de código e facilitando a manutenção da aplicação.

Diferentemente dos **Components**, **Patterns** e **Hooks**, os arquivos presentes nesta pasta **não renderizam interface**, **não utilizam Hooks do React** e **não possuem estado**. São apenas funções auxiliares.

Nesta etapa ainda não criaremos utilitários reais, porém deixaremos toda a arquitetura preparada para recebê-los futuramente.

---

# Estrutura futura

```text
utils/
│
├── clamp/
├── debounce/
├── formatCurrency/
├── formatDate/
├── mediaQuery/
├── pxToRem/
├── scrollTo/
└── index.ts
```

Cada utilitário possuirá seu próprio diretório.

Essa organização facilita manutenção, testes e reutilização.

---

# Estrutura padrão de um utilitário

Todos os utilitários deverão seguir exatamente esta estrutura:

```text
pxToRem/
│
├── pxToRem.ts
├── types.ts
└── index.ts
```

Caso o utilitário não utilize interfaces ou tipos personalizados, o arquivo `types.ts` poderá ser omitido.

---

# pxToRem.ts

Responsável pela implementação da função utilitária.

Exemplo:

```ts
export function pxToRem(pixels: number, base = 16): string {
  return `${pixels / base}rem`;
}
```

Responsabilidades:

- conter apenas funções puras;
- não acessar o DOM;
- não utilizar React;
- não possuir efeitos colaterais;
- retornar sempre o mesmo resultado para a mesma entrada.

---

# types.ts

Quando necessário, este arquivo conterá interfaces e tipos utilizados pelo utilitário.

Exemplo:

```ts
export interface PxToRemOptions {
  base?: number;
}
```

---

# index.ts

Responsável pela exportação pública do utilitário.

```ts
export * from './pxToRem';
```

---

# Exemplo completo — pxToRem

Este utilitário converte valores em pixels para rem.

Estrutura:

```text
pxToRem/
│
├── pxToRem.ts
├── types.ts
└── index.ts
```

---

## pxToRem.ts

```ts
export function pxToRem(pixels: number, base = 16): string {
  return `${pixels / base}rem`;
}
```

---

## types.ts

```ts
export interface PxToRemOptions {
  base?: number;
}
```

---

## index.ts

```ts
export * from './pxToRem';
```

---

# Exemplo completo — mediaQuery

Este utilitário cria Media Queries utilizando os breakpoints definidos no tema.

Estrutura:

```text
mediaQuery/
│
├── mediaQuery.ts
├── types.ts
└── index.ts
```

---

## mediaQuery.ts

```ts
import { theme } from '@/styles';

export const mediaQuery = {
  xs: `(min-width: ${theme.breakpoints.xs})`,
  sm: `(min-width: ${theme.breakpoints.sm})`,
  md: `(min-width: ${theme.breakpoints.md})`,
  lg: `(min-width: ${theme.breakpoints.lg})`,
  xl: `(min-width: ${theme.breakpoints.xl})`,
  '2xl': `(min-width: ${theme.breakpoints['2xl']})`,
};
```

---

## types.ts

```ts
export interface MediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}
```

---

## index.ts

```ts
export * from './mediaQuery';
```

---

# Exemplo completo — clamp

Este utilitário gera automaticamente uma função CSS `clamp()` para tipografia e espaçamentos responsivos.

Estrutura:

```text
clamp/
│
├── clamp.ts
├── types.ts
└── index.ts
```

---

## clamp.ts

```ts
export function clamp(min: number, preferred: number, max: number): string {
  return `clamp(${min}rem, ${preferred}vw, ${max}rem)`;
}
```

---

## types.ts

```ts
export interface ClampOptions {
  min: number;
  preferred: number;
  max: number;
}
```

---

## index.ts

```ts
export * from './clamp';
```

---

# Exemplo completo — debounce

Este utilitário limita a frequência de execução de uma função.

Estrutura:

```text
debounce/
│
├── debounce.ts
├── types.ts
└── index.ts
```

---

## debounce.ts

```ts
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300,
) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
```

---

## types.ts

```ts
export interface DebounceOptions {
  delay?: number;
}
```

---

## index.ts

```ts
export * from './debounce';
```

---

# Exemplo completo — formatDate

Este utilitário formata datas utilizando o padrão brasileiro.

Estrutura:

```text
formatDate/
│
├── formatDate.ts
├── index.ts
```

---

## formatDate.ts

```ts
export function formatDate(value: Date): string {
  return value.toLocaleDateString('pt-BR');
}
```

---

## index.ts

```ts
export * from './formatDate';
```

---

# Exemplo completo — formatCurrency

Este utilitário formata valores monetários.

Estrutura:

```text
formatCurrency/
│
├── formatCurrency.ts
├── index.ts
```

---

## formatCurrency.ts

```ts
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
```

---

## index.ts

```ts
export * from './formatCurrency';
```

---

# Exemplo completo — scrollTo

Este utilitário realiza rolagem suave até um elemento da página.

Estrutura:

```text
scrollTo/
│
├── scrollTo.ts
├── index.ts
```

---

## scrollTo.ts

```ts
export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  });
}
```

---

## index.ts

```ts
export * from './scrollTo';
```

---

# API pública dos Utils

O arquivo `src/design-system/utils/index.ts` será responsável por centralizar todas as exportações.

Exemplo futuro:

```ts
export * from './clamp';
export * from './debounce';
export * from './formatCurrency';
export * from './formatDate';
export * from './mediaQuery';
export * from './pxToRem';
export * from './scrollTo';
```

Assim, qualquer utilitário poderá ser importado através da API pública do Design System:

```ts
import {
  clamp,
  debounce,
  formatCurrency,
  formatDate,
  mediaQuery,
  pxToRem,
  scrollTo,
} from '@/design-system';
```

---

# Boas práticas

Ao criar um novo utilitário, verifique se ele atende aos seguintes critérios:

- É uma função pura?
- Não depende do React?
- Não utiliza Hooks?
- Não renderiza interface?
- Pode ser reutilizado em diversos componentes?
- Resolve um único problema?
- Possui um nome claro e objetivo?

Se a resposta para a maioria dessas perguntas for **sim**, provavelmente ele pertence à pasta `utils`.

---

# Diferença entre Components, Patterns, Hooks e Utils

| Camada         | Responsabilidade                                                             |
| -------------- | ---------------------------------------------------------------------------- |
| **Components** | Componentes visuais reutilizáveis.                                           |
| **Patterns**   | Composição de diversos Components formando blocos completos de interface.    |
| **Hooks**      | Encapsulam estados e comportamentos reutilizáveis utilizando a API do React. |
| **Utils**      | Funções puras reutilizáveis que auxiliam a aplicação sem depender do React.  |

Essa separação torna a arquitetura mais organizada, facilita os testes, promove reutilização de código e mantém cada camada com uma responsabilidade única, seguindo os princípios do Clean Code e da Arquitetura Limpa.

---

# Critérios de validação

Ao concluir esta etapa, verifique se:

- ✅ Existe o diretório `src/design-system`.
- ✅ Todas as subpastas (`components`, `foundations`, `hooks`, `patterns` e `utils`) foram criadas.
- ✅ Cada subpasta contém um arquivo `index.ts`.
- ✅ Existe o arquivo `src/design-system/index.ts`.
- ✅ O projeto continua compilando sem erros (`pnpm dev` ou `pnpm build`).
- ✅ Nenhum arquivo possui erros de TypeScript ou ESLint.
- ✅ Nenhum componente foi criado nesta etapa; apenas a estrutura inicial e a API pública do Design System foram preparadas.

# Validação

Confirmar:

- [ ] Estrutura criada.
- [ ] Organização definida.
- [ ] Convenções documentadas.
- [ ] Responsabilidades estabelecidas.

Nenhum componente definitivo deverá existir ao final desta etapa.

---

# Arquivos criados

- `src/design-system/index.ts`

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
git checkout -b docs/design-system
```

---

# Commits

## Commit 1

Após criar a estrutura inicial:

```bash
git add src/design-system
git commit -m "docs(design-system): define initial architecture"
```

---

## Commit 2

Após concluir a documentação:

```bash
git add .
git commit -m "docs(design-system): document architecture guidelines"
```

---

# Push

```bash
git push -u origin docs/design-system
```

---

# Pull Request

## Título

```text
docs: define Design System architecture
```

## Descrição

```markdown
## Objetivo

Definir a arquitetura e as convenções do Design System que servirão como base para todos os componentes reutilizáveis da aplicação.

---

## O que foi realizado

- Definição da estrutura inicial.
- Organização por responsabilidades.
- Definição das convenções.
- Estabelecimento dos princípios de reutilização, composição e acessibilidade.

---

## Como validar

1. Conferir a estrutura proposta.
2. Verificar se as responsabilidades estão claramente definidas.
3. Confirmar que nenhum componente de negócio faz parte do Design System.

---

## Checklist

- [ ] Estrutura documentada.
- [ ] Convenções definidas.
- [ ] Responsabilidades estabelecidas.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/design-system
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estrutura do Design System definida.
- [ ] Convenções documentadas.
- [ ] Responsabilidades estabelecidas.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma arquitetura sólida para o Design System, definindo como seus componentes serão organizados, evoluirão e serão reutilizados ao longo do desenvolvimento.

Essa base garantirá consistência, previsibilidade e facilitará a futura documentação dos componentes no Storybook.

---

# Próxima etapa

➡️ **16 - Tema e Design Tokens**

Na próxima etapa serão definidos os Design Tokens da aplicação, estabelecendo a base visual compartilhada por todo o projeto, incluindo cores, tipografia, espaçamentos, bordas, sombras, elevações, breakpoints e demais propriedades utilizadas pelo tema. Esses tokens servirão como única fonte de verdade para a construção dos componentes do Design System e para a implementação dos modos claro e escuro, garantindo consistência, escalabilidade e facilidade de manutenção.

[Tema e Design Tokens](./16-theme-and-design-tokens.md)

# 17 - Arquitetura dos Componentes

> **Objetivo desta etapa**
>
> Definir a arquitetura dos componentes React da aplicação, estabelecendo padrões de organização, composição, responsabilidades e reutilização para garantir um código consistente, escalável e de fácil manutenção.

---

# Pré-requisitos

Antes de iniciar esta etapa, toda a infraestrutura do projeto deverá estar concluída.

Esta documentação depende diretamente das etapas anteriores, pois utilizará toda a base arquitetural, convenções e padrões definidos anteriormente.

Certifique-se de que os seguintes documentos foram concluídos:

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

---

# Por que agora?

Até este ponto do projeto toda a infraestrutura necessária para o desenvolvimento da aplicação já foi preparada.

Já possuímos:

- estrutura de diretórios;
- padronização de código;
- ferramentas de qualidade;
- sistema de temas;
- Design Tokens;
- Design System;
- roteamento;
- internacionalização.

Entretanto, ainda não foi definido como os componentes React deverão ser organizados.

Sem essa definição, é comum que um projeto cresça de maneira desorganizada.

Alguns problemas bastante comuns são:

- componentes gigantes;
- componentes duplicados;
- estilos repetidos;
- mistura entre interface e regra de negócio;
- dificuldade para manutenção;
- dificuldade para reutilização.

O objetivo desta etapa é justamente evitar esses problemas.

Ao invés de começar criando componentes aleatoriamente, primeiro será definida toda a arquitetura que deverá ser seguida durante o restante do projeto.

Esta documentação servirá como guia para qualquer componente criado futuramente.

Nenhum componente definitivo será desenvolvido nesta etapa.

---

# Objetivo

Ao finalizar esta etapa, deverão estar definidos:

- organização dos componentes;
- responsabilidades;
- convenções de nomenclatura;
- estrutura de diretórios;
- padrão de arquivos;
- padrão de exportação;
- padrão de estilização;
- separação entre lógica e apresentação;
- critérios de reutilização.

Ao final desta etapa ainda não existirão componentes reais da aplicação.

Todo o desenvolvimento ocorrerá nas próximas etapas utilizando esta arquitetura como referência.

---

# Estrutura esperada

Ao concluir esta etapa, a estrutura de componentes deverá estar preparada da seguinte forma.

```text
src/
│
├── components/
│   │
│   ├── ui/
│   │
│   ├── layout/
│   │
│   ├── feedback/
│   │
│   ├── forms/
│   │
│   ├── navigation/
│   │
│   ├── sections/
│   │
│   └── index.ts
```

Cada categoria possuirá apenas componentes relacionados à sua responsabilidade.

Componentes específicos de páginas ou regras de negócio não deverão ficar dentro desta estrutura.

Esses componentes serão criados próximos às funcionalidades onde forem utilizados.

---

# Organização dos diretórios

Cada componente deverá possuir sua própria pasta.

Mesmo componentes pequenos deverão seguir essa organização.

Exemplo:

```text
src/
│
├── components/
│
├── ui/
│   │
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.styles.ts
│   │   ├── Button.types.ts
│   │   └── index.ts
│   │
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.styles.ts
│   │   ├── Card.types.ts
│   │   └── index.ts
│   │
│   └── index.ts
```

Essa estrutura facilita:

- localização dos arquivos;
- escalabilidade;
- organização;
- manutenção;
- reutilização.

Mesmo que inicialmente apenas o arquivo `Button.tsx` seja necessário, a estrutura completa deverá ser preservada.

Dessa forma não será necessário reorganizar diretórios quando o componente crescer.

---

# Estrutura interna dos componentes

Todos os componentes deverão seguir exatamente a mesma estrutura.

```text
Button/
│
├── Button.tsx
├── Button.styles.ts
├── Button.types.ts
└── index.ts
```

Cada arquivo possui uma responsabilidade específica.

| Arquivo          | Responsabilidade                     |
| ---------------- | ------------------------------------ |
| Button.tsx       | Implementação do componente          |
| Button.styles.ts | Estilos utilizando Styled Components |
| Button.types.ts  | Interfaces e tipos TypeScript        |
| index.ts         | Exportação pública do componente     |

Mesmo que algum arquivo possua poucas linhas inicialmente, sua existência mantém a padronização da arquitetura.

---

````
# Princípios

Todos os componentes desenvolvidos para este projeto deverão seguir os princípios descritos nesta seção.

Esses princípios definem como um componente deve ser construído, independentemente de sua categoria.

Seguir essas diretrizes garante que toda a aplicação mantenha uma arquitetura consistente, previsível e de fácil manutenção.

---

## Responsabilidade única

Cada componente deverá possuir apenas uma responsabilidade claramente definida.

Isso significa que um componente deve resolver apenas um problema.

Quando um componente começar a assumir diversas responsabilidades, ele deverá ser dividido em componentes menores.

Exemplos de boas responsabilidades:

- exibir um botão;
- renderizar um card;
- exibir um avatar;
- renderizar um campo de texto.

Exemplos de más responsabilidades:

- renderizar um formulário completo;
- validar regras de negócio;
- consumir APIs;
- controlar autenticação;
- realizar cálculos complexos.

Um componente pequeno é muito mais simples de:

- reutilizar;
- testar;
- manter;
- documentar.

---

## Separação entre apresentação e lógica

A camada de interface nunca deverá conhecer regras de negócio.

Toda lógica deverá permanecer em:

- hooks;
- services;
- providers;
- contextos;
- utilitários.

O componente deverá apenas receber informações através das propriedades (Props) e renderizar a interface.

### Correto

```tsx
export function UserCard({ name, email }: UserCardProps) {
  return (
    <Container>
      <h2>{name}</h2>
      <p>{email}</p>
    </Container>
  );
}
```

Neste exemplo o componente apenas exibe informações.

---

### Incorreto

```tsx
export function UserCard() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch('/api/user')
      .then((response) => response.json())
      .then(setUser);
  }, []);

  return (
    <Container>
      <h2>{user?.name}</h2>
    </Container>
  );
}
```

Neste caso o componente passou a conhecer como os dados são obtidos.

Essa responsabilidade deverá permanecer fora da camada de apresentação.

---

## Composição acima de herança

Os componentes deverão ser construídos utilizando composição.

Ao invés de criar componentes enormes contendo todas as funcionalidades possíveis, componentes menores deverão ser combinados para formar componentes maiores.

### Exemplo

Ao invés de criar um componente enorme:

```text
HeroComplete
```

Será preferível compor a interface utilizando componentes menores.

```tsx
<HeroSection>
  <HeroContent />
  <HeroImage />
  <HeroActions />
</HeroSection>
```

Cada componente possui apenas uma responsabilidade.

Isso torna o código muito mais reutilizável.

---

## Reutilização

Antes de criar qualquer componente novo, verificar se já existe algum componente capaz de atender aquela necessidade.

Pergunte sempre:

- Já existe algo parecido?
- Posso reutilizar?
- Posso compor?
- Posso estender?

Evite criar componentes praticamente iguais.

---

### Correto

```text
Button
```

Utilizado em dezenas de telas.

---

### Incorreto

```text
LoginButton
RegisterButton
ContactButton
AboutButton
```

Quando todos fazem exatamente a mesma coisa.

Neste cenário, apenas o componente `Button` deverá existir.

---

## Acessibilidade

Todos os componentes deverão nascer acessíveis.

Não tratar acessibilidade como melhoria futura.

Sempre considerar:

- foco visível;
- navegação por teclado;
- HTML semântico;
- contraste adequado;
- atributos ARIA quando necessários.

---

### Correto

```tsx
<button type="button">Salvar</button>
```

---

### Incorreto

```tsx
<div onClick={save}>Salvar</div>
```

Sempre que existir um elemento HTML específico para determinada ação, ele deverá ser utilizado.

---

# Categorias de Componentes

A arquitetura divide os componentes em categorias.

Cada categoria possui uma responsabilidade muito bem definida.

Essa organização evita que componentes de naturezas diferentes fiquem misturados.

---

# UI

A pasta `ui` contém os componentes mais básicos da aplicação.

São componentes totalmente reutilizáveis.

Não conhecem regras de negócio.

Não conhecem páginas.

Não conhecem contexto.

São apenas componentes visuais.

Estrutura esperada:

```text
src/
│
└── components/
    │
    └── ui/
        │
        ├── Button/
        ├── Card/
        ├── Badge/
        ├── Avatar/
        ├── Chip/
        └── index.ts
```

---

## Exemplo de implementação

### Button.types.ts

```tsx
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
```

---

### Button.styles.ts

```tsx
import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.white};
`;
```

---

### Button.tsx

```tsx
import { Container } from './Button.styles';
import type { ButtonProps } from './Button.types';

export function Button({ children, ...props }: ButtonProps) {
  return <Container {...props}>{children}</Container>;
}
```

---

### index.ts

```tsx
export { Button } from './Button';
```

O componente acima representa um exemplo mínimo da arquitetura esperada.

Nas próximas etapas, novos recursos poderão ser adicionados sem alterar sua organização.

---
````

````
# Layout

Os componentes da categoria `layout` são responsáveis exclusivamente pela organização visual da interface.

Eles não possuem conhecimento sobre regras de negócio nem sobre o conteúdo que está sendo exibido.

Seu objetivo é organizar como os elementos são distribuídos na tela.

São responsáveis por definir:

- largura;
- alinhamento;
- espaçamento;
- direção dos elementos;
- distribuição dos blocos da interface.

Estrutura esperada:

```text
src/
│
└── components/
    │
    └── layout/
        │
        ├── Container/
        ├── Stack/
        ├── Grid/
        ├── Section/
        └── index.ts
```

---

## Exemplo de implementação

### Container.types.ts

```tsx
import { HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
```

---

### Container.styles.ts

```tsx
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  width: ${({ theme }) => theme.width.min};
  margin: ${({ theme }) => theme.spacing.sm} auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
`;
```

---

### Container.tsx

```tsx
import { Wrapper } from './Container.styles';
import type { ContainerProps } from './Container.types';

export function Container({ children, ...props }: ContainerProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
```

---

### index.ts

```tsx
export { Container } from './Container';
```

O componente `Container` deverá ser utilizado sempre que for necessário limitar a largura do conteúdo da aplicação.

---

# Feedback

A categoria `feedback` reúne componentes responsáveis por comunicar estados da aplicação ao usuário.

Esses componentes não possuem conhecimento da regra de negócio que originou determinado estado.

Sua responsabilidade limita-se apenas à exibição da informação.

Exemplos futuros:

- Toast;
- Alert;
- Spinner;
- Skeleton;
- EmptyState.

Estrutura esperada:

```text
src/
│
└── components/
    │
    └── feedback/
        │
        ├── Alert/
        ├── Spinner/
        ├── Skeleton/
        ├── EmptyState/
        └── index.ts
```

---

## Exemplo de implementação

### Spinner.styles.ts

```tsx
import styled from 'styled-components';

export const Loader = styled.div`
  width: 2rem;
  height: 2rem;

 border: ${({ theme }) => theme.spacing.xs} solid
    ${({ theme }) => theme.colors.border.primary};
  border-top-color: ${({ theme }) => theme.colors.border.secondary};

  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
```

---

### Spinner.tsx

```tsx
import * as S from './Spinner.styles';

export function Spinner() {
  return <S.Loader />;
}
```

---

### index.ts

```tsx
export { Spinner } from './Spinner';
```

O componente acima representa apenas um exemplo da arquitetura utilizada pelos componentes de feedback.

---

# Forms

A categoria `forms` concentra todos os componentes relacionados à entrada de dados.

Esses componentes deverão ser reutilizados em qualquer formulário existente na aplicação.

Exemplos futuros:

- Input;
- TextArea;
- Select;
- Checkbox;
- Radio;
- Switch.

Estrutura esperada:

```text
src/
│
└── components/
    │
    └── forms/
        │
        ├── Input/
        ├── TextArea/
        ├── Select/
        ├── Checkbox/
        ├── Switch/
        └── index.ts
```

---

## Exemplo de implementação

### Input.types.ts

```tsx
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
```

---

### Input.styles.ts

```tsx
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Field = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

 border: ${({ theme }) => theme.spacing.xs} solid
    ${({ theme }) => theme.colors.border.primary};

  background: ${({ theme }) => theme.colors.background.primary};

  color: ${({ theme }) => theme.colors.text.primary};
`;
```

---

### Input.tsx

```tsx
import * as S from './Input.styles';
import type { InputProps } from './Input.types';

export function Input({ label, error, ...props }: InputProps) {
  return (
    <S.Wrapper>
      {label && <label>{label}</label>}

      <S.Field {...props} />

      {error && <small>{error}</small>}
    </S.Wrapper>
  );
}
```

---

### index.ts

```tsx
export { Input } from './Input';
```

Todos os componentes de formulário deverão seguir essa mesma organização de arquivos.

---
````

````

# Navigation

Os componentes da categoria `navigation` são responsáveis por toda a navegação da aplicação.

Seu objetivo é permitir que o usuário navegue entre páginas, seções ou funcionalidades de forma consistente.

Esses componentes não deverão conhecer regras de negócio da aplicação.

Sua responsabilidade limita-se exclusivamente à construção da interface de navegação.

Exemplos futuros:

- Navbar;
- Sidebar;
- Breadcrumb;
- Pagination.

Estrutura esperada:

```text
src/
│
└── components/
    │
    └── navigation/
        │
        ├── Navbar/
        ├── Sidebar/
        ├── Breadcrumb/
        ├── Pagination/
        └── index.ts
```

---

## Exemplo de implementação

### Navbar.types.ts

```tsx
import { HTMLAttributes } from 'react';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
```

---

### Navbar.styles.ts

```tsx
import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

   background: ${({ theme }) => theme.colors.background.primary};
`;
```

---

### Navbar.tsx

```tsx
import { Wrapper } from './Navbar.styles';
import type { NavbarProps } from './Navbar.types';

export function Navbar({ children, ...props }: NavbarProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
```

---

### index.ts

```tsx
export { Navbar } from './Navbar';
```

Todos os componentes da categoria `navigation` deverão seguir essa mesma organização de arquivos.

---

# Sections

A categoria `sections` agrupa blocos completos reutilizáveis utilizados para compor páginas da aplicação.

Diferentemente dos componentes presentes em `ui`, que representam elementos isolados da interface, as seções são compostas por diversos componentes menores.

Uma seção normalmente representa uma parte inteira de uma página.

Exemplos futuros:

- HeroSection;
- AboutSection;
- SkillsSection;
- ProjectsSection;
- ContactSection;
- FooterSection.

Estrutura esperada:

```text
src/
│
└── components/
    │
    └── sections/
        │
        ├── HeroSection/
        ├── AboutSection/
        ├── ContactSection/
        ├── FooterSection/
        └── index.ts
```

---

## Exemplo de implementação

### HeroSection.types.ts

```tsx
import { HTMLAttributes } from 'react';

export interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle: string;
}
```

---

### HeroSection.styles.ts

```tsx
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 8rem 0;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  max-width: 40rem;
`;
```

---

### HeroSection.tsx

```tsx
import * as S from './HeroSection.styles';

import type { HeroSectionProps } from './HeroSection.types';

export function HeroSection({ title, subtitle, ...props }: HeroSectionProps) {
  return (
    <S.Wrapper {...props}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
}
```

---

### index.ts

```tsx
export { HeroSection } from './HeroSection';
```

As seções deverão ser construídas utilizando componentes já existentes nas demais categorias, sempre priorizando composição e reutilização.

---

# index.ts das categorias

Cada categoria deverá possuir um arquivo `index.ts` responsável por centralizar as exportações públicas dos seus componentes.

Isso evita imports profundos e simplifica a utilização dos componentes ao longo da aplicação.

Exemplo da categoria `ui`:

```text
src/
│
└── components/
    │
    └── ui/
        │
        ├── Button/
        ├── Card/
        ├── Avatar/
        ├── Badge/
        └── index.ts
```

---

### ui/index.ts

```tsx
export * from './Button';
export * from './Card';
export * from './Avatar';
export * from './Badge';
```

---

Da mesma forma, o diretório principal `components` deverá possuir um arquivo responsável por reunir todas as categorias.

Estrutura:

```text
src/
│
└── components/
    │
    ├── ui/
    ├── layout/
    ├── feedback/
    ├── forms/
    ├── navigation/
    ├── sections/
    └── index.ts
```

---

### components/index.ts

```tsx
export * from './ui';
export * from './layout';
export * from './feedback';
export * from './forms';
export * from './navigation';
export * from './sections';
```

Com essa organização, qualquer componente poderá ser importado diretamente do diretório principal.

Exemplo:

```tsx
import { Button, Container, Input, Navbar } from '@/components';
```

Essa abordagem reduz o acoplamento com a estrutura interna dos diretórios e facilita futuras reorganizações da arquitetura.

---
````

````
# Convenções

Todos os componentes desenvolvidos para este projeto deverão seguir as convenções descritas nesta seção.

A padronização reduz inconsistências, melhora a legibilidade do código e facilita a manutenção da aplicação ao longo do tempo.

Essas convenções deverão ser aplicadas independentemente da categoria do componente.

---

## Nome dos componentes

Todos os componentes React deverão utilizar a convenção **PascalCase**.

Cada palavra que compõe o nome do componente deverá iniciar com letra maiúscula.

Exemplos:

```text
Button
Card
Avatar
Navbar
HeroSection
LoadingSpinner
```

Evitar nomes genéricos como:

```text
Component
Item
Box
Object
```

O nome do componente deverá deixar clara sua responsabilidade.

---

## Nome das pastas

Cada componente deverá possuir uma pasta própria.

O nome da pasta deverá ser exatamente igual ao nome do componente.

Exemplo:

```text
Button/
Card/
Navbar/
HeroSection/
```

---

## Nome dos arquivos

Os arquivos internos deverão seguir exatamente o nome do componente.

Exemplo utilizando o componente **Button**.

```text
Button/
│
├── Button.tsx
├── Button.styles.ts
├── Button.types.ts
└── index.ts
```

Cada arquivo possui uma responsabilidade específica.

| Arquivo          | Responsabilidade            |
| ---------------- | --------------------------- |
| Button.tsx       | Implementação do componente |
| Button.styles.ts | Estilos do componente       |
| Button.types.ts  | Interfaces e tipos          |
| index.ts         | Exportação pública          |

Caso o componente ainda seja muito pequeno, alguns desses arquivos poderão possuir poucas linhas de código.

Mesmo assim, a estrutura deverá ser mantida para preservar a padronização da arquitetura.

---

## Props

Todas as propriedades deverão ser tipadas utilizando TypeScript.

As interfaces deverão permanecer em um arquivo separado.

Exemplo:

### Button.types.ts

```tsx
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  variant?: 'primary' | 'secondary';

  fullWidth?: boolean;
}
```

---

O componente utilizará essa interface da seguinte maneira.

### Button.tsx

```tsx
import { Container } from './Button.styles';

import type { ButtonProps } from './Button.types';

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <Container $variant={variant} $fullWidth={fullWidth} {...props}>
      {children}
    </Container>
  );
}
```

Sempre que possível, as interfaces deverão estender os atributos nativos do elemento HTML correspondente.

Isso evita recriar propriedades já existentes do React.

---

## Estilos

Todos os estilos deverão permanecer exclusivamente no arquivo:

```text
NomeDoComponente.styles.ts
```

Exemplo:

```text
Button.styles.ts
```

Utilizando Styled Components.

```tsx
import styled, { css } from 'styled-components';

interface ButtonStyleProps {
  $variant: 'primary' | 'secondary';
  $fullWidth: boolean;
}

export const Container = styled.button<ButtonStyleProps>`
  padding: 0.75rem 1.5rem;

  border: none;

  border-radius: 0.5rem;

  cursor: pointer;

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ theme, $variant }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.background.primary};
          color: ${theme.colors.text.primary};
        `
      : css`
          background: transparent;
          color: ${theme.colors.text.secondary};
          border: 1px solid ${theme.colors.border.secondary};
        `}
`;

```

Nenhum estilo deverá ser escrito diretamente no componente React.

---

## Exportações

Cada componente deverá possuir seu próprio arquivo `index.ts`.

Exemplo:

```tsx
export { Button } from './Button';
```

Posteriormente, a categoria deverá centralizar todas as exportações.

Exemplo:

```tsx
export * from './Button';
export * from './Card';
export * from './Avatar';
```

Por fim, o diretório principal `components` também deverá centralizar todas as categorias.

```tsx
export * from './ui';
export * from './layout';
export * from './feedback';
export * from './forms';
export * from './navigation';
export * from './sections';
```

Essa abordagem evita imports profundos e desacopla o restante da aplicação da estrutura interna dos diretórios.

---

# Regras de desenvolvimento

As regras desta seção deverão ser respeitadas durante todo o desenvolvimento da aplicação.

Elas complementam os princípios arquiteturais definidos anteriormente.

---

## Componentes não acessam APIs

Nenhum componente deverá realizar chamadas HTTP.

Exemplo incorreto:

```tsx
useEffect(() => {
  fetch('/api/users');
}, []);
```

Essa responsabilidade deverá permanecer em hooks ou serviços.

Exemplo:

```tsx
const { users } = useUsers();
```

O componente deverá apenas receber os dados necessários.

---

## Componentes não conhecem regras de negócio

Toda regra de negócio deverá permanecer fora da camada de apresentação.

Exemplo incorreto:

```tsx
if (user.role === 'admin') {
  ...
}
```

Sempre que possível, o componente deverá receber apenas o resultado da regra de negócio.

Exemplo:

```tsx
<UserMenu canEdit={canEdit} />
```

Dessa forma o componente não conhece como aquela decisão foi tomada.

---

## Componentes consomem Design Tokens

Nenhum componente deverá utilizar valores fixos para:

- cores;
- fontes;
- espaçamentos;
- sombras;
- bordas;
- animações.

Exemplo incorreto:

```tsx
background: #f5df4e;
```

Exemplo correto:

```tsx
background: ${({ theme }) => theme.colors.primary};
```

Todos os valores deverão ser obtidos exclusivamente através do tema.

---

## Evitar duplicação

Antes de criar um novo componente, verificar se já existe um componente semelhante.

Perguntas recomendadas:

- Posso reutilizar?
- Posso compor?
- Posso parametrizar?
- Posso estender?

Somente criar um novo componente quando realmente existir uma nova responsabilidade.

---

# Validação

Antes de concluir esta etapa, confirmar os seguintes itens.

- [ ] Arquitetura documentada.
- [ ] Estrutura dos componentes definida.
- [ ] Categorias organizadas.
- [ ] Convenções documentadas.
- [ ] Responsabilidades estabelecidas.
- [ ] Padrões de desenvolvimento definidos.
- [ ] Estrutura preparada para implementação.

Nenhum componente definitivo deverá existir ao final desta etapa.

---

# Arquivos criados

Nenhum.

Esta etapa possui caráter exclusivamente arquitetural e documental.

---

# Arquivos alterados

Nenhum.

---

# Arquivos removidos

Nenhum.

---

# Branch

Atualizar a `main`.

```bash
git checkout main
git pull origin main
```

Criar a branch desta etapa.

```bash
git checkout -b docs/component-architecture
```

---

# Commits

## Commit 1

Após concluir toda a documentação.

```bash
git add .
git commit -m "docs(components): define component architecture"
```

---

# Push

```bash
git push -u origin docs/component-architecture
```

---

# Pull Request

## Título

```text
docs: define component architecture
```

## Descrição

```markdown
## Objetivo

Definir a arquitetura dos componentes React da aplicação.

---

## O que foi realizado

- Definição das categorias de componentes.
- Convenções de organização.
- Estrutura de diretórios.
- Padrões de implementação.
- Regras de reutilização.
- Diretrizes para separação entre apresentação e lógica.

---

## Como validar

1. Revisar toda a documentação.
2. Confirmar que todas as convenções estão claras.
3. Validar se a arquitetura está alinhada ao Design System.

---

## Checklist

- [ ] Convenções definidas.
- [ ] Estrutura organizada.
- [ ] Responsabilidades documentadas.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/component-architecture
```

Remover também a branch remota correspondente.

---

# Critérios para considerar esta etapa concluída

- [ ] Arquitetura documentada.
- [ ] Estrutura dos componentes definida.
- [ ] Convenções estabelecidas.
- [ ] Responsabilidades documentadas.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma arquitetura de componentes completamente documentada, definindo padrões para organização, nomenclatura, composição, reutilização e desenvolvimento.

Todos os componentes implementados nas próximas etapas deverão seguir obrigatoriamente as diretrizes estabelecidas neste documento, garantindo consistência, escalabilidade e facilidade de manutenção durante todo o ciclo de vida da aplicação.

---

# Próxima etapa

➡️ **18 - Desenvolvimento da SPA**

Na próxima etapa será definido o plano de implementação da Single Page Application, estabelecendo a ordem de construção das seções, a estratégia de desenvolvimento incremental, os critérios de validação e a sequência recomendada para implementar cada parte da interface sem comprometer a arquitetura construída até aqui.

[Desenvolvimento da SPA](./18-spa-development.md)
````

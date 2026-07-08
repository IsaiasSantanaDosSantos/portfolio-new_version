# 14 - Internacionalização

> **Objetivo desta etapa**
>
> Configurar a infraestrutura de internacionalização da aplicação utilizando i18next, preparando o projeto para suportar múltiplos idiomas, tanto para textos estáticos quanto, futuramente, para conteúdos dinâmicos provenientes do backend.

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

---

# Por que agora?

A internacionalização faz parte da arquitetura da aplicação.

Configurá-la antes da implementação da interface evita retrabalho e garante que todos os componentes já sejam desenvolvidos preparados para múltiplos idiomas.

Nesta etapa será criada apenas a infraestrutura da internacionalização.

Os conteúdos dinâmicos do Dashboard serão integrados futuramente.

---

# Objetivo

Ao concluir esta etapa, o projeto deverá possuir:

- i18next configurado.
- react-i18next configurado.
- Detecção automática do idioma do navegador.
- Estrutura inicial de traduções.
- Provider integrado à aplicação.
- Idioma padrão definido.

Nenhuma tela será traduzida nesta etapa.

---

# Princípios

## Separação de responsabilidades

Os arquivos de tradução deverão conter apenas textos estáticos da interface.

Conteúdos dinâmicos permanecerão sob responsabilidade do backend.

---

## Escalabilidade

A estrutura deverá suportar naturalmente novos idiomas sem necessidade de reorganização.

---

## Evolução incremental

A integração entre internacionalização e Dashboard será realizada em etapas futuras.

---

# Dependências

Instalar:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

---

# Estrutura esperada

Ao concluir esta etapa, a estrutura deverá estar semelhante a:

```text
src/
│
├── translations/
│   ├── index.ts
│   ├── i18n.ts
│   │
│   ├── pt-BR/
│   │   └── common.json
│   │
│   ├── en/
│   │   └── common.json
│   │
│   └── es/
│       └── common.json
```

---

# Etapa 1 — Instalar as dependências

Executar:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

Ao final da instalação, as dependências deverão aparecer no arquivo `package.json`.

---

# Etapa 2 — Criar a estrutura de arquivos

Criar a seguinte estrutura:

```text
src/
└── translations/
    ├── index.ts
    ├── i18n.ts
    ├── pt-BR/
    │   └── common.json
    ├── en/
    │   └── common.json
    └── es/
        └── common.json
```

Inicialmente será utilizado apenas o namespace `common`.

Cada pasta representa um idioma suportado pela aplicação.

---

# Etapa 3 — Criar os arquivos de tradução

## pt-BR/common.json

```json
{
  "hello": "Olá"
}
```

## en/common.json

```json
{
  "hello": "Hello"
}
```

## es/common.json

```json
{
  "hello": "Hola"
}
```

Esses arquivos armazenam as traduções de cada idioma.

Cada chave deve possuir exatamente o mesmo nome em todos os arquivos, alterando apenas o valor traduzido.

---

# Etapa 4 — Configurar o i18next

Criar o arquivo `src/translations/i18n.ts` com a configuração inicial do i18next.

Conteúdo do arquivo:

```ts
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import ptBR from './pt-BR/common.json';
import en from './en/common.json';
import es from './es/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        common: ptBR,
      },
      en: {
        common: en,
      },
      es: {
        common: es,
      },
    },

    lng: 'pt-BR',

    fallbackLng: 'pt-BR',

    supportedLngs: ['pt-BR', 'en', 'es'],

    defaultNS: 'common',

    ns: ['common'],

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

### Explicação da configuração

| Propriedade                 | Finalidade                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------- |
| `resources`                 | Carrega todos os arquivos de tradução da aplicação.                                 |
| `lng`                       | Define o idioma inicial da aplicação (`pt-BR`).                                     |
| `fallbackLng`               | Idioma utilizado caso uma tradução não seja encontrada.                             |
| `supportedLngs`             | Lista de idiomas oficialmente suportados pela aplicação.                            |
| `defaultNS`                 | Define o namespace padrão utilizado nas traduções.                                  |
| `ns`                        | Lista de namespaces carregados inicialmente.                                        |
| `interpolation.escapeValue` | Desabilita o escape de HTML, pois o React já realiza essa proteção automaticamente. |

Ao final desta etapa, o i18next estará configurado para:

- utilizar português do Brasil como idioma padrão;
- detectar automaticamente o idioma do navegador quando possível;
- utilizar `pt-BR` como idioma de fallback;
- carregar o namespace `common`;
- disponibilizar as traduções para toda a aplicação através do `react-i18next`.

O arquivo deverá exportar a instância configurada do i18next utilizando:

```ts
export default i18n;
```

---

# Etapa 5 — Criar o arquivo de exportação

No arquivo `src/translations/index.ts`, realizar apenas a importação da configuração criada anteriormente.

Exemplo:

```ts
import './i18n';
```

Esse arquivo será utilizado para inicializar toda a configuração de internacionalização da aplicação.

---

# Etapa 6 — Integrar ao projeto

No ponto de entrada da aplicação (normalmente `main.tsx`), importar:

```ts
import './translations';
```

Essa importação garante que o i18next seja inicializado antes da renderização da aplicação.

Não é necessário criar nenhum Provider adicional, pois o `react-i18next` integra-se automaticamente após a inicialização.

---

# Etapa 7 — Validar a configuração

Criar temporariamente uma chave de tradução:

```json
{
  "hello": "Olá"
}
```

Em seguida, utilizar o hook do `react-i18next` em qualquer componente para verificar se a tradução está sendo carregada corretamente.

Exemplo:

```tsx
const { t } = useTranslation();

return <h1>{t('hello')}</h1>;
```

Se a configuração estiver correta, o texto será exibido conforme o idioma ativo.

Após validar o funcionamento, manter apenas as traduções que fizerem sentido para a aplicação.

# Validação

Confirmar:

- [ ] i18next instalado.
- [ ] react-i18next instalado.
- [ ] Detector funcionando.
- [ ] Provider configurado.
- [ ] Traduções funcionando.
- [ ] Projeto compilando normalmente.

Executar:

```bash
npm run dev
```

Depois:

```bash
npm run lint
```

---

# Arquivos criados

- `src/translations/index.ts`
- `src/translations/i18n.ts`
- `src/translations/pt-BR/common.json`
- `src/translations/en/common.json`
- `src/translations/es/common.json`

---

# Arquivos alterados

- `src/main.tsx`

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
git checkout -b chore/internationalization
```

---

# Commits

## Commit 1

Após instalar as dependências:

```bash
git add package.json package-lock.json
git commit -m "chore(i18n): install internationalization dependencies"
```

---

## Commit 2

Após criar a estrutura:

```bash
git add src/translations
git commit -m "chore(i18n): create translation infrastructure"
```

---

## Commit 3

Após integrar à aplicação:

```bash
git add src/main.tsx src/translations
git commit -m "chore(i18n): configure application internationalization"
```

---

## Commit 4

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(i18n): validate internationalization setup"
```

---

# Push

```bash
git push -u origin chore/internationalization
```

---

# Pull Request

## Título

```text
chore: configure internationalization
```

## Descrição

```markdown
## Objetivo

Configurar a infraestrutura de internacionalização da aplicação utilizando i18next.

---

## O que foi realizado

- Instalação do i18next.
- Configuração do react-i18next.
- Configuração do detector de idioma.
- Criação da estrutura de traduções.
- Integração com a aplicação.
- Validação da configuração.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Alterar o idioma do navegador (ou forçar outro idioma na configuração do i18next).
4. Confirmar que as traduções são carregadas corretamente.
5. Executar `npm run lint`.

---

## Checklist

- [ ] i18next configurado.
- [ ] Estrutura criada.
- [ ] Traduções funcionando.
- [ ] Projeto validado.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d chore/internationalization
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] i18next instalado.
- [ ] Estrutura criada.
- [ ] Provider configurado.
- [ ] Traduções funcionando.
- [ ] Projeto compilando.
- [ ] Projeto sem erros de lint.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.

---

# Resultado esperado

Ao concluir esta etapa, a aplicação possuirá uma infraestrutura sólida de internacionalização, preparada para suportar múltiplos idiomas de forma escalável.

A arquitetura permitirá que, nas etapas futuras, os textos estáticos sejam traduzidos através do i18next, enquanto os conteúdos dinâmicos poderão ser internacionalizados por meio da integração com o backend, sem necessidade de alterações estruturais.

---

# Próxima etapa

➡️ **15 - Design System**

Na próxima etapa será definida a arquitetura do Design System, estabelecendo seus princípios, organização, convenções e a estrutura dos componentes reutilizáveis que servirão de base para toda a interface da aplicação.

[Design System](./15-design-system.md)

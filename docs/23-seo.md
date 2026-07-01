# 23 - SEO

> **Objetivo desta etapa**
>
> Definir a estratégia de otimização para mecanismos de busca (SEO), garantindo que a aplicação seja facilmente indexada, compartilhável em redes sociais e alinhada às boas práticas de performance, acessibilidade e estrutura semântica.

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
- ✅ 20 - Firebase
- ✅ 21 - Testes
- ✅ 22 - Storybook

---

# Por que agora?

Após definir a arquitetura da aplicação, seus componentes e a estratégia de desenvolvimento, é necessário estabelecer diretrizes para garantir que o portfólio seja facilmente encontrado por mecanismos de busca e apresente uma boa experiência quando compartilhado em diferentes plataformas.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Estratégia de SEO.
- Estrutura de metadados.
- Estratégia para compartilhamento em redes sociais.
- Boas práticas de HTML semântico.
- Diretrizes para indexação.

A implementação ocorrerá durante o desenvolvimento das funcionalidades da aplicação.

---

# Princípios

## SEO desde o início

Toda página e rota deverá ser desenvolvida considerando requisitos de SEO desde sua implementação.

---

## HTML semântico

Priorizar elementos semânticos, como:

- `header`
- `main`
- `section`
- `article`
- `nav`
- `aside`
- `footer`

Evitar estruturas genéricas quando houver elementos específicos para a mesma finalidade.

---

## Conteúdo acessível

O conteúdo deverá ser compreensível tanto para usuários quanto para mecanismos de busca.

---

## Metadados consistentes

Todos os metadados deverão permanecer atualizados e refletir fielmente o conteúdo apresentado.

---

# Metadados

Cada rota deverá possuir, sempre que aplicável:

- Title
- Meta Description
- Canonical URL
- Open Graph
- Twitter Card
- Favicon
- Theme Color

Os títulos e descrições deverão ser únicos e descritivos.

---

# Compartilhamento

A aplicação deverá fornecer pré-visualizações consistentes ao ser compartilhada em plataformas como:

- LinkedIn
- GitHub
- WhatsApp
- X (Twitter)
- Facebook

As imagens utilizadas deverão possuir dimensões adequadas para Open Graph.

---

# Dados estruturados

Sempre que possível, utilizar marcações estruturadas (Schema.org) para fornecer informações adicionais aos mecanismos de busca.

Exemplos:

- Person
- WebSite
- BreadcrumbList
- Project

---

# Robots e Sitemap

A aplicação deverá disponibilizar:

- `robots.txt`
- `sitemap.xml`

Esses arquivos deverão ser mantidos atualizados sempre que houver alterações relevantes na estrutura pública do site.

---

# Internacionalização

Caso existam múltiplos idiomas disponíveis, a estratégia de SEO deverá considerar:

- URLs consistentes;
- idioma correto da página;
- metadados compatíveis com o idioma exibido.

---

# Boas práticas

- Utilizar apenas um elemento `<h1>` por página.
- Respeitar a hierarquia dos headings.
- Fornecer textos alternativos (`alt`) para imagens.
- Utilizar links descritivos.
- Evitar conteúdo duplicado.
- Garantir URLs amigáveis.

---

# O que evitar

Evitar:

- títulos genéricos;
- descrições duplicadas;
- imagens sem texto alternativo;
- excesso de palavras-chave;
- conteúdo oculto para mecanismos de busca.

---

# Ferramentas de validação

Após a implementação, validar utilizando:

- Lighthouse
- Google Rich Results Test
- Validador de dados estruturados
- Ferramentas de inspeção do navegador

---

# Validação

Confirmar:

- [ ] Estratégia documentada.
- [ ] Metadados definidos.
- [ ] Estrutura semântica estabelecida.
- [ ] Estratégia de compartilhamento documentada.

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
git checkout -b docs/seo-strategy
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(seo): define SEO strategy"
```

---

# Push

```bash
git push -u origin docs/seo-strategy
```

---

# Pull Request

## Título

```text
docs: define SEO strategy
```

## Descrição

```markdown
## Objetivo

Documentar a estratégia oficial de SEO da aplicação.

---

## O que foi realizado

- Definição da estratégia de SEO.
- Organização dos metadados.
- Estratégia de compartilhamento.
- Diretrizes para HTML semântico.
- Boas práticas para indexação.

---

## Como validar

1. Revisar a documentação.
2. Confirmar que os princípios de SEO estão claros.
3. Verificar o alinhamento com a arquitetura da aplicação.

---

## Checklist

- [ ] Estratégia documentada.
- [ ] Metadados definidos.
- [ ] Boas práticas estabelecidas.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/seo-strategy
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estratégia documentada.
- [ ] Convenções estabelecidas.
- [ ] Metadados definidos.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma estratégia consistente de SEO, preparada para melhorar sua visibilidade em mecanismos de busca, otimizar o compartilhamento em redes sociais e reforçar a qualidade estrutural da aplicação. As diretrizes estabelecidas servirão como referência durante toda a implementação, garantindo que aspectos relacionados à indexação e acessibilidade sejam considerados desde o início do desenvolvimento.

---

# Próxima etapa

➡️ **24 - Performance**

Na próxima etapa será definida a estratégia de otimização de desempenho da aplicação, incluindo carregamento de recursos, divisão de código (code splitting), otimização de imagens, lazy loading, caching, análise de métricas (Core Web Vitals) e boas práticas para garantir uma experiência rápida e eficiente aos usuários.  

[Performance](./24-performance.md)

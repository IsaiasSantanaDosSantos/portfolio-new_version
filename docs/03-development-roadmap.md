# 03 - Roadmap de Desenvolvimento

> **Objetivo desta etapa**
>
> Definir a sequência completa de implementação do projeto, garantindo que todas as funcionalidades sejam desenvolvidas na ordem correta, evitando retrabalho, dependências desnecessárias e mudanças estruturais durante o desenvolvimento.

---

# Pré-requisitos

- ✅ 01 - Visão Geral do Projeto
- ✅ 02 - Arquitetura Geral

---

# Objetivo do Roadmap

Este roadmap define a ordem oficial de desenvolvimento do projeto.

Nenhuma etapa deverá ser iniciada antes da conclusão da etapa anterior, salvo quando explicitamente indicado.

O objetivo é garantir que toda funcionalidade seja construída sobre uma base já consolidada.

---

# Objetivo do Roadmap

Este roadmap define a ordem oficial de desenvolvimento do projeto.

Nenhuma etapa deverá ser iniciada antes da conclusão da etapa anterior, salvo quando explicitamente indicado.

O objetivo é garantir que toda funcionalidade seja construída sobre uma base já consolidada.

---

# Observação Importante

Este roadmap apresenta a ordem conceitual das etapas de desenvolvimento e documentação do projeto.

Entretanto, algumas configurações de infraestrutura deverão ser implementadas antecipadamente para garantir um fluxo de desenvolvimento seguro desde o primeiro commit.

Em especial:

- A **Integração Contínua (CI)** deverá ser configurada logo após a conclusão do setup inicial do projeto.
- As pipelines deverão validar automaticamente, desde o início do desenvolvimento:
  - formatação do código;
  - lint;
  - tipagem TypeScript;
  - testes automatizados;
  - geração da build.
- A **Entrega Contínua (CD)** poderá ser implementada posteriormente, quando a aplicação estiver apta para publicação.

Essa antecipação da configuração de CI não altera a organização deste guia, apenas garante que todas as funcionalidades desenvolvidas ao longo do projeto sejam continuamente validadas por processos automatizados, reduzindo retrabalho e aumentando a confiabilidade do código.

---

# Princípios do Desenvolvimento

Durante todo o projeto serão seguidos os seguintes princípios.

## Desenvolvimento incremental

Cada etapa deverá entregar uma melhoria completa e funcional.

Nunca serão iniciadas múltiplas funcionalidades simultaneamente.

---

## Base antes de funcionalidades

Infraestrutura sempre será implementada antes das funcionalidades que dependem dela.

---

## Componentes antes de páginas

Nenhuma página deverá ser construída utilizando componentes improvisados.

Sempre que possível, os componentes deverão nascer primeiro no Design System.

---

## Layout antes de conteúdo dinâmico

A interface será desenvolvida inicialmente com dados estáticos.

Somente após sua conclusão será iniciada a integração com o banco de dados.

---

## Funcionalidade antes de otimização

O projeto deverá funcionar corretamente antes da implementação de otimizações de performance.

---

# Visão Geral das Fases

```text
Fase 01

Planejamento

↓

Fase 02

Setup

↓

Fase 03

Estrutura Base

↓

Fase 04

Design System

↓

Fase 05

Tema

↓

Fase 06

Roteamento

↓

Fase 07

Internacionalização

↓

Fase 08

Layouts

↓

Fase 09

Componentes Compartilhados

↓

Fase 10

Desenvolvimento da SPA

↓

Fase 11

Animações

↓

Fase 12

Responsividade

↓

Fase 13

SEO

↓

Fase 14

Testes

↓

Fase 15

Storybook

↓

Fase 16

Firebase

↓

Fase 17

Dashboard

↓

Fase 18

Integração dos Dados

↓

Fase 19

CI/CD

↓

Fase 20

Publicação
```

---

# Fase 01 — Planejamento

## Objetivo

Definir toda a documentação técnica do projeto.

## Entregáveis

- Visão Geral.
- Arquitetura.
- Roadmap.
- Git Workflow.

## Marco de conclusão

Toda a documentação inicial criada.

---

# Fase 02 — Setup

## Objetivo

Preparar completamente o ambiente de desenvolvimento.

## Entregáveis

- React.
- Vite.
- TypeScript.
- ESLint.
- Prettier.
- Husky.
- Commitlint.
- Jest.
- Storybook.
- Aliases.
- Estrutura inicial.

## Marco de conclusão

Projeto executando normalmente com todas as ferramentas configuradas.

---

# Fase 03 — Estrutura Base

## Objetivo

Criar toda a estrutura inicial de diretórios.

## Entregáveis

- Estrutura de pastas.
- Providers.
- Organização inicial.
- Configuração dos imports.

## Marco de conclusão

Arquitetura física criada.

---

# Fase 04 — Design System

## Objetivo

Construir os componentes fundamentais.

## Entregáveis

- Tokens.
- Button.
- Typography.
- Container.
- Stack.
- Grid.
- Divider.
- Card.
- Badge.
- Loader.
- Skeleton.
- Demais componentes-base.

## Marco de conclusão

Todos os componentes fundamentais disponíveis.

---

# Fase 05 — Tema

## Objetivo

Implementar o sistema visual.

## Entregáveis

- Dark Theme.
- Light Theme.
- Glassmorphism.
- Shadows.
- Blur.
- Espaçamentos.
- Tipografia.

## Marco de conclusão

Sistema visual completo.

---

# Fase 06 — Roteamento

## Objetivo

Preparar a navegação.

## Entregáveis

- React Router.
- Rotas públicas.
- Rotas privadas.
- Layouts.

## Marco de conclusão

Estrutura de navegação pronta.

---

# Fase 07 — Internacionalização

## Objetivo

Preparar o projeto para múltiplos idiomas.

## Entregáveis

- Configuração do i18next.
- Idioma padrão.
- Arquivos de tradução.
- Seletor de idioma.

## Marco de conclusão

Troca de idioma funcionando.

---

# Fase 08 — Layouts

## Objetivo

Criar os layouts reutilizáveis.

## Entregáveis

- PublicLayout.
- DashboardLayout.

## Marco de conclusão

Estrutura visual reutilizável criada.

---

# Fase 09 — Componentes Compartilhados

## Objetivo

Construir os componentes específicos da aplicação.

## Exemplos

- Header.
- Footer.
- Hero.
- Timeline.
- ContactForm.
- SkillCard.
- ProjectCard.
- ExperienceCard.
- SocialLinks.

## Marco de conclusão

Todos os componentes compartilhados implementados.

---

# Fase 10 — Desenvolvimento da SPA

## Objetivo

Construir todas as seções do portfólio.

## Ordem sugerida

1. Hero.
2. Sobre.
3. Tecnologias.
4. Experiência.
5. Projetos.
6. Formação.
7. Contato.
8. Footer.

## Marco de conclusão

Aplicação pública concluída utilizando dados estáticos.

---

# Fase 11 — Animações

## Objetivo

Adicionar movimento e refinamento visual.

## Entregáveis

- Framer Motion.
- Scroll Animations.
- Partículas.
- Microinterações.

## Marco de conclusão

Experiência visual refinada.

---

# Fase 12 — Responsividade

## Objetivo

Garantir funcionamento em qualquer dispositivo.

## Marco de conclusão

Layout adaptado para todos os breakpoints definidos.

---

# Fase 13 — SEO

## Objetivo

Preparar o projeto para indexação.

## Marco de conclusão

Todas as páginas públicas configuradas.

---

# Fase 14 — Testes

## Objetivo

Implementar testes automatizados.

## Entregáveis

- Testes unitários.
- Testes de componentes.
- Cobertura mínima definida.

## Marco de conclusão

Fluxos críticos testados.

---

# Fase 15 — Storybook

## Objetivo

Documentar o Design System.

## Marco de conclusão

Componentes documentados.

---

# Fase 16 — Firebase

## Objetivo

Preparar infraestrutura de persistência.

## Entregáveis

- Firestore.
- Authentication.
- Storage (caso necessário).

## Marco de conclusão

Infraestrutura pronta.

---

# Fase 17 — Dashboard

## Objetivo

Construir o painel administrativo.

## Entregáveis

- Login.
- Área protegida.
- CRUD.
- Configurações.

## Marco de conclusão

Painel administrativo funcional.

---

# Fase 18 — Integração dos Dados

## Objetivo

Substituir dados estáticos pelos dados persistidos.

## Marco de conclusão

Toda a aplicação consumindo dados do banco.

---

# Fase 19 — CI/CD

## Objetivo

Automatizar validações e deploy.

## Entregáveis

- GitHub Actions.
- Build automatizada.
- Testes automáticos.
- Deploy automático.

## Marco de conclusão

Pipeline funcionando.

---

# Fase 20 — Publicação

## Objetivo

Finalizar o projeto.

## Checklist

- Revisão final.
- Auditoria de performance.
- Auditoria de acessibilidade.
- Revisão de documentação.
- Revisão do README.
- Deploy definitivo.

## Marco de conclusão

Projeto publicado e documentado.

---

# Critérios para iniciar uma nova fase

Antes de iniciar qualquer fase, confirme:

- [ ] A fase anterior foi concluída.
- [ ] O projeto compila sem erros.
- [ ] Não existem pendências abertas.
- [ ] Os commits da fase anterior foram realizados.
- [ ] A Pull Request foi finalizada (quando aplicável).

---

# Critérios para considerar uma fase concluída

Uma fase somente poderá ser considerada finalizada quando:

- Todos os objetivos definidos tiverem sido atendidos.
- O projeto estiver funcionando normalmente.
- Não existirem erros de lint.
- Não existirem erros de tipagem.
- A documentação da etapa estiver atualizada.

---

# Resultado esperado desta etapa

Ao concluir este documento deverá estar definida toda a sequência oficial de desenvolvimento do projeto.

A partir deste ponto, cada documento da documentação corresponderá diretamente a uma fase do roadmap, permitindo acompanhar a evolução do projeto de forma organizada e previsível.

---

# Próxima etapa

➡️ **04 - Git Workflow**

Neste documento será definido o fluxo oficial de desenvolvimento utilizando Git, incluindo estratégia de branches, convenções de commits, Pull Requests e boas práticas de versionamento que serão adotadas durante todo o projeto.
[Git Workflow](./04-git-workflow.md)

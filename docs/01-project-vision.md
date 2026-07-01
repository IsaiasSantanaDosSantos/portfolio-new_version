# 01 - Visão Geral do Projeto

> **Objetivo desta etapa**
>
> Definir claramente o propósito, os objetivos, o escopo e os princípios arquiteturais do projeto antes do início do desenvolvimento.

---

# Pré-requisitos

Nenhum.

Este é o primeiro documento da documentação.

---

# Objetivo do Projeto

Este projeto consiste no desenvolvimento de um novo portfólio profissional totalmente reescrito do zero.

Mais do que um site institucional, o projeto servirá como demonstração prática de conhecimento técnico em desenvolvimento Front-end moderno, arquitetura de software, qualidade de código e organização de projetos.

Todo o desenvolvimento seguirá padrões utilizados em aplicações reais de mercado, priorizando escalabilidade, reutilização, manutenibilidade e facilidade de evolução.

O projeto deverá permanecer atualizado durante os próximos anos, permitindo que novas funcionalidades sejam adicionadas sem necessidade de grandes refatorações.

---

# Finalidade

O projeto possui cinco objetivos principais.

## 1. Apresentação profissional

Apresentar experiências, habilidades, projetos e formas de contato de maneira clara, moderna e organizada.

---

## 2. Demonstração técnica

Demonstrar domínio em tecnologias modernas utilizadas no desenvolvimento Front-end.

O código deverá servir como referência de boas práticas para recrutadores e outros desenvolvedores.

---

## 3. Laboratório de estudos

Servir como ambiente para experimentação de novas tecnologias, padrões arquiteturais e melhorias contínuas.

Novas funcionalidades poderão ser adicionadas futuramente sem comprometer a estrutura existente.

---

## 4. Gerenciamento de conteúdo

Permitir que informações frequentemente alteradas possam ser atualizadas através de um painel administrativo, sem necessidade de modificar o código-fonte.

---

## 5. Internacionalização

Disponibilizar todo o conteúdo do site em múltiplos idiomas, garantindo uma experiência consistente para usuários de diferentes países.

---

# Escopo do Projeto

O projeto contempla o desenvolvimento de duas aplicações integradas.

## Aplicação Pública

Disponível para qualquer visitante.

Responsável por apresentar:

- Página inicial
- Sobre
- Tecnologias
- Experiência profissional
- Formação
- Projetos
- Contato
- Currículo
- Links sociais

---

## Painel Administrativo

Acesso restrito mediante autenticação.

Responsável por permitir:

- Gerenciamento de projetos
- Gerenciamento de experiências
- Gerenciamento das habilidades
- Gerenciamento das informações pessoais
- Gerenciamento das traduções
- Gerenciamento dos links sociais
- Gerenciamento das configurações gerais

---

# Objetivos Técnicos

Durante todo o desenvolvimento, o projeto deverá atender aos seguintes objetivos.

## Escalabilidade

A estrutura deverá permitir crescimento contínuo sem aumento significativo da complexidade.

---

## Componentização

Todos os componentes deverão ser reutilizáveis sempre que possível.

Duplicação de código deverá ser evitada.

---

## Legibilidade

O código deverá ser autoexplicativo.

Sempre que necessário serão utilizados nomes claros, tipagem forte e documentação com JSDoc.

---

## Baixo Acoplamento

Cada módulo deverá possuir apenas uma responsabilidade bem definida.

Alterações em uma funcionalidade não deverão impactar outras áreas do projeto.

---

## Manutenibilidade

Novos desenvolvedores deverão conseguir compreender rapidamente a estrutura do projeto.

---

## Performance

A performance será considerada desde o início do desenvolvimento.

Não serão implementadas otimizações prematuras, porém toda decisão arquitetural deverá considerar seu impacto futuro.

---

## Acessibilidade

O projeto deverá seguir boas práticas de acessibilidade utilizando HTML semântico, atributos ARIA quando necessários e navegação por teclado.

---

## SEO

Toda página pública deverá ser preparada para indexação por mecanismos de busca.

---

# Público-alvo

O projeto foi pensado para atender principalmente:

- Recrutadores.
- Empresas de tecnologia.
- Tech Leads.
- Desenvolvedores Front-end.
- Clientes interessados em desenvolvimento web.

---

# Tecnologias previstas

A definição detalhada da stack será realizada em documentos posteriores.

Entretanto, inicialmente o projeto utilizará tecnologias modernas do ecossistema React, incluindo ferramentas para:

- Componentização.
- Internacionalização.
- Testes.
- Documentação.
- Roteamento.
- Qualidade de código.
- Integração contínua.
- Persistência de dados.
- Autenticação.

Caso alguma tecnologia seja substituída durante o desenvolvimento, a alteração deverá ser documentada antes de sua implementação.

---

# Princípios Arquiteturais

Durante todo o projeto deverão ser seguidos os seguintes princípios.

## Clareza acima de complexidade

A solução mais simples que resolva corretamente o problema deverá ser priorizada.

---

## Reutilização acima de duplicação

Sempre que houver possibilidade de reutilização sem perda de legibilidade, ela deverá ser adotada.

---

## Consistência acima de preferência pessoal

Todos os arquivos deverão seguir o mesmo padrão de nomenclatura, organização e implementação.

---

## Evolução incremental

O projeto será desenvolvido por etapas.

Nenhuma funcionalidade deverá ser implementada antes que sua infraestrutura esteja preparada.

---

## Qualidade antes de velocidade

Nenhuma etapa será acelerada em detrimento da qualidade do código.

Sempre será priorizada uma implementação consistente, mesmo que demande mais tempo.

---

# O que não faz parte do projeto

Os seguintes itens estão fora do escopo inicial.

- Backend próprio.
- APIs desenvolvidas em Node.js.
- Sistema de comentários.
- Blog.
- Área pública para cadastro de usuários.
- Marketplace.
- Funcionalidades que não agreguem valor direto ao objetivo principal do projeto.

Esses itens poderão ser considerados futuramente, caso exista necessidade.

---

# Critérios de sucesso

O projeto será considerado concluído quando atender aos seguintes critérios:

- Interface totalmente responsiva.
- Dark Mode e Light Mode.
- Internacionalização completa.
- Painel administrativo funcional.
- Dados persistidos em banco de dados.
- Testes implementados.
- Storybook configurado.
- Documentação completa.
- Deploy automatizado.
- Código organizado e padronizado.
- Excelente pontuação em Performance, Acessibilidade e SEO.

---

# Resultado esperado desta etapa

Ao concluir este documento deverá estar claro:

- O propósito do projeto.
- O escopo da aplicação.
- Os objetivos técnicos.
- Os princípios que orientarão todas as decisões arquiteturais.
- O limite do escopo inicial.

Nenhuma implementação deverá ser iniciada antes que esses objetivos estejam bem definidos.

---

# Próxima etapa

➡️ **02 - Arquitetura Geral**

Neste documento será definida toda a arquitetura da aplicação, incluindo organização de pastas, responsabilidades de cada módulo e princípios estruturais que servirão de base para o restante do desenvolvimento.
[architecture](./02-architecture.md)

# 24 - Performance

> **Objetivo desta etapa**
>
> Definir a estratégia oficial de otimização de desempenho da aplicação, estabelecendo diretrizes para carregamento de recursos, divisão de código, renderização eficiente, monitoramento e boas práticas que deverão ser seguidas durante todo o desenvolvimento.

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
- ✅ 23 - SEO

---

# Por que agora?

Após definir toda a arquitetura funcional da aplicação, é necessário estabelecer diretrizes para garantir que o projeto mantenha um alto desempenho durante seu crescimento.

As decisões descritas neste documento deverão orientar todas as implementações futuras, evitando otimizações tardias e reduzindo custos de manutenção.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- Estratégia de otimização.
- Boas práticas de carregamento.
- Diretrizes para renderização.
- Estratégia para monitoramento.
- Critérios mínimos de desempenho.

A implementação das otimizações ocorrerá ao longo do desenvolvimento das funcionalidades.

---

# Princípios

## Performance desde o início

Toda funcionalidade deverá ser desenvolvida considerando impacto em desempenho.

---

## Medição antes da otimização

Toda otimização relevante deverá ser baseada em métricas reais.

---

## Simplicidade

Evitar otimizações prematuras ou desnecessárias.

---

## Experiência do usuário

A percepção de velocidade deverá ser considerada tão importante quanto os números obtidos em ferramentas de análise.

---

# Carregamento

Priorizar:

- carregamento progressivo;
- lazy loading de componentes quando apropriado;
- carregamento assíncrono de rotas;
- divisão de código (Code Splitting).

Evitar carregar recursos que não serão utilizados imediatamente.

---

# Renderização

Priorizar:

- componentes reutilizáveis;
- renderizações previsíveis;
- estados bem definidos.

Utilizar técnicas como memoização apenas quando houver benefício comprovado.

---

# Imagens

As imagens deverão:

- possuir dimensões adequadas;
- utilizar formatos modernos quando possível;
- ser comprimidas antes da publicação;
- utilizar lazy loading quando apropriado.

Evitar imagens maiores do que o necessário.

---

# Recursos externos

Bibliotecas deverão ser adicionadas somente quando oferecerem benefícios claros para o projeto.

Sempre avaliar:

- tamanho do pacote;
- frequência de manutenção;
- compatibilidade;
- impacto no bundle final.

---

# Internacionalização

Os arquivos de tradução deverão ser organizados para evitar carregamento desnecessário de idiomas não utilizados.

Quando possível, utilizar carregamento sob demanda.

---

# Dashboard

A área administrativa deverá carregar apenas os módulos necessários para cada funcionalidade.

Recursos exclusivos do Dashboard não deverão impactar a aplicação pública.

---

# Monitoramento

Durante o desenvolvimento, utilizar ferramentas como:

- Lighthouse;
- Chrome DevTools;
- React DevTools Profiler;
- Web Vitals.

As decisões de otimização deverão ser fundamentadas nessas métricas.

---

# Métricas

Buscar continuamente bons resultados para indicadores como:

- Largest Contentful Paint (LCP);
- Interaction to Next Paint (INP);
- Cumulative Layout Shift (CLS).

Essas métricas deverão orientar melhorias contínuas da aplicação.

---

# Boas práticas

- Evitar re-renderizações desnecessárias.
- Remover código não utilizado.
- Manter dependências atualizadas.
- Revisar regularmente o tamanho do bundle.
- Utilizar importações específicas quando disponíveis.
- Minimizar requisições desnecessárias.

---

# O que evitar

Evitar:

- memoização sem necessidade;
- bibliotecas redundantes;
- carregamento antecipado de módulos não utilizados;
- imagens sem otimização;
- otimizações baseadas apenas em percepção.

---

# Validação

Após a implementação das funcionalidades, validar utilizando:

- Lighthouse;
- React DevTools Profiler;
- Chrome DevTools.

Confirmar:

- [ ] Tempo de carregamento adequado.
- [ ] Métricas dentro dos objetivos estabelecidos.
- [ ] Ausência de gargalos relevantes.

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
git checkout -b docs/performance-strategy
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(performance): define performance strategy"
```

---

# Push

```bash
git push -u origin docs/performance-strategy
```

---

# Pull Request

## Título

```text
docs: define performance strategy
```

## Descrição

```markdown
## Objetivo

Documentar a estratégia oficial de desempenho da aplicação.

---

## O que foi realizado

- Definição das diretrizes de performance.
- Estratégia para carregamento.
- Estratégia para renderização.
- Boas práticas para otimização.
- Critérios para monitoramento.

---

## Como validar

1. Revisar a documentação.
2. Confirmar que as diretrizes estão alinhadas à arquitetura do projeto.
3. Verificar se os critérios de desempenho são claros.

---

## Checklist

- [ ] Estratégia documentada.
- [ ] Diretrizes definidas.
- [ ] Boas práticas estabelecidas.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/performance-strategy
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estratégia documentada.
- [ ] Diretrizes estabelecidas.
- [ ] Critérios definidos.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá uma estratégia consistente para garantir alto desempenho durante toda sua evolução. As decisões de arquitetura, desenvolvimento e manutenção passarão a considerar continuamente o impacto na experiência do usuário, utilizando métricas objetivas para orientar otimizações e preservando a qualidade da aplicação conforme seu crescimento.

---

# Próxima etapa

➡️ **25 - CI/CD**

Na próxima etapa será definida a estratégia de Integração Contínua e Entrega Contínua (CI/CD), incluindo automação de validações, execução de testes, análise de qualidade do código, builds e deploys, garantindo um fluxo de desenvolvimento seguro, padronizado e alinhado às boas práticas de engenharia de software.

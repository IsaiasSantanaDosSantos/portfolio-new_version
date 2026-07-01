# 18 - Desenvolvimento da SPA

> **Objetivo desta etapa**
>
> Definir a estratégia de desenvolvimento da Single Page Application, estabelecendo a ordem de implementação das seções, os critérios de conclusão de cada entrega e as boas práticas que deverão ser seguidas durante toda a construção da interface.

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

---

# Por que agora?

Toda a infraestrutura técnica da aplicação já está preparada.

Antes de iniciar a implementação da interface, é necessário definir uma estratégia clara de desenvolvimento, garantindo que cada entrega seja incremental, validada e mantenha a qualidade arquitetural estabelecida nas etapas anteriores.

---

# Objetivo

Ao concluir esta etapa, deverá estar definido:

- A ordem oficial de desenvolvimento da SPA.
- Os critérios de conclusão de cada seção.
- A estratégia de evolução incremental.
- O fluxo recomendado para criação de novas funcionalidades.

---

# Princípios

## Desenvolvimento incremental

Cada funcionalidade deverá ser entregue completamente funcional antes do início da próxima.

Evitar desenvolver várias partes da aplicação simultaneamente.

---

## Evolução contínua

A aplicação deverá permanecer funcional ao final de cada etapa de desenvolvimento.

---

## Qualidade contínua

Não adiar melhorias para etapas futuras quando elas fizerem parte da implementação atual.

---

## Consistência

Todas as novas implementações deverão seguir as diretrizes estabelecidas pelo Design System, pelos Design Tokens e pela Arquitetura dos Componentes.

---

# Ordem oficial de implementação

A implementação deverá seguir a seguinte sequência:

## 1. Estrutura base da aplicação

Implementar:

- Layout principal.
- Estrutura das páginas.
- Providers.
- Containers principais.

---

## 2. Header

Implementar:

- Navegação.
- Menu responsivo.
- Alternador de idioma.
- Alternador de tema.
- Navegação por scroll.

---

## 3. Hero

Implementar:

- Apresentação principal.
- Call to Action.
- Animações.
- Background tecnológico.

---

## 4. Sobre

Implementar:

- Informações profissionais.
- Destaques.
- Objetivos.

---

## 5. Skills

Implementar:

- Tecnologias.
- Ferramentas.
- Categorias.

---

## 6. Projetos

Implementar:

- Cards.
- Filtros.
- Modal de detalhes.
- Links externos.

Inicialmente utilizar dados estáticos.

---

## 7. Experiência

Implementar:

- Timeline.
- Empresas.
- Responsabilidades.

---

## 8. Formação e Certificações

Implementar:

- Formação acadêmica.
- Certificados.
- Cursos relevantes.

---

## 9. Contato

Implementar:

- Informações de contato.
- Links sociais.
- Formulário inicial (caso previsto).

---

## 10. Footer

Implementar:

- Créditos.
- Navegação complementar.
- Direitos autorais.

---

# Estratégia para cada seção

Toda seção deverá seguir exatamente o mesmo fluxo.

## Etapa 1

Criar a estrutura HTML semântica.

---

## Etapa 2

Aplicar os componentes reutilizáveis.

---

## Etapa 3

Aplicar os estilos utilizando exclusivamente o tema e os Design Tokens.

---

## Etapa 4

Implementar a responsividade.

---

## Etapa 5

Adicionar acessibilidade.

---

## Etapa 6

Internacionalizar todos os textos.

---

## Etapa 7

Adicionar animações e microinterações.

---

## Etapa 8

Executar testes e validações.

---

# Critérios de conclusão (Definition of Done)

Uma seção somente poderá ser considerada concluída quando atender a todos os critérios abaixo:

- [ ] Interface implementada.
- [ ] Responsividade validada.
- [ ] Internacionalização aplicada.
- [ ] Tema claro e escuro funcionando.
- [ ] Componentes reutilizáveis utilizados.
- [ ] Design Tokens utilizados.
- [ ] Acessibilidade validada.
- [ ] Código tipado.
- [ ] ESLint sem erros.
- [ ] Testes executados (quando aplicável).
- [ ] Sem TODOs pendentes relacionados à seção.

---

# Git Workflow durante o desenvolvimento

Cada seção deverá ser desenvolvida em sua própria branch.

Exemplos:

```text
feature/header
feature/hero
feature/about
feature/skills
feature/projects
feature/experience
feature/education
feature/contact
feature/footer
```

Cada Pull Request deverá conter apenas uma funcionalidade claramente definida.

---

# Validação

Ao final de cada entrega:

Executar:

```bash
npm run lint
```

Depois:

```bash
npm run test
```

Em seguida:

```bash
npm run dev
```

Confirmar:

- ausência de erros de compilação;
- ausência de erros de lint;
- funcionamento correto da funcionalidade implementada;
- comportamento consistente nos diferentes idiomas e temas.

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
git checkout -b docs/spa-development
```

---

# Commits

## Commit 1

Após concluir a documentação:

```bash
git add .
git commit -m "docs(spa): define SPA development strategy"
```

---

# Push

```bash
git push -u origin docs/spa-development
```

---

# Pull Request

## Título

```text
docs: define SPA development strategy
```

## Descrição

```markdown
## Objetivo

Documentar a estratégia oficial para o desenvolvimento incremental da SPA.

---

## O que foi realizado

- Definição da ordem de implementação.
- Estratégia incremental.
- Definition of Done para cada seção.
- Fluxo recomendado de desenvolvimento.

---

## Como validar

1. Revisar a ordem proposta para implementação.
2. Confirmar que cada etapa possui critérios claros de conclusão.
3. Verificar se a estratégia está alinhada à arquitetura definida anteriormente.

---

## Checklist

- [ ] Ordem de implementação documentada.
- [ ] Critérios de conclusão definidos.
- [ ] Fluxo de desenvolvimento estabelecido.
```

---

# Após o Merge

```bash
git checkout main
git pull origin main
git branch -d docs/spa-development
```

Remover também a branch remota.

---

# Critérios para considerar esta etapa concluída

- [ ] Estratégia documentada.
- [ ] Ordem oficial de implementação definida.
- [ ] Definition of Done estabelecida.
- [ ] Git Workflow documentado.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto possuirá um plano claro e incremental para o desenvolvimento da Single Page Application. Cada funcionalidade será implementada seguindo uma sequência previsível, mantendo a aplicação sempre funcional, consistente com a arquitetura estabelecida e preparada para evoluir sem gerar retrabalho ou comprometer a qualidade do código.

---

# Próxima etapa

➡️ **19 - Dashboard Administrativo**

Na próxima etapa será definida a arquitetura do Dashboard Administrativo, incluindo autenticação, organização das funcionalidades, estratégia de edição de conteúdo, permissões de acesso e integração futura com o backend, preparando a aplicação para substituir gradualmente os dados estáticos por conteúdos gerenciados dinamicamente.
[Dashboard Administrativo](./19-dashboard.md)

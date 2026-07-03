# Etapa 1 — Configurar o TypeScript

Nesta etapa será configurado o TypeScript para reconhecer os aliases de importação.

Abra o arquivo:

```text
tsconfig.app.json
```

Localize a seção:

```json
{
  "compilerOptions": {
    ...
  }
}
```

Dentro de `compilerOptions`, adicione (ou atualize, caso já existam) as propriedades:

- `baseUrl`
- `paths`

A propriedade `baseUrl` deverá possuir o valor:

```json
"baseUrl": "."
```

Em seguida, configure `paths` com os seguintes mapeamentos:

```json
"paths": {
  "@assets/*": ["src/assets/*"],
  "@components/*": ["src/components/*"],
  "@hooks/*": ["src/hooks/*"],
  "@pages/*": ["src/pages/*"],
  "@providers/*": ["src/providers/*"],
  "@styles/*": ["src/styles/*"],
  "@types/*": ["src/types/*"],
  "@utils/*": ["src/utils/*"]
}
```

Ao concluir esta etapa, o arquivo deverá possuir as propriedades `baseUrl` e `paths` configuradas dentro de `compilerOptions`.

> **Importante**
>
> Nesta etapa apenas o TypeScript reconhecerá os aliases.
> Eles ainda não funcionarão durante a execução da aplicação até que o Vite também seja configurado.

---

# Etapa 2 — Configurar o Vite

Após configurar os aliases no TypeScript, é necessário configurar o Vite para que eles também funcionem durante a execução da aplicação.

Abra o arquivo:

```text
vite.config.ts
```

## Importar a função `resolve`

Caso ainda não exista, adicione o seguinte import:

```ts
import { resolve } from 'node:path';
```

Ao final, o início do arquivo deverá ficar semelhante a este:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
```

> **Observação**
>
> Caso o projeto utilize outros plugins do Vite, mantenha-os normalmente. Apenas adicione o import da função `resolve`.

---

## Configurar os aliases

Dentro do objeto passado para `defineConfig()`, adicione a propriedade `resolve`.

Em seguida, dentro de `resolve`, adicione a propriedade `alias` contendo todos os aliases definidos no `tsconfig.app.json`.

A configuração deverá ficar semelhante ao exemplo abaixo:

```ts
resolve: {
  alias: {
    '@assets': resolve(__dirname, 'src/assets'),
    '@components': resolve(__dirname, 'src/components'),
    '@hooks': resolve(__dirname, 'src/hooks'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@providers': resolve(__dirname, 'src/providers'),
    '@styles': resolve(__dirname, 'src/styles'),
    '@types': resolve(__dirname, 'src/types'),
    '@utils': resolve(__dirname, 'src/utils'),
  },
},
```

Caso o arquivo ainda possua apenas a configuração básica do Vite:

```ts
export default defineConfig({
  plugins: [react()],
});
```

Após esta etapa, ele deverá ficar semelhante a:

```ts
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@providers': resolve(__dirname, 'src/providers'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
});
```

---

## Validação

Ao concluir esta etapa, confirme que:

- Todos os aliases configurados no `tsconfig.app.json` também foram configurados no `vite.config.ts`.
- Não existem diferenças entre os nomes dos aliases definidos nos dois arquivos.
- O projeto continua compilando normalmente.
- O Vite consegue resolver corretamente todos os imports utilizando aliases.

> **Importante**
>
> Sempre que um novo alias for criado no projeto, ele deverá ser adicionado **tanto** no `tsconfig.app.json` **quanto** no `vite.config.ts`. Manter essas configurações sincronizadas evita erros de compilação e resolução de módulos.

---

# Etapa 3 — Validar a configuração

Após concluir a configuração do TypeScript e do Vite, é necessário validar que ambos estão funcionando corretamente.

Escolha qualquer arquivo `.ts` ou `.tsx` existente no projeto.

Por exemplo:

```
src/main.tsx
```

ou qualquer componente existente.

Crie temporariamente um import utilizando um dos aliases configurados.

Exemplo:

```ts
import {} from '@utils';
```

Caso o diretório correspondente ainda esteja vazio, crie temporariamente um arquivo apenas para realizar o teste.

Durante a validação, confirme que:

- o VS Code reconhece o alias sem apresentar erros;
- o autocomplete funciona normalmente;
- o TypeScript reconhece o caminho informado;
- o Vite resolve corretamente o import durante a execução;
- nenhuma mensagem de erro é exibida no terminal ou no navegador.

Após realizar a validação:

- remova quaisquer imports criados apenas para teste;
- remova arquivos temporários que tenham sido criados exclusivamente para validar os aliases.

---

# Validação

Confirmar:

- [ ] Todos os aliases foram configurados no `tsconfig.app.json`.
- [ ] Todos os aliases foram configurados no `vite.config.ts`.
- [ ] Os aliases são idênticos nos dois arquivos.
- [ ] O VS Code reconhece corretamente os imports.
- [ ] O TypeScript não apresenta erros.
- [ ] O Vite resolve corretamente os aliases.
- [ ] O projeto executa normalmente.
- [ ] Não existem erros de compilação.

Executar:

```bash
npm run dev
```

Verificar que a aplicação inicia normalmente.

Em seguida, executar:

```bash
npm run lint
```

Ambos os comandos deverão finalizar sem erros.

---

# Arquivos criados

Nenhum.

---

# Arquivos alterados

- `tsconfig.app.json`
- `vite.config.ts`

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
git checkout -b chore/path-aliases
```

---

# Commits

## Commit 1

Após configurar o TypeScript:

```bash
git add tsconfig.app.json
git commit -m "chore(paths): configure TypeScript path aliases"
```

---

## Commit 2

Após configurar o Vite:

```bash
git add vite.config.ts
git commit -m "chore(paths): configure Vite path aliases"
```

---

## Commit 3

Após validar toda a configuração:

```bash
git add .
git commit -m "chore(paths): validate path aliases"
```

---

# Push

```bash
git push -u origin chore/path-aliases
```

---

# Pull Request

## Título

```text
chore: configure path aliases
```

## Descrição

```markdown
## Objetivo

Configurar aliases de importação para simplificar a navegação entre módulos e desacoplar o código da estrutura física de diretórios.

---

## O que foi realizado

- Configuração dos aliases no TypeScript.
- Configuração dos aliases no Vite.
- Validação dos imports absolutos.

---

## Como testar

1. Executar `npm install`.
2. Executar `npm run dev`.
3. Criar um import utilizando um alias.
4. Confirmar que a aplicação compila normalmente.

---

## Checklist

- [ ] Aliases configurados.
- [ ] TypeScript validando corretamente.
- [ ] Vite resolvendo corretamente.
- [ ] Projeto funcionando normalmente.
```

---

# Após o Merge

Executar:

```bash
git checkout main
git pull origin main
git branch -d chore/path-aliases
```

Excluir também a branch remota no GitHub.

---

# Critérios para considerar esta etapa concluída

- [ ] Aliases configurados.
- [ ] Projeto compilando normalmente.
- [ ] `npm run dev` executando sem erros.
- [ ] `npm run lint` executando sem erros.
- [ ] Commits realizados.
- [ ] Pull Request aprovada.
- [ ] Branch removida.
- [ ] `main` atualizada.

---

# Resultado esperado

Ao concluir esta etapa, o projeto contará com um sistema consistente de aliases de importação, reduzindo o uso de caminhos relativos extensos e preparando a aplicação para crescer de forma organizada.

A partir deste momento, todos os novos imports deverão utilizar os aliases definidos sempre que fizer sentido, mantendo a consistência e a legibilidade do código.

---

# Próxima etapa

➡️ **12 - Styled Components**

Na próxima etapa será configurado o Styled Components, juntamente com a estrutura inicial de tema, preparando o projeto para receber o Design System e suportar os modos claro e escuro definidos na arquitetura.

[Styled Components](./12-styled-components.md)

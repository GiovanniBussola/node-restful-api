# Anotações das aulas

### Type checking
- <b>Runtime Type Checking</b>: Só verifica se as coisas estão funcionando no momento que a aplicação já está rodando.
- <b>Static Type Checking</b>: Verifica se existem erros ou não no momento que o código está sendo escrito.

### Instalação do Typescript
Aqui está o combo para erguer um projeto em TS
```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
```
O que cada dependência faz:
- **Typescript**: é o próprio typescript.
- **@types/node**: são as tipagens de funções do próprio Node, é necessário instalar porque o Node foi feito para rodar originalmente com JS.
- **tsx**: Ele faz o processo de converter e executar os arquivos (Deve ser utilizado apenas em ambiente de desenvolvimento).

No tsconfig.json existe a propriedade **target** por padrão ele vem o ES2016 mas pode trocar para ES2020 pra ele suportar as novas features.

Para buildar um arquivo para JS execute:
```bash
npx src/index.ts
```



# Anotações das aulas

## Type checking
- <b>Runtime Type Checking</b>: Só verifica se as coisas estão funcionando no momento que a aplicação já está rodando.
- <b>Static Type Checking</b>: Verifica se existem erros ou não no momento que o código está sendo escrito.

## Instalação do Typescript
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

## Instalação do ESLint
```bash
npm i -D eslint @rocketseat/eslint-config
```
Crie um arquivo na raiz do projeto chamado **.eslintrc.json** e coloque o seguinte código:
```json
{
  "extends": ["@rocketseat/eslint-config/node"]
}
```
Vá para as extensões do seu VSCode e instale o ESLint.
Depois dê um **Ctrl + Shift + P** e vá para as **Configurações de usuário (User Settings)** e Coloque no JSON a seguinte configuração:
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

Você pode executar o código para corrigir todos os erros de Lint do código, eu particulamente acho arriscado.
```bash
eslint src --ext .ts --fix
```

## Conectando no banco de dados
Você pode usar os **drivers nativos** como por exemplo o https://github.com/sidorares/node-mysql2 mas usando isso as queries seriam todos exatas para aquele banco.

Dito isso, é aconselhável utilizar um gerenciador para isso, uma ótima oportunidade é usar o Knex https://knexjs.org/ assim você pode fazer queries utilizando Javascript (Ele converte para query de banco no final das contas) mas facilita muito as consultas.

```bash
npm i knex sqlite3
```

### Criando migrations:
Crie um arquivo na raiz do projeto chamado **knexfile.ts** e coloque ele pra exportar as configs do knex que existem no **database.ts**

O Knex recomenda fazer o arquivo de configuração com o formato **.js**, mas podemos fazer uma certa configuração para ele poder ler em **.ts**, para isso vá no package.json e adicione essa parte nos **scripts**:

Para versões do Node abaixo da 18:
```json
"knex": "node --loader tsx ./node_modules/.bin/knex"
```
Para versões do Node a partir da 18:
```json
"knex": "node --import tsx ./node_modules/knex/bin/cli.js"
```

para ver se funcionou execute:
```bash
npm run knex -- -h
```
Dando sucesso você vai poder executar o comando de migration:
```bash
npm run knex migrate:make create-documents 
npm run knex -- migrate:latest
```

## Requisitos:
### RF (Requisitos funcionais)
- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas as transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

### RN (Regra de negócio)
- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que irá subtrair;
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;

### RNF (Requisitos não funcionais)
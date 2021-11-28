# CRUD HSM

Projeto Final HSM Coders da Gama Academy
Uma plataforma que permite fazer um CRUD de forma simples para o usuário. 
Foi desenvolvido em ambiente NodeJS, utilizando MySQL e Express.

## Executar aplicação pelo heroku

Para usar de maneira rápida, acesse [CRUD HSM](https://crud-hsm.herokuapp.com/)

## Instalar dependencias

Para executar localmente, é necessário ter SQL. Rode os comandos na sequência no terminal.

Instalar dependencias:

```bash
npm install
```

Criar banco de dados:

```bash
npx sequelize db:create
```

Executar migrations:

```bash
npx sequelize db:migrate
```

Executar seeds:

```bash
npx sequelize db:seed:all
```

Desfazer seeds:

```bash
npx sequelize db:seed:undo:all
```

## Executar aplicação

```bash
nodemon start
```

Abra http://localhost:3000 para visualizar no navegador.

### Features

- [x] Criar curso
- [x] Editar curso
- [x] Exibir um curso escolhido
- [x] Exibir todos os cursos
- [x] Pesquisar por um curso
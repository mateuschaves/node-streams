# Importação de .csv utilizando streams

Este projeto é um exemplo de como ler um arquivo CSV utilizando streams em Node.js.

## Requisitos

[Node.js](https://nodejs.org/en) (versão 16.10 ou superior)

[TypeScript](https://www.typescriptlang.org/) (versão 5 ou superior)

## Instalação

 1. Clone o repositório: `git clone https://github.com/mateuschaves/node-streams.git`
 2. Instale as dependências: `npm install`
 3. Crie um arquivo `.env` usando o modelo de exemplo `.env.example`

## Uso

Para iniciar o servidor, utilize o seguinte comando:

```bash
    npm run start
```

Para iniciar o script que lê o arquivo ```.csv```, utilize esse comando:

```bash
    npm run stream
```

O projeto utilizará o TypeScript para compilar o código para JavaScript antes de iniciar a aplicação.

## Fluxo de dados

O projeto utiliza o conceito de streams para manipulação de dados. As streams são usadas para lidar com grandes quantidades de dados de forma eficiente, dividindo-os em pequenos chunks que são processados individualmente.

O fluxo de dados do projeto é o seguinte:

 1. Uma **stream** de leitura lê os dados do arquivo CSV e emite cada linha
    como um chunk.
 2. Uma **stream** de transformação recebe os chunks emitidos pela stream de
    leitura e transforma cada linha em um objeto do tipo `Task`.
 3. Cada task é enviada para a api com uma requisição do tipo `POST`

## Formato do arquivo CSV

O arquivo CSV deve ter o seguinte formato:

| title | description |
|--|--|
| Task 1 | Descrição da Task 1 |
| Task 2 | Descrição da Task 2 |

## Contribuição

 1. Faça o fork do projeto
 2. Crie sua feature branch (`git checkout -b feature/nome-da-feature`)
 3. Commit suas mudanças (`git commit -am 'Adicionando nova feature'`)
 4. Faça o push para o branch (`git push origin feature/nome-da-feature`)
 5. Crie um novo Pull Request

## Licença

MIT

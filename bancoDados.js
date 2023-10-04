const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'meuBancoDeDados';

async function conectarAoBanco() {
  try {
    const client = await MongoClient.connect(url);
    console.log('Conexão com o banco de dados estabelecida com sucesso!');

    client.close();
    console.log('Conexão com o banco de dados fechada.');

    return 'Conexão com o banco de dados estabelecida com sucesso!';
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return 'Erro ao conectar ao banco de dados.';
  }
}

conectarAoBanco().then(resultado => {
  console.log(resultado);
}).catch(erro => {
  console.error(erro);
});

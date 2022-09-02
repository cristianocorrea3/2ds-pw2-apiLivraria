//IMPORTAÇÃO DO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

/***** CRIA A CONEXÃO COMO BANCO DE DADOS *****/
/*
PARAMETROS DO SEQUELIZE
1 - NOME DO BANCO - STRING
2 - USUÁRIO DO BANCO - STRING
3 - SENHA DO BANCO - STRING
4 - JSON:
    4.1 - O LOCAL ONDE O BANCO ESTÁ EXECUTANTO (host)
    4.2 - TIPO DO BANCO (dialect)
    4.3 - DEFINE O FUSO HORARIO LOCAL
*/
const connection = new Sequelize(
        'bd_libri_api', 
        'root',
        '',
        {
            host:'localhost',
            dialect:'mysql',
            timezone: '-03:00'
        }
    );

module.exports = connection;
/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const Router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/
//ROTA DE CADASTRO DE CATEGORIA
//NOME(P1, P2, P3, P4){}
router.post('/cadastrarCategoria', (req, res)=>{
    res.send('ROTA DE CADASTRO DE CATEGORIA!');
    // console.log('TESTE DE NODEMON');
});

//ROTA DE LEITURA DE CATEGORIA
router.get('/listarCategoria', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE CATEGORIA!');
});

//ROTA DE ALTERAÇÃO DE CATEGORIA
router.put('/alterarCategoria', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE CATEGORIA!');
});

//ROTA DE EXCLUSÃO DE CATEGORIA
router.delete('/excluirCategoria', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE CATEGORIA!');
});

module.exports = router;
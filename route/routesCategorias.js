/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

const modelCategoria = require('../model/modelCategorias');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/
//ROTA DE CADASTRO DE CATEGORIA
//NOME(P1, P2, P3, P4){}
router.post('/cadastrarCategoria', (req, res)=>{

    console.log(req.body);

    // let nome_categoria = req.body.nome_categoria;
    let {nome_categoria} = req.body;

    modelCategoria.create(
        //DADOS DA INSERÇÂO
        {nome_categoria}

    ).then(
        res.send('CATEGORIA CADASTRADA COM SUCESSO!')
    );

    // res.send('ROTA DE CADASTRO DE CATEGORIA!');
    // console.log('TESTE DE NODEMON');

});

//ROTA DE LISTAGEM DE CATEGORIA
router.get('/listarCategoria', (req, res)=>{

    modelCategoria.findAll()
        .then(
            (response)=>{
                //console.log(response);
                res.status(200).json(response);

            }
        )

});

//ROTA DE ALTERAÇÃO DE CATEGORIA
router.put('/alterarCategoria', (req, res)=>{

    // const cod_categoria = req.body.cod_categoria;
    // const nome_categoria = req.body.nome_categoria;
    const {cod_categoria, nome_categoria} = req.body;

    modelCategoria.update(
        {nome_categoria},
        {where:{cod_categoria}}
    ).then(
        res.send('CATEGORIA ALTERADA COM SUCESSO!')
    )
    
});

//ROTA DE EXCLUSÃO DE CATEGORIA
router.delete('/excluirCategoria', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE CATEGORIA!');
});

module.exports = router;



import { Produto } from "../models/Produto.js";
import produtoRepository from "../repositories/produtoRepository.js";

const produtoController = {

    criar: async (req, res) => {
        try {
            console.log(req.body)
            const { idCategoria, nome, valor } = req.body;
            const caminhoImagem = req.file ? req.file.filename : null;
       
            if (!idCategoria || !nome || valor === undefined) {
                return res.status(400).json({
                    message: 'Dados inválidos'
                });
            }

            const produto = Produto.criar({idCategoria,nome,valor: Number(valor),caminhoImagem });
            const result = await produtoRepository.criar(produto);
            res.status(201).json({ message: 'Produto criado com sucesso', result});

        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Ocorreu um erro no servidor',errorMessage: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const { idCategoria, nome, valor } = req.body;

            const caminhoImagem = req.file ? req.file.filename : null;

            if (isNaN(id) || !idCategoria || !nome || valor === undefined) {
                return res.status(400).json({
                    message: 'Dados inválidos'
                });
            }

            const produto = {id,idCategoria,nome,valor: Number(valor),caminhoImagem};

            const result = await produtoRepository.editar(produto);

            res.status(200).json({
                message: 'Produto atualizado',
                result
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({ message: 'ID inválido' });
            }

            const result = await produtoRepository.deletar(id);

            res.status(200).json({
                message: 'Produto deletado',
                result
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    },

    selecionar: async (req, res) => {
        try {
            const result = await produtoRepository.selecionar();

            res.status(200).json({
                result
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    }

};

export default produtoController;
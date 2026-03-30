export class Produto {
    #id;
    #idCategoria;
    #nome;
    #valor;
    #caminhoImagem;
    #dataCad;

    constructor(pIdCategoria, pNome, pValor, pCaminhoImagem, pId) {
        this.#idCategoria = pIdCategoria;
        this.#nome = pNome;
        this.#valor = pValor;
        this.#caminhoImagem = pCaminhoImagem;
        this.id = pId;
    }

    get idCategoria() {
        return this.#idCategoria;
    }

    set idCategoria(value) {
        this.#validarIdCategoria(value);
        this.#idCategoria = value;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#validarNome(value);
        this.#nome = value;
    }

    get valor() {
        return this.#valor;
    }

    set valor(value) {
        this.#validarValor(value);
        this.#valor = value;
    }

    get caminhoImagem() {
        return this.#caminhoImagem;
    }

    set caminhoImagem(value) {
        this.#validarCaminhoImagem(value);
        this.#caminhoImagem = value;
    }

    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }

    

    #validarIdCategoria(value) {
        if (!value || isNaN(value) || value <= 0) {
            throw new Error('ID da categoria inválido');
        }
    }

    #validarNome(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 150) {
            throw new Error('O campo nome é obrigatório e deve ter entre 3 a 150 caracteres');
        }
    }

    #validarValor(value) {
        if (value === undefined || isNaN(value) || value < 0) {
            throw new Error('O valor do produto deve ser um número válido e maior ou igual a 0');
        }
    }

    #validarCaminhoImagem(value) {
        if (value && value.trim().length > 255) {
            throw new Error('O caminho da imagem deve ter no máximo 255 caracteres');
        }
    }

    #validarId(value) {
        if (value && value <= 0) {
            throw new Error('O valor do ID não corresponde ao esperado');
        }
    }

    

    static criar(dados) {
        console.log("aki: ", dados.idCategoria, dados.nome, dados.valor, dados.caminhoImagem)
        return new Produto(dados.idCategoria,dados.nome,dados.valor,dados.caminhoImagem,null);
    }

    static editar(dados, id) {
        return new Produto(dados.idCategoria,dados.nome,dados.valor,dados.caminhoImagem,id);
    }
}
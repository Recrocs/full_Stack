
const produtosPadrao = [
    {
        nome: "Chuteira Futsal Joma Dribling Masculina",
        descricao: "Chuteira Futsal Branco + Amarelo",
        preco: 302.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-joma-dribling-masculina/78/049-53IC-078/049-53IC-078_zoom2.jpg?ts=1777433722&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Umbro Pro 5 ",
        descricao: "Chuteira Futsal Umbro Kintsugi Branco + Azul Claro",
        preco: 625.00,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-umbro-pro-5-bump-kintsugi-unissex/64/SID-00Q9-164/SID-00Q9-164_zoom1.jpg?ts=1777436237&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Umbro Pro 5 Bump",
        descricao: "Chuteira Futsal Umbro Pro Unissex Grafite + Preto",
        preco: 329.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-umbro-pro-5-bump-unissex/80/2IA-2818-180/2IA-2818-180_zoom1.jpg?ts=1777433674&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Joma Top Flex",
        descricao: "Chuteira Futsal Umbro Pró 5 Bump Club Unissex - Preto + Roxo",
        preco: 600.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-joma-top-flex-rebound-unissex/18/049-539M-318/049-539M-318_zoom1.jpg?ts=1777434671&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Umbro Pro 5",
        descricao: "Chuteira Futsal Umbro Pro 5 Preta + Roxa",
        preco: 409.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-umbro-pro-5-bump-club-unissex/84/2IA-2862-384/2IA-2862-384_zoom1.jpg?ts=1777432738&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Umbro Pro 5",
        descricao: "Chuteira Futsal Umbro Pro 5 Bump Dia De Los Muertos Unissex - Laranja + Azul",
        preco: 599.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-umbro-pro-5-bump-dia-de-los-muertos-unissex/87/SID-0081-387/SID-0081-387_zoom1.jpg?ts=1777355415&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Umbro Pro ",
        descricao: "Chuteira Futsal Umbro Pro Challenge Uptake Unissex - Branco + Violeta",
        preco: 380.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-umbro-pro-challenge-uptake-unissex/69/SID-001O-469/SID-001O-469_zoom2.jpg?ts=1777154518&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Joma",
        descricao: "Chuteira Futsal Joma Maxima Unissex - Preto + Branco",
        preco: 379.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-joma-maxima-unissex/40/049-4411-040/049-4411-040_zoom1.jpg?ts=1776395881&ims=1088x"
    },
    {
        nome: "Chuteira Futsal Umbro Pro 5",
        descricao: "Chuteira Futsal Umbro Pro 5 Bump Club Unissex - Branco + Vermelho",
        preco: 419.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-futsal-umbro-pro-5-bump-club-unissex/24/2IA-2862-024/2IA-2862-024_zoom1.jpg?ts=1777433956&ims=1088x"
    },
    {
        nome: "Chuteira Joma Futsal",
        descricao: "Chuteira Joma Futsal Top Flex Rebound Hexa Branco/Dourado - Branco",
        preco: 899.90,
        imagem: "https://static.netshoes.com.br/produtos/chuteira-joma-futsal-top-flex-rebound-hexa-brancodourado/14/049-53GZ-014/049-53GZ-014_zoom1.jpg?ts=1776396456&ims=1088x"
    }
];

console.log(produtosPadrao);

const dadosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
       
function salvarDados() {
    localStorage.setItem('produtos', JSON.stringify(produtosPadrao));
}

function abrirModal() {
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;

    produtosPadrao.push({ nome, preco, descricao, imagem });

    salvarDados();
    renderizar();
    fecharModal();
}

function renderizar() {
    const container = document.getElementById('produtos');
    container.innerHTML = '';

    produtosPadrao.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${produto.imagem}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <b>R$ ${produto.preco}</b>
        `;

        container.appendChild(card);
    });
}

renderizar();
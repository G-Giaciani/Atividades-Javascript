let pessoas = [];


function gerarPessoas(numero) {
    const nomes = ["Ana", "Carlos", "Beatriz", "João", "Mariana", "Pedro", "Lucas", "Julia"];
    for (let i = 1; i <= numero; i++) {
        let pessoa = {
            id: i,
            nome: nomes[Math.floor(Math.random() * nomes.length)],
            idade: Math.floor(Math.random() * (90 - 18 + 1)) + 18
        };
        pessoas.push(pessoa);
    }
    return pessoas;
}

function calcularMediaIdades(pessoas) {
    let totalIdade = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    return pessoas.length ? totalIdade / pessoas.length : 0;
}

function ordenarPessoas(pessoas, atributo) {
    return pessoas.sort((a, b) => {
        if (a[atributo] < b[atributo]) return -1;
        if (a[atributo] > b[atributo]) return 1;
        return 0;
    });
}

console.log(gerarPessoas(4));
console.log(calcularMediaIdades(pessoas));
console.log(ordenarPessoas(pessoas, 'nome'));
console.log(ordenarPessoas(pessoas, 'id'));
console.log(ordenarPessoas(pessoas, 'idade'));

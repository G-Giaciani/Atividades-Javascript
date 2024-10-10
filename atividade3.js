function realizarOperacao(valor1, valor2, operacao) {
    operacao = operacao.toLowerCase();
    switch (operacao) {
        case 'adição':
            return valor1 + valor2;
        case 'subtração':
            return valor1 - valor2;
        case 'multiplicação':
            return valor1 * valor2;
        case 'divisão':
            if (valor2 === 0) return null;
            return valor1 / valor2;
        default:
            return null;
    }
}

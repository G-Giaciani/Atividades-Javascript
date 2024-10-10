function calcularFatorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= number; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function validarSequencia(sequencia) {
    let pilha = [];
    const correspondencia = {
        ')': '(',
        ']': '['
    };

    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.length === 0 || pilha.pop() !== correspondencia[char]) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}


function multiplicacao(x: number, y: number): number {
    return x * y;
}
function saudacao(nome: string): string {
    return "Olá "  + nome;
}

const resultado = multiplicacao(5, 3);
const dizOla = saudacao("Victor");

console.log("O resultado da multiplicacao é:", resultado);
console.log(dizOla);

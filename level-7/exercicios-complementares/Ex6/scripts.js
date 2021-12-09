// Duas constructor:
class Bloco {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    constructor(peso, massa) {
        this.peso = peso;
        this.massa = massa;
    }
}

const bloco1 = new Bloco(2, 5);
console.log(bloco1); // retorna erro "SyntaxError: A class may only have one constructor"



// Classe:
class Paralalelepipedo {
    // Função Construtora que recebe os parametros e cria o objeto:
    constructor(largura, altura, comprimento) {
        this.largura = largura;
        this.altura = altura;
        this.comprimento = comprimento;
    }
    // ! Método getter que chama a função 'calculateArea()' e retorna a PROPRIEDADE 'area()': 
    get area() {
        return this.calculateArea();
    }
    // Método que atua como uma função que realiza o cálculo da área:
    calculateArea() {
        return this.altura * this.largura * this.comprimento;
    }
}

// Chamando uma classe para criação de um novo objeto:
const block = new Paralalelepipedo(10, 20, 30);
// Retornando a PROPRIEDADE area do objeto 'block':
console.log(block.area);

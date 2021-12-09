// Valor a ser digitado entre as opções (1, 2 ou 3):
var numero = 3;

// Switch executa a expressão entre parenteses e compara os valores de cada case:
switch (numero) {
    case 1: // Caso verdadeiro retorna o valor de numeroPorExtenso, se falso vai para o case 2:
        numeroPorExtenso = 'Um';
        break;
    case 2: // Caso verdadeiro retorna o valor de numeroPorExtenso, se falso vai para o case 3:
        numeroPorExtenso = 'Dois';
        break;
    case 3: // Caso verdadeiro retorna o valor de numeroPorExtenso, se falso vai para default:
        numeroPorExtenso = 'Três';
        break;
    default: // Caso todos os anteriores forem falso retorna o valor default de numeroPorExtenso:
        numeroPorExtenso = 'Número inválido';
}


console.log(numeroPorExtenso); // retorna Três

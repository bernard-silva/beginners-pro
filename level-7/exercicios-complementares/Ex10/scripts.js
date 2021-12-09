const count = 3;
switch (count) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Chamado");
        break;
    case 6:
        console.log("Outro valor");
        break;
    default:
        console.log("valores abaixo de 1 ou acima de 6")
}

console.log(count)

// Irá retornar chamado pois 3 está entre o range de cases (1 a 5) para retornar esse valor.








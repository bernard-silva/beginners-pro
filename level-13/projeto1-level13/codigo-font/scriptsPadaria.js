// ---------------------------------------DIVISÃO-----------------------------------------------------

var itensCarrinhos = [0, 0];
var carrinho = JSON.parse(localStorage.getItem("carrinho"));
var carrinhoItems = JSON.parse(localStorage.getItem("carrinhoItems"));

console.log(carrinho);
console.log(carrinhoItems);

if(carrinho != null){
    document.getElementById("carrinho").innerText = "Valor no Carrinho: R$" + carrinho;
}else{
    LimparCarrinho();
}
if(carrinhoItems != null){
    itensCarrinhos = carrinhoItems;
    console.log(itensCarrinhos);
}

//---------------------------------------------------------------------------------------------------------
//--------------------FUNÇÃO PARA ADICIONAR ITENS AO CARRINHO E SETAR O VALOR NO HTML----------------------
//---------------------------------------------------------------------------------------------------------
function AdicionarCarrinho(produto, unidades){

    itensCarrinhos[produto] = Number(unidades);
    localStorage.setItem("carrinhoItems", JSON.stringify(itensCarrinhos));

    document.getElementById("carrinho").innerText = "Valor no Carrinho: R$" + carrinho;

    console.log(itensCarrinhos);
    ListarItens();
}

function ChangeCarrinho(produto, func){
    if(func == 0 && itensCarrinhos[produto] > 0){
        itensCarrinhos[produto] -= 1;
        document.getElementById("qtda_" + produto).value = itensCarrinhos[produto];
    }else if (func == 1 ){
        itensCarrinhos[produto] += 1;
        document.getElementById("qtda_" + produto).value = itensCarrinhos[produto];
    }
    localStorage.setItem("carrinhoItems", JSON.stringify(itensCarrinhos));

    document.getElementById("carrinho").innerText = "Valor no Carrinho: R$" + carrinho;
    ListarItens();
}

//---------------------------------------------------------------------------------------------------------
//-------------------------FUNÇÃO PARA ZERAR O CARRINHO NO LOCALSTORAGE E NO HTML--------------------------
//---------------------------------------------------------------------------------------------------------
function LimparCarrinho(){
    console.log("Limpar carrinho");
    localStorage.setItem("carrinho", 0);
    localStorage.setItem("carrinhoItems", JSON.stringify([0,0]));

    //-----Setando as variáveis no HTML------
    document.getElementById("carrinho").innerText = "Valor no Carrinho: R$ 0,00";
    document.getElementById("qtda_0").value = 0;
    document.getElementById("qtda_1").value = 0;

    itensCarrinhos = [0,0];
    ListarItens();
}

//---------------------------------------------------------------------------------------------------------
//-------------------------------FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO-----------------------------------
//---------------------------------------------------------------------------------------------------------
ListarItens();
function ListarItens(){
    valor1= itensCarrinhos[0] * 28.00;
    valor2= itensCarrinhos[1] * 33.00;

    carrinho = valor1 + valor2;
    localStorage.setItem("carrinho", carrinho);

    document.getElementById("carrinho").innerText = "Valor no Carrinho: R$" + carrinho;

    document.getElementById("qtda_0").value = itensCarrinhos[0];
    document.getElementById("qtda_1").value = itensCarrinhos[1];

    if (valor1 > 0 || valor2 > 0) {
        document.getElementById("total_0").style.fontSize = '26px';
        document.getElementById("total_1").style.fontSize = '26px';
        document.getElementById("total_0").innerHTML = `<strong>R$ ${itensCarrinhos[0] * 28},00</strong>`
        document.getElementById("total_1").innerHTML = `<strong>R$ ${itensCarrinhos[1] * 33},00</strong>`
    } else {
        document.getElementById("total_0").style.fontSize = '16px';
        document.getElementById("total_1").style.fontSize = '16px';
        document.getElementById("total_0").innerHTML = 'R$ 0,00'
        document.getElementById("total_1").innerHTML = 'R$ 0,00'
    }
}


//---------------------------------------------------------------------------------------------------------
//-------------------------------FUNÇÃO PARA FINALIZAR A COMPRA--------------------------------------------
//---------------------------------------------------------------------------------------------------------
function Finalizar(){

    let FinalizarCompra = confirm("CONFIRMA A COMPRA NO VALOR DE R$" + carrinho) 
    if(FinalizarCompra == true && carrinho > 0) {
        LimparCarrinho()
        window.location.replace('fechaconta.html')
    } else {
        alert("Não há itens no carrinho!")
    }

}
// Utilizando a API Fetch:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
function requisicao(api_url, funcao) {
    fetch(api_url).then(function (respostaJSON) {
        respostaJSON.json().then(function (resposta) {
            funcao(resposta)
        })
    })
};

// Preenche os inputs do HTML: 
function listaInfosEndereco(enderecos) {
    // Limpa os valores do formulário:
    document.getElementById('endereco').innerHTML = '';
    document.getElementById('bairro').innerHTML = '';
    document.getElementById('cidade').innerHTML = '';
    document.getElementById('uf').innerHTML = '';

    // console.log(enderecos);

    // Preenche nos inputs conforme cada valor do objeto:
    document.getElementById('endereco').value = (enderecos.logradouro);
    document.getElementById('bairro').value = (enderecos.bairro);
    document.getElementById('cidade').value = (enderecos.localidade);
    document.getElementById('uf').value = (enderecos.uf);
};

// Escuta o campo CEP quando o mesmo perde o foco:
document.getElementById('cep').addEventListener('blur', function (e) {
    // console.log(e.target.value);
    const api_url = `https://viacep.com.br/ws/${e.target.value}/json/`;
    requisicao(api_url, listaInfosEndereco);
});







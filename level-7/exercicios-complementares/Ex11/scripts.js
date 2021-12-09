// setTimeout() = Configura um tempo para algo ser executado.
// setInterval() = Configura um intervalo de tempo em que algo deve ser executado.
// clearInterval() = Limpa o intervalo que tenha sido configurado pela função setInterval().

// Variavel de tempo:
var tmp;

// Função para mudar o valor de rgb aleatoriamente:
function mudarCor() {
    var obj = document.getElementById('dv1');
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    obj.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('#rgb').innerText = `rgb(${r}, ${g}, ${b})`;
}

// Função para configurar um intervalo para chamar a função mudarCor:
function iniciar() {
    tmp = setInterval(mudarCor, 1000);
}

// Função para parar o intervalo configurado:
function parar() {
    clearInterval(tmp);
}

// Função para escutar os botões e chamar suas respectivas funções:
function botoes() {
    document.getElementById("bt1").addEventListener('click', iniciar);
    document.getElementById("bt2").addEventListener('click', parar);
}

// função para exibir o loading ao carregar a página:
setTimeout(function () {
    // document.querySelector('#tempoEsgotado').style.visibility = 'hidden';
    document.querySelector('img').style.visibility = 'hidden';
    document.querySelector('section').style.visibility = 'visible';
}, 3000)

// Listener para chamar a função 'botoes()' quando carregar a página:
window.addEventListener('load', botoes);
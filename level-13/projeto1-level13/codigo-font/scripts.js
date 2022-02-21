
// ----------- Variáveis Declaras ------------------
const formulario = document.forms.login;
const email = formulario.email;
const senha = formulario.senha;

const botaoLogin = document.getElementById('login');
const botaoCadastro = document.getElementById('cadastro');

const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

const alerta = document.getElementById('alerta');

// --------------- Funções ----------------------

// Verifica com o método de array some() se existe um e-mail exatamente com o mesmo nome no array:
function verificaExistente(emailEsenha) {
    const existe = cadastros.some(function (cad) {
        return cad.email === emailEsenha.email;
    });

    return existe;
}

// Verifica com o métdo de arry some() se o e-mail e senha digitados existem na mesma posição do array:
function verificaEmailESenha(emailEsenha) {
    const dadosCorretos = cadastros.some(function (cad) {
        return cad.email === emailEsenha.email && cad.senha === emailEsenha.senha;
    });

    return dadosCorretos;
}

// Limpa campos do formulário:
function limpaCampos() {
    email.value = '';
    senha.value = '';

    email.focus();
}

// Cria o elemento P e junta ele na div de id 'alerta' e exibindo por 5 segundos: 
function mensagem(texto) {
    alerta.innerHTML = '';

    const elementoP = document.createElement('p');
    elementoP.innerText = texto;

    alerta.appendChild(elementoP);
    alerta.style.display = 'flex';

    // switch (tipo) {
    //     case 'erro':
    //         alerta.style.backgroundColor = 'tomato';
    //         break;
    //     case 'sucesso':
    //         alerta.style.backgroundColor = '#47ff66';
    //         break;
    //     case 'atencao':
    //         alerta.style.backgroundColor = '#ffdb77';
    //         alerta.style.color = '#333';
    //         break;
    //     default:
    //         alerta.style.backgroundColor = '#ffdb77';
    //         alerta.style.color = '#333';
    //         break;
    // }

    setTimeout(function () {
        alerta.style.display = 'none';
    }, 5000);
}

// Valida se email e senha estão vazios e dá alerta para usuário,
// ou chama a função de 'login()' ou de 'cadastro()':
function validaECadastra(campos, funcao) {
    if (campos.email.trim() === '') {
        alert('Insira seu email!');
        email.focus();
        return;
    } else if (campos.senha.trim() === '') {
        alert('Insira sua senha!');
        senha.focus();
        return;
    } else {
        funcao(campos);
    };
}

// Verifica se o email já existe, caso não exista é cadastrado no array e no localStorage:
function cadastro(campos) {
    if (!verificaExistente(campos)) {
        cadastros.push(campos);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        // mensagem('Usuário cadastrado com sucesso!', 'sucesso');
        mensagem('Usuário cadastrado com sucesso!');
    } else {
        // mensagem('Esse usuário já existe!', 'erro');
        mensagem('Esse usuário já existe!');
    };

    limpaCampos();
}

// Verifica se o email existe e se a senha digitada está correta para aquele email:
function login(campos) {
    if (verificaExistente(campos)) {
        if (verificaEmailESenha(campos) == false) {
            // mensagem('Verifique o que foi digitado, dados incorretos!', 'atencao');
            mensagem('Verifique o que foi digitado, dados incorretos!');
        } else {
            // mensagem('Login realizado!', 'sucesso');
            mensagem('Login realizado!');
            window.location.replace('padaria.html')
        };
    } else {
        // mensagem('Essa conta não existe!', 'erro');
        mensagem('Essa conta não existe!');
    };

    limpaCampos();
}

// ----------------- Botões --------------------

// Recebe email e senha digitado pelo cliente para Login:
botaoLogin.addEventListener('click', function () {
    const campos = {
        email: email.value,
        senha: senha.value
    };

    validaECadastra(campos, login);
});

// Recebe email e senha digitado pelo cliente para Cadastro:
botaoCadastro.addEventListener('click', function () {
    const campos = {
        email: email.value,
        senha: senha.value
    };

    validaECadastra(campos, cadastro);
});




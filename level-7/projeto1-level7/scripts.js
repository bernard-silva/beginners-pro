var btnHistoria = document.getElementById('btnHistoria');
var contaHistoria = document.querySelector('.typewriter h1');
var i = 0;
var txt = '';
var speed = 60;
var tmp = '';

var monsterTypeCase = '';
var monsterSkill = '';
var hEspecie = '';
var hArmamento = '';
var hLocal = '';
var hLocalfull = '';
var hAcidente = '';

backImages = [];

function escolha() {
    var protagonista = document.querySelector('#protagonista').value;
    var monstro = document.querySelector('#monstro').value;
    var especie = document.querySelector('#especie').value;
    var armamento = document.querySelector('#armamento').value;
    var local = document.querySelector('#local').value;
    var acidente = document.querySelector('#acidente').value;

    switch (monstro) {
        case 'intergalaticos':
            monsterTypeCase = 'Monstros Intergaláticos'
            monsterSkill = 'fazer muqueca de peixe'
            backImages.push('pages/intergalaticos/1.jpg')
            backImages.push('pages/intergalaticos/2.jpg')
            backImages.push('pages/intergalaticos/3.jpg')
            break;
        case 'zumbis':
            monsterTypeCase = 'Zumbis'
            monsterSkill = 'fumar um charuto'
            backImages.push('pages/zumbis/1.jpg')
            backImages.push('pages/zumbis/2.jpg')
            backImages.push('pages/zumbis/3.jpg')
            break;
        case 'vampiros_franceses':
            monsterTypeCase = 'Vampiros Franceses'
            monsterSkill = 'fazer chá de ibisco'
            backImages.push('pages/vampiros/1.jpg')
            backImages.push('pages/vampiros/2.jpg')
            backImages.push('pages/vampiros/3.jpg')
            backImages.push('pages/vampiros/4.jpg')
            break;
    }

    switch (especie) {
        case 'padawan':
            hEspecie = 'Padawan';
            break;
        case 'humano':
            hEspecie = 'Humano';
            break;
        case 'jacare':
            hEspecie = 'Jacaré';
            break;
    }

    switch (armamento) {
        case 'caneca':
            hArmamento = 'caneca';
            break;
        case 'bankai':
            hArmamento = 'bankai';
            break;
        case 'martelo':
            hArmamento = 'martelo';
            break;
    }

    switch (local) {
        case 'tatooine':
            hLocal = 'Tatooine';
            hLocalfull = 'Planeta Deserto';
            break;
        case 'japao':
            hLocal = 'Japão';
            hLocalfull = 'Submundo de Tóquio';
            break;
        case 'franca':
            hLocal = 'França';
            hLocalfull = 'Na terra do Nariz empinado';
            break;
    }

    switch (acidente) {
        case 'tempestade_solar':
            hAcidente = 'Tempestade Solar';
            break;
        case 'apocalipse':
            hAcidente = 'Apocalipse';
            break;
        case 'gremlin':
            hAcidente = 'Molharam um gremlin';
            break;
    }

    var escolhas = [
        protagonista,
        monsterTypeCase,
        monsterSkill,
        hEspecie,
        hArmamento,
        hLocal,
        hLocalfull,
        hAcidente
    ]

    document.body.style.backgroundImage = `url('${backImages[0]}')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    temporizadorchangeBG();
    historia(escolhas);
}

function historia(escolhas) {
    // console.log(escolhas)
    // ${ escolhas[0] } == protagonista
    // ${ escolhas[1] } == monsterTypeCase
    // ${ escolhas[2] } == monsterSkill
    // ${ escolhas[3] } == hEspecie
    // ${ escolhas[4] } == hArmamento
    // ${ escolhas[5] } == hLocal
    // ${ escolhas[6] } == hLocalfull
    // ${ escolhas[7] } == hAcidente

    let date = new Date();

    txt = `
        Era uma vez em lugar chamado ${escolhas[5]} havia lá um habitante que se chamava ${escolhas[0]}, 
        ele era um ${escolhas[3]} muito alegre, até que foi chegada a era dos ${escolhas[1]}, que foi causada em ${date.getFullYear()} 
        por ${escolhas[7]} que fazia com que os humanos pertos se tornassem ${escolhas[1]}, 
        criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer ${escolhas[3]} e ${escolhas[2]}. 
        O ${escolhas[3]} se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou no ${escolhas[6]} 
        ${escolhas[4]}, ferramenta que ele utilizou por décadas no combate destes ${escolhas[1]}, 
        até que um dia aprendeu uma magia capaz de trazer os ${escolhas[1]} de volta a sanidade mental, 
        esses por sua vez não esqueceram como ${escolhas[2]}... Fim
    `
    console.log(txt)
    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        contaHistoria.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        clearInterval(tmp)
    }
}

function changeBG() {
    var randomBack = Math.floor(Math.random() * backImages.length);
    if (randomBack == 0) {
        randomBack = 1;
    }
    document.body.style.backgroundImage = `url('${backImages[randomBack]}')`;
}

function temporizadorchangeBG() {
    tmp = setInterval(changeBG, 5000)
}

function mudaPagina() {
    document.getElementById('formulario').style.visibility = 'hidden';
    document.querySelector('.typewriter').style.visibility = 'visible';
}

btnHistoria.addEventListener('click', function (event) {
    event.preventDefault();

    mudaPagina();
    escolha();
});
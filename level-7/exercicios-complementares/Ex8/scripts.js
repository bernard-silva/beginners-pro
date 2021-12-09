// Classe Pai:
class FightStyles {
    constructor(nome) {
        this.nome = nome;
    }
    saldar() {
        console.log(this.nome + ' Cumprimenta')
    }
}

// Classe Filha referenciando a classe Pai:
class Jiujitsu extends FightStyles {
    saldar() {
        console.log(this.nome + ' OSS')
    }
}

let Jiu = new Jiujitsu('Jiu');
Jiu.saldar();
// Retorna Jiu OSS


// O Extends referencia a classe Pai na qual a classe filha pertence. 
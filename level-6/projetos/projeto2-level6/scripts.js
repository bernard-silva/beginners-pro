//----------Variáveis -------------------

let template = document.querySelector('.template')

let questoes = [
    {
        questao: 'Fale com suas palavras a teoria por trás da "Identificação Sequencial".',
        resposta: `A Identificação Sequencial consiste em estabelecer um controle de versionamento a partir de uma sequência de números e/ou letras determinados por uma organização.
        
        Um exemplo seria a alteração de uma versão 1.0 para 1.1 onde possam conter muitas correções e melhorias, ou poderia ser 1.0.0 para 1.0.1 onde teriam apenas algum patch de correção.
        `
    },
    {
        questao: 'Como o versionamento de códigos ajuda o trabalho em equipe?',
        resposta: `Possibilita o trabalho em equipe em diferentes códigos de um mesmo sistema/projeto sem que um afete o trabalho do outro, assim como permite maior confiabilidade sobre a segurança dos códigos anteriores, seu histórico com rastreabilidade das suas alterações e sua estabilidade antes de mudar para uma nova versão com novas melhorias, evitando assim excessos de correções/retrabalhos em versões anteriores.`
    },
    {
        questao: 'Como funcionam as branches no Git?',
        resposta: `As branches (galhos) são ramificações que o Git possibilita utilizar para anotar e monitorar os arquivos que foram alterados, sendo possível unificar esses arquivos posteriormente e avaliar se há conflito em casos onde tenha sido um trabalho em equipe em diferentes partes de um mesmo projeto.`
    },
    {
        questao: 'Qual a diferença entre repositórios locais e repositórios em nuvem?',
        resposta: `Repositórios locais ficam em sua máquina e somente você tem acesso, podendo já ter as dependências necessárias da aplicação.
        
        Repositórios na nuvem mais de uma pessoa pode ter acesso e se tem um backup caso os dados locais sejam perdidos, porém caso seja mal gerenciado pode ter mais erros de conflitos de versionamento.
        `
    },
    {
        questao: 'Explique o "fluxo de trabalho comum com GitHub" com suas palavras. PS.: Utilize os códigos para te ajudar nesta tarefa.',
        resposta: `O fluxo de trabalho comum no github permite a inserção de novas features em nossa aplicação.

        Cada inserção deve ser feita por uma branch
        
        Exemplo: adicionando estilos em um arquivo css
        
        // 1. Iniciando repositorio local
        git init
        
        // 2. referenciando repositorio remoto
        git remote add origin <link-repositorio>
        
        // 3. Capturando dados/atualizacoes repositorio remoto
        git pull origin master ( ou main)
        
        // 4. verificando se ha existencia de branch
        git branch
        
        // 5. criando uma branch
        git branch <sua-branch>
        
        // 6. acessando branch
        git checkout <sua-branch>
        
        Após estes passos você poderá realizar suas alterações e seguir com:
        
        // 7. verifica o status de alteracoes
        git status
        
        // 8. adiciona as alteracoes a linha de sua branch
        git add .
        
        // 9. cria mensagem de break point na branch
        git commit -m "sua mensagem de break point"
        
        // 10. adiciona as alteracoes de sua branch no repositorio remoto
        git push origin <sua-branch>
        `
    },
    {
        questao: 'Explique com suas palavras a funcionalidade do GitHub.',
        resposta: `O GitHub é um repositório, servindo como backup dos versionamentos de códigos fontes, como rede social e permite a hospedagem de um site em seu domínio.`
    },
    {
        questao: 'Como funciona a linguagem Markdown.',
        resposta: `O Markdown é uma ferramenta de conversão de texto em HTML. É possível escrever usando texto simples de fácil leitura e fácil escrita e depois transformá-lo em HTML válido.`
    },
    {
        questao: 'Como normalmente utilizamos Markdown, de exemplos.',
        resposta: `O markdown pode ser utilizado para uma breve descrição/documentação de software no README.md

        É também usado na escrita de lincenças de software no LICENSE.md
        
        Exemplos:
        
        Criando uma lista:
        + Item 1
        + Item 2
        + Item 3
        
        Adicionando uma imagem:
        ![texto alt](link-img)
        `
    },
    {
        questao: 'Faça um texto falando sobre Front-end.',
        resposta: `Fron-end é a parte de programação que trabalha do lado do cliente, tratando a visualização das telas e interações com o usuário a partir do uso de UI/UX Design, viabilizando a funcionalidade e uma melhor experiencia de uso da aplicação.
        
        Alguns exemplos de tecnologias utilizadas são HTML, CSS, Javascript, e bibliotecas como React JS e Frameworks como Angular.js e Vue.js.
        `
    },
    {
        questao: 'Faça um texto falando sobre Back-end.',
        resposta: `Back-end é a parte da programação que trabalha do lado do servidor, onde a regra de negócio da aplicação é estabelecida e ocorre a interação diretamente ao banco de dados.
        
        Alguns exemplos de tecnologias são: Node.js, php, java, C#, Python, SQL, etc.
        `
    },

];

// Limpa a section '#container':
container.innerHTML = '';

// Percorre o array 'questoes':
questoes.forEach(item => {
    // clona a estrutura HTML da div '.template' para cada item do array:
    let clone = template.cloneNode(true);

    // Seleciona o elemento filho button '.accordion':
    let questao = clone.children[0];
    // Seleciona o elemento filho '.panel' > 'p' :
    let resposta = clone.children[1].children[0];

    // Adiciona os itens do array em cada tag HTML:
    questao.innerText = item.questao;
    resposta.innerText = item.resposta;

    // Junta o que foi construído no clone com a section '#container':
    container.append(clone);

    // * Testes iniciais para efeito de registro:
    // clone.children[0].innerText = item;
    // document.body.appendChild(clone);
    // console.log(clone)
})

// -------------- Código para efeito da abertura em transição do Accordion-----------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// ------------------- END ------------------

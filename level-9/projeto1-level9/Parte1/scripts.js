let vetorCards = []

async function requisicao() {
    return await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "5765638b32msh90060a51b275666p17af44jsn131ba9121989"                
            }
        })
        .then(res => res.json())
        .then(cards => {
            getKeys(cards)
            // console.log(cards)
        })
        .catch(err => {
            console.error(err);
    })
}

function getKeys(cards) {
    for(var key in cards) {
        if(Object.prototype.hasOwnProperty.call(cards, key)) {
            var valor = cards[key];
            valor.forEach((card, index) => {
                if(card.img !== null && card.img !== undefined) {
                    // console.log(card)
                    if(index < 100) {
                        let mechanic = [];
                        if (card.mechanics) {
                            for (let i = 0; i < card.mechanics.length; i++) {
                                if (i + 1 ==1) {
                                    mechanic += card.mechanics[i].name;
                                } else if (i + 1 == 2) {
                                    mechanic += " / " + card.mechanics[i].name;
                                }
                            }
                        }
                        // console.log(card)
                        var objetoCard = {
                            "img": card.img ? card.img : '', 
                            "name": card.name ? card.name : '', 
                            "cardSet": card.cardSet ? card.cardSet : '',
                            "cost": card.cost ? card.cost : '', 
                            "playerClass": card.playerClass ? card.playerClass : '', 
                            "text": card.text ? card.text : '',  
                            "race": card.race ? card.race : '',  
                            "mechanics": mechanic,
                            "attack": card.attack ? card.attack : '',  
                            "health": card.health ? card.health : '',  
                            "type": card.type ? card.type : ''
                        }
                        vetorCards.push(objetoCard)
                        // console.log(vetorCards)
                    }
                }
            })
        }
    }

    varrerVetor(vetorCards);

};

function varrerVetor(vetorCards){

    let divResponse = document.querySelector('#divResponse');
    document.querySelector("#loading").style.visibility = 'hidden';
    divResponse.innerHTML = ''

    vetorCards.forEach((vetorCard, index) => {
        if (index <= 100){
            divResponse.innerHTML += ` 
                <div id="div_container_${index}" class="div_container w-72 mx-3.5"> 
                    <div>
                        <div id="div_img_${index}" class="div_img bg-[url('./images/capa.png')] w-72 mx-3.5">
                            <img src=${vetorCard.img}>
                        </div>
                        <div id="div_description_${index}" class="div_description bg-amber-500 w-72 mx-3.5 text-center">
                            <h5 class="font-bold">${vetorCard.name}</h5>
                            <br>
                            <h5><strong>Expansão: </strong>${vetorCard.cardSet}</h5>
                            <h5><strong>Custo: </strong>${vetorCard.cost}</h5>
                            <h5><strong>Classe: </strong>${vetorCard.playerClass}</h5>
                            <h5><strong>Informativo: </strong>${vetorCard.text}</h5>
                            <h5><strong>Raça: </strong>${vetorCard.race}</h5>
                            <h5><strong>Mecânicas: </strong>${vetorCard.mechanics}</h5>
                            <h5><strong>Ataque: </strong>${vetorCard.attack}</h5>
                            <h5><strong>Vida: </strong>${vetorCard.health}</h5>
                            <h5><strong>Tipo: </strong>${vetorCard.type}</h5>
                        </div>
                    </div>
                </div> 
            `;
        }
    })
}

window.addEventListener('load', function () {
    requisicao();
})

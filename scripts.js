const cardBack = "images/front 1.png"


let cardsNumber = 0

function setCardsNumber(){
    do{
        cardsNumber = prompt("Informe com quantas cartas você quer jogar")
    } while (cardsNumber % 2 !== 0)
}

setCardsNumber()

let cardsPath = [
    "images/cards_path/bobrossparrot.gif",
    "images/cards_path/explodyparrot.gif",
    "images/cards_path/fiestaparrot.gif",
    "images/cards_path/metalparrot.gif",
    "images/cards_path/revertitparrot.gif",
    "images/cards_path/tripletsparrot.gif",
    "images/cards_path/unicornparrot.gif",
]



const cardsList = []

// Atribuindo as imagens para os cards
function setCardsList(){
   let i = 0
    for(let cont = 0; cont < cardsNumber; cont+=2){
        cardsList.push(
            {
                cardPath: cardsPath[i],
                cardBack: "images/front 1.png",

            }

        );
        cardsList.push(
            {
                cardPath: cardsPath[i],
                cardBack: "images/front 1.png",

            }

        );
        i++;
    }
    cardsList.sort(comparador);
}

setCardsList()

function comparador() { 
	return Math.random() - 0.5; 
}




function showCards(){
            const lista = document.querySelector(".cards-list")
    for (let cont = 0; cont < cardsList.length; cont++){
        let path = cardsList[cont].cardBack
        lista.innerHTML += `<div class="card" onclick="turnCard(this, ${cont})"> <img src= "images/front 1.png"> </div>`
    }
}

showCards()


function turnCard(card, index){
    let path = cardsList[index].cardPath

    card.querySelector("img").src = path
    

}
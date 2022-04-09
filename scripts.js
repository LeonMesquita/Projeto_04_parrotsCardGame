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
        lista.innerHTML += `<div class="card" onclick="turnCard(this, ${cont})"> <img src= "images/front 1.png"> </div>`
    }
}

showCards()

let turnedCards = 0
let card1Path
let card2Path

let cardsElements = []

function turnCard(card, index){
    let path = cardsList[index].cardPath
    if (turnedCards < 2){
        card.querySelector("img").src = path
        cardsElements.push(card)
        turnedCards++
        if (turnedCards === 1){
            card1Path = path
        }
        else if (turnedCards === 2){
            card.querySelector("img").src = path
            card2Path = path
            checkPlay()
            turnedCards = 0
            
        }
    }
    else{

    }

    
    

}

function checkPlay(){
    if (card1Path === card2Path){
        cardsElements = []
    }
    else {
        setTimeout(flipCards, 1000)
    }
}

function flipCards(){
    cardsElements[0].querySelector("img").src = "images/front 1.png"
    cardsElements[1].querySelector("img").src = "images/front 1.png"
    cardsElements = []
}
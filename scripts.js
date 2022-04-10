

let cardsNumber = 0
let totalTurnedCards = 0
let totalOfPlays = 0
let time = 0
let idInterval
let cardsList = []
let turnedCards = 0
let card1Path
let card2Path

let cardsElements = []


const cardsPath = [
    "images/cards_path/bobrossparrot.gif",
    "images/cards_path/explodyparrot.gif",
    "images/cards_path/fiestaparrot.gif",
    "images/cards_path/metalparrot.gif",
    "images/cards_path/revertitparrot.gif",
    "images/cards_path/tripletsparrot.gif",
    "images/cards_path/unicornparrot.gif",
]


function startMatch(){
    cardsNumber = 0
    totalTurnedCards = 0
    totalOfPlays = 0
    time = 0
    cardsList = []

    do{
        cardsNumber = prompt("Informe com quantas cartas você quer jogar")
    } while (cardsNumber % 2 !== 0)



}

startMatch()







// Distribuindo os gifs entre os cards
function setCardsList(){
   let i = 0
    for(let cont = 0; cont < cardsNumber; cont+=2){
        cardsList.push(
            {
                cardPath: cardsPath[i],

            }

        );
        cardsList.push(
            {
                cardPath: cardsPath[i],

            }

        );
        i++;
    }
    cardsList.sort(comparador);
}


function comparador() { 
	return Math.random() - 0.5; 
}

setCardsList()


    const cards = document.querySelector(".cards-list")

function showCards(){
    for (let cont = 0; cont < cardsList.length; cont++){
        cards.innerHTML += `<div class="card" onclick="turnCard(this, ${cont})">

        <div class="front-face face">
            <img src= "images/front 1.png">
        </div>             
        </div>`
    }

    showTime()
}

showCards()


let card1Index
let card2Index

function turnCard(card, index){
    let path = cardsList[index].cardPath
    if (turnedCards < 2){
 

        card.querySelector("img").src = path
        //card.querySelector("div").classList.add('card-front')
        card.querySelector("div").classList.toggle('front-face')
        card.onclick=""


        cardsElements.push(card)

        turnedCards++
        totalOfPlays++
        if (turnedCards === 1){
            card1Path = path
            card1Index = index
        
        }
        else if (turnedCards === 2){
            card.querySelector("img").src = path
            card2Path = path
            card2Index = index
            checkPlay()
            turnedCards = 0
            
        }
    }

    if (totalTurnedCards === cardsList.length){
        alert(`Você ganhou em ${totalOfPlays} jogadas!`)
        let answer = prompt("deseja reiniciar a partida?")
        if (answer === "sim"){
            cards.innerHTML = ""
            startMatch()
            setCardsList()
            showCards()


            
        }
    }

    
    

}

function checkPlay(){
    if (card1Path === card2Path){
        totalTurnedCards += 2
        cardsElements[0].onclick=""
        cardsElements[1].onclick=""
        cardsElements = []
    }
    else {
        cardsElements[0].setAttribute('onclick', `turnCard(this, ${card1Index})`)
        cardsElements[1].setAttribute('onclick', `turnCard(this, ${card2Index})`)
        setTimeout(flipCards, 1000)
    }
}
//


function flipCards(){
    cardsElements[0].querySelector("div").classList.toggle('front-face')
    cardsElements[1].querySelector("div").classList.toggle('front-face')
    cardsElements[0].querySelector("img").src = "images/front 1.png"
    cardsElements[1].querySelector("img").src = "images/front 1.png"
    cardsElements = []
}


function showTime(){
    document.querySelector(".clock").innerHTML = time

    idInterval = setInterval(decrement, 1000)
}

function decrement() {
    time++
    document.querySelector(".clock").innerHTML = time

    if (totalTurnedCards === cardsList.length){
        clearInterval(idInterval)
    }

}


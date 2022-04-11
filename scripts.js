let cardsNumber = 0
let totalTurnedCards = 0
let totalOfPlays = 0
let minutes = 00
let seconds = 00
let idInterval
let cardsList = []
let turnedCards = 0
let card1Path
let card2Path
let previousCard
let currentCard


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
    minutes = 0
    seconds = 0
    previousCard = ""
    currentCard = ""
    cardsList = []

    do{
        cardsNumber = prompt("Informe com quantas cartas você quer jogar")
    } while (cardsNumber < 4 || cardsNumber > 14 || cardsNumber % 2 !== 0)
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



// Exibindo os cards na tela

const cards = document.querySelector(".cards-list")

function showCards(){
    
    for (let cont = 0; cont < cardsList.length; cont++){
        cards.innerHTML += `<div class="card" onclick="turnCard(this, ${cont})">
        <div class="face">
            <img src= "images/front 1.png">
        </div>             
        </div>`
    }

    showTime()
}

showCards()


let card1Index
let card2Index

//Virar um card ao clicar

function turnCard(card, index){
    let path = cardsList[index].cardPath
    if (turnedCards < 2 && (previousCard === "" || currentCard === "")){
        card.querySelector("img").src = path
        turnedCards++
        totalOfPlays++
        if (turnedCards === 1){
            card1Path = path
            card1Index = index
            previousCard = card
        
        }
        else if (turnedCards === 2){
            card.querySelector("img").src = path
            card2Path = path
            card2Index = index
            currentCard = card
            checkPlay()
            turnedCards = 0
            
        }
    }

    if (totalTurnedCards === cardsList.length){
        clearInterval(idInterval)
        alert(`Você ganhou em ${totalOfPlays} jogadas e seu tempo foi ${minutes} minutos e ${seconds} segundos!`)
        let answer
        while (answer !== "sim" && answer != "não"){
            answer = prompt("deseja reiniciar a partida?")
            if (answer === "sim"){
            cards.innerHTML = ""
            startMatch()
            setCardsList()
            showCards()
        }
        }

    }

    
    

}
	
//Verificar se os cards são iguais

function checkPlay(){
    if (card1Path === card2Path && currentCard !== previousCard){
        totalTurnedCards += 2
        previousCard.onclick=""
        currentCard.onclick=""
        previousCard = ""
        currentCard = ""
    }
    else {
        setTimeout(flipCards, 1000)
    }
}


//Virar os cards de volta

function flipCards(){
    previousCard.querySelector("img").src = "images/front 1.png"
    currentCard.querySelector("img").src = "images/front 1.png"
    previousCard = ""
    currentCard = ""
}


function showTime(){

   
    idInterval = setInterval(increment, 1000)
}

function increment() {
    seconds++
    s = "0"
    m = "0"
    if (seconds > 9){
        s = ""
    }
    if (minutes > 9){
        m = ""
    }
    if (seconds === 60){
        minutes++
        seconds = 0
    }
    
    document.querySelector(".clock").innerHTML = `
    <img src="images/alarm-outline.svg" />

    <h1>${m}${minutes}:${s}${seconds}</h1>`



}

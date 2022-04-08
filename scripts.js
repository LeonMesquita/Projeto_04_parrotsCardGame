let cardsNumber = 0

function setCardsNumber(){
    do{
        cardsNumber = prompt("Informe com quantas cartas você quer jogar")
    } while (cardsNumber % 2 !== 0)
}

setCardsNumber()
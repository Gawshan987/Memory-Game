const cardArray = [ 
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png' 
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake', 
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza', 
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog', 
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream', 
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake', 
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza', 
        img: 'images/pizza.png'
    }
]

//checking to see if number is larger than 0.5 or not
cardArray.sort(() => 0.5 - Math.random())



//searches thru html file and find the grid from it
const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result') 
let cardsChosen = []
let cardsChosenIds = []  
let cardsWon = [] 

//creating the board
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard) 
        grid.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    //this looks for all of the img cards 
    const cards = document.querySelectorAll('img')  
    //it makes it eaiser??
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1] 
    console.log(cards)
    console.log('check for a match!')
    //if you clicked the same cards (alerts you)
    if(optionOneId  == optionTwoId){
        cards[optionOneId].setAttribute('src',images/blank.png)
        cards[optionTwoId].setAttribute('src',images/blank.png) 
        alert('You  have clicked the same image!')
    }
    // if the first cards chosen matches the second card chosen 
    if(cardsChosen[0] == cardsChosen [1]){
        alert('you found a match!')
        //if it is a match add the white img to both of the matching cards
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')  
        //that will remove the ability to click on the card 
        cards[optionOneId].removeEventListener('click', flipcard) 
        cards[optionTwoId].removeEventListener('click', flipcard) 
        //pushing in the content of the cards chosen to cardsWon
        cardsWon.push(cardsChosen)  
    } else {
        //if it is not a match it flips the card back to the original card
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png') 
        alert('Sorry try again!')     

    }
    resultDisplay.textContent = cardsWon.length 
    //this is to start that process again
    cardsChosen = []
    cardsChosenIds = [] 
    //if the won is equal to the car arrary and to
    //divide by 2 cause u can only get 6 matches  
    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = ('Congratulations you found them all') 
    }
    
} 

function flipcard() { 
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push (cardId) 
    console.log(cardsChosen)
    console.log(cardsChosenIds) 
    this.setAttribute('src', cardArray[cardId].img) 
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500) 
    }
}
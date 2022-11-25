const gameContainer = document.querySelector('.container');

const elements = ['🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎', '🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎'];

function generateCard(element) {
    const card = `<div class='card'> 
                    <p>${element}</p>
                 </div>`;
    
    return card;
}

function shuffleIndexes(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function renderElements() {
    const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const shuffledList = shuffleIndexes(numberList);

    for(let i = 0; i < elements.length; i++) {
        gameContainer.innerHTML += generateCard(elements[shuffledList[i]]);
    }
}

window.onload = () => {
    renderElements();
}
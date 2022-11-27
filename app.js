const emojiElement = document.querySelectorAll('.element');
const flipper = document.querySelectorAll('.flipper');


const elements = ['🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎', '🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎'];

function shuffleIndexes(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function distributeElements() {
    const indexesList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const shuffledIndexesList = shuffleIndexes(indexesList);

    for(let i = 0; i < elements.length; i++) {
        emojiElement[i].innerText = elements[shuffledIndexesList[i]];
    }
}

window.onload = () => {
    distributeElements();
    flipper.forEach((e) => e.addEventListener('click', () => {
        e.classList.toogle('flipped');
    }));
}
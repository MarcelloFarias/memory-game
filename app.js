const emojiElement = document.querySelectorAll('.element');
const flipper = document.querySelectorAll('.flipper');
const btnRestart = document.querySelector('.btn-restart');
const elements = ['🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎', '🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎'];

let selecteds = [];

function shuffleIndexes(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;   
}

function distributeElements() {
    const shuffledIndexesList = shuffleIndexes(elements);

    for(let i = 0; i < shuffledIndexesList.length; i++) {
        emojiElement[i].innerText = shuffledIndexesList[i];
    }
}

function init() {
    distributeElements();

    let selected = 0;

    for(let i = 0; i < flipper.length; i++) {
        flipper[i].addEventListener('click', () => {
            if(selected < 2) {
                if(flipper[i].className == 'flipper') {
                    flipper[i].classList.toggle('flipped');
                    if(selecteds.length < 2) {
                        selecteds.push({element: flipper[i], emoji: flipper[i].querySelector('.element').innerText});
                    }
                    if(selecteds.length == 2) {
                        if(selecteds[0].emoji == selecteds[1].emoji) {
                            setTimeout(() => {
                                for(let i = 0; i < selecteds.length; i++) {
                                    selecteds[i].element.classList.toggle('equals');
                                }
                                for(let i = 0; i < 2; i++) {
                                    selecteds.splice(0, 1);
                                }
                                selected = 0;
                            }, 1000);
                        }
                        else {
                            setTimeout(() => {
                                for(let i = 0; i < selecteds.length; i++) {
                                    selecteds[i].element.classList.toggle('flipped');
                                }
                                for(let i = 0; i < 2; i++) {
                                    selecteds.splice(0, 1);
                                }
                                selected = 0;
                            }, 2000);
                        }
                    }
                    selected++;
                }
            }
        });
    }
}

window.onload = () => {
    init();
}

btnRestart.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
});
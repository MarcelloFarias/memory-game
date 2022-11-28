const emojiElement = document.querySelectorAll('.element');
const flipper = document.querySelectorAll('.flipper');
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
    const indexesList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const shuffledIndexesList = shuffleIndexes(indexesList);

    for(let i = 0; i < elements.length; i++) {
        emojiElement[i].innerText = elements[shuffledIndexesList[i]];
    }
}

window.onload = () => {
    distributeElements();

    let selected = 0;

    //flipper.forEach((element) => element.addEventListener('click', () => {
        //if(selected < 2) {
           // if(element.className == 'flipper') {
                //element.classList.toggle('flipped');
                
                //selected++;
            //}
        //}
    //}));

    for(let i = 0; i < flipper.length; i++) {
        flipper[i].addEventListener('click', () => {
            if(selected < 2) {
                if(flipper[i].className === 'flipper' || flipper[i].className === 'different') {
                    flipper[i].classList.toggle('flipped');
                    if(selecteds.length < 2) {
                        selecteds.push({element: flipper[i], emoji: flipper[i].querySelector('.element').innerText});
                    }
                    if(selecteds.length == 2) {
                        if(selecteds[0].emoji == selecteds[1].emoji) {
                            selecteds[0].element.classList.toggle('equals');
                            selecteds[1].element.classList.toggle('equals');
                            selecteds.splice(0, 1);
                            selecteds.splice(0, 1);
                            selected = 0;
                        }
                        else {
                            setTimeout(() => {
                                selecteds[0].element.classList.toggle('different');
                                selecteds[1].element.classList.toggle('different');
                                selecteds.splice(0, 1);
                                selecteds.splice(0, 1);
                                selected = 0;
                            }, 2000);
                        }
                    }
                    console.log(selecteds)
                    selected++;
                }
            }
        });
    }
}
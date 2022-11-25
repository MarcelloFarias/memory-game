const gameContainer = document.querySelector('.container');

const elements = ['🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎', '🍉', '🍌', '🍒', '🍓', '🍋', '🥝', '🍇', '🍎'];

function generateCard(element) {
    const card = `<div class='card'> 
                    <p>${element}</p>
                 </div>`;
    
    return card;
}


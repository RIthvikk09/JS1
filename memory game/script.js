$(document).ready(function () {
    

    //     const gameBoard = document.querySelector(".game-board");
    //     const cards = [...icons, ...icons];
    //     let firstCard, secondCard;
    //     let flippedCards = 0;
    //     let lockBoard = false;

    //     function shuffle(array) {
    //         for (let i = array.length - 1; i > 0; i--) {
    //             let j = Math.floor(Math.random() * (i + 1));
    //             [array[i], array[j]] = [array[j], array[i]];
    //         }
    //         return array;
    //     }

    //     function createCard(icon) {
    //         const card = document.createElement("div");
    //         card.classList.add("card");
    //         card.innerHTML = `
    //     <div class="card-inner">
    //       <div class="card-front"><i class="${icon}"></i></div>
    //       <div class="card-back"></div>
    //     </div>`;
    //         card.addEventListener("click", flipCard);
    //         return card;
    //     }

    //     function flipCard() {
    //         if (lockBoard) return;
    //         if (this === firstCard) return;

    //         this.classList.add("flipped");

    //         if (!firstCard) {
    //             firstCard = this;
    //             return;
    //         }

    //         secondCard = this;
    //         checkForMatch();
    //     }

    //     function checkForMatch() {
    //         if (firstCard.querySelector(".card-front i").className === secondCard.querySelector(".card-front i").className) {
    //             disableCards();
    //             return;
    //         }

    //         unflipCards();
    //     }

    //     function disableCards() {
    //         firstCard.removeEventListener("click", flipCard);
    //         secondCard.removeEventListener("click", flipCard);

    //         resetBoard();
    //     }

    //     function unflipCards() {
    //         lockBoard = true;

    //         setTimeout(() => {
    //             firstCard.classList.remove("flipped");
    //             secondCard.classList.remove("flipped");

    //             resetBoard();
    //         }, 1000);
    //     }

    //     function resetBoard() {
    //         [firstCard, secondCard] = [null, null];
    //         lockBoard = false;
    //     }

    //     function init() {
    //         const shuffledCards = shuffle(cards);
    //         shuffledCards.forEach(icon => {
    //             const card = createCard(icon);
    //             gameBoard.appendChild(card);
    //         });
    //     }

    //     init();
    // })
    const symbols = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆'];

    let firstCard = null;
    let secondCard = null;
    let cardsMatched = 0;
    let canFlip = true;

    const generateCards = () => {
        const shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

        const grid = $('#game-grid');
        grid.empty();

        shuffledSymbols.forEach(symbol => {
            const card = $('<div class="card">'+symbol+'</div>');
            card.data('symbol', symbol);
            grid.append(card);
        });

        $('.card').click(function () {
            if (!canFlip || $(this).hasClass('flipped')) {
                return;
            }

            $(this).addClass('flipped');

            if (!firstCard) {
                firstCard = $(this);
            } else {
                secondCard = $(this);
                canFlip = false;

                setTimeout(checkMatch, 1000);
            }
        });
    };

    const checkMatch = () => {
        if (firstCard.data('symbol') === secondCard.data('symbol')) {
            firstCard.off('click');
            secondCard.off('click');
            cardsMatched += 2;

            if (cardsMatched === symbols.length * 2) {
                setTimeout(() => {
                    alert('Congratulations! You won the game.');
                }, 500);
            }
        } else {
            firstCard.removeClass('flipped');
            secondCard.removeClass('flipped');
        }

        firstCard = null;
        secondCard = null;
        canFlip = true;
    };

    $('#restart-btn').click(function () {
        firstCard = null;
        secondCard = null;
        cardsMatched = 0;
        canFlip = true;
        generateCards();
    });

    generateCards();
});

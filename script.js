// const dataContainer = $('#data-container')
// const pagination = $('#pagination');
// const prevButton = $('#prev');
// const nextButton = $('#next');
// const pageNumbers = $('#page-numbers');
// const pageLinks = $('.page-link');

// const cardsPerPage = 4;
// const cards =
//     Array.from(dataContainer.getElementsByClassName('card'));

// const totalPages = Math.ceil(cards.length / cardsPerPage);
// let currentPage = 1;

// function displayPage() {
//     const startIndex = (page - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;
//     cards.forEach((card, index) => {
//         if (index >= startIndex && index < endIndex) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
// }

// function updatePagination() {
//     $("#page-numbers").textContent =
//         `Page ${currentPage} of ${totalPages}`;
//     $('#prev').disabled = currentPage === 1;
//     $('#next').disabled = currentPage === totalPages;
//     $('.page-link').forEach((link) => {
//         const page = parseInt(link.getAttribute('data-page'));
//         link.classList.toggle('active', page === currentPage);
//     });
// }

// $('#next').click(() => {
//     if (currentPage < totalPages) {
//         currentPage++;
//         displayPage(currentPage);
//         updatePagination();
//     }
//     console.log('clicked')
// });

// $('.page-link').forEach((link) => {
//     link.click((e) => {
//         e.preventDefault();
//         const page = parseInt(link.getAttribute('data-page'));
//         if (page !== currentPage) {
//             currentPage = page;
//             displayPage(currentPage);
//             updatePagination();
//         }
//     });
// });

// displayPage(currentPage);
// updatePagination();

const cardsPerPage = 4;
const cards = Array.from(dataContainer.getElementsByClassName('card'));

const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;

function displayPage(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updatePagination() {
    $("#page-numbers").text(`Page ${currentPage} of ${totalPages}`);
    $('#prev').prop('disabled', currentPage === 1);
    $('#next').prop('disabled', currentPage === totalPages);
    $('.page-link').each((index, link) => {
        const page = parseInt($(link).data('page'));
        $(link).toggleClass('active', page === currentPage);
    });
}

$('#next').click(() => {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
    console.log('clicked')
});

$('.page-link').each((index, link) => {
    $(link).click((e) => {
        e.preventDefault();
        const page = parseInt($(link).data('page'));
        if (page !== currentPage) {
            currentPage = page;
            displayPage(currentPage);
            updatePagination();
        }
    });
});

displayPage(currentPage);
updatePagination();

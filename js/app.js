//reviews card next previous
console.log("Javascrit File Testing!");
const reviewsCardNextPrevious = () => {
    const reviewCards = document.querySelectorAll(".next-previous-card");
    const nextButton = document.getElementById("next-button");
    const previousButton = document.getElementById("previous-button");

    let currentStart = 0;
    const cardsPerPage = 3;

    const updateReviewCards = () => {
        reviewCards.forEach((card, index) => {
            if (index >= currentStart && index < currentStart + cardsPerPage) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    };

    nextButton.addEventListener("click", () => {
        if (currentStart + cardsPerPage < reviewCards.length) {
            currentStart += cardsPerPage;
            updateReviewCards();
        }
    });

    previousButton.addEventListener("click", () => {
        if (currentStart - cardsPerPage >= 0) {
            currentStart -= cardsPerPage;
            updateReviewCards();
        }
    });
    updateReviewCards();
};
reviewsCardNextPrevious();

//footer daynamic
const currentYear = new Date().getFullYear();
console.log(currentYear);
const footerText = document.getElementById("footer-text-year");
footerText.innerHTML = `Copyright &copy; ${currentYear} ClanBook | All Rights Reserved | Design & Developed By <a href="https://myprotfolios.netlify.app/" target="_blank">Nazmus Shakib</a> `;

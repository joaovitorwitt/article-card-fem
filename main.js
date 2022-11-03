const displaySocialBtn = document.querySelector('.redirect');
const socialsContent = document.querySelector('.social-wrapper');
const body = document.querySelector('body')
const main = document.querySelector('article')

displaySocialBtn.addEventListener('click', () => {
    socialsContent.classList.toggle('active');
    displaySocialBtn.classList.toggle('active');
})

// Closes the social card with the user clicks outside the article card
window.addEventListener('click', (e) => {
    if (socialsContent.classList.contains('active') && e.target === body) {
        socialsContent.classList.remove('active');
        displaySocialBtn.classList.toggle('active');
    }
})
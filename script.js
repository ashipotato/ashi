const messages = [
    "Are you sure?",
    "Really sure??",
    "100% suree??",
    "Bebi pleaseee...",
    "Just think about it, mahall!",
    "If you say no, I will be really sad:((...",
    "I will be very sad, do u want me to be sad?...",
    "Magtatampo ako:((",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please,babyyyy! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
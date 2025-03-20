import { oData } from "../data/data.js";

export function initKarusell() {
    const karusellImages = oData.karusellImages;
    karusell(karusellImages);
    handleKarusellClick(karusellImages);
}

export function karusell(karusellImages) {
    const karusellContainer = document.querySelector('.karusell-container');
    karusellContainer.innerHTML = '';

    karusellImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `karusellbild${index+1}`
        if (index === 0) imgElement.classList.add('active');
        karusellContainer.appendChild(imgElement);
    })
}


export function handleKarusellClick(karusellImages) {
    const clickRight = document.querySelector('.next');
    const clickLeft = document.querySelector('.prev');
    const images = document.querySelectorAll('.karusell-container img');

    let currentIndex = 0;
    const totalImages = karusellImages.length;
    
    function updateKarusell() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        })
    }

    clickRight.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateKarusell();
    })

    clickLeft.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateKarusell();
    })
    updateKarusell();
}
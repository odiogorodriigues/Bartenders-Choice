var imageUrls = [
    'carrosel-img1.svg',
    'carrosel-img2.svg',  
    'carrosel-img4.svg', 
]

var currentIndex = 0;
var section = document.querySelector('section')

function changeBackgroundImage() {
    section.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(changeBackgroundImage, 5000);
changeBackgroundImage()
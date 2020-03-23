const sliderImg = document.getElementById('slideImageContainer');
const slideDotContainer = document.getElementsByClassName('dot_slide')[0];
const leftBtn = document.getElementById('left-slide');
const rightBtn = document.getElementById('right-slide');

let currentIndex = 0;

// creating empty array

const imageSrcArray = []
// adding local url of images
imageSrcArray[0] = "../images/slide_img/vans-old-skool.jpg";
imageSrcArray[1] = "../images/slide_img/81swJX.jpg";
imageSrcArray[2] = "../images/slide_img/images.jpg";
imageSrcArray[3] = "../images/slide_img/Viuuu-Sneakers.jpeg";

leftBtn.addEventListener('click', ()=>{
    decIndex();
});

rightBtn.addEventListener('click', ()=>{
    ChangeIndex();
});



function ChangeIndex(assignMent) {
   currentIndex++;
    if (currentIndex < imageSrcArray.length) {
            sliderImg.style.backgroundImage = `url(${imageSrcArray[currentIndex]})`;
     } else {
            currentIndex = 0;
            sliderImg.style.backgroundImage = `url(${imageSrcArray[currentIndex]})`;
    }
    

}

function decIndex() {
    if (currentIndex === 0) {
        currentIndex = imageSrcArray.length -1;
        sliderImg.style.backgroundImage = `url(${imageSrcArray[currentIndex]})`
    }else {
        currentIndex--;
        sliderImg.style.backgroundImage = `url(${imageSrcArray[currentIndex]})`
    }
    
}

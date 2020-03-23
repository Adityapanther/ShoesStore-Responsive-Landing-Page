var sliderImg = document.getElementById('slideImageContainer');
var slideDotContainer = document.getElementsByClassName('dot_slide')[0];

// creating empty array

const imageSrcArray = []
// adding local url of images
imageSrcArray[0] = "../images/slide_img/vans-old-skool.jpg";
imageSrcArray[1] = "../images/slide_img/81swJX.jpg";
imageSrcArray[2] = "../images/slide_img/images.jpg";
imageSrcArray[3] = "../images/slide_img/Viuuu-Sneakers.jpeg";



sliderImg.style.backgroundImage = `url(${imageSrcArray[3]})`;




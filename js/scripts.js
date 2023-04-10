var slideIndex = 1;
var SwitchingTime = 1;
showSlides(slideIndex);

function plusSlider(n){
    showSlides(slideIndex+=n);
}



function showSlides(n){
    SwitchingTime = 1;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n>slides.length){
        slideIndex= 1
    }
    if (n<1){
        slideIndex= slides.length;
    }
   
    
   
    
    
    
 for(i=0 ; i <slides.length; i++ ) 
    {
      slides[i].style.display = "none";
    
    } 
   
   
slides[slideIndex-1].style.display = "block";

}

let counter = 0;
const intervalId = setInterval(() => {
    console.log(SwitchingTime);
    SwitchingTime += 1;
if (SwitchingTime === 5) {
   
    plusSlider(1)
  }
   
}, 1000);


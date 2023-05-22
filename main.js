let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// const scrollDown = (ref) => {
//   window.scrollTo({
//     top: ref.current.offsetTop,
//     behavior: 'smooth',
//   });
// };

// const section1 = document.querySelector('.section1')
// section1.addEventListener('click', ()=>{
//   scrollDown(aboutSection)
// })
// const section2 = document.querySelector('.section2')
// section2.addEventListener('click', ()=>{
//   scrollDown(servcesSection)
// })


$('#home').on("click", function(){
  $('html,body').animate({screenTop:0}, 'slow', function(){})
})
$('#Services').on("click", function(){
  $('html,body').animate({screenTo:$(".section2").offset().top - 500}, 'slow', function(){})
})
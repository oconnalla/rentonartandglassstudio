// var slideIndex = 0;
// showSlides();


// function showSlides() {
//   var i;
//   var getslides = document.getElementsByClassName('slides');
//   var dots = document.getElementsByClassName('dot');
//   for (i = 0; i < getslides.length; i++) {
//     getslides[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > getslides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace('active', '');
//   }
//   getslides[slideIndex-1].style.display = 'block';  
//   dots[slideIndex-1].className += 'active';
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var getslides = document.getElementsByClassName("slides");

  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < getslides.length; i++) {
    getslides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > getslides.length) {slideIndex = 1;}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  getslides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


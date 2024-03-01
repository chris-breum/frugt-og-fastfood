let open = document.querySelector('.open');
let close = document.querySelector('.close');
let nav = document.querySelector('nav');
open.classList.add('show');
open.addEventListener('click', function() {
   open.classList.remove('show');
   close.classList.add('show');
   nav.classList.add('move');

});
close.addEventListener('click', function() {
   close.classList.remove('show');
   open.classList.add('show');
   nav.classList.remove('move');
});


const sidebar = document.querySelector('#sidebar');
const images = sidebar.querySelectorAll('img');
let p = sidebar.querySelector('p');
let currentIndex = 0;
function showNextImage() {
  // Hide all images and remove active class from all prikker
   images.forEach(image => image.classList.remove('sidebarShow'));
 
  // Show the next image and add active class to the corresponding prik
  images[currentIndex].classList.add('sidebarShow');
   p.innerHTML = images[currentIndex].alt;
  // Increment the index
  currentIndex++;

  // If the index exceeds the number of images, reset it to 0 to show the first image
  if (currentIndex >= images.length) {
    currentIndex = 0;
   } 
}
 function startSlideshow() {
  // Show the first image and add active class to the corresponding prik
  showNextImage();

  // Set an interval to automatically show the next image every 3 seconds
 setInterval(showNextImage, 5000);
 
   
   }
   startSlideshow();
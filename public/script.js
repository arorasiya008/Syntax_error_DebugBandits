//Automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("imgslide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
//login button redirect
function loginPage(){
  window.location.href="login";
}
//signup button redirect
function signupPage(){
  window.location.href="signup";
}


function Register(){
  window.location.href="registerpage";
}
function Find(){
  window.location.href="findpage";
}
function return1(){
  window.location.href="index";
}
function Option(){
  window.location.href="option"
}
function Option1(){
  alert("Registration Successful");
  window.location.href='option';
}
function viewBuddy(){
  window.location.href="viewBuddy";
}


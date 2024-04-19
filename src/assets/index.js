






function handleScroll() {
    let value = window.scrollY;
    // Limit the moon's top position to a maximum of 4645 pixels
    let maxMoonY = 5800;
    Moon.style.top = Math.min(value * 1.05, maxMoonY) + "px";
    text.style.top = value * 0.5 + "px";
    btn.style.marginLeft = value * 1 + "px";
    text_mid.style.marginRight = value * 0.5 + "px";
    text_last.style.bottom = value * 0.2 + "px";
    btn_last.style.marginLeft = value * .5 + "px";
  }
  
  let Sea = document.getElementById("Sea");
  let Moon = document.getElementById("Moon");
  let text = document.getElementById("text");
  let btn = document.getElementById("btn");
  let Clouds = document.getElementById("Clouds");
  let refs = document.getElementById("refs");
  let text_mid = document.getElementById("text_mkid");
  let text_last = document.getElementById("text_last");
  let house2 = document.getElementById("house2");
  let btn_last= document.getElementById("btn_last");
  
  // Add the scroll event listener to handleScroll function
  window.addEventListener("scroll", handleScroll);
  
  
  
  
  
  
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
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
  
  
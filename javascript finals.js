function myShow() {
    var x = document.getElementById("joswa1");
    var y = document.getElementById("button1");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.visibility = "hidden";
    } else {
      x.style.display = "none";
    }
    document.getElementById('joswa1').scrollIntoView({behavior: "smooth"});
  }


function myShow2() {
    var y = document.getElementById("button1");
    var x = document.getElementById("joswa1");
    if (y.style.visibility === "hidden") {
      y.style.visibility = "visible";
      x.style.display = "none";
    } else {
      y.style.display = "visible";
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


function myShow3() {
    var x = document.getElementById("joswa2");
    var y = document.getElementById("joswa3");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
    document.getElementById('joswa2').scrollIntoView({behavior: "smooth"});
  } 


function myShow4() {
    var a = document.getElementById("joswa2");
    var b = document.getElementById("joswa3");
    if (a.style.display === "flex") {
      a.style.display = "none";
      b.style.display = "none";
    } else {
      a.style.display = "flex";
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


function myShow5() {
    document.getElementById('joswa4').scrollIntoView({behavior: "smooth"});
  } 

  
function myShow6() {
  document.getElementById('joswa5').scrollIntoView({behavior: "smooth"});
} 

function myShow7() {
  window.scrollTo({top: 0, behavior: 'smooth'});
} 







function showSlides() {
    let i;
    let slides = document.getElementsByClassName("img5");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }


function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("img6");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}
    slides[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 2000); // Change image every 2 seconds
  }

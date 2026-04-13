/* -----reveal----- */

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal')

  for(var i = 0; i <reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

/* -----side menu----- */

var sidemenu = document.getElementById("sidemenu");

function openMenu(){
  sidemenu.style.right = "0";
}

function closeMenu(){
  sidemenu.style.right = "-200px";
}

/* -----slider----- */

var radio = document.querySelector('.manual-btn')
var cont = 1
let imgArray = document.getElementsByClassName('slide-box')
let imgArraySize = imgArray.length

document.getElementById('radio1').checked = true

setInterval(() => {
    nextImg()
}, 20000)

function nextImg(){
    cont++
    // console.log(cont, imgArraySize)

    if (cont > imgArraySize){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
    // console.log(radio)
}
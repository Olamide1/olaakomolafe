// For the first image.
//Onmouseover event
function change(image) {
    image.src = "images/lo.jpg";
}
//Onmouseout event
function returnTo(image) {
    image.src = 'images/humono.jpg';
}

// For the second image
//Onmouseover event
function change2(image) {
    image.src = 'images/artofade7.jpg';
}
// Onmouseout event.
function returnTo2(image){
    image.src = 'images/ano.jpg';
}

function changeColor(){
    var first = 'content';
    document.getElementById(first).style.backgroundColor =  'white';
    document.getElementById(first).style.color = 'black';
    document.getElementById(first).style.backgroundColor = '200px';
    document.getElementById(first).style.border = '1.5 px solid black';
    document.getElementById('footer').style.backgroundColor = 'white';
    document.getElementById('footer').style.color = 'black';
    document.getElementById('footer').style.backgroundColor = '200px';
    document.getElementById('footer').style.border = '1.5 px solid black';
    document.getElementById('header').style.backgroundColor = 'white';
    document.getElementById('header').style.color = 'black';
    document.getElementById('header').style.backgroundColor = '200px';
    document.getElementById('header').style.border = '1.5 px solid black';
    document.getElementById('btn').innerHTML = 'Click Once to return to normal color';
}

function returnColor() {
    document.getElementById('content').style.backgroundColor = '#555';
    document.getElementById('content').style.color = 'whitesmoke';
    document.getElementById('content').style.backgroundColor = '200px';
    document.getElementById('content').style.border = '1.5 px solid black';
    document.getElementById('footer').style.backgroundColor = '#555';
    document.getElementById('footer').style.color = 'whitesmoke';
    document.getElementById('footer').style.backgroundColor = '200px';
    document.getElementById('footer').style.border = '1.5 px solid black';
     document.getElementById('header').style.backgroundColor = '#555';
     document.getElementById('header').style.color = 'whitesmoke';
     document.getElementById('header').style.backgroundColor = '200px';
     document.getElementById('header').style.border = '1.5 px solid black';
    document.getElementById('btn').innerHTML = 'Double Click to Change Color to white!';
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
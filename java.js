let warnaTukar = false; 
function changeColor() {
  if (!warnaTukar) {
    document.body.style.background = '#a2a76b'; 
  } else {
    document.body.style.background = '#f0f2f5'; 
  }
  warnaTukar = !warnaTukar; 
}

function changeText() {
  document.getElementById("demoJS").innerText = "You just click the button!";
}

$("#fadeButton").click(function(){
  $("#demoJQ").fadeOut();
});



  
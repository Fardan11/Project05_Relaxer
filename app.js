const container = document.querySelector(".container");
const text = document.querySelector("#text");
const pointer_container = document.querySelector(".pointer-container");
const gradient = document.querySelector(".gradient-circle");

const totalTime = 7500; //milisec
const bratheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Breathe In";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold"; // after the breatheTime
    setTimeout(() => {
      text.innerText = "Breathe Out"; //after the hold time
      container.className = "container shrink ";
    }, holdTime);
  }, bratheTime);
}

setInterval(breatheAnimation, totalTime);

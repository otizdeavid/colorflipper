// Declare the variables from your html 

const colors = ["red", "blue", "yellow", "orange", "rgba(153,50,204)", "#f5f4f3"];

const btnEl = document.getElementById('btn');

const color = document.querySelector('.color');

btnEl.addEventListener('click',function (){
  // we pick 2 as in array counting.//
  const randomNumber = getColorFlipper();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent= colors[randomNumber];
});


function getColorFlipper () {
  return Math.floor(Math.random()* colors.length);
}

// Changing the listed array colors on the declared variable.//

s
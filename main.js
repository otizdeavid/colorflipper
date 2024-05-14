const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btnEl = document.getElementById('btn');
const color = document.querySelector('.color');

btnEl.addEventListener('click', function (){
  let hexColor ='#';
  for(i=0; i<6; i++){
    hexColor += colors[getColorFlipper()];
  } color.textContent=hexColor;
  document.body.style.backgroundColor=hexColor;
});  

function getColorFlipper () {
  return Math.floor(Math.random()*colors.length);
}
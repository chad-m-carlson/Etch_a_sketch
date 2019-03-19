var grid = prompt ('Enter grid size. (Bigger number means smaller sections', '50');
const start = document.getElementById('start');
const clear = document.getElementById('clear');
const reset = document.getElementById('reset');
const colors = document.getElementById('colors');

start.addEventListener('click', e => {
  createArea(grid);
});

clear.addEventListener('click', e => {
  const playArea = document.querySelector('.innerContainer');
  while (playArea.hasChildNodes){
    playArea.removeChild(playArea.firstChild);
  }
});

reset.addEventListener('click', e => {
  grid = prompt ('Enter grid size. (Bigger number means smaller sections', '20');
});

colors.addEventListener('change', e => {
  console.log(e);
  if (event.target.checked == true){
    document.addEventListener('mouseover', e => {
      let color = ['red', 'blue', 'green', 'orange', 'purple', 'yello'][Math.floor(Math.random() * 6 )];
      if (e.target.classList.contains('workingDivs')) {
        e.target.style.backgroundColor = color;
      }
    });
  }
  else {
    document.addEventListener('mouseover', e => {
      if (e.target.classList.contains('workingDivs')) {
        e.target.style.backgroundColor = 'black';
      }
    });
  }
});

function createArea(grid){
  const innerContainer = document.getElementById('innerContainer');
  let area = grid * grid;
  var innerHeight = innerContainer.offsetHeight;
  var innerWidth = innerContainer.offsetWidth;
  var height = (innerHeight / grid);
  var width = (innerWidth / grid);
  for (let i = 0; i < area; i++){
    const addDiv = document.createElement('div');
    const playArea = document.querySelector('.innerContainer');
    addDiv.classList.add('workingDivs');
    addDiv.setAttribute('style', `height: ${height}px; width: ${width}px;`);
    addDiv.setAttribute('id', 'workingDivs');
    playArea.appendChild(addDiv);
  }
}



document.addEventListener('mouseover', e => {
  if (e.target.classList.contains('workingDivs')) {
    e.target.style.backgroundColor = 'black';
  }
});


document.addEventListener('click', e => {
  if (e.target.classList.contains('workingDivs')) {
    e.target.style.backgroundColor = 'white';
  }
});
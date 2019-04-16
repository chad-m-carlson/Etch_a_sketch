var grid = prompt('Enter grid size. (Bigger number means smaller sections', '20');
createArea(grid);
const reset = document.getElementById('reset');
const colors = document.getElementById('colors');
let area = grid * grid;

reset.addEventListener('click', e => {
  for (let i = 0; i < area; i++) {
    const workingDivs = document.querySelectorAll('#workingDivs')
    workingDivs.forEach(element => {
      element.remove();
    });
  }
  var grid = prompt('Enter grid size. (Bigger number means smaller sections)', '20');
  createArea(grid);
});

colors.addEventListener('change', e => {
  if (event.target.checked == true) {
    document.addEventListener('mouseover', e => {
      let color = Math.floor(Math.random() * 1000000);
      if (e.target.classList.contains('workingDivs')) {
        e.target.style.backgroundColor = `#${color}`;
      }
    });
  } else {
    document.addEventListener('mouseover', e => {
      if (e.target.classList.contains('workingDivs')) {
        e.target.style.backgroundColor = 'black';
      }
    });
  }
});

function createArea(grid) {
  let area = grid * grid;
  const innerContainer = document.getElementById('innerContainer');
  var innerHeight = innerContainer.offsetHeight;
  var innerWidth = innerContainer.offsetWidth;
  var height = (innerHeight / grid);
  var width = (innerWidth / grid);
  for (let i = 0; i < area; i++) {
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
    e.target.style.backgroundColor = '#b2ada7';
  }
});
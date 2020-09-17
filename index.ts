var tdElements = document.getElementsByTagName('TD');
var isO = false;

for(var tdElement of tdElements) {
  tdElement. addEventListener('click', handleClick);
}

function handleClick(event) {
  var target = event.target;
  if (isO) {
    target.innerHTML = 'O';
    isO = false;
  } else {
    target.innerHTML = 'X';
    isO = true;
  }
}

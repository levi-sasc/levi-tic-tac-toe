var tdElements = document.getElementsByTagName('TD');
var isO = false;

for(var tdElement of tdElements) {
  tdElement. addEventListener('click', handleClick);
}

function handleClick(event) {
  var target = event.target;

  // Prevent from changing again
  if (target.innerHTML == 'X' || target.innerHTML == 'O') {
    return
  }    
  
  if (isO) {
    target.innerHTML = 'O';
    isO = false;
  } else {
    target.innerHTML = 'X';
    isO = true;
    check_winner('X')
   }
  }

  //get html from specific td
  function gv(Id) {
    var el = document.getElementById(Id)
    return el.innerHTML
  }

function check_winner(smb) {

//check winning combinations
if ( (gv('a1') == smb &&  gv('a2') == smb &&  gv('a3')== smb) ||
 (gv('b1') == smb &&  gv('b2') == smb &&  gv('b3') == smb) ||
  (gv('a2') == smb &&  gv('b2') == smb &&  gv('c3') == smb) ||
    (gv('a3') == smb &&  gv('b2') == smb &&  gv('c1') == smb) ||
     (gv('a1') == smb &&  gv('b1') == smb &&  gv('c1') == smb) ||
       (gv('c1') == smb &&  gv('c2') == smb &&  gv('c3') == smb)||
          (gv('a3') == smb &&  gv('b3') == smb &&  gv('c3') == smb)||
             (gv('a1') == smb &&  gv('b2') == smb &&  gv('c3')==smb))

alert ('You are the winner')
}

//alert ('do not do anything, I am bad at programing')
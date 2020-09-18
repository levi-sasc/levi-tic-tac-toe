var tdElements = document.getElementsByTagName('TD');
var isO = false;
var lastSymbol = null;
var gameCompleted = false;

//add listener for click
for(var tdElement of tdElements) {
  tdElement. addEventListener('click', handleClick);
}

//handle click
function handleClick(event) {
  var target = event.target;

   //if game not competed
   if (!gameCompleted) {

    // Prevent from changing again
    if (target.innerHTML == 'X' || target.innerHTML == 'O') {
      return
    }    
    
    //switch symbol
    if (isO) {
      target.innerHTML = 'O';
      lastSymbol = 'O';
      target.setAttribute('class','O');
      isO = false;
    } else {
      target.innerHTML = 'X';
      lastSymbol = 'X';
      target.setAttribute('class','X');
      isO = true;    
    }

      //check winner
      checkWinner();

   }

   return

  }

  //get html from specific element
  function gv(id) {
    var el = document.getElementById(id);
    return el.innerHTML;
  }

//check winner
function checkWinner() {

var smb = lastSymbol;

//store winning combinations
var winners = ['a1-b1-c1',
              'a1-a2-a3',
              'b1-b2-b3',
              'c1-c2-c3',
              'a2-b2-c2',
              'a3-b3-c3',
              'a3-b2-c1',
              'a1-b2-c3',];

  //loop through winning combinations
  for(var i=0;i<=winners.length-1;i++) {

    //split by -
    var posAr = winners[i].split('-');

    //check condition for specific symbol
    if (gv(posAr[0]) == smb && gv(posAr[1]) == smb && gv(posAr[2]) == smb) {

      //color winning combination
      document.getElementById(posAr[0]).setAttribute('class','won');
      document.getElementById(posAr[1]).setAttribute('class','won');
      document.getElementById(posAr[2]).setAttribute('class','won');

      //game completed
      gameCompleted = true;
      document.getElementById('winner').innerHTML = smb + " is the winner of this game, game over. Please start new game.";      

      return

    }

  }

}


//why always defeat??
let userChoice='';
let computerChoice = '';
// document.querySelectorAll(".buttons").addEventListener{

// }
const buttonList = document.querySelectorAll(".buttons button");
buttonList.forEach(object =>{
  object.addEventListener('click',()=>{
    // alert('clicked');
    computerChoice= Choice();
  //  computerChoice= 'Ball';
    userChoice= object.id;
   let victor= Winner(userChoice, computerChoice);
   //alert(victor);
   if(victor=== true){
    document.querySelector("#output").innerText = "Defeat";
   }
  else{
   document.querySelector("#output").innerText = "Victory";
 }
   alert(score);
  }
  );
  });
  // Math.random() * 3
  function Choice(){
    let rand = Math.random()*3;
    if(rand>=0 && rand<1){
      return 'Bat';
    }else if(rand>=1 && rand<2){
      return 'Ball';
    }else{
      return 'Stump';
    }
  }
  // document.querySelector("#output").innerHTML = "Victory";
  let score = {
    win: 0,
    lost: 0, 
    tie: 0,
  };

  function Winner(userChoice, computerChoice){
    // let victory = false;
     if(userChoice==='Bat' && computerChoice==='Ball'){
     // victory = true;
     score.win = score.win + 1;
     return true;
     }
     if(userChoice==='Ball' && computerChoice==='Stump'){
      //victory = true;
      score.win = score.win + 1;
      return true;
     }
     if(userChoice==='Stump' && computerChoice==='Bat'){
     // victory = true;
     score.win = score.win + 1;
     return true;
     }
     else if(userChoice==computerChoice){
        score.tie = score.tie + 1;
     }
    else{
      score.lost = score.lost + 1;
      return false;
    }
  }
  function showResult(userMove, computerMove){
    localStorage.setItem('Score', JSON.stringify(score));
  }

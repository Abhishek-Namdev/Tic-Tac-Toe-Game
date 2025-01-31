let box = document.querySelectorAll('.game');
let resetBtn = document.querySelector('.reset-btn');
let newBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn0 = true;

const winPatterns =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

const resetGame  = () =>{
  turn0 = true;
  enabledBtn();
  msgContainer.classList.add('hide');
}

box.forEach((boxes) =>{
  boxes.addEventListener('click', () =>{
    if(turn0){
      boxes.innerText = 'O';
      turn0 = false;
      boxes.classList.add('ocolor');
      boxes.classList.remove('xcolor');
    }else{
      boxes.innerText = 'X';
      turn0 = true;
      boxes.classList.add('xcolor');
      boxes.classList.remove('ocolor');
    }
    boxes.disabled = true; 
    checkwinner();
  })
});

const enabledBtn = () =>{
  for (let boxes of box){
    boxes.disabled = false;
    boxes.innerText = "";
  }
};

const disabledBtn = () =>{
  for (let boxes of box){
    boxes.disabled = true;
  }
};

const showWinner = (Winner) =>{
  msg.innerText = `Congratulations, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disabledBtn();
}

const checkwinner = () =>{
  for (const patterns of winPatterns) {
      let pos1val = box[patterns[0]].innerText;
      let pos2val = box[patterns[1]].innerText;
      let pos3val = box[patterns[2]].innerText;
      if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
          showWinner(pos1val);
        }
      }
  }
}

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);
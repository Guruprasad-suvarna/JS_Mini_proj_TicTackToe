let btns = document.querySelectorAll(".btn");
let rstbtn = document.querySelector("#rst-btn");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-container");
let msg1 = document.querySelector(".msg");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const draw = () => {
  msg1.innerText = `Match is Draw.Play a new Game`;
  msgcont.classList.remove("hide");
};
const resetGame = () => {
  turnO = true;
  enableGame();
  count = 0;

  msgcont.classList.add("hide");
};

const enableGame = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = "";
  }
};
const disableGame = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};
const winner = (msg) => {
  // console.log(msg);
  msg1.innerText = `Congratulations ${msg} is the Winner`;
  msgcont.classList.remove("hide");
  disableGame();
};

btns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", () => {
    // console.log("pressed");

    if (turnO === true) {
      btn.innerText = "O";
      // btn.innerHTML = '<span style="color: red;">O</span>';
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    count = count + 1;

    // console.log(count);
    patternCheck();
  });
});

patternCheck = () => {
  for (pat of winPatterns) {
    // console.log(pat);
    // console.log(pat[0], pat[1], pat[2]);
    // console.log(
    //   btns[pat[0]].innerText,
    //   btns[pat[1]].innerText,
    //   btns[pat[2]].innerText
    // );
    let val1 = btns[pat[0]].innerText;
    let val2 = btns[pat[1]].innerText;
    let val3 = btns[pat[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val1 == val3) {
        winner(val1);
        // disableGame();
      } else if (count === 9) {
        draw();
      }
    }
  }
};
newbtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);

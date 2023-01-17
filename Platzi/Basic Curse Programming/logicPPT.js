function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////////////////////////// input data
let e = 1;
var amountPlayer = 0;
var amountPC = 0;
let player = 0;
let npc = "AI";
let nPlayer = "Player"; //prompt("Enter your name");

do {
  let pc = aleatory(1, 3);
  player = prompt("Enter 1 Rock, 2 Paper or 3 Scissors");

  //////////////////////////////// Election
  function pick(name, number) {
    if (number == 1) {
      alert(name + " picked rock 🌑");
    } else if (number == 2) {
      alert(name + " picked paper 🧻");
    } else if (number == 3) {
      alert(name + " picked scissors ✂");
    } else {
      alert(name + " picked nothing");
    }
  }
  pick(nPlayer, player);
  pick(npc, pc);

  //////////////////////////////// programing code winner

  if (pc == player) {
    alert("Draw");
    alert(nPlayer + " " + amountPlayer + " - " + npc + " " + amountPC);
  } else if (
    (pc == 1 && player == 2) ||
    (pc == 3 && player == 1) ||
    (pc == 2 && player == 3)
  ) {
    alert(nPlayer + " won! 🎉✨");
    amountPlayer++;
    alert(nPlayer + " " + amountPlayer + " - " + amountPC + " " + npc);
  } else {
    alert(npc + " won! 🎉✨");
    amountPC++;
    alert(nPlayer + " " + amountPlayer + " - " + npc + " " + amountPC);
  }
} while (amountPC < 3 && amountPlayer < 3);

if (amountPC == 3) {
  alert("Congratulations, " + npc + " won the game! ");
}else{
  alert("Congratulations, " + nPlayer + " won the game! ");
}

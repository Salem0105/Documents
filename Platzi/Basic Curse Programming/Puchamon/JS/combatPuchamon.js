let atakPlayer;
let atakEnemy;
let lifePlayer = 5;
let lifeEnemy = 5;
var selectionPet;

var buttonWater = document.getElementById("water");
var buttonEarth = document.getElementById("earth");
var buttonFire = document.getElementById("fire");
var buttonWind = document.getElementById("wind");
var buttonLight = document.getElementById("light");
var buttonReset = document.getElementById("reset");

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  let select = document.getElementById("select-pet");
  select.addEventListener("click", selectPet);

  buttonWater.addEventListener("click", atakWater);
  buttonEarth.addEventListener("click", atakEarth);
  buttonFire.addEventListener("click", atakFire);
  buttonWind.addEventListener("click", atakWind);
  buttonLight.addEventListener("click", atakLight);
  buttonReset.addEventListener("click", resetGame);
}

function selectPetEnemy() {
  let SpanPetEnemy = document.getElementById("pet-of-enemy");

  let enemy = aleatory(1, 5);
  if (enemy == 1) {
    SpanPetEnemy.innerHTML = "Watari";
  } else if (enemy == 2) {
    SpanPetEnemy.innerHTML = "Faru";
  } else if (enemy == 3) {
    SpanPetEnemy.innerHTML = "Vanty";
  } else if (enemy == 4) {
    SpanPetEnemy.innerHTML = "Taiko";
  } else {
    SpanPetEnemy.innerHTML = "Rutzy";
  }

  selectionPet = 1;
}

function selectPet() {
  let spanPetPlayer = document.getElementById("pet-of-player");

  if (document.getElementById("watari").checked) {
    spanPetPlayer.innerHTML = "Watari";
    selectPetEnemy();
  } else if (document.getElementById("faru").checked) {
    spanPetPlayer.innerHTML = "Faru";
    selectPetEnemy();
  } else if (document.getElementById("vanty").checked) {
    spanPetPlayer.innerHTML = "Vanty";
    selectPetEnemy();
  } else if (document.getElementById("taiko").checked) {
    spanPetPlayer.innerHTML = "Taiko";
    selectPetEnemy();
  } else if (document.getElementById("rutzy").checked) {
    spanPetPlayer.innerHTML = "Rutzy";
    selectPetEnemy();
  } else {
    alert("You have not selected any pet!");
  }
}

function attackEnemy() {
  let enemy = aleatory(1, 5);
  if (enemy == 1) {
    atakEnemy = "Water";
  } else if (enemy == 2) {
    atakEnemy = "Earth";
  } else if (enemy == 3) {
    atakEnemy = "Fire";
  } else if (enemy == 4) {
    atakEnemy = "Wind";
  } else {
    atakEnemy = "Light";
  }
}

function atakWater() {
  if (selectionPet == 1) {
    atakPlayer = "Water";
    attackEnemy();
    combat();
  }
}

function atakEarth() {
  if (selectionPet == 1) {
    atakPlayer = "Earth";
    attackEnemy();
    combat();
  }
}

function atakFire() {
  if (selectionPet == 1) {
    atakPlayer = "Fire";
    attackEnemy();
    combat();
  }
}

function atakWind() {
  if (selectionPet == 1) {
    atakPlayer = "Wind";
    attackEnemy();
    combat();
  }
}

function atakLight() {
  if (selectionPet == 1) {
    atakPlayer = "Light";
    attackEnemy();
    combat();
  }
}

function messageWinFinally(message) {
  let sectionMensajes = document.getElementById("message");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = message;
  sectionMensajes.appendChild(paragraph);

  buttonEarth.style.display = "none";
  buttonLight.style.display = "none";
  buttonFire.style.display = "none";
  buttonWater.style.display = "none";
  buttonWind.style.display = "none";
}

function reviewLive() {
  if (lifePlayer == 0) {
    messageWinFinally("So sorry you have finally lost this Puchamon match");
  } else if (lifeEnemy == 0) {
    messageWinFinally("You have finally won this Puchamon match");
  }
}

function combat() {
  let messageWin = document.getElementById("message-winner");
  document.getElementById("element-player").innerHTML =
    "Your pet attacked with " + atakPlayer;
  document.getElementById("element-enemy").innerHTML =
    " and the enemy's with " + atakEnemy;
  if (
    atakPlayer == atakEnemy ||
    (atakPlayer == "Water" && atakEnemy == "Wind") ||
    (atakPlayer == "Water" && atakEnemy == "Light") ||
    (atakPlayer == "Fire" && atakEnemy == "Earth") ||
    (atakPlayer == "Fire" && atakEnemy == "Light") ||
    (atakPlayer == "Earth" && atakEnemy == "Wind") ||
    (atakPlayer == "Earth" && atakEnemy == "Fire") ||
    (atakPlayer == "Wind" && atakEnemy == "Water") ||
    (atakPlayer == "Wind" && atakEnemy == "Earth") ||
    (atakPlayer == "Light" && atakEnemy == "Fire") ||
    (atakPlayer == "Light" && atakEnemy == "Water")
  ) {
    messageWin.innerHTML = "Hand to hand 🤝🏻";
  } else if (
    (atakPlayer == "Earth" && atakEnemy == "Water") ||
    (atakPlayer == "Water" && atakEnemy == "Fire") ||
    (atakPlayer == "Fire" && atakEnemy == "Wind") ||
    (atakPlayer == "Wind" && atakEnemy == "Light") ||
    (atakPlayer == "Light" && atakEnemy == "Earth")
  ) {
    messageWin.innerHTML = "You win! 😎";
    lifeEnemy -= 1;
  } else {
    messageWin.innerHTML = "You lose! JJAJAJA 😅😥";
    lifePlayer -= 1;
  }

  document.getElementById("hp-pet-player").innerHTML = "" + lifePlayer;
  document.getElementById("hp-pet-enemy").innerHTML = "" + lifeEnemy;

  reviewLive();
}

function resetGame() {
  location.reload();
}

window.addEventListener("load", startGame);

/*
Recordaré que hay una función que se ejecuta cada vez que se carga la página, 
hay una propiedad que me perimite crear un objeto HTML desde JAVASCRIPT:
function crearMensaje(resultado){let sectionMensajes=document.getElementById('mensajes')
let parrafo=document.createElement('p')
parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- '+resultado
sectionMensajes.appendChild(parrafo)}
 */

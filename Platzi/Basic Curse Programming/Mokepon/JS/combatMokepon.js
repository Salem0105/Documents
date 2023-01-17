let atakPlayer;
let atakEnemy;
let lifePlayer = 3;
let lifeEnemy = 3;


function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  let select = document.getElementById("select-pet");
  select.addEventListener("click", selectPet);

  let buttonWater = document.getElementById("water");
  buttonWater.addEventListener("click", atakWater);
  let buttonEarth = document.getElementById("earth");
  buttonEarth.addEventListener("click", atakEarth);
  let buttonFire = document.getElementById("fire");
  buttonFire.addEventListener("click", atakFire);
  let buttonWind = document.getElementById("wind");
  buttonWind.addEventListener("click", atakWind);
  let buttonLight = document.getElementById("light");
  buttonLight.addEventListener("click", atakLight);
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
}

function selectPet() {
  let spanPetPlayer = document.getElementById("pet-of-player");

  if (document.getElementById("watari").checked) {
    spanPetPlayer.innerHTML = "Watari";
  } else if (document.getElementById("faru").checked) {
    spanPetPlayer.innerHTML = "Faru";
  } else if (document.getElementById("vanty").checked) {
    spanPetPlayer.innerHTML = "Vanty";
  } else if (document.getElementById("taiko").checked) {
    spanPetPlayer.innerHTML = "Taiko";
  } else if (document.getElementById("rutzy").checked) {
    spanPetPlayer.innerHTML = "Rutzy";
  } else {
    alert("You have not selected any pet!");
  }

  selectPetEnemy();
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
  atakPlayer = "Water";
  attackEnemy();
  combat();
}

function atakEarth() {
  atakPlayer = "Earth";
  attackEnemy();
  combat();
}

function atakFire() {
  atakPlayer = "Fire";
  attackEnemy();
  combat();
}

function atakWind() {
  atakPlayer = "Wind";
  attackEnemy();
  combat();
}

function atakLight() {
  atakPlayer = "Light";
  attackEnemy();
  combat();
}

function combat() {
  let messageWin = document.getElementById("message-winner");
  document.getElementById("element-player").innerHTML = atakPlayer;
  document.getElementById("element-enemy").innerHTML = atakEnemy;
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
  } else {
    messageWin.innerHTML = "You lose! JJAJAJA 😅😥";
  }
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

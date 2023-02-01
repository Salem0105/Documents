let atakPlayer;
let atakEnemy;
let lifePlayer = 5;
let lifeEnemy = 5;
var selectionPet;

let select = document.getElementById("select-pet");
let buttonWater = document.getElementById("water");
let buttonEarth = document.getElementById("earth");
let buttonFire = document.getElementById("fire");
let buttonWind = document.getElementById("wind");
let buttonLight = document.getElementById("light");

let sectionCombat = document.getElementById("section-combat");
let sectionReset = document.getElementById("section-reset");
let selectPet = document.getElementById("section-pet");
let imgPetEnemy = document.getElementById("img-pet-enemy");

let spanPetPlayer = document.getElementById("pet-of-player");
let imgPet = document.getElementById("img-pet");

let sectionMensajes = document.getElementById("section-message");

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  select.addEventListener("click", selectPet);

  buttonWater.addEventListener("click", atakWater);
  buttonEarth.addEventListener("click", atakEarth);
  buttonFire.addEventListener("click", atakFire);
  buttonWind.addEventListener("click", atakWind);
  buttonLight.addEventListener("click", atakLight);

  sectionCombat.style.display = "none";
  sectionReset.style.display = "none";
}

function selectPetEnemy() {
  let enemy = aleatory(1, 5);
  if (enemy == 1) {
    imgPetEnemy.src = "IMG/watari.png";
  } else if (enemy == 2) {
    imgPetEnemy.src = "IMG/faru.png";
  } else if (enemy == 3) {
    imgPetEnemy.src = "IMG/vanty.png";
  } else if (enemy == 4) {
    imgPetEnemy.src = "IMG/taiko.png";
  } else {
    imgPetEnemy.src = "IMG/rutzy.png";
  }

  sectionCombat.style.display = "flex";
  selectPet.style.display = "none";
}

function selectPet() {
  if (document.getElementById("watari").checked) {
    spanPetPlayer.innerHTML = "Watari ";
    imgPet.src = "IMG/watari.png";
    selectPetEnemy();
    selectionPet = 1;
  } else if (document.getElementById("faru").checked) {
    spanPetPlayer.innerHTML = "Faru ";
    imgPet.src = "IMG/faru.png";
    selectPetEnemy();
    selectionPet = 2;
  } else if (document.getElementById("vanty").checked) {
    spanPetPlayer.innerHTML = "Vanty ";
    imgPet.src = "IMG/vanty.png";
    selectPetEnemy();
    selectionPet = 3;
  } else if (document.getElementById("taiko").checked) {
    spanPetPlayer.innerHTML = "Taiko ";
    imgPet.src = "IMG/taiko.png";
    selectPetEnemy();
    selectionPet = 4;
  } else if (document.getElementById("rutzy").checked) {
    spanPetPlayer.innerHTML = "Rutzy ";
    imgPet.src = "IMG/rutzy.png";
    selectPetEnemy();
    selectionPet = 5;
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
  if (selectionPet != null) {
    atakPlayer = "Water";
    attackEnemy();
    combat();
  }
}

function atakEarth() {
  if (selectionPet != null) {
    atakPlayer = "Earth";
    attackEnemy();
    combat();
  }
}

function atakFire() {
  if (selectionPet != null) {
    atakPlayer = "Fire";
    attackEnemy();
    combat();
  }
}

function atakWind() {
  if (selectionPet != null) {
    atakPlayer = "Wind";
    attackEnemy();
    combat();
  }
}

function atakLight() {
  if (selectionPet != null) {
    atakPlayer = "Light";
    attackEnemy();
    combat();
  }
}

function messageWinFinally(message) {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = message;
  sectionMensajes.appendChild(paragraph);

  buttonEarth.disabled = true;
  buttonWater.disabled = true;
  buttonFire.disabled = true;
  buttonLight.disabled = true;
  buttonWind.disabled = true;

  sectionReset.style.display = "block";

  buttonReset = document.getElementById("button-reset");
  buttonReset.addEventListener("click", resetGame);
}

function drawHeart(lives, player, img) {
  if (lives == 5) {
    player.innerHTML = " 🤍🤍🤍🤍🤍";
  } else if (lives == 4) {
    player.innerHTML = " 🤍🤍🤍🤍";
  } else if (lives == 3) {
    player.innerHTML = " 🤍🤍🤍";
  } else if (lives == 2) {
    player.innerHTML = " 🤍🤍";
  } else if (lives == 1) {
    player.innerHTML = " 🤍";
  } else {
    player.innerHTML = "";
    if (selectionPet == 1) {
      img.src = "IMG/watari-die.png";
    } else if (selectionPet == 2) {
      img.src = "IMG/faru-die.png";
    } else if (selectionPet == 3) {
      img.src = "IMG/vanty-die.png";
    } else if (selectionPet == 4) {
      img.src = "IMG/taiko-die.png";
    } else if (selectionPet == 5) {
      img.src = "IMG/rutzy-die.png";
    }
  }
}

function reviewLive() {
  if (lifePlayer == 0) {
    messageWinFinally("So sorry you have finally lost this Puchamon match");
  } else if (lifeEnemy == 0) {
    messageWinFinally("You have finally won this Puchamon match");
  }
}

function combat() {
  let plays = document.getElementById("spann");
  let spanPlayerEnemy = document.createElement("p");

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
  } else if (
    (atakPlayer == "Earth" && atakEnemy == "Water") ||
    (atakPlayer == "Water" && atakEnemy == "Fire") ||
    (atakPlayer == "Fire" && atakEnemy == "Wind") ||
    (atakPlayer == "Wind" && atakEnemy == "Light") ||
    (atakPlayer == "Light" && atakEnemy == "Earth")
  ) {
    lifeEnemy -= 1;

    let flagEnemy = document.getElementById("lifes-enemy");
    drawHeart(lifeEnemy, flagEnemy, imgPetEnemy);
  } else {
    lifePlayer -= 1;

    let flagPlayer = document.getElementById("lifes-player");
    drawHeart(lifePlayer, flagPlayer, imgPetPlayer);
  }

  spanPlayerEnemy.innerHTML = atakPlayer + " - " + atakEnemy;
  plays.appendChild(spanPlayerEnemy);
  reviewLive();
}

function resetGame() {
  location.reload();
}
/* 
window.addEventListener("load", startGame); */

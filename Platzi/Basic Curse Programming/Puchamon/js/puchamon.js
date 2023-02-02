let atakPlayer;
let atakEnemy;
let lifePlayer = 5;
let lifeEnemy = 5;
let selectionPetPlayer;
let enemy;
let framePuchamon;

const cardContainer = document.getElementById("card-container");

let select = document.getElementById("select-pet");
let buttonWater = document.getElementById("water");
let buttonEarth = document.getElementById("earth");
let buttonFire = document.getElementById("fire");
let buttonWind = document.getElementById("wind");
let buttonLight = document.getElementById("light");

let inputWatari;
let inputFaru;
let inputVanty;
let inputTaiko;
let inputRutzy;

let sectionCombat = document.getElementById("section-combat");
let sectionReset = document.getElementById("section-reset");
let sectionSelectPet = document.getElementById("section-pet");
let imgPetEnemy = document.getElementById("img-pet-enemy");

let spanPetPlayer = document.getElementById("pet-of-player");
let imgPet = document.getElementById("img-pet");

let sectionMensajes = document.getElementById("section-message");

let puchamones = [];

class Puchamon {
  constructor(name, img, life) {
    this.name = name;
    this.img = img;
    this.life = life;
    this.atacks = [];
  }
}

let watari = new Puchamon("Watari 🌊", "img/watari.png", 5);
let faru = new Puchamon("Faru 🔥", "img/faru.png", 5);
let vanty = new Puchamon("Vanty 🍃", "img/vanty.png", 5);
let taiko = new Puchamon("Taiko 🗻", "img/taiko.png", 5);
let rutzy = new Puchamon("Rutzy ⚡", "img/rutzy.png", 5);

watari.atacks.push(
  { name: "🌊", id: "water" },
  { name: "🌊", id: "water" },
  { name: "🌊", id: "water" },
  { name: "🍃", id: "wind" },
  { name: "⚡", id: "light" }
);

faru.atacks.push(
  { name: "🔥", id: "fire" },
  { name: "🔥", id: "fire" },
  { name: "🔥", id: "fire" },
  { name: "🗻", id: "earth" },
  { name: "⚡", id: "light" }
);

vanty.atacks.push(
  { name: "🍃", id: "wind" },
  { name: "🍃", id: "wind" },
  { name: "🍃", id: "wind" },
  { name: "🗻", id: "earth" },
  { name: "🌊", id: "water" }
);

rutzy.atacks.push(
  { name: "⚡", id: "light" },
  { name: "⚡", id: "light" },
  { name: "⚡", id: "light" },
  { name: "🔥", id: "fire" },
  { name: "🌊", id: "water" }
);

taiko.atacks.push(
  { name: "🗻", id: "earth" },
  { name: "🗻", id: "earth" },
  { name: "🗻", id: "earth" },
  { name: "🍃", id: "wind" },
  { name: "🔥", id: "fire" }
);

puchamones.push(watari, faru, vanty, taiko, rutzy);

function aleatory(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  select.addEventListener("click", selectPet);

  /* Se hace uso de algo llamado templates literarios, para poder fusionar el JS con el HTML, se hace con comillas invertidas */
  puchamones.forEach((puchamon) => {
    framePuchamon = `<input type="radio" name="avatar" id="${puchamon.name}" />
    <label class="charter" for="${puchamon.name}">
        <p>${puchamon.name}</p>
        <img src="${puchamon.img}" alt="">
    </label>`;
    cardContainer.innerHTML += framePuchamon;

    inputWatari = document.getElementById("Watari 🌊");
    inputFaru = document.getElementById("Faru 🔥");
    inputVanty = document.getElementById("Vanty 🍃");
    inputTaiko = document.getElementById("Taiko 🗻");
    inputRutzy = document.getElementById("Rutzy ⚡");
  });

  buttonWater.addEventListener("click", atakWater);
  buttonEarth.addEventListener("click", atakEarth);
  buttonFire.addEventListener("click", atakFire);
  buttonWind.addEventListener("click", atakWind);
  buttonLight.addEventListener("click", atakLight);

  sectionCombat.style.display = "none";
  sectionReset.style.display = "none";
}

function selectPetEnemy() {
  enemy = aleatory(0, puchamones.length - 1);
  imgPetEnemy.src = puchamones[enemy].img;
  sectionCombat.style.display = "flex";
  sectionSelectPet.style.display = "none";
}

function selectPet() {
  var radios = document.getElementsByName("avatar");
  for (var radio of radios) {
    if (radio.checked) {
      spanPetPlayer.innerHTML = radio.id;
      puchamones.forEach((puchamon) => {
        if (puchamon.name == radio.id) {
          imgPet.src = puchamon.img;
        }
      });
      selectPetEnemy();
    }
  }

   if (inputWatari.checked) {
    spanPetPlayer.innerHTML = "Watari ";
    imgPet.src = "IMG/watari.png";
    selectPetEnemy();
    selectionPetPlayer = 1;
  } else if (inputFaru.checked) {
    spanPetPlayer.innerHTML = "Faru ";
    imgPet.src = "IMG/faru.png";
    selectPetEnemy();
    selectionPetPlayer = 2;
  } else if (inputVanty.checked) {
    spanPetPlayer.innerHTML = "Vanty ";
    imgPet.src = "IMG/vanty.png";
    selectPetEnemy();
    selectionPetPlayer = 3;
  } else if (inputTaiko.checked) {
    spanPetPlayer.innerHTML = "Taiko ";
    imgPet.src = "IMG/taiko.png";
    selectPetEnemy();
    selectionPetPlayer = 4;
  } else if (inputRutzy.checked) {
    spanPetPlayer.innerHTML = "Rutzy ";
    imgPet.src = "IMG/rutzy.png";
    selectPetEnemy();
    selectionPetPlayer = 5;
  } else {
    alert("You have not selected any pet!");
  }
}

function attackEnemy() {
  let enemyAtak = aleatory(1, 5);
  if (enemyAtak == 1) {
    atakEnemy = "Water";
  } else if (enemyAtak == 2) {
    atakEnemy = "Earth";
  } else if (enemyAtak == 3) {
    atakEnemy = "Fire";
  } else if (enemyAtak == 4) {
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

function drawHeart(lives, player, img, selected) {
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
    if (selected == 1) {
      img.src = "IMG/watari-die.png";
    } else if (selected == 2) {
      img.src = "IMG/faru-die.png";
    } else if (selected == 3) {
      img.src = "IMG/vanty-die.png";
    } else if (selected == 4) {
      img.src = "IMG/taiko-die.png";
    } else if (selected == 5) {
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
  let span = document.createElement("p");

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
    /* Cambiar imagen del puchamon enemigo */
    let flagEnemy = document.getElementById("lifes-enemy");
    drawHeart(lifeEnemy, flagEnemy, imgPetEnemy, enemy);
    console.log(enemy);
  } else {
    lifePlayer -= 1;
    /* cambiar imagen del puchamon elegido por el usuario  */
    let flagPlayer = document.getElementById("lifes-player");
    drawHeart(lifePlayer, flagPlayer, imgPet, selectionPetPlayer);
    console.log(selectionPetPlayer);
  }

  span.innerHTML = atakPlayer + " - " + atakEnemy;
  plays.appendChild(span);
  reviewLive();
}

function resetGame() {
  location.reload();
}

window.addEventListener("load", startGame);

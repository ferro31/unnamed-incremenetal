const pointSpeed = 100;

let game = {
  x: 0,
  y: 0,
  z: 0,

  xMulti: 1,
  xMultiPP: 1,
  xMultiFinalNoxUpgrades: 1, 
  xMultiFinal: 1,

  yMulti: 1,
  yMultiPP: 1,
  yMultiFinal: 1,

  zMulti: 1,
  zMultiPP: 1,
  zMultiFinal: 1,

  levels: 0,

  pendingPP: 0,
  pp: 0,

  currentUnlock: 0,
};

function calculateVars() {
  game.xMultiFinalNoxUpgrades = (game.y + 1) * game.xMultiPP

  game.xMultiFinal = game.xMulti * game.xMultiFinalNoxUpgrades * 0.01;
  game.yMultiFinal = (game.z + 1) * game.yMultiPP;
  game.zMultiFinal = game.zMulti * game.zMultiPP;

  game.x += game.xMultiFinal;
  game.levels = calculateLevels();
  game.pendingPP = calculatePendingPP();
}

function check_unlocks() {
  if (game.pendingPP > 1) {
    document.getElementById("pswitch").classList.remove("inactive");
    if (game.currentUnlock == 0) {
      game.currentUnlock += 1
    }
  }
}

function prestige() {
  if (game.pendingPP > 1) {
    resetCosts(upgradesDatax);
    resetCosts(upgradesDatay);
    resetCosts(upgradesDataz);
    game.x = 0;
    game.y = 0,
    game.z = 0
    game.xMulti = 1,
    game.xMultiFinal = 1;
    game.yMulti = 1,
    game.levels = 0,
    game.pp += game.pendingPP
    game.pendingPP = 0
  }
}

function formatNumber(num) {
  if (num === 0) return "0";
  if (num < 1) return parseFloat(num).toFixed(2);
  const prefixes = ["", "k", "m"];
  const power = Math.floor(Math.log10(Math.abs(num)));

  const index = Math.floor(power / 3);
  const prefix = prefixes[index];

  if (prefix === undefined) {
    return (num / 10 ** power).toFixed(2) + "e" + power;
  } else {
    return (num / 10 ** (index * 3)).toFixed(2) + prefix;
  }
}

function calculateLevels() {
  const base = 2;
  const logarithmicBase = 2; // Base for the logarithmic function

  // Calculate the level based on the sum of the logarithmic functions of the variables
  const level =
    (base *
      (Math.log2(game.x + 1) / 4) *
      (Math.log(game.y + 2) / Math.log(3)) *
      (Math.log(game.z + 2) / Math.log(2))) /
    Math.log2(logarithmicBase);

  return level.toString();
}

function calculatePendingPP() {
  const base = 2; // Base value for the first few levels
  const logarithmicBase = 2; // Base for the logarithmic function

  // Calculate the level based on the sum of the logarithmic functions of the variables
  const pp =
    (base *
      (Math.log(game.x + 1) / Math.log(100)) *
      (Math.log(game.y + 2) / Math.log(75)) *
      (Math.log(game.z + 2) / Math.log(50))) /
    Math.log2(logarithmicBase);

  return pp;
}

function updateTexts() {
  document.getElementById("levels").innerHTML =
    "Levels: " + formatNumber(game.levels);

  let types = [['x', upgradesDatax], ['y', upgradesDatay], ['z', upgradesDataz]];
  for (const type of types) {
    for (const upgrade of type[1]) {
      const buttonId = upgrade.id;
      const element = document.getElementById(`upgradeCost${buttonId}${type[0]}`);
      const element2 = document.getElementById(`upgradeGive${buttonId}${type[0]}`);
      const element3 = document.getElementById(`upgradeLevel${buttonId}${type[0]}`);
      const button = document.getElementById(`upgrade${buttonId}${type[0]}`);
      const currentCost = upgrade.cost;

      element.innerText = upgrade.text[2].replace("R", formatNumber(currentCost));
      element3.innerText = upgrade.text[0].replace("R", upgrade.level).replace("t", upgrade.milestones);
      switch (type[0]) {
        case "x":
          element2.innerText = upgrade.text[1].replace("R", formatNumber(upgrade.giver * game.xMultiFinalNoxUpgrades * (upgrade.milestoneBonus ** upgrade.milestones)));
          button.classList.toggle("affordable", currentCost <= game.x);
          break;
        case "y":
          element2.innerText = upgrade.text[1].replace("R", formatNumber(upgrade.giver * game.yMultiFinal * (upgrade.milestoneBonus ** upgrade.milestones)));
          button.classList.toggle("affordable", currentCost <= game.x);
          break;
        case "z":
          element2.innerText = upgrade.text[1].replace("R", formatNumber(upgrade.giver * game.zMultiFinal * (upgrade.milestoneBonus ** upgrade.milestones)));
          button.classList.toggle("affordable", currentCost <= game.y);
          break;
      }
    }

    for (const upgrade of upgradesDatapp) {
      const buttonId = upgrade.id;
      const element = document.getElementById(`upgradeCost${buttonId}`);
      const element2 = document.getElementById(`upgradeGive${buttonId}`);
      const element3 = document.getElementById(`upgradeLevel${buttonId}`);
      const button = document.getElementById(`pup${buttonId}`);
      const currentCost = upgrade.cost;

      element.innerText = upgrade.text[2].replace("R", formatNumber(currentCost));
      element2.innerText = upgrade.text[1].replace("R", formatNumber(upgrade.giver));
      element3.innerText = upgrade.text[0].replace("R", upgrade.level).replace("t", upgrade.milestones);
      button.classList.toggle("affordable", currentCost <= game.pp);
    }

    document.getElementById("pbutton").innerHTML =
     "Prestige for +" + formatNumber(game.pendingPP)
  }

  document.getElementById("xvar").innerHTML =
    `x: ${formatNumber(game.x)} (${formatNumber(game.xMultiFinal * 100)}/s)`;

  document.getElementById("yvar").innerHTML =
    "y: " + formatNumber(game.y);

  document.getElementById("zvar").innerHTML =
    "z: " + formatNumber(game.z);

  document.getElementById("ppvar").innerHTML = formatNumber(game.pp);

  if (game.currentUnlock == 0) {
    document.getElementById("unlockprogress").value = game.pendingPP
    document.getElementById("unlockprogresstext").innerHTML = "Next unlock: prestige"
  } else {
    document.getElementById("unlockprogress").classList.add("inactive")
    document.getElementById("unlockprogresstext").classList.add("inactive")
  }
}

function update() {
  calculateVars();
  updateTexts();
  check_unlocks();
}

document.addEventListener("DOMContentLoaded", function () {
  createUpgradeButtons(upgradesDatax, 'x');
  createUpgradeButtons(upgradesDatay, 'y');
  createUpgradeButtons(upgradesDataz, 'z');

  const timerInterval = setInterval(update, 1000 / pointSpeed);
});

function toggleMenu(menuId) {
  var menus = document.querySelectorAll('.menu');
  for (var i = 0; i < menus.length; i++) {
      menus[i].classList.remove('active');
  }
  document.getElementById(menuId).classList.add('active');
}

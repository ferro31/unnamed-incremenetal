let msbonus = 1.5;

let upgradesDatax = [
  { id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 2, cost: 10, giver: 2, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 3, cost: 30, giver: 4, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 4, cost: 75, giver: 9, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 5, cost: 250, giver: 15, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 6, cost: 765, giver: 23, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 7, cost: 1240, giver: 32, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 8, cost: 6432, giver: 74, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 9, cost: 18761, giver: 104, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 10, cost: 67899, giver: 211, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 11, cost: 376124, giver: 1001, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 12, cost: 2674221, giver: 1742, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 13, cost: 11934641, giver: 3674, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 14, cost: 34767764, giver: 7753, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
];

let upgradesDatay = [
  { id: 1, cost: 5000, level: 0, giver: 1, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] },
  { id: 2, cost: 50_000, level: 0, giver: 2, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] },
  { id: 3, cost: 546_000, level: 0, giver: 4, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] },
  { id: 4, cost: 9_118_343, level: 0, giver: 9, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] },
  { id: 5, cost: 93_153_441, level: 0, giver: 16, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] }
];

let upgradesDataz = [
  { id: 1, cost: 10, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rz", "Cost: Ry"] },
];



let upgradesDatapp = [
  { 
    level: 0, milestones: 0, milestoneBonus: msbonus,
    text: ["Level R (t)", "×2.5x", "Rpp"], 
    id: 1, cost: 1, 
    giver: function() {
      game.xMultiPP *= 2.5 * (this.milestoneBonus ** this.milestones);
    },
  },
  { 
    level: 0, milestones: 0, milestoneBonus: msbonus,
    text: ["Level R (t)", "×2y,", "Rpp"], 
    id: 2, cost: 3, 
    giver: function() {
      game.yMultiPP *= 2 * (this.milestoneBonus ** this.milestones);
    },
  },
  { 
    level: 0, milestones: 0, milestoneBonus: msbonus,
    text: ["Level R (t)", "×1.5z,", "Rpp"], 
    id: 3, cost: 10, 
    giver: function() {
      game.zMultiPP *= 1.5 * (this.milestoneBonus ** this.milestones);
    },
  }
];

function xUpgrade(buttonId) {
  const currentCost = upgradesDatax[buttonId - 1].cost;

  if (game.x >= currentCost) {
      button = upgradesDatax[buttonId - 1]
      game.x -= currentCost;
      upgradesDatax[buttonId - 1].cost *= 1.25;
      game.xMulti += upgradesDatax[buttonId - 1].giver * (button.milestoneBonus ** upgradesDatax[buttonId - 1].milestones)
      upgradesDatax[buttonId - 1].level += 1;
      upgradesDatax[buttonId - 1].milestones = Math.floor(upgradesDatax[buttonId - 1].level / 25)
  }
}

function yUpgrade(buttonId) {
  const currentCost = upgradesDatay[buttonId - 1].cost;

  if (game.x >= currentCost) {
      game.x = 0;
      upgradesDatay[buttonId - 1].cost *= 1.5;
      game.y += upgradesDatay[buttonId - 1].giver * game.yMulti * (button.milestoneBonus ** upgradesDatay[buttonId - 1].milestones);
      game.xMulti = 1;
      upgradesDatay[buttonId - 1].level += 1;
      upgradesDatay[buttonId - 1].milestones = Math.floor(upgradesDatay[buttonId - 1].level / 25)
      resetCosts(upgradesDatax);
  }
}

function zUpgrade(buttonId) {
  const currentCost = upgradesDataz[buttonId - 1].cost;

  if (game.y >= currentCost) {
      game.x = 0;
      game.y = 0;
      upgradesDataz[buttonId - 1].cost *= 1.75;
      game.z += upgradesDataz[buttonId - 1].giver * game.zMulti * (button.milestoneBonus ** upgradesDataz[buttonId - 1].milestones);
      upgradesDataz[buttonId - 1].level += 1;
      upgradesDataz[buttonId - 1].milestones = Math.floor(upgradesDataz[buttonId - 1].level / 25)
      resetCosts(upgradesDatax);
      resetCosts(upgradesDatay);
  }
}

function pupgrade(buttonId) {
  const currentCost = upgradesDatapp[buttonId - 1].cost;

  if (game.pp >= currentCost) {
      game.pp -= currentCost
      upgradesDatapp[buttonId - 1].cost *= 2;
      console.log(upgradesDatapp[buttonId - 1])
      upgradesDatapp[buttonId - 1].giver();
      upgradesDatapp[buttonId - 1].level += 1;
      upgradesDatapp[buttonId - 1].milestones = Math.floor(upgradesDatapp[buttonId - 1].level / 25)
  }
}

function saveBaseCosts() {
  upgradesDatax = upgradesDatax.map(item => {
    return { ...item, base: item.cost };
  });
  upgradesDatay = upgradesDatay.map(item => {
    return { ...item, base: item.cost };
  });
  upgradesDataz = upgradesDataz.map(item => {
    return { ...item, base: item.cost };
  });
}

function resetCosts(u) {
  for (let e of u) {
    e.cost = e.base;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  saveBaseCosts()
});
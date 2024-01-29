let upgradesDatax = [
  { id: 1, cost: 5, giver: 1, text: ["+Rx/s", "Cost: Rx"] },
  { id: 2, cost: 10, giver: 2, text: ["+Rx/s", "Cost: Rx"] },
  { id: 3, cost: 30, giver: 4, text: ["+Rx/s", "Cost: Rx"] },
  { id: 4, cost: 75, giver: 9, text: ["+Rx/s", "Cost: Rx"] },
  { id: 5, cost: 250, giver: 15, text: ["+Rx/s", "Cost: Rx"] },
  { id: 6, cost: 765, giver: 23, text: ["+Rx/s", "Cost: Rx"] },
  { id: 7, cost: 1240, giver: 32, text: ["+Rx/s", "Cost: Rx"] },
  { id: 8, cost: 6432, giver: 74, text: ["+Rx/s", "Cost: Rx"] },
  { id: 9, cost: 18761, giver: 104, text: ["+Rx/s", "Cost: Rx"] },
  { id: 10, cost: 67899, giver: 211, text: ["+Rx/s", "Cost: Rx"] },
  { id: 11, cost: 376124, giver: 1001, text: ["+Rx/s", "Cost: Rx"] },
  { id: 12, cost: 2674221, giver: 1742, text: ["+Rx/s", "Cost: Rx"] },
  { id: 13, cost: 11934641, giver: 3674, text: ["+Rx/s", "Cost: Rx"] },
  { id: 14, cost: 34767764, giver: 7753, text: ["+Rx/s", "Cost: Rx"] },
];

let upgradesDatay = [
  { id: 1, cost: 5000, giver: 1, text: ["+Ry", "Cost: Rx"] },
  { id: 2, cost: 50_000, giver: 2, text: ["+Ry", "Cost: Rx"] },
  { id: 3, cost: 546_000, giver: 4, text: ["+Ry", "Cost: Rx"] },
  { id: 4, cost: 9_118_343, giver: 9, text: ["+Ry", "Cost: Rx"] },
  { id: 5, cost: 93_153_441, giver: 16, text: ["+Ry", "Cost: Rx"] }
];

let upgradesDataz = [
  { id: 1, cost: 10, giver: 1, text: ["+Rz", "Cost: Ry"] },
];

let upgradesDatapp = [
  { 
    id: 1, 
    cost: 1, 
    giver: function() {
      game.xMultiPP += 1;
    },
    text: "×1x",
  }
];

function xUpgrade(buttonId) {
  const currentCost = upgradesDatax[buttonId - 1].cost;

  if (game.x >= currentCost) {
      game.x -= currentCost;
      upgradesDatax[buttonId - 1].cost *= 1.25;
      game.xMulti += upgradesDatax[buttonId - 1].giver
  }
}

function yUpgrade(buttonId) {
  const currentCost = upgradesDatay[buttonId - 1].cost;

  if (game.x >= currentCost) {
      game.x = 0;
      upgradesDatay[buttonId - 1].cost *= 1.5;
      game.y += upgradesDatay[buttonId - 1].giver * game.yMulti;
      game.xMulti = 1;
      resetCosts(upgradesDatax);
  }
}

function zUpgrade(buttonId) {
  const currentCost = upgradesDataz[buttonId - 1].cost;

  if (game.y >= currentCost) {
      game.x = 0;
      game.y = 0;
      upgradesDataz[buttonId - 1].cost *= 2;
      game.z += upgradesDataz[buttonId - 1].giver;
      resetCosts(upgradesDatax);
      resetCosts(upgradesDatay);
  }
}

function pupgrade(buttonId) {
  const currentCost = upgradesDatapp[buttonId - 1].cost;

  if (game.pp >= currentCost) {
      game.pp -= currentCost
      upgradesDatapp[buttonId - 1].cost *= 2.5;
      upgradesDatapp[buttonId - 1].giver();
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
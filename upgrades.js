let msbonus = 1.5;

let upgradesDatax = [
  { id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 2, cost: 25, giver: 4, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 3, cost: 125, giver: 16, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 4, cost: 625, giver: 64, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 5, cost: 250, giver: 256, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 6, cost: 1250, giver: 1024, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
  { id: 7, cost: 6250, giver: 4096, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
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

let def = []


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
    upgradesDatax[buttonId - 1].cost *= 2;
    game.xMulti += upgradesDatax[buttonId - 1].giver * (button.milestoneBonus ** upgradesDatax[buttonId - 1].milestones)
    upgradesDatax[buttonId - 1].level += 1;
    upgradesDatax[buttonId - 1].milestones = Math.floor(upgradesDatax[buttonId - 1].level / 25)
    
    if (buttonId == upgradesDatax.length) {
      generatemore("x")
    }
  }
}

function generatemore(type) {
  switch (type) {
    case "x":
      upgradesDatax = generate({ id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
      10, [3.1, 2.1], [5, 1], [upgradesDatax[upgradesDatax.length - 1].id, upgradesDatax])
      clear("x")
      createUpgradeButtons(upgradesDatax, 'x');
      break;
    case "y":
      upgradesDatay = generate({ id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] },
                            5, [3.2, 2.1], [5000, 1], [upgradesDatay[upgradesDatay.length - 1].id, upgradesDatay])
      
      clear("y")
      createUpgradeButtons(upgradesDatay, 'y');
      break;
    case "z":
      upgradesDataz = generate({ id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rz", "Cost: Ry"] },
                              3, [3.3, 2.1], [10, 1], [upgradesDataz[upgradesDataz.length - 1].id, upgradesDataz])
      clear("z")
      createUpgradeButtons(upgradesDataz, 'z');
      break;
  }
}

function resetcompletly(type) {
  switch (type) {
    case "x":
      clear("x")
      upgradesDatax = def[0]
      createUpgradeButtons(upgradesDatax, 'x');
      break;
    case "y":
      clear("y")
      upgradesDatax = def[1]
      createUpgradeButtons(upgradesDatay, 'y');
      break;
    case "z":
      clear("z")
      upgradesDatax = def[2]
      createUpgradeButtons(upgradesDataz, 'z');
      break;
  }
}

function yUpgrade(buttonId) {
  const currentCost = upgradesDatay[buttonId - 1].cost;

  if (game.x >= currentCost) {
    button = upgradesDatay[buttonId - 1]
    game.x = 0;
    upgradesDatay[buttonId - 1].cost *= 2.5; 
    game.y += upgradesDatay[buttonId - 1].giver * game.yMultiFinal * (button.milestoneBonus ** upgradesDatay[buttonId - 1].milestones);
    game.xMulti = 1;
    upgradesDatay[buttonId - 1].level += 1;
    upgradesDatay[buttonId - 1].milestones = Math.floor(upgradesDatay[buttonId - 1].level / 25)
    resetCosts(upgradesDatax);
    upgradesDatax = resetlevels(upgradesDatax)

    if (buttonId == upgradesDatay.length) {
      generatemore("y")
    }
  }
}

function zUpgrade(buttonId) {
  const currentCost = upgradesDataz[buttonId - 1].cost;

  if (game.y >= currentCost) {
    button = upgradesDataz[buttonId - 1]
    game.x = 0;
    game.y = 0;
    upgradesDataz[buttonId - 1].cost *= 3;
    game.z += upgradesDataz[buttonId - 1].giver * game.zMultiFinal * (button.milestoneBonus ** upgradesDataz[buttonId - 1].milestones);
    upgradesDataz[buttonId - 1].level += 1;
    upgradesDataz[buttonId - 1].milestones = Math.floor(upgradesDataz[buttonId - 1].level / 25)
    resetCosts(upgradesDatax);
    resetCosts(upgradesDatay);
    upgradesDatax = resetlevels(upgradesDatax)
    upgradesDatay = resetlevels(upgradesDatay)

    if (buttonId == upgradesDataz.length) {
      generatemore("z")
    }
  }
}

function pupgrade(buttonId) {
  const currentCost = upgradesDatapp[buttonId - 1].cost;

  if (game.pp >= currentCost) {
    game.pp -= currentCost
    upgradesDatapp[buttonId - 1].cost *= 2.5;
    console.log(upgradesDatapp[buttonId - 1])
    upgradesDatapp[buttonId - 1].giver();
    upgradesDatapp[buttonId - 1].level += 1;
    upgradesDatapp[buttonId - 1].milestones = Math.floor(upgradesDatapp[buttonId - 1].level / 25)
    upgradesDatax = resetlevels(upgradesDatax)
    upgradesDatay = resetlevels(upgradesDatay)
    upgradesDataz = resetlevels(upgradesDataz)
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

  def = [upgradesDatax, upgradesDatay, upgradesDataz]
}

function resetCosts(u) {
  for (let e of u) {
    e.cost = e.base;
  }
}

function generate(element, count, scaling, bases, starting=[0, null]) {
  if (starting[1] != null) {
    this.list = starting[1];
    for (let i = 0; i < count; i++) {
        let modifiedElement = {...element}
        modifiedElement.cost = bases[0] * Math.floor(scaling[0] ** (i + starting[0]))
        modifiedElement.base = bases[0] * Math.floor(scaling[0] ** (i + starting[0]))
        modifiedElement.giver = bases[1] * Math.floor(scaling[1] ** (i + starting[0]))
        modifiedElement.id = i + 1 + starting[0]
        this.list.push(modifiedElement);
    }
    return this.list;
  }
  this.list = [];
  for (let i = 0; i < count; i++) {
      let modifiedElement = {...element}
      modifiedElement.cost = bases[0] * Math.floor(scaling[0] ** (i + starting[0]))
      modifiedElement.giver = bases[1] * Math.floor(scaling[1] ** (i + starting[0]))
      modifiedElement.base = bases[0] * Math.floor(scaling[0] ** (i + starting[0]))
      modifiedElement.id = i + 1 + starting[0]
      this.list.push(modifiedElement);
  }
  return this.list;
}

function resetlevels(data) {
  return data.map(item => {
    return { ...item, level: 0 };
  });
}

document.addEventListener("DOMContentLoaded", function () {
  upgradesDatax = generate({ id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rx/s", "Cost: Rx"] },
                            10, [3.1, 2.1], [5, 1])
  upgradesDatay = generate({ id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Ry", "Cost: Rx"] },
                            5, [3.2, 2.1], [5000, 1])
  upgradesDataz = generate({ id: 1, cost: 5, giver: 1, level: 0, milestones: 0, milestoneBonus: msbonus, text: ["Level R (t)", "+Rz", "Cost: Ry"] },
                            3, [3.3, 2.1], [10, 1])
  saveBaseCosts()
  createUpgradeButtons(upgradesDatax, 'x');
  createUpgradeButtons(upgradesDatay, 'y');
  createUpgradeButtons(upgradesDataz, 'z');
});

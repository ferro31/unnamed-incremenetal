function createUpgradeButtons(upData, type = 'x') {
  const container = document.getElementById(type + 'upgradeButtonsContainer');

  upData.forEach(({ id, cost, giver }) => {
    const button = document.createElement('button');
    button.id = `upgrade${id}${type}`;
    button.className = `upgrade${id}${type} pointUpgrade`;
    if (type === 'x') {
      button.onclick = () => xUpgrade(id, giver, type);
    } else if (type === 'y') {
      button.onclick = () => yUpgrade(id, giver, type);
    } else if (type === 'z') {
      button.onclick = () => zUpgrade(id, giver, type);
    }

    const upgradeContent = document.createElement('div');
    upgradeContent.className = `upgrade-content`;

    const costText = `Cost: ${cost}${type}`;

    let UpgradeElements = []
    switch (type) {
      case 'x':
        upgradeElements = [
          { text: 'Upgrade', className: 'pUp' },
          { text: `+${giver}x/s`, className: 'pUp', id: `upgradeGive${id}${type}` },
          { text: costText, className: 'pUp', id: `upgradeCost${id}${type}` }
        ];
      case 'y':
        upgradeElements = [
          { text: 'Upgrade', className: 'pUp' },
          { text: `×${giver}x/s`, className: 'pUp', id: `upgradeGive${id}${type}` },
          { text: costText, className: 'pUp', id: `upgradeCost${id}${type}` }
        ];
      case 'z':
        upgradeElements = [
          { text: 'Upgrade', className: 'pUp' },
          { text: `×${giver}y`, className: 'pUp', id: `upgradeGive${id}${type}` },
          { text: costText, className: 'pUp', id: `upgradeCost${id}${type}` }
        ];
    }

    upgradeElements.forEach(({ text, className, id }) => {
      const div = document.createElement('div');
      div.textContent = text;
      div.className = className;
      if (id) div.id = id;
      upgradeContent.appendChild(div);
    });

    button.appendChild(upgradeContent);
    container.appendChild(button);
  });
}

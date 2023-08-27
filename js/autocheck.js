// TASK 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  
  getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        break;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        break;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  }
}    

// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Mushroom psy", price: 777 });
// console.log(atTheOldToad.getPotions());
atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion('JS Framework'));
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// console.log(atTheOldToad.getPotions());
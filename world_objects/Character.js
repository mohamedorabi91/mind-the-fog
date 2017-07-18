class Character{
    constructor(name, strength, dexterity, vitality, objid) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.vitality = vitality;
        this.maxVitality = vitality;
        this.objid = objid;
    }
}

class Boss extends Character{
  constructor(name, strength, dexterity, vitality, objid, lootList){
    super(name, strength, dexterity, vitality, objid);
    this.loot = lootList[Math.floor(Math.random() * lootList.length)];
  }
}


class Hero extends Character{
  constructor(name, strength, dexterity, vitality, objid){
    super(name, strength, dexterity, vitality, objid);
  }
}



class Enemy extends Character{
  constructor(name, strength, dexterity, vitality, objid){
    super(name, strength, dexterity, vitality, objid);
    this.lootId = -1;
  }
}
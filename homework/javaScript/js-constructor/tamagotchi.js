console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry() {
        this.foodInTummy--;
        console.log("WAHH!!!")
        console.log(this.name + ' has current food in tummy: ' + this.foodInTummy)
    }
}

const shiro = new Tamagotchi('Shiro', 'Alien')
console.log(shiro)
shiro.cry()

const timmy = new Tamagotchi('Timmy', 'Predator')
console.log(timmy)
timmy.cry()

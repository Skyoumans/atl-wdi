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
    };
    puke() {
        this.foodInTummy--;
        console.log(this.name + ' is feeling sick! Blehhhhh!')
    };
    yawn() {
        this.restedness--;
        console.log(this.name + ' has current restedness of ' + this.restedness)
    };
}

const shiro = new Tamagotchi('Shiro', 'Alien')
console.log(shiro)
shiro.cry()
shiro.puke()
shiro.yawn()

const timmy = new Tamagotchi('Timmy', 'Predator')
console.log(timmy)
timmy.cry()
timmy.puke()
timmy.yawn()

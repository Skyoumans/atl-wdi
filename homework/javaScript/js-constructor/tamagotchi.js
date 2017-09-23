console.log('tamagotchi file is loaded');

class Tamagotchi {
    constructor() {
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry() {
        this.foodInTummy--;
        console.log("WAHH!!!")
        console.log('current food in tummy: ' + this.foodInTummy)
    }
}

const shiro = new Tamagotchi('shiro')
console.log(shiro)
shiro.cry()

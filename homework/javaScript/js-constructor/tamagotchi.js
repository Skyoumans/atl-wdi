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
    start() {
        console.log("Starting" + this.name)
        var alien = this;
        this.hungerTimer = setInterval(() => {
            alien.cry();
        }, 6000);
        this.yawnTimer = setInterval(() => {
            alien.yawn();
        }, 10000);
        this.sickTimer = setInterval(() => {
            alien.puke();
        }, 20000);
    }
    stop() {
        console.log("Stopping " + this.name);
        clearInterval(this.hungerTimer);
        clearInterval(this.sickTimer);
        clearInterval(this.yawnTimer);
    }
}

const shiro = new Tamagotchi('Shiro', 'Alien')
console.log(shiro)
shiro.start()

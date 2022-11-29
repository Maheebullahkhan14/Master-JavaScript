class Player{
    constructor(name,age,goals){
        this.name = name;
        this.age = age;
        this.goals = goals;
    }
    worldcupWinCount(x){
        console.log(`${this.name} had wins ${x} World cup`)
    }
}

let player1 = new Player('Messi',31,987)
player1.worldcupWinCount(4)
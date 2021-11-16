//Greet the user

const robotNames = ["Spartacus", "Marcus Attilius", "Tetraites", "Spiculus"];
const robotHealth = ["70", "80", "90", "100"];

let playerHealth = "100";
let playerMoney = "200";
alert("Hello, Welcome to Robot Gladiators");
var whatIsYourName = window.prompt("Gladius");


var getRandomRobot = function() {
    var robot = robotNames[Math.floor(Math.random() * colors.length)]
    return robot;
}

var start = function() {

        while (playerHealth > 0) {

            var fightOrSkip = window.prompt("You are facing" + robot + "Do you want to FIGHT or SKIP. Type your request");


            if (fightOrSkip === "FIGHT" || fightOrSkip === "fight") {

            } else if (fightOrSkip === "SKIP" || fightOrSkip === "skip") {

            } else {
                start()
            }

        }

    }
    //array of different robots with different stats such as health, money, attack power

//player health at start is 100


//money is a variable starting is 200

//while the player health is over 0 player and robots take turns attacking

//if the player skips 20 money is deducted and new robot enters battle.



//if player health is 0 or under game is over, prompted to try again

//if robot health is 0 or under, a new robot enters the battle and round 2 is started once that robot is defeated round number increases
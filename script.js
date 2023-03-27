


/* coppy1
const button = document.createElement('button')

      // Set the button text to 'Can you click me?'
      button.innerText = 'Can you click me?'

      button.id = 'mainButton'

      // Attach the "click" event to your button
      button.addEventListener('click', () => {
        // When there is a "click"
        // it shows an alert in the browser
        alert('Oh, you clicked me!')
      })
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name,
        this.hull = hull,
        this.firepower = firepower, 
        this.accuracy = accuracy
    }
    
}




class MainShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
        
            this.name = "USS Assembly",
                this.hull = 20,
                this.firepower = 5,
                this.accuracy = .7
        }
       attackAlien(target){
        let randomNum = Math.random()
        if (randomNum <= this.accuracy){
            target.hull -= this.firepower 
              window.alert(`Attacked ${target.name} for ${this.firepower} damage!`)
        } else{
           (window.alert('You missed us!'))
        }
        target.attackMain(this)
       }
  }
    

  class AlienShip extends Ship {
    constructor(name, hull, firepower, accuracy){
       super(name, hull, firepower, accuracy)
       this.name = name,
       this.hull = (Math.floor(Math.random() * 4) + 3), // function getRandomArbitrary(min, max) { Math.random() * (max - min) + min;
       this.firepower = Math.floor((Math.random() * 3) + 2), // Math.floor(math.random() * ((max - min) + 1) + min) <== whole number
       this.accuracy =  ((Math.random()* .2) + .6).toFixed(2) // (Math.random() * (max - min)) + min <== decimal
   } 
   attackMain(target) {
       let randomNum = Math.random()
        if (randomNum < this.accuracy) {
           target.hull -= this.firepower
           window.alert(`Attacked ${target.name} for ${this.firepower} damage!`); // target is the actual target of the attack. any changes made on target.whatever are going to affect the actual thing given to it.
            
        }
        else { window.alert('You have missed!') }
       }
 }
  
    
  //     // add additional properties for the "Main Ship"'
  //   const USSAssembly = new MainShip ("usaassemb",3,3,)
  /
  //   const allAlien = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]
  //     console.log(allAlien)


  // USSAssembly.attackAlien(alienShip4)


  // const atackButton = document.getElementById('attack')

*/

//**************************************** 
class Spaceship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
      this.live = true;
  }
  attackChance(accuracy) {
    if (Math.random() < this.accuracy) {
      return true;
    }
  }  
}


function randomfuncal(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

const spaceBattlepara = {
  createspaceship: function () {
    this.alienShips = [
    new Spaceship("USS Captain One", randomfuncal(3,7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10)),
    new Spaceship("USS USS Captain Two", randomfuncal(3, 7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10)),
    new Spaceship("USS Captain Three", randomfuncal(3,7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10)),
    new Spaceship("USS USS Captain Four", randomfuncal(3,7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10)),
    new Spaceship("USS USS Captain Five", randomfuncal(3,7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10)),
    new Spaceship("USS USS Captain Six", randomfuncal(3,7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10)),
    new Spaceship("USS Captain Seven", randomfuncal(3,7), randomfuncal(2, 5), (randomfuncal(6, 9) / 10))
    ];
   this.ussAssembly = new Spaceship("USS Assembly", 20, 5, 0.7);
  },
  gameStart: function() {
    this.createspaceship();
    alert("Welcome to our Game: Save the Universe Space battlle!")
    const readyToPlay = confirm(`Are you ready for  your journey as ${this.ussAssembly.name}?`);
    if (readyToPlay) {
      this.play();
    } else {
      alert("Maybe next time will see u!");
    }
  },
  Damgecheck: function(ship) {
    if (ship.hull > 0) {
      return true;
    }
  },
  play: function() {
    index = 0;
    while(this.ussAssembly.hull > 0 && index<7) {
      if (this.Damgecheck(this.alienShips[index])){
        this.attack(this.alienShips[index]);
        if (this.Damgecheck(this.alienShips[index])) {
          this.defend(this.alienShips[index]);
        }
      }
      if(!this.Damgecheck(this.alienShips[index])) {
        index += 1;
      }
    }
  },
  attack: function(defence) {
      console.log(`You are attacking  watch out ${defence.name}.`)
      if (this.ussAssembly.attackChance()){
        defence.hull -= this.ussAssembly.firepower;
        if (defence.hull <= 0){
          console.log(`You hit and destroyed sorry ${defence.name}!`)
          
          document.getElementById("Attack").value=//
          
          document.getElementById("Attack").value+
          `\n`+`You hit and destroyed ${defence.name}!` +`\n`;

        } else {
            console.log(`You attacked and ${defence.name} and the hull of that ship is now ${defence.hull}.`)
            document.getElementById("Attack").value=`\n`+ document.getElementById("Attack").value+
          `\n`+`You attacked and ${defence.name} and the hull of that ship is now ${defence.hull}.` +`\n`;
        }
      } else {
      console.log(`You missed hitting ${defence.name}.`)
      document.getElementById("Attack").value=document.getElementById("Attack").value+      `You missed hitting ${defence.name}.` +`\n`;
      }
  },
  defend: function(attacker) {
    console.log(`You are being attacked by ${attacker.name}.`)
    document.getElementById("Attack").value= document.getElementById("Attack").value+  `You are being attacked by ${attacker.name}.` +`\n`;
      
    if (attacker.attackChance()) {
      this.ussAssembly.hull -= attacker.firepower;
      if (this.ussAssembly.hull > 0) { 
        console.log(`They hit and your hull  value is now ${this.ussAssembly.hull}.`);
        document.getElementById("Attack").value= document.getElementById("Attack").value+  `They hit and your hull value  is now ${this.ussAssembly.hull}.` +`\n`;
    
      } else {
        console.log(`You have lost the battle.`);
        document.getElementById("Attack").value=document.getElementById("Attack").value+  `You have lost.` +`\n`;
    
        alert("Game is over.");
      }
    } else {
      console.log(`They missed you .
Your hull value is ${this.ussAssembly.hull}.`);
document.getElementById("Attack").value=document.getElementById("Attack").value+  `They missed you now u have a chance to attack.
Your hull value is ${this.ussAssembly.hull}.`+`\n`;
    
    }
  }
  
}
document.getElementById("Attack").value=``;
//document.getElementById("attbutton").addEventListener("click", spaceBattlepara.gameStart);
document.getElementById("attbutton").addEventListener("click", function(){
  
   spaceBattlepara.gameStart(); 
  });


//spaceBattlepara.gameStart();
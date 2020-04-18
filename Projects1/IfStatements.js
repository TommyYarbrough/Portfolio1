let toppings = ["Pepperoni", "Meat", "Bacon"]
    for(i = 0; i < toppings.length; i++);

    if (toppings[i]) {
        toppings.push(i++)
    }

console.log(toppings);
    // I created a card counting function
    var count = 0;

function cc(card) {
  // Only change code below this line
    switch(card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      count++;
      break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
      count--;
      break;
    }
  var holdbet = "Hold"
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}
/* this program tell you the count and weither you should hold or bet in a blackjack game knowing the 
relative number of high and low cards*/
var myDog = {
  
    "name": "Fido",
    "legs": 4,
    "tails": 1,
    "friends": ["dogs", "Me"]
  };
  
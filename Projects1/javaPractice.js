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


  var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

function updateRecords(id, prop, value) {
  const currentRecord = collection[id]
  if (value === "") {
    delete currentRecord[prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  } 

  return collection;
}
updateRecords(id, prop, value) // this is a function to update a record album 
//

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    var countArr = countup(n - 1)
    coountArr.push(n)
    return countArr;
  }
}


  function rangeOfNumbers (startNum, endNum)
if (endNum - startNum === 0) {
  return [startNum];
 } else {
    var range = rangeOfNumbers(startNum, endNum - 1);
   range.push(endNum);
   return range;





 }




  const fist = {first: es6, learning: "more every day",}
// spending alot of time learning

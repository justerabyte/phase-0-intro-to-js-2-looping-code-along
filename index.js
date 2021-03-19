// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);*/


/*const names = ["Ada", "Brendan", "Ali"]; 
const events = ["birthday"];

function writeCards(names, events) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
        debugger;
      }
      return names;
    }
    
    writeCards(names, events);*/

const names = ["Ada", "Brendan", "Ali"];
const events = ["birthday"];

function writeCards(names, events) {
    const messagesArray = []
    for (let i = 0; i < names.length; i++) {
        console.log(i)
        let greeting = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        messagesArray[i] = greeting;
    }
    return messagesArray;
}
    writeCards(names, events);



function countDown(number) {
    let i = 0;
    while (number >=0) {
        i++;
        console.log(number);
        number--;
    }
    return i;
}
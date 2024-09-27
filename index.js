// Code your solutions in this file
const myArray = ["Guadalupe", "Ollie", "Aki"];
const writeCards = function(array,surprise){
    const messages = [];

    for(let i=0; i<array.length; i++){
        messages.push( `Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
    }

    return messages;
}
console.log(writeCards(myArray, "surprise"));

const countDown = function(){
    for(let i=0; i<11; i++){
        console.log(i)
    }
}
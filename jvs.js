"use strict";

//alert('Warning! This is Sound H');
const result = confirm("Are you here?");

const answer = +prompt('Вам 18?','18');
console.log(answer+1);

const data=[]
data[0]=prompt('Ваше имя?','');
data[1]=prompt('Ваша фамилия?','');
data[2]=prompt('Ваш пол?','М/Ж');
document.write(data);

console.log('arr'+' - object');

console.log(99+ +'1');

let incr=14,
    decr=11;
incr++;
--decr;
console.log(incr);
console.log(decr);
console.log(incr%decr);
console.log(5*4=='20');
console.log(5*4==='20');
console.log(5*4 != 25);

const isOne=true,
    isTwo=true,
    isThree=false;
console.log(isOne && isTwo && isThree);
console.log(isOne || isTwo || isThree);
console.log(isOne && !isThree);
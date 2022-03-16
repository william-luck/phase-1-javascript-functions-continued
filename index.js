// function that has deafult arguments, but can be overwridden  
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// const fn = function () {
//     console.log("Yet more razzling");
// }

// immediately-invoked function expression 



// function outer(greeting, msg = "It's a fine day to learn") { //"hello" passed in as greeting, no msg passed, so will default
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`; 
//     };
//     return innerFunction("student", "JavaScript");
//   }
  
//   outer("Hello"); // 



// Todo, need to put the * around the adjective. 

function wrapAdjective (flare = "*") {
    const innerFunction = function (adjective = "special") {
        return `You are ${flare}${adjective}${flare}!`
    }
    return innerFunction;
    }


console.log(wrapAdjective()());
console.log(wrapAdjective("!!")());
console.log(wrapAdjective("$$")());
console.log(wrapAdjective("!!")("very beautiful to me"));
console.log(wrapAdjective("$$")("money bags"));

// console.log(wrapAdjective());




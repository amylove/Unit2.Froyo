const userInputString = prompt(
    //"vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

let stringArray = userInputString.split(",");
console.log("Array of your flavors: ", stringArray)
  
let order = stringArray;
// for (const ord1 in order) {
//     console.log(order[ord1])
    // let total = 0;
    // for (let i = 0; i < stringArray.length; i++) {
    //     total += stringArray[i]
    //     console.table(total)
    // }
    // const flavors = {
    //     vanilla: 1,
    //     strawberry: 1,
    //     coffee: 1
    // }
    // let total = 0;
    // for (let i = 0; i < stringArray.length; i++) {
    //     total += stringArray[i]
    //     console.table(total)
    // }
    
// }

const flavors = {};
stringArray.forEach(flavor => {
    if (flavors[flavor]) {
        flavors[flavor]++;
    } else {
        flavors[flavor] = 1;
    }
});
console.table(flavors);

// console.log("Review")
// let inputStr = "Hello World"


// function stringCounter(inputStr) {
//     const newArray = inputStr.split("")
//     console.log(newArray)

//     let answer = {}
//     for(let i = 0; i < stringArray.length; i++) {
//         let letter = stringArray[i]
//         if(!Object.hasOwn(answer, letter)) {
//             answer[letter] = 1
//         } else {
//             answer[letter] += 1
//         }
//     }

//     return answer
// }
// console.log("Answer: ", stringCounter(inputStr))


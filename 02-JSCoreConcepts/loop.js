console.log("Excercise 3 - loops \n\n")
// Display natural nums
let naturalNumbers = [4,12,18,20]
console.log("Display with map")
naturalNumbers.map((num) => {
    return console.log(num);
});

function naturalDisplayForEach(numberArr){
    numberArr.forEach(function(num) {
        console.log(num);
    }); 
}

function naturalDisplayFor(numberArr){
    for (let i = 0; i < numberArr.length; i++) {
            console.log(numberArr[i]);
        }
}

function naturalDisplayWhile(numberArr){
    let count = 0
    while(numberArr[count]){
        console.log(numberArr[count]);
        count++;
    }
}

console.log("Display with forEach")
naturalNumbersDisplayForEach(naturalNumbers);
console.log("Display with for")
naturalNumbersDisplayFor(naturalNumbers);
console.log("Display with while")
naturalNumbersDisplayWhile(naturalNumbers);
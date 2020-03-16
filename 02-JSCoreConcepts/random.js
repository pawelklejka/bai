const randomNumberGenerator = (bottomRange, upperRange, number) => {
    let rndArr = [];
    for(i = 0; i < number; i++){
        min = Math.ceil(bottomRange);
        max = Math.floor(upperRange);
        rndArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return rndArr;
}

console.log(randomNumberGenerator(5, 20, 10));

const displayRnd = arr => {
    arr.map(num => console.log(num));
}

displayRnd(randomNumberGenerator(5, 20, 10));
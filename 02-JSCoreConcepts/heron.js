// boki trójkąta
//a = 3;
const b = 4;
const c = 5;
const h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

function triangleArea(a,b,c){
    let halfOfPerimeter = (a+b+c)/2
    let area = Math.sqrt(halfOfPerimeter*(halfOfPerimeter-a)*(halfOfPerimeter-b)*(halfOfPerimeter-c))
    console.log("Pole trókąta o bokach " + a + ", " + b + ", " + c + " wynosi: " + area)
}

triangleArea(a,b,c);
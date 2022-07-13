// Problem 1: adding two numbers
function add(num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log(add(5,3))

// Problem 2: finding the square root
function findRoot(num) {
    let sqrt = num ** (1/2)
    return sqrt
}

console.log(findRoot(4))

// Problem 3: calculating the area of a triangle
function areaOfTriangle(base, height) {
    let area = 0.5 * base * height
    return area
}

console.log(areaOfTriangle(2,4))

// Problem 4: swap two variables
function swap(a,b) {
    console.log(`a = ${a}, b = ${b}`)
    // creating temporary variable to store a as we change a first
    let temp = a
    a = b // a becomes b
    b = temp // b becomes a
    console.log(`Now, a = ${a}, b = ${temp}`)
}
swap(6,7)

//  Problem 5: solve quadratic equation
// quadradic equation in the form of: ax^2 * bx + c
function solveQuad (a,b,c) {
    let solution1 = (-b + (b**2 - 4*a*c)**(1/2))/(2*a)
    let solution2 = (-b - (b**2 - 4*a*c)**(1/2))/(2*a)
    // JS does not support returning multiple values
    return [solution1,solution2]
}

console.log(solveQuad(1,3,2))

// Problem 6: converting km to mi
function convertKmToMi(km,mi) {
    let factor = 0.621
    let conversion = km * factor
    return conversion
}

console.log(convertKmToMi(1))

// Problem 7: converting C to F
function convertCToF(c) {
    let conversion = (c * (9/5)) + 32
    return conversion
}

console.log(convertCToF(0))

// Problem 8: generating a random number between 0 (incl) and 1 (excl)
function generateRandom() {
    randomNumber = Math.random
    return randomNumber
}

console.log(generateRandom())

// Problem 9: check if number is positive, negative or 0
function checkPositiveOrNegative(num) {
    if (num > 0) {
        console.log("Number is positive")
    } else if (num < 0) {
        console.log("Number is negative")
    } else {
        console.log("Number is 0")
    }
}

checkPositiveOrNegative(8)
checkPositiveOrNegative(-9)
checkPositiveOrNegative(0)

// Problem 10: check if number is odd or even
function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log("Number is even")
    } else {
        console.log("Number is odd")
    }
}

checkOddOrEven(5)
checkOddOrEven(8)
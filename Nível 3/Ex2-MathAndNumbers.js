console.clear()
//2a. one soup - for 10
// 3 burgers for 8 each
// 1 ice cream for 5
// 
let burguer = 8
let soup = 10
let icecream = 5

let FirstOrder = (soup+(3*burguer)+icecream)
console.log(FirstOrder)


//2b - (on a restaurant with 2 friends (3 poeople in total) and make the same order as 2a, calculate each person pays)
let SecOrder = (FirstOrder * 3)
console.log(SecOrder)


//2c - Calculate the total cost of a toaster (18.50) and 2 shirts (7.50 each)
let toaster = 18.50
let shirts = 7.50

let ClothOrder = toaster + (shirts*2)
console.log(ClothOrder)

//2d - Calculate 10% tax
console.log(ClothOrder * 0.1)

//2e - Calculate 20% for the total in 2c
console.log(ClothOrder * 0.2)

// =========== Setup ===========
//Toaser (18.99) to 1 backet bool, 1 t-shirt. and 1 toaster (shipping 4.99)
console.log("==========================================")
let backetboll = 2095
let tshirt = 799
toaster = 1899


let costF = ((backetboll + tshirt + toaster) / 100)
tax = ((costF * 0.1))
console.log(Math.round(tax))

//2i Calculate Ordet total at the bottom
let total = (tax + costF)
console.log(total)
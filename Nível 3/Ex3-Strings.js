console.clear()
//3a Creatre the text 'My name is at a string
console.log(`My name is `)

//3b Creare your name...
let name = 'Minerva'
//3c Using concatenation, add the 2 strings from 3a and 3b together to create the text> "My name is:__" (replace your name)
console.log('My name is ', name)

//3d At a restaurant, you order 1 coffee ($), and 1 bagel (3$). Using ,math, calculate the total cost, and usgin concatenation, create the text: 
let coffe = 5
let bagel = 3

console.log(coffe + bagel + "$")

//3e, do the same, but using the interpolation
console.log(`O total é ${coffe + bagel + '$'}`)

//3f Use alert
//alert(`O total é ${coffe + bagel + '$'}`)

//3g (1 coffee 5.99 and bagel 2.95. Total cust using concatenation

let coffee =  599
bagel = 295

console.log(`Total cost: $${(coffee + bagel)/100}`)

//3h
console.log("Total cost: $" + (coffee  + bagel)/100)

//3i - Display on a pop uo
//alert("Total cost: $" + (coffee  + bagel)/100)
//alert(`Total cost: $${(599 + 295) / 100}
//Thank you, come again!`);

let basketball = 2095
let shipping = 499
let tshirt = 799

console.log(' ')
console.log(`Items (${2+2}):\n$${(2* 2095 + 2 *799) / 100}`)

//3l Create third lide: 
console.log(`Total before tax: $67.86`)
console.log(`Estimated tax $${Math.round((2095*1 + 1*799+499)*0.1)/100}`)

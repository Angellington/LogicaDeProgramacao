// Score Mean
console.clear();

// Import libraries
const prompt = require('prompt-sync')();
const color = require('colors');

// Give the scores
// let s1 = (Number(prompt('Insert first score: ')));

let s1 = NaN;
let s2 = NaN;
let s3 = NaN;

let s1E = (s1 > 10 || s1 < 0 || isNaN(s1));
let s2E = (s2 > 10 || s2 < 0 || isNaN(s2));
let s3E = (s3 > 10 || s3 < 0 || isNaN(s3));

while(s1 > 10 || s1 < 0 || isNaN(s1) || s2 > 10 || s2 < 0 || isNaN(s2) || s3 > 10 || s3 < 0 || isNaN(s3)){
    console.clear()
    s1 = (Number(prompt('Insert first score: ')));
    s2 = (Number(prompt('Insert second score: ')));
    s3 = (Number(prompt('Insert third score: ')));

    if(s1 > 10 || s1 < 0 || isNaN(s1) || s2 > 10 || s2 < 0 || isNaN(s2) || s3 > 10 || s3 < 0 || isNaN(s3)){
        console.clear()
        console.log('Please, invert a valid score between 0 and 10')
    }
}


// Mean Function
mean(s1, s2, s3)

// Calculate the mean
function mean(s1, s2, s3){
    let mean = (s1 + s2 + s3)/3;
    return console.log(`The Scholar Mean is: ${Math.round(mean * 2)/2}`.green)
}



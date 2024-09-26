let max = 6;

for(let x = 1; x <= max; x++){
    let row = '-';

    for (let y = 1; y <= x; y++){
        row += '*          ';
    }
    console.log(row)
}
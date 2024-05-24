const character = "*";
const count = 8;
const rows = [];
const toggle = false;


function padRow(row, total) {
    return " ".repeat(total-row) + character.repeat(2*row-1) + " ".repeat(total-row);
}



for (let i = 1; i <= count; i++) {
    if(toggle) {
        rows.unshift(padRow(i, count));
    }
    else {
        rows.push(padRow(i, count));
    }
}

let resultStr = "";

for (const row of rows) {
    resultStr += row + "\n";
}

console.log(resultStr);
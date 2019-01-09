const readline = require('readline');
const fs = require('fs');

function decompressed(line){
    let letter = line.charAt(0);
    let numbers = parseInt(line.substring(1, line.length));
    let ausgabe = "";

    for(let i = 0; i < numbers; i++){
        ausgabe = ausgabe + letter;
    }
    return ausgabe;
}

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
        console.log(decompressed(line));
    }
});
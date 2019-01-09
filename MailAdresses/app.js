const readline = require('readline');
const fs = require('fs');

// Zeile schreiben
function zeile(){
    let array = [];
    for(let i = 0; i < 34; i++) {
        array[i] = "-";
    }
    console.log(array.join(""));
}

// Vorname und Nachname rausfiltern
function getFirstNameLastName(line){
    let semicolon = "leer";
    let i = 0;
    while(semicolon == "leer"){
        if(line.charAt(i) == ";"){
            semicolon = i;
        }
        i++;
    }

    let firstName = line.substring(0, semicolon);
    let lastName = line.substring(semicolon + 1, line.length);
    return getEmailAddress(lastName, firstName);

}

// Name kleiner machen und umlaute veraendern
function getEmailAddress(firstName, lastName){
    fistName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    let array = [];
    for(let i = 0; i < lastName.length; i++){
        array[i] = lastName.charAt(i);
        switch(array[i]){
            case "ä":
                     array[i] = "ae";
                     break;
            case "ö":
                     array[i] = "oe";
                     break;
            case "ü":
                     array[i] = "ue";
                     break;
            default:
                     break;
        }
    }

    lastName = array.join("");

    let mailAdrresse = fistName.charAt(0) + "." + lastName + "@htl-leonding.ac.at";
    return mailAdrresse;
}

// Ausgabe
zeile();
console.log("email adresses");
zeile();

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
    for (line of compressedLines){
        console.log(getFirstNameLastName(line));
    }
    zeile();
});


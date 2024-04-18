/* 1 esercizio*/

function controllo(num1,num2) {
if (parseInt(num1)===50 || parseInt(num2)===50 || (parseInt(num1)+parseInt(num2))===50) {
    console.log("true");
} else {
    console.log("false");
}
}

controllo(5,45)



// /* 2 esercizio*/

let stringa = "Mamma"
let posizione = 3;


function rimuoviStringa(stringa,posizione) {
    let array= stringa.split("");
    array.splice(posizione,1);
    let nStringa = array.join("");
    console.log(nStringa)    
}

rimuoviStringa(stringa,posizione);


/* 3 esercizio*/

function controlloNumero (a,b) {
    if (a > 40 && a < 60 || a > 70 &&  a < 100 ) {
        if (b > 40 && b < 60 || b > 70 &&  b < 100 ) {
            console.log("true")
        } else {
            console.log("false")
        }
    } else {
        console.log("false")
    }
}

controlloNumero(42,75);



/* 4 esercizio*/

function nomeCitta(citta){
if (citta.startsWith("Los") || citta.startsWith("New")) {  // qui usiamo startsWith per scoprire come inizia la stringa
    return citta;
    } else {
        return false;
    }
}

console.log(nomeCitta("New York"))




/* 5 esercizio*/

const array1 = [1,3,10];

 function somArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }
console.log(sum);  
    }

somArray(array1);



/* 6 esercizio*/

let array2 = [1,2,3,"nn",5,7,4]

function nonInclude(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return false;
    } else {
        return true;
    }
}
 console.log(nonInclude(array2));



/* 7 esercizio*/

function angolo(num3) {

 switch (true) {
     case num3 < 90:
       alert( 'Angolo acuto' );
       break;
     case num3 == 90:
       alert( 'Angolo retto' );
       break;
     case num3 > 90 && num3 < 180:
       alert( 'Angolo ottuso' );
       break;
     case num3 == 180:
       alert( 'Angolo piatto' );
       break;
     default:
       alert( "Inserisci un numero da 0 a 180, per favore" );
   }

}

angolo(180);



/* 8 esercizio*/

function acronimo(stringa) {
    
    let parole = stringa.split(" "); //creiamo un array dividendo la stringa ogni volta che trova uno spazio 
    let acronimoString = [] ;
    for (let i=0; i < parole.length; i++) { 
        let primaLettera = parole[i].charAt(0); // assegnamo ad una varialbile la prima lettera del dato (i) dell'array words 
        let maiuscola = primaLettera.toUpperCase(); // lo facciamo diventare maiuscolo
        acronimoString.push(maiuscola);  // Dentro l'array mettiamo le lettere maiuscole

    }
    acronimoString.push(" "); // creo un ultimo dato vuoto.
    return acronimoString.join("."); //Uniamo ogni elemento dell'array per formare una stringa, e a fine di ogni elemento si aggiunge il punto.
}

console.log(acronimo("federazione italian gioco calcio"))

/* 1 extra*/

/* 2 extra*/

/* 3 extra*/



/* 4 extra*/

let stringa2= "anna"

function palindromo(stringa) {
    if (stringa.split("").reverse().join("") === stringa) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo(stringa2));




/* 5 extra*/


function numeroRiverso(n) {
    return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)               
  }

console.log(numeroRiverso(-512))



/* 6 extra*/

const num6=3;

function scalini (n) {
    let array = ["#"];
    for (i=0; i<n; i++) {
        console.log(array.join(""));
        array.push("#");
        
    }
}

scalini(num6);


/* 7 extra*/

function reverseStr(stringa) {
    return stringa.split("").reverse().join(""); 
}

console.log(reverseStr("orangotango"))



/* 8 extra****/

const array = [1, 2, 3, 4], y= 2;

function divisioneArray(array,y) {
    for (let i=0; i<y; i++) {

    }
}




/* 9 extra*/



/* 10 extra*/
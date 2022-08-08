/*ideen:
- computer-spieler?
- 
*/

const haupt = document.getElementsByClassName("test");
console.log(haupt);
var spieler = 1;//1 für O   //2 für X


var gewo = [];
var gewx = [];
let felderx = -1;
let feldero = -1;
var anzeige = 0;
var spielanzahl = 0;





for (let i = 0; i < haupt.length; i++) {

    haupt[i].addEventListener('click', function () { start(i) });

}


function start(e) {

    let bes = besetzt(e);      //b=0 nicht besetzt | b=1 besetzt
    

    if (!bes) {

        spielanzahl++;
        if (spieler % 2 == 0) {
            haupt[e].firstElementChild.classList.add('o'); //spieler 2
            spieler++;
            feldero++;


        } else {
            haupt[e].firstElementChild.classList.add('x'); //spieler 1
            spieler++;
            felderx++;

        }
    }

    let gew = gewonnen(e, feldero, felderx);
    let unent = unentschieden(spielanzahl);
    if (!unent) {
        if (gew) {
            if (spieler % 2 == 0) {

                alert("Spieler X hat gewonnen!")
                anzeige = 1;
            } else {
                alert("Spieler O hat gewonnen!")
                anzeige = -1;
            }
            console.log("Spiel zuende")
            aendern(anzeige);
        }
    }else {
        alert("Unentschieden")
    }
}

function besetzt(e) {  //b=0 nicht besetzt | b=1 besetzt
    let bes = false

    if (haupt[e].firstElementChild.classList.contains("o") || haupt[e].firstElementChild.classList.contains("x")) {
        bes = true;
    }
    return (bes);
}


function gewonnen(e, feldero, felderx) { // 0,1,2,3,4,5,6,7,8

    let gewonnen = false;
    var i = 0;

    if (haupt[e].firstElementChild.classList.contains("o")) {

        gewo[feldero] = e;
        console.log(gewo);
        for (var x = 0; x <= 3; x++) {
            if (gewo.includes(i) && gewo.includes(i + 1) && gewo.includes(i + 2) || //links rechts
                gewo.includes(x) && gewo.includes(x + 3) && gewo.includes(x + 6) || // oben unten
                (gewo.includes(0) || gewo.includes(2)) && gewo.includes(4) && (gewo.includes(8) || gewo.includes(6))) { //diagonal

                gewonnen = true;
            }
            i = i + 3;
        }

    } else if (haupt[e].firstElementChild.classList.contains("x")) {

        gewx[felderx] = e;
        console.log(gewx);
        for (var x = -1; x <= 2; x++) {
            if (gewx.includes(i) && gewx.includes(i + 1) && gewx.includes(i + 2) ||
                gewx.includes(x) && gewx.includes(x + 3) && gewx.includes(x + 6) ||
                (gewx.includes(0) || gewx.includes(2)) && gewx.includes(4) && (gewx.includes(8) || gewx.includes(6))) {

                gewonnen = true;
            }
            i = i + 3;
        }


    }

    return (gewonnen);
}


function neustart() {

    location.reload();
}


function aendern(spieler) {

    if (spieler == 1) {

        document.getElementsByClassName("spieler1")[0].style.backgroundColor = 'green';

    } else if (spieler == -1) {

        document.getElementsByClassName("spieler2")[0].style.backgroundColor = 'green';
    } else {
        document.getElementsByClassName("spieler1")[0].style.backgroundColor = 'red';
        document.getElementsByClassName("spieler2")[0].style.backgroundColor = 'red';
    }
}

function unentschieden(e) {
    var Y = false;

    var array = [];
    array.push(e);
    console.log("Array" + array);

    if (array.includes(9)) {
        anzeige = 0;
        aendern(anzeige);
        Y = true;
    }
    return (Y);
}
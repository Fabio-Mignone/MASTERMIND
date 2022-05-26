$(document).ready(function () {
    generateUniqueRandom(maxNr);
    console.log('Unique random numbers:', ArraySistema);
});

let ArraySistema = [];
let ArrayUtente = [];
var maxNr = 9;
var NumeroTentativi = 0;
var CounterCorrect = 0;
var PositionCorrect = 0;

function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
        return true;
    }
    else {
        return false;
    }
}

function generateUniqueRandom(maxNr) {
    for (i = 0; i <= 3; i++) {
        let random = (Math.random() * maxNr).toFixed();
        ArraySistema.push(random);
    }
    if (containsDuplicates(ArraySistema) == true) {
        ArraySistema.length = 0;
    }
    if (ArraySistema.length == 0) {
        generateUniqueRandom(maxNr);
    }
}

function UserGet() {
    var utentelinear = document.getElementById("userValue").value;
    parseInt(utentelinear);
    if (isNaN(utentelinear) === false) {
        ArrayUtente = utentelinear.split('');
        if (ArrayUtente.length === 4) {
            if (containsDuplicates(ArrayUtente) === false) {
                NumeroTentativi++;
                document.getElementById("numtent").innerHTML = "Tenteativi attuali: " + NumeroTentativi;
                VerificaNumero();
                if (NumeroTentativi === 10) {
                    document.getElementById("ver").disabled = true;
                    document.getElementById("status").innerHTML = "HAI PERSO";
                }
            }
            else {
                ArrayUtente.length = 0;
                alert("I numeri inseriti non devono essere uguali tra loro");
            }
        }
        else {
            ArrayUtente.length = 0;
            alert("Inserire una sequenza di numeri lunga quattro cifre");
        }
    }
    else {
        ArrayUtente.length = 0;
        alert("Inserire una sequenza di soli numeri lunga quattro cifre");
    }
}

function VerificaNumero() {
    if (ArrayUtente.includes(ArraySistema[0])) {
        CounterCorrect++;
        if (ArrayUtente[0] === ArraySistema[0]) {
            PositionCorrect++;
        }
    }
    if (ArrayUtente.includes(ArraySistema[1])) {
        CounterCorrect++;
        if (ArrayUtente[1] === ArraySistema[1]) {
            PositionCorrect++;
        }
    }
    if (ArrayUtente.includes(ArraySistema[2])) {
        CounterCorrect++;
        if (ArrayUtente[2] === ArraySistema[2]) {
            PositionCorrect++;
        }
    }
    if (ArrayUtente.includes(ArraySistema[3])) {
        CounterCorrect++;
        if (ArrayUtente[3] === ArraySistema[3]) {
            PositionCorrect++;
        }
    }
    var tenta = document.getElementById("tentativi");
    var p = document.createElement('p');
    p.innerHTML = 'Il tuo tentativo: ' + ArrayUtente.toString() + ' Numero di cifre corette: ' + CounterCorrect + ' Numero di cifre nella posizione giusta: ' + PositionCorrect;
    tenta.appendChild(p);
    if (CounterCorrect === 4 && PositionCorrect === 4) {
        document.getElementById("status").innerHTML = "HAI VINTO";
        document.getElementById("ver").disabled = true;
    }
    else {
        document.getElementById("status").innerHTML = "RITENTA";
    }
    CounterCorrect = 0;
    PositionCorrect = 0;
}

function LoseORWinAndReset() {
    window.location.reload();
}




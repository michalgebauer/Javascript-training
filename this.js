var osoba = {
    meno: "miso",
    pozdrav: function() {
        console.log("ahoj " + this.meno);
    }
}

osoba.pozdrav();

osoba.meno = "Jan";
osoba.pozdrav();

// pouzitie "this"

function Auto(farba) {
    // console.log(this);

    this.farba =  farba,
    this.robVrr = function() {
        console.log("vrrr");
    }
}

var trabant = {
    typ: "veteran"
};

Auto("modra");
Auto.call(trabant, "cerverna");
var ferarri = new Auto("zelene");

ferarri.robVrr();
var zaklad = 10000, premia = 100;
var o = {
	meno: "Miso",
  priezvisko: "Mrkva",
  "znacka auta": "ferrari",
  vyplata: zaklad + premia,
  dynVyplata: function(zaklad, premia) {
  	return zaklad + premia;
  },
  pribuzni: {
  	teta: "Helenka",
    ujo: "Fero",
    krsni: [ "don padre"]
  },
  for: [1, 6, 8]
};

o.adresa = "Nitra";
delete o.pribuzni;

for(vlastnost in o) {
	console.log(vlastnost + ": " + o[vlastnost]);
}

console.log("toString" in o);
console.log(o.hasOwnProperty( "toString" ));
console.log(o);

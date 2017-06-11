var a = 10;
typeof a;

a = "text";
typeof a;

var a = 10.2
typeof a;

var a = null;
typeof a;

var a = undefined;
typeof a;

////////////////////////////////////

function volajFunkciu(nazovFunkcie) {
    nazovFunkcie("hura");
}

function hura(text) {
    console.log(text);
}

volajFunkciu(hura);
volajFunkciu(function(text) { console.log(text)} );

/////////////////////////////////////

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

/////////////////////////////////////

function func() {
    console.log(arguments[0]);
}
func();
func(10);

function func() {
    var suma = 0;
    for(var i = 0; i < arguments.length; i++) {
        suma = suma + arguments[i];
    }
    return suma;
}
console.log(func(1, 2, 3));
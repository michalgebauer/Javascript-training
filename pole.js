var pole = [];
var pole1 = ["a", { farba: "cervena"}, [1, 2, 3]];

console.log(pole1[1].farba);

var pole2 = {
    0: "a",
    1: { farba: "cervena"},
    2: [1, 2, 3],
    length: 3
}

delete pole1[0];

pole1.push("ccc");



console.log(pole1);
console.log(pole1.length);

pole1.push("ccc");
;
// let jati:IOrang;
var Corang = /** @class */ (function () {
    function Corang() {
    }
    Corang.prototype.maju = function (kemana) {
        return kemana;
    };
    Corang.prototype.hitung = function (nilai1, nilai2) {
        return nilai1 + nilai2;
    };
    Corang.prototype.teriak = function (apa) {
        return apa;
    };
    Corang.prototype.add = function (param1, param2) {
        return param1 + param2 + 10;
    };
    return Corang;
}());
var jati = new Corang;
console.log(jati.maju('kedepan'));
console.log(jati.hitung(1, 2));
console.log(jati.teriak([{ jabatannya: "pelawak" }]));
console.log(jati.add(10, 20));
var jatidiri = /** @class */ (function () {
    function jatidiri() {
    }
    return jatidiri;
}());
var andi = new jatidiri();
andi.umur = 100;
console.log(andi.umur);

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var nilai = [1, 2, 3];
var nilai2 = nilai.concat([4, 5]);
console.log(nilai2);
var obj = [
    {
        no: "1",
        nama: "andi",
        alamat: "pati"
    }
];
console.log(obj);
var obj2 = [__assign({}, obj[0], { "alamat": 'kudus' })];
console.log(obj2);

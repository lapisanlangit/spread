interface IOrang {
    nama: string;
    alamat:string;
    umur:number
    maju(param,param2):string;

    hitung(nil1,nil2):number;

    teriak<T>(apa:T):T;

    add: (x: number, y: number) => number;
};

interface jabatan {
    jabatannya:string;
}

// let jati:IOrang;

class Corang implements IOrang{
    nama: string;
    alamat:string;
    umur:number

    maju(kemana){
        return kemana
    }

    hitung(nilai1,nilai2){
        return nilai1+nilai2
    }

    teriak<T>(apa:T):T{
        return apa
    }

    add(param1,param2){
        return param1+param2+10;
    }

}


let jati=new Corang;

console.log(jati.maju('kedepan'))
console.log(jati.hitung(1,2))
console.log(jati.teriak<jabatan[]>(
    [{jabatannya:"pelawak"}]
    )
)
console.log(jati.add(10,20))

class jatidiri<T>{
    umur:T;
}

let andi= new jatidiri<number>();
andi.umur=100
console.log(andi.umur)

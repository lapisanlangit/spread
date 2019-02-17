// function identity(arg:number):number{
//     return arg;
// }

// console.log(identity(10))

// function identity<T>(arg:T) : T{
//     return arg;
// }
// let output=identity<string>('jati');
// console.log(output)

// let outputnumber=identity<number>(10);
// console.log(outputnumber)

// let outputarray=identity<any[]>([10,2]);
// console.log(outputarray)



// function identity<T>(arg:Array<T>) : Array<T>{
//     return arg;
// }

// let outputarray=identity<any>(["jati","lala"]);
// console.log(outputarray)


// function identity<T>(arg: T): T {
//     return arg;
// }
// // let myIdentity: <T>(arg:T) => T= identity;
// let myIdentity: {<T>(arg: T): T} = identity;
// let outputarray=myIdentity<any[]>(["jati","lala"]);
// console.log(outputarray)

// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn = identity;
// let outputarray=myIdentity<any[]>(["jati","lala"]);
// console.log(outputarray)


class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x - y; };

console.log(myGenericNumber.add(10,3))
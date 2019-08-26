// Глубокое копирование

// Напиши функцию глубокого копирования объектов и массивов.
// Она должна делать не только копию переданного объекта/массива,
//  но и копии вложенных них объектов/массивов.

// ПРИМЕР:

// var a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null};
// var b = deepCopy(a); // b — это отдельный объект
// b.x = 10;
// console.log(a.x); // 1

// // a.z и b.z указывают на разные массивы: 
// b.z.push(4);
// console.log(a.z); // [1, 2, 3]

// let newObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

let cloneObj = function(obj){
    let newObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
    return (newObj);
};


//ПРОВЕРКА:
////////////////////////////////////////////////////////////////////////////////////
let man = {
    name : 'Andy',
    age : 43,
    body : {
        hand : 2,
        leg : 2
    }
};

let newMan = cloneObj(man);

Object.defineProperty(man, 'age', {writable: false});  

let a = Object.getOwnPropertyDescriptor(man, 'age');
console.log (a);

let b = Object.getOwnPropertyDescriptor(newMan.body, 'hand');
console.log (b);

let newMan1 = cloneObj(man);

let c = Object.getOwnPropertyDescriptor(newMan1, 'age');
console.log (c);

////////////////////

let arr = [55, 'asd', ['a','rt', 3], 89, {name : 'Andy', age : 43, body : {hand : 2, leg : 2}}];

let arr1 = cloneObj(arr);

let d = Object.getOwnPropertyDescriptor(arr1[4], 'age');
console.log (d);

Object.defineProperty(arr[4], 'age', {writable: false});
Object.defineProperty(arr[4].body, 'hand', {writable: false});

let i = Object.getOwnPropertyDescriptor(arr1[4], 'age');
console.log (i);

let arr2 = cloneObj(arr);

let f = Object.getOwnPropertyDescriptor(arr2[4], 'age');
console.log (f);

let h = Object.getOwnPropertyDescriptor(arr2[4].body, 'hand');
console.log (h);
//////////////////////////////////////////////////////////////////
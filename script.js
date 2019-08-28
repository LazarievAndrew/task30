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


function deepCopy (obj) {

	let newObj = new obj.constructor();

	Object.entries(obj).forEach(([key]) => {

		if( typeof obj[key] === 'object' ){

            newObj[key] = deepCopy(obj[key]);
            
		}else{

			Object.defineProperty(newObj, key, Object.getOwnPropertyDescriptor(obj, key));
		}
	});

	return newObj;
}


// ПРОВЕРКА:
// //////////////////////////////////////////////////////////////////////////////

let man = {
    name : 'Andy',
    age : 43,
    body : {
        hand : {
            finger : 5,
            palm : 1
        },
        leg : 2
    },
    money : [1,2,3,4,5],
    hair : 0,
    pLength : undefined
};

let newMan = deepCopy(man);
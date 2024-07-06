const arr = [0,1,2,3,4];
// console.log(arr[0]);

// arr.push(5);
// console.log(arr);
// arr.pop()
// console.log(arr);
// console.log(arr.join()) // convert value into string

console.log("A ",arr);
console.log(arr.slice(1,3));
console.log("B ",arr);
console.log(arr.slice(1,3));
console.log(arr.splice(1,3));
console.log("C ",arr);
console.log(arr.splice(1,3));


const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

// arr1.push(arr2); // aata ithe arr2 ha purn as a element join zala 
// console.log(arr1); //[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

// const array_new = arr1.concat(arr2); //he ek navin arr return karte tymula yala eke variable madhe store karach lagte
// console.log(array_new); // [  1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

const elem = [...arr1 , ...arr2]// spread method ahe arta arr1 he array nahi rahila to aata individual sarkha work karel mhnje pratek elem yeil tychyat
// console.log(elem)
; // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

const complex_arry = [1,2,3,[4,5],6,[7,[8,9]]]; // jar asa array ahe aani aaplyla sarv element ekach array madhe paheje tar 
const new_simple = complex_arry.flat(Infinity); // he infinity mhanje depth ki depth paryant tumhla array ektra karache ahe aata apan itha no. pan deu shakto

console.log(new_simple); // [1, 2, 3, 4, 5,6, 7, 8, 9]

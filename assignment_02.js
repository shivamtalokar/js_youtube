// // Question 3
// function find_tax(salary){
//     let tax = 0;
//     let condition = true;
// switch (condition) {
   
//     case (500000>=salary && salary>0):
//         tax = salary*0
//         console.log(tax);

//     case (1000000>=salary && salary>500000):
//         tax = salary*0.1
//         console.log(tax);
//         break;
//     case (1500000>=salary && salary>1000000):
//         tax = salary*0.2
//         console.log(tax);
//         break;
//     case (1500000>salary):
//         tax = salary*0.3
//         console.log(tax);
//         break;

//     default:
//         console.log(`please insert salary properly`);
//         break;
// }
// }
// find_tax(1500000);

// Question 4

let n1 = 6;
let n2 = 34;
let sum = 0;
Array.from(String(n1));
Array.from(String(n2));
let max_len = Math.max(n1.length,n2.length); 
for(let i = 0 ; i< max_len;i++){
    if(n1.length > n2.length ){
        console.log(n1.unshift(0));
    }
    else {
    console.log(n2.unshift(0))
   
}

sum = sum + (n1[i]*n2[i]);

}
console.log(sum);

    

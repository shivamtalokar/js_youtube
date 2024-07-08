//Question 1
// let states = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jammu and Kashmir",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttarakhand",
//     "Uttar Pradesh",
//     "West Bengal",
//     "Andaman and Nicobar Islands",
//     "Chandigarh",
//     "Dadra and Nagar Haveli",
//     "Daman and Diu",
//     "Delhi",
//     "Lakshadweep",
//     "Puducherry"
// ]

// const state_start_vowel = states.filter((item)=>{
//     let firstChar = item.charAt(0).toLowerCase();
//     return 'aeiou'.includes(firstChar);
// })
// console.log(state_start_vowel);

//Question 2
// let str = "I love my India"
// let str_split = str.split(' ')
// let arr_str = []

// for(let i = str_split.length-1; i>=0; i--){
//    arr_str.push(str_split[i]);
// }
// console.log(arr_str)
                   
// Question 3 

// let string = "INDIA"
// let String_arr = Array.from(string);
// String_arr.splice(3,0,'O','N','E','S');
// let convert_str = String_arr.join()
// console.log(convert_str)

//Question 4
// let string = "abcdefghijklmnopqrst";
// count_vowel = 0;
// count_consonent = 0;
// string = string.toLowerCase();

// for (let i = 0; i < string.length; i++) {
//     let char = string.charAt(i);
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         count_vowel++;
//     }
//     else{
//         count_consonent++;
//     }
// }

// console.log(`vowels:${count_vowel}`); 
// console.log(`consonent${count_consonent}`); 

// Question 5 
// function replace_word(string,wrong,correct){
//     let string_arr = string.split(' ');
//     for(let i =0;i<string_arr.length;i++){
//         if(wrong === string_arr[i]){
//             string_arr[i] = correct;
            
//         }
//     }return string_arr.join(' ')
// }
// console.log(replace_word("I love football","football","cricket"))

// Question 6
// let arr = [1,2,3,9,10,7,5,4,3];
// let greater_than_five = arr.filter((num)=> num>5)
// console.log(greater_than_five)

//Question 7
// const student = [
    // {name:"Ram",score:[80,70,60]},
    // {name:"Mohan",score:[80,70,90]},
    // {name:"Sai",score:[60,70,80]},
    // {name:"Hemang",score:[90,90,80,80]}
// ]

// let stud_with_avg = student.map((stud) => {
//     const average = stud.score.reduce((acc, currval) => acc + currval, 0);
//     return {
//         name: stud.name,
//         average: average / stud.score.length
//     };
// });

// console.log(stud_with_avg);

//Question 8
// function sum_of_num(number) {
//     let digit = String(number).split('').map(Number);
    
   
//     let sum = digit.reduce((acc, currval) => acc + currval, 0);
    
   
//     if (sum < 10) {
//         return sum;
//     }
    
    
//     return sum_of_num(sum);
// }
// console.log(sum_of_num(456));

// Question 9

// let paragraph = "Wind is a natural phenomenon characterized by the movement of air across the Earth's surface. It is caused by the uneven heating of the Earth's atmosphere by the sun, which generates temperature differences and pressure gradients. As warm air rises and cooler air rushes in to replace it, wind is created. Wind plays a crucial role in shaping weather patterns, influencing climate, and dispersing pollutants and seeds. It varies in speed and direction, measured using instruments like anemometers and depicted on weather maps with isobars. Wind energy, harnessed through wind turbines, is increasingly utilized as a renewable source of electricity. However, wind can also pose challenges, such as in extreme weather events like hurricanes and tornadoes, which can cause significant damage. Understanding wind patterns and behaviors is essential for meteorologists, renewable energy developers, and anyone impacted by its effects on a daily basis."

// let paragraph_arr = paragraph.split(' ');
// let count = 0
// for(let i = 0;i<paragraph_arr.length;i++){
//     count++;
// }
// console.log(`There are ${count} words in paragraph`);

//Question 10
// function reverse(str) {
//     let reversed_string = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed_string += str[i];
//     }
//     return reversed_string;
// }


// console.log(reverse("hello"));

//Question 11 


let arr_of_obj = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];


let result = arr_of_obj.map(studentObj => {
    let studentName = Object.keys(studentObj)[0];
    let marks = Object.values(studentObj[studentName]);
    let average = scores.reduce((acc, val) => acc + val, 0) / marks.length;
    return {
        [studentName]: {
            average: average
        }
    };
});

console.log(result);

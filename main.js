// 1-misol

// let n = +prompt('son kiriting');   
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         sum = sum + i
//     }
// }
// console.log(sum);

// 2-misol
// let n = +prompt("Son kiriting");
// let sum = 1;
// for (let i = n; i >= 1; i--) {
//   if (i % 3 == 0) {
//     sum = sum * i;
//   }
// }

// console.log(sum);

// 3-misol

// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let counter = 0;
// for (let i = 1; a <= b; i++) {
//   if (i % 3 == 0) {
//     counter++;
//   }
// }
// console.log(counter);

// 4-misol

// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let counter = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 5 == 0 && i % 7 ==0) {
//     counter=counter+i;
//   }
// }
// console.log(counter);

// 5 - misol

// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 2 == 1) {
//     sum += i ** 2;
//   }
// }
// console.log(sum);

// 6-misol

// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let sum = 0;
// for (let i = b; i <= a; i++) {
//   if (i % 2 == 0) {
//     sum += i ** 3;
//   }
// }
// console.log(sum);

// 7-misol

// let n = +prompt("Ixtiyoriy sonni kiriting");

// for (let i = n; 1 <= i; i--){
//   if (n % i == 0){
//     console.log(i);
//   }
// }

// 8-misol

// let n = +prompt("Ixtiyoriy sonni kiriting");
// let counter = 0;

// for (let i = n; 1 <= i; i--){
//   if (n % i == 0){
//     counter++;
//   }
// }

// console.log(counter);

// 9-misol

// let n = +prompt("Ixtiyoriy sonni kiriting");
// let counter = 0;

// for (let i = n; 1 <= i; i--){
//   if (n % i == 0){
//     counter='Tub son emas'
//   } else {
//     counter='Tub son'
//   }
// }

// console.log(counter);

// 1-masala

// let n = +prompt("N sonni kiriting");
// let counter = 0;
// let javob;
// for (let i = 1; i >= n; i++){
// i**3;
//   if (i % i == 0) {
//     counter++;
//   }
// }

// if (counter % 2 == 1) {
//   javob = "Qiziqarli";
// } else {javob = "Qiziq emas";}

// console.log(javob);

// 2-masala

// let Celsius = +prompt("Celsius sonni kiriting");
// let Kelvin = Celsius + 273.15;
// let Fahrenheit = Celsius * 1.80 + 32.00;

// if (Celsius <= 1000) {
//   console.log("Kelvin: " + Kelvin );
//   console.log("Fahrenheit: " +Fahrenheit);
// } else {console.log("1000 dan kichik son kiriting");}


// 3-masala

// let a = +prompt("a sonni kiriting");
// let b = +prompt("b sonni kiriting");
// let counter = 0;


// for (let i = a; i <= b; i++){
//   if (i % 5 == 0 && i % 7 != 0) {
//     counter+=i;
//   }
// }

// console.log(counter);

// 4-masala

// let n = +prompt("n sonni kiriting");
// let counter = 0;


// for (let i = 1; i <= n; i++){
//   if (i % 5 == 0 && i % 5 == 0 && i % 7 == 0) {
//     counter+=i;
//   }
// }

// console.log(counter);

// 5-masala

// let n = +prompt("n sonni kiriting");
// let counter;

// counter = 60 * n;

// console.log(counter);

// 6-masala

// let Vaqt = +prompt("Vaqtni kiriting");
// let t = +prompt("T vaqtni kiriting");
// let res;

// res = Vaqt + t; 

// res = "00:"+ res;

// if (res > "00:59") {
//   res = Vaqt + t;
//   res-=60; 
//   res = "01:"+res
// }

// console.log(res);
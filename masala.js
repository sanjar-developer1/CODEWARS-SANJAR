// Masala 1

// let arr = [1, 2, 3, 4, 6, 7, 8, 9];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] + 2 == arr[i + 1]) {
//     result = arr[i] + 1;
//   }
// }
// console.log(result);

// Masala 2

// let arr = [1, 2, 3, 4, 6, 7, 8, 9];
// let newarr = [];
// let result = 0;
// let result2 = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] + 2 == arr[i + 1]) {
//     result = arr[i] + 1;
//     result2 = result + 1;
//     newarr.push(result, result2);
//   }
// }
// console.log(newarr);

//  Masala 3

// function doubleChar(str) {
//   let reuslt = "";

//   for (let i of str) {
//     reuslt += i + i;
//   }
//   return reuslt;
// }

// console.log(doubleChar("Sanjarbek"));

// Masala 4

// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };
// console.log(countSheep(3));

// Masala 5

// function Ketti(str) {
//   return str
//     .split(" ")
//     .map((harf) => harf.charAt(0).toUpperCase() + harf.slice(1))
//     .join(" ");
// }

// console.log(Ketti("salom mening ismim sanjarbek"));

// Masala 6
// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((saidjon) => (saidjon === "T" ? "U" : saidjon))
//     .join("");
// }
// console.log(DNAtoRNA("GATTACA"));

// Masala 7
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((sanjar) => sanjar.split("").reverse("").join(""))
//     .join(" ");
// }
// console.log(reverseWords("Saidjon stremer bo'lishni hohlaydi"));

// Masala 8

// function printArray(array) {
//   return array.join(",");
// }
// console.log(printArray(["h", "o", "l", "a"]));

// Masala 9

// function isOpposite(s1, s2) {
//   if (s1 === "" && s2 === "") return false;

//   return (
//     s1.length === s2.length &&
//     s1.split("").every((harf, i) => {
//       return harf !== s2[i] && harf.toLowerCase() === s2[i].toLowerCase();
//     })
//   );
// }
// console.log(isOpposite("ab", "AB"));

// Masal 10

// function bmi(weight, height) {
//   let reuslt = weight / height ** 2;
//   if (reuslt <= 18.5) {
//     return "Underweight";
//   } else if (reuslt <= 25.0) {
//     return "Normal";
//   } else if (reuslt <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }
// console.log(bmi(50, 150));

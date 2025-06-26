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

// Masala10

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

// Masala 11

// function findUniq(arr) {
//   let son = arr[0] === arr[1] ? arr[0] : arr[2];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== son) {
//       return arr[i];
//     }
//   }
// }
// console.log(findUniq([1, 1, 1, 2, 1]));

// Masala 12

// function isPangram(string) {
//   string = string.toLowerCase();
//   let a = string.split("").filter((str) => str >= "a" && str <= "z");
//   let harf = new Set(a);
//   return harf.size === 26;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Masala 13

// function digitize(n) {
//   n = String(n);
//   let a = n.split("").reverse();
//   a = Number(a);
//   console.log(a);
// }

// digitize(1233287238);

// Masala 14

// function getSum(a, b) {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);

//   let hammasi = 0;

//   for (let i = min; i <= max; i++) {
//     hammasi += i;
//   }

//   console.log(hammasi);
// }

// getSum(1, 4);

// Masala 15

// const reverseSeq = (n) => {
//   let result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(reverseSeq(9));

// Masala 16

// function getCount(str) {
//   let vowels = "aeiou";
//   let count = 0;

//   for (let harf of str) {
//     if (vowels.includes(harf)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(getCount("salomat"));

// Masala 17
// function isVow(a) {
//   return a.map((e) => {
//     const harf = String.fromCharCode(e);
//     return "aeiou".includes(harf) ? harf : e;
//   });
// }
// console.log(isVow([100, 100, 116, 105, 117, 121]));

// Masala 18

// function greet(name) {
//   return `Salom ${name} ahvollaring qalay`;
// }
// console.log(greet("sanjar"));

// Masala 19

// function longest(s1, s2) {
//   let str = s1 + s2;
//   str = new Set(str);
//   let abc = [...str];
//   let a = abc.sort().join("");
//   console.log(a);
// }
// longest("abc", "defc");

// Masala 20

// function filter_list(l) {
//   let result = [];
//   l.map((e) => {
//     if (typeof e == "number") {
//       result.push(e);
//     }
//   });
//   console.log(result);
// }

// filter_list([1, 2, "a", "b"]);

// Masala 21
// function greet(name, owner) {
//   if (name === owner) {
//     return "Hello boss";
//   } else {
//     return "Hello guest";
//   }
// }
// greet("salom", "salom");

// Masala 22

// function getGrade(s1, s2, s3) {
//   let son = (s1 + s2 + s3) / 3;

//   if (son >= 90) return "A";
//   else if (son >= 80) return "B";
//   else if (son >= 70) return "C";
//   else if (son >= 60) return "D";
//   else return "F";
// }
// getGrade(30, 50, 40);

// Masala 23

// function past(h, m, s) {
//   // h = 3600 sekund
//   // m = 60 minut
//   // s=60 sekund
//   // 1000 ga ko'paytiirishdan maqsa milliSekund
//   return (h * 3600 + m * 60 + s) * 1000;
// }
// console.log(past(0, 1, 1));

// Masala 24

// function wave(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") continue;
//     let newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);

//     result.push(newStr);
//   }
//   return result;
// }

// console.log(wave("salom"));


// Masala 25 

// function hello(hello) {
//     return hello
// }

// console.log(hello("Hello world!"));

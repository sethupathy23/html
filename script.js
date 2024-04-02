// var num = [12, 13, 14, 15, 16];
// function arr(num) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//       even.push(num[i]);
//     } else {
//       odd.push(num[i]);
//     }
//   }
//   return [even, odd];
// }
// console.log(arr(num));

var num = [12, 13, 14, 15, 16];
function arr(num) {
  let even = [];
  let odd = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);
    } else {
      odd.push(num[i]);
    }
  }
  return [odd, even];
}

console.log(arr(num));

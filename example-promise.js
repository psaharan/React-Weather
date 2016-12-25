// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
//
// getTempCallback('Helsinki', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (location.length > 0) {
//         resolve(79);
//       } else {
//         reject('City not found');
//       }
//     }, 1000);
//   });
// }
//
// getTempPromise('Helsinki').then (function (temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// } );

//  if (typeof 7 === 'number')

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (a != null && b != null && typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Not two numbers or valid numbers to add');
    }
  });
}

addPromise(2, 2).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('failure', err);
});

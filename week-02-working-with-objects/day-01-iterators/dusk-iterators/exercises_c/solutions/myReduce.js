/* write your myReduce function body in the function below */




/* basic solution without providing an initialValue */

// function myReduce(arr, callback) {
//   previousValue = arr[0];
//
//   for(var i=1; i< arr.length; i++) {
//     previousValue = callback(previousValue, arr[i], i, arr);
//   }
//   return previousValue;
// }








/* solution with or without initialValue being provided as an argument */

function myReduce(arr, callback, initialValue) {
  // first pass is special because it uses initialValue rather than the result
  //    from the last run.
  var i=0;  // setting this here so we can increment it +1 when no initialValue
  var previousValue;

  // if an initialValue is not passed in we'll use the first two elements on the
  //   first pass
  if(typeof(initialValue) == "undefined") {
    i++;
    previousValue = arr[0];
  } else {
    previousValue = initialValue;
  }

  // loop of the array calling the callback each time
  for (; i<arr.length; i++) {
    previousValue = callback(previousValue, arr[i], i, arr);
  }
  return previousValue;
}








// export this function (you can ignore this for now)
module.exports = myReduce;

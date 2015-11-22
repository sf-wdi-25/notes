/* write your myMap function body in the function below */

function myMap(arr, callback) {
  var outputArray = [];
  for (var i=0; i<arr.length; i++) {
    outputArray.push(callback(arr[i], i, arr));
  }
  return outputArray;
}










// export this function (you can ignore this for now)
module.exports = myMap;

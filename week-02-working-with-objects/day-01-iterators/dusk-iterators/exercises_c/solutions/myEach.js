/* write your myEach function here */

function myEach(arr, callback) {
  console.log('myEach');
  for (var i=0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}












// export this function (you can ignore this for now)
module.exports = myEach;

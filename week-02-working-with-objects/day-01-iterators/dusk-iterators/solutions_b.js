// ## Challenge set B: function building ##


function hereYaGo(anArr) {
  return anArr;
}


function first(anArr) {
  return anArr[0];
}


function last(anArr) {
  return anArr[anArr.length-1];
}



function printEach(anArr) {
  for(var i=0; i<anArr.length; i++) {
    console.log(anArr[i])
  }
}


function printEachPlus(anArr, callback) {
  for(var i=0; i<anArr.length; i++) {
    var callbackResult = callback();
    console.log(anArr[i] + callbackResult);
  }
}
// calling
printEachPlus(["apple", "toast", "cheese"], function(){
    return "!"
});


function printEachSuperPlus(anArr, callback) {
  for(var i=0; i<anArr.length; i++) {
    var callbackResult = callback(anArr[i]);
    console.log(callbackResult);
  }
}

// calling
printEachSuperPlus(["apple", "toast", "cheese"], function(item){
    return item + "!"
});

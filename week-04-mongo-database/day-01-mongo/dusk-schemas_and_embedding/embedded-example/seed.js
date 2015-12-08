var db = require("./models");

//  db.Characters.create(
//    {name: "Jon Snow", actor_name: "Kit Harington", show_title: "Game of Thrones"}, function (err, snow) {
//     if (err) {console.log("Error")};
//     console.log(snow);
// });
//
//
//  db.Characters.create(
//    {name: "Arya Stark", actor_name: "Maisey Williams", show_title: "Game of Thrones"}, function (err, snow) {
//     if (err) {console.log("Error")};
//     console.log(snow);
// });

// db.Shows.create(
//   {
//     name: "Game of Thrones",
//     network: "HBO"
//   }, function(err, success) {
//          if (err) {return console.log("Error")};
//          console.log(success);
//   }
//
// );

// db.Characters.find({}, function(err, success) {
//   if (err) {console.log("Error")};
//   success.forEach(function (entry) {
//     console.log('------------------------------------\n' , entry);
//   });
// });

// db.Shows.find({}, function(err, success) {
//   if (err) {console.log("Error")};
//   success.forEach(function (entry) {
//     console.log('------------------------------------\n' , entry);
//   });
// });

db.Shows.findOne({name: "Game of Thrones"}, function (err, show) {
  if(err){return console.log("ERR");}
  show.characters.push({name: "The Mountain", actor_name: "Hafthor Bjornsonn"});

    show.save(function (err, success) {
     if(err){return console.log("ERR");}
     //console.log(success);
     console.log(show);
   });
 });

// db.Characters.findById( '5665d92e0f66635f30bb563a', function(err, success) {
//   if (err) {console.log("Error")};
//     console.log(success);
//
// });

// db.Characters.findOneAndUpdate({name: "Arya Stark"}, {name: "Faceless One"}, function(err, success) {
//    if (err) {console.log("Error")};
//    console.log(success);
//    console.log("Successfully updated entry");
// })

// db.Characters.findOneAndRemove({name: "Arya Stark"}, function(err, success) {
//    if (err) {console.log("Error")};
//    console.log(success);
//    console.log("Successfully removed character");
// });

// db.Shows.remove({}, function(err, success) {
//   if (err) { return console.log("Error", err)};
//   console.log("Successfully Removed All Characters and Shows");
// });

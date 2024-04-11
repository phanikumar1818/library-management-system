var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer= require("multer");

var apps=Express();
apps.use(cors());

var CONNECTION_STRING="mongodb+srv://phanikumar:PHANI1818@cluster0.hdfg6sj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME="Angular";
var database;
console.log("START")
apps.listen(7000,()=>{
  Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
    database=client.db(DATABASENAME);
    console.log("MONGO YT CONNECTED");
  });
})
// app.get('api/todoapp', (request, response)=>{
//   database.collection("table1").find({}).toArray((error, result)=>{
//     response.send(result);
//   });
// })

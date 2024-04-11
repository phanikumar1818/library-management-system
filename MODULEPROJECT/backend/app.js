const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;

const app = express();

app.use(cors());

app.use(bodyparser.json());

const { MongoClient } = require('mongodb');
const {response} = require("express");

// Connection URI for MongoDB Atlas
// const uri = 'mongodb+srv://phanikumar:PHANI1818@cluster0.hdfg6sj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri);

let db;
// chatgpt code from here for databackend connection
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB Atlas');
    db = client.db('Angular');

    // Now you can set up middleware and routes that require access to the database

  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });



// till here


//mongodb.connect("mongodb+srv://phanikumar:PHANI1818@cluster0.hdfg6sj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", (error, result) => {

  //if (error) {
    //console.log("DB Not Connected");
  //} else {
   // db = result.db("Angular");
    //console.log("DB Connected");
  //}
//});

app.use((req, res, next)=>{             // middleware common for all the paths


  console.log("USE FUNCTION: Middleware 1");
  next();
});

app.use("/home", (req, res, next)=>{             // middleware only for the /home path

  console.log("USE FUNCTION: Middleware 2");
  next();
});

function verifyUser(req, res, next)
{
  console.log("User Verified");

  next();
}

app.get("/", (req, res)=>{

  console.log("GET FUNCTION: Index Page");

  res.send("<h1>Welcome to Express</h1>");
});

app.get("/home", verifyUser, (req, res)=>{

  console.log("GET FUNCTION: Home Page");

  var data = {a:"hi", b:"hello"};

  res.json(data);
});

app.post("/register", (req, res)=> {

  req.body._id = new Date().getTime();

  console.log(req.body);

  db.collection("table1").insertOne(req.body, (error, data) => {

    if (error) {
      console.error("there was an error", error);
      res.status(403).json("Error in Inserting Doc");
    } else {
      console.log("godjob", data);
      res.json("User Registered Successfully!");

    }
  })
});





//app.post("/", (req, res)=>{

  //console.log(req.body);

 // db.collection("table1").find(req.body, {projection: {_id:1, uname:1}}).toArray((error, data)=>{

   // if (error) {
    //  res.status(403).json("Error in Inserting Doc");
   // } else {
   //   res.json(" Data printing ");
    //}

 // });

    // app.post("/login", (req, res) => {
    //     console.log(req.body);
    //     console.log("HIHI--HI");
    //
    //     db.collection("table1").find(req.body, { projection: { _id: 1, uname: 1 } }).toArray((error, data) => {
    //         if (error) {
    //           console.error('Error', error);
    //             res.json(1);
    //             //res.status(403).json("Error in retrieving data from the database");
    //         } else {
    //             console.log("Data retrieved from the database:", data); // Log the retrieved data to the console
    //             res.json(1); // Send the retrieved data as the response
    //
    //         }
    //
    //     });

// Hardcoded user object for demonstration
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Login endpoint
app.post("/login", (req, res) => {
  console.log(req.body);

  // Assuming "table1" is the collection name where user credentials are stored
  db.collection("table1").findOne({ uname: req.body.uname, upassword: req.body.upassword }, (error, user) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      if (user) {
        console.log("Login successful:", user);
        res.status(200).json({ message: 'Login successful', user: user });
      } else {
        console.log("Invalid credentials");
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  });
});

const userData = {
  _id: 1,
  uname: 'jhgfdds',
  uemail: 'anonymous949178@gmail.com',
  upassword: 'r',
  uphone: '1234567890'
};

// Route to retrieve user data
app.get('/api/userdata', (req, res) => {
  // Simulate fetching data from a database or other source
  // Replace this with your actual data retrieval logic
  res.json(userData);
});

// app.get('/api/todoapp', (request,response)=>{
//   db.collection("table1").find({}).toArray((error, result)=>{
//     response.send(result);
//   });
// })

// app.get('/api/userdata', (req, res) => {
//   db.collection('table1').findOne({}, (err, result) => {
//     if (err) {
//       console.error('Error fetching user data:', err);
//       res.status(500).send('Error fetching user data');
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.post("/login", (req, res) => {
//     console.log("Received login request:", req.body); // Log the received login request body
//
//     // Assuming you have a MongoDB collection named "users" for user authentication
//     db.collection("table1").findOne({ username: req.body.uname, password: req.body.upassword }, (err, user) => {
//         if (err) {
//             console.error("Error while querying database:", err);
//             res.status(500).json({ message: "Internal server error" });
//             return;
//         }
//
//         if (!user) {
//             console.log("User not found");
//             res.status(401).json({ message: "Invalid credentials" });
//             return;
//         }
//
//         console.log("User authenticated:", user);
//         res.status(200).json({ message: "Login successful", user });
//     });


























module.exports = app;

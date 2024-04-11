const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());

app.use(bodyParser.json());
//Establish the database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbmschool",
});
db.connect(function (error) {
  if (error) {
    console.log("Error Connecting to DB");
  } else {
    console.log("successfully Connected to DB");
  }
});
app.listen(8085,function check(error) {
  if (error)
  {
    console.log("Error....dddd!!!!");
  }
  else
  {
    console.log("Started....!!!! 8085");
  }
});
app.post("/api/student/add", (req, res) => {
  let details = {
    stname: req.body.stname,
    course: req.body.course,
    fee: req.body.fee,
  };
  let sql = "INSERT INTO student SET ?";
  db.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "Student created Failed" });
    } else {
      res.send({ status: true, message: "Student created successfully" });
    }
  });
});

//our registration taker and inserter into the table

app.post('/register', (req, res) => {
  const { uname, uemail, upassword, uphone } = req.body;

  // Insert user data into the database
  const sql = 'INSERT INTO register (uname, uemail, upassword, uphone) VALUES (?, ?, ?, ?)';
  db.query(sql, [uname, uemail, upassword, uphone], (err, result) => {
    if (err) {
      console.error('Error inserting user into database:', err);
      res.status(500).json({ error: 'An error occurred while registering user' });
      return;
    }
    console.log('User registered successfully');
    res.status(201).json({ message: 'User registered successfully' });
  });
});

//login

// app.post('/login', (req, res) => {
//   const { uname, upassword } = req.body;
//
//   // Query the database to check if the provided credentials match any record in the register table
//   const sql = 'SELECT * FROM register WHERE uname = ? AND upassword = ?';
//   db.query(sql, [uname, upassword], (err, result) => {
//     if (err) {
//       console.error('Error querying database:', err);
//       res.status(500).json({ message: 'Internal Server Error' });
//       return;
//     }
//
//     // Check if any record is found with the provided credentials
//     if (result.length > 0) {
//       // Login successful
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       // Invalid credentials
//       res.status(401).json({ message: 'Invalid username or password' });
//     }
//   });
// });
app.post('/login', (req, res) => {
  const { uname, upassword } = req.body;

  // Query the database to check if the provided credentials match any record in the register table
  const sql = 'SELECT * FROM register WHERE uname = ? AND upassword = ?';
  db.query(sql, [uname, upassword], (err, rows) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Check if any record is found with the provided credentials
    if (rows.length > 0) {
      // Login successful
      res.status(200).json({ message: 'Login successful' });
      console.log("YES")
    } else {
      // Invalid credentials
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});
//sample retrieve data
app.get('/users', (req, res) => {
  // Query the database to fetch data from the register table
  const sql = 'SELECT * FROM register';

  db.query(sql, (err, rows) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Send the fetched data as JSON response
    res.status(200).json(rows);
  });
});

//books display

app.get('/books', (req, res) => {
  // Query the database to fetch data from the register table
  const sql = 'SELECT * FROM books';

  db.query(sql, (err, rows) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Send the fetched data as JSON response
    res.status(200).json(rows);
    console.log(rows);
  });
});
// books/1 or book/2 ... so on for particular book

app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  // Assuming you have a database connection named 'db' and a 'books' table
  const sql = 'SELECT * FROM books WHERE id = ?';
  db.query(sql, [bookId], (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    if (result.length === 0) {
      // Book not found
      res.status(404).json({ message: 'Book not found' });
    } else {
      // Book found, send back the book data
      res.json(result[0]);
    }
  });
});



//search book
app.get('/search', (req, res) => {
  const query = req.query.query;

  // Query the database to search for books based on the provided query
  const sql = `SELECT * FROM books WHERE title LIKE '%${query}%' OR author LIKE '%${query}%' OR genre LIKE '%${query}%'`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error searching books:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Return the search results
    res.status(200).json(results);
  });
});





//this the code that let you see table on site when you enter localhost:8085/api/student

app.get("/api/student", (req, res) => {
  var sql = "SELECT * FROM student";
  db.query(sql, function (error, result) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      res.send({ status: true, data: result });
    }
  });
});
// app.get("/api/student/:id", (req, res) => {
//   var studentid = req.params.id;
//   var sql = "SELECT * FROM student WHERE id=" + studentid;
//   db.query(sql, function (error, result) {
//     if (error) {
//       console.log("Error Connecting to DB");
//     } else {
//       res.send({ status: true, data: result });
//     }
//   });
// });
// app.put("/api/student/update/:id", (req, res) => {
//   let sql =
//     "UPDATE student SET stname='" +
//     req.body.stname +
//     "', course='" +
//     req.body.course +
//     "',fee='" +
//     req.body.fee +
//     "'  WHERE id=" +
//     req.params.id;
//
//   let a = db.query(sql, (error, result) => {
//     if (error) {
//       res.send({ status: false, message: "Student Updated Failed" });
//     } else {
//       res.send({ status: true, message: "Student Updated successfully" });
//     }
//   });
// });
// app.delete("/api/student/delete/:id", (req, res) => {
//   let sql = "DELETE FROM student WHERE id=" + req.params.id + "";
//   let query = db.query(sql, (error) => {
//     if (error) {
//       res.send({ status: false, message: "Student Deleted Failed" });
//     } else {
//       res.send({ status: true, message: "Student Deleted successfully" });
//     }
//   });
// });
// Route to handle updating a book
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBookData = req.body; // Assuming the updated book data is sent in the request body

  // Update the book record in the database based on the book ID
  const sql = 'UPDATE books SET ? WHERE id = ?';
  db.query(sql, [updatedBookData, bookId], (error, results) => {
    if (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Book updated successfully');
      res.status(200).json({ message: 'Book updated successfully' });
    }
  });
});

// Route to handle deleting a book
app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;

  // Delete the book record from the database based on the book ID
  const sql = 'DELETE FROM books WHERE id = ?';
  db.query(sql, [bookId], (error, results) => {
    if (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Book deleted successfully');
      res.status(200).json({ message: 'Book deleted successfully' });
    }
  });
});


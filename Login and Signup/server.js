require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

// Set up MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'pm_project'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database.');
});

// Set up a route for login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM user_registration WHERE email_id = ?";
  
    db.query(sql, [email], async (err, result) => {
      if (err) {
        // Handle error
        return res.status(500).send({ success: false, message: 'An error occurred' });
      }
      
      if (result.length > 0) {
        // Check if password matches
        const comparison = await bcrypt.compare(password, result[0].password);
        if (comparison) {
        //if (req.body.password === result[0].password) {
          // Passwords match
          req.session.user = result[0]; // Set user session
          return res.send({ success: true, message: 'Logged in successfully' });
        } else {
          // Passwords do not match
          return res.status(401).send({ success: false, message: 'Password is incorrect' });
        }
      } else {
        // No user found with that email address
        return res.status(404).send({ success: false, message: 'User not found' });
      }
    });
});
  

// Set up a route for signup
app.post('/signup', (req, res) => {
  const { email, password, zip } = req.body; 

  // First, check if the email already exists
  db.query('SELECT * FROM user_registration WHERE email_id = ?', [email], (err, result) => {
      if (err) {
          // Handle error
          return res.status(500).send({ success: false, message: 'An error occurred while checking for existing user' });
      }
  
      if (result.length > 0) {
          // User already exists
          return res.status(409).send({ success: false, message: 'User already exists, please Log In' });
      } else {
          // No user with this email, proceed with signup
          // Hash the password
          bcrypt.hash(password, 10, (err, hash) => {
              if (err) {
                  // Handle error
                  return res.status(500).send({ success: false, message: 'Server error hashing password' });
              }
  
              // Insert new user into the database
              const sql = "INSERT INTO user_registration (email_id, password, zip_code) VALUES (?, ?, ?)";
              db.query(sql, [email, hash, zip], (err, result) => { 
                  if (err) {
                      // Handle error
                      return res.status(500).send({ success: false, message: 'Server error inserting user' });
                  }
  
                  // User created successfully
                  return res.send({ success: true, message: 'User signed up successfully' });
              });
          });
      }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

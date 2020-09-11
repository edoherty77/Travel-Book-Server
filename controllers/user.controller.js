const User = require("../models/user.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birthday: req.body.birthday,
    profile_pic: req.body.profile_pic
  });

  // Save Customer in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
// exports.findOne = (req, res) => {
  
// };

// Update a Customer identified by the customerId in the request
// exports.update = (req, res) => {
  
// };

// Delete a Customer with the specified customerId in the request
// exports.delete = (req, res) => {
  
// };

// Delete all Customers from the database.
// exports.deleteAll = (req, res) => {
  
// };
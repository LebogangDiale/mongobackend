const db = require("../models");
const Tutorial = db.tutorials;

//create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    // Create a Tutorial
};

//Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};

//Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

//Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

//Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

//Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

//Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
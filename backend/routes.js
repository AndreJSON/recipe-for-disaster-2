const express = require('express');
var path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rfd', {useNewUrlParser: true});
const Recipe = require('./recipe-model');

module.exports = (app) => {
	app.get('/api/recipes', (req,res) => {
		Recipe.find({}, (err, docs) => {
			if(err) {
				console.log(err);
				res.statusCode = 500;
				res.statusMessage = "Failed to get recipes.";
				res.end();
			} else {
				res.json({recipes: docs});
				res.end();
			}
		});
	});

	//Catch all non-api calls and let react-router handle it.
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, '../dist/index.html'));
	});

	app.post('/api/recipe', (req,res) => {
		let recipe = new Recipe({...req.body, created: new Date(), visible: true});
		recipe.save((err) => {
			if(err) {
				console.log(err);
				res.statusCode = 500;
				res.statusMessage = "Failed to add recipe.";
				res.end();
			} else {
				res.json(recipe);
				res.end();
			}
		});
	});
}
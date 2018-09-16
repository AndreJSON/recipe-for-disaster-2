const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rfd', {useNewUrlParser: true});
const Recipe = require('./recipe-model');

module.exports = (app) => {
	app.get('/api/recipes', (req,res) => {
		Recipe.find({}, (err, docs) => {
			if(err === null) {
				res.json({recipes: docs});
				res.end();
			} else {
				console.log(err);
				res.statusCode = 500;
				res.statusMessage = "Failed to get recipes.";
				res.end();
			}
		});
	});

	app.post('/api/recipe', (req,res) => {
		let recipe = new Recipe({...req.body, created: new Date(), visible: true});
		recipe.save((err) => {
			if(err === null) {
				res.json(recipe);
				res.end();
			} else {
				console.log(err);
				res.statusCode = 500;
				res.statusMessage = "Failed to add recipe.";
				res.end();
			}
		});
	});
}
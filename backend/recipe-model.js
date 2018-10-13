const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RecipeSchema = new Schema({
	id: ObjectId,
	title: String,
	text: String,
	tags: [String],
	createdAt: Date,
	updatedAt: Date,
	visible: Boolean,
	imageName: String
});

const RecipeModel = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeModel;
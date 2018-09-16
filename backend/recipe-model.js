const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RecipeSchema = new Schema({
	id: ObjectId,
	title: String,
	text: String,
	tags: [String],
	created: Date,
	visible: Boolean
});

const RecipeModel = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeModel;
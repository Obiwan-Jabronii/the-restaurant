const mongoose = require('mongoose');
const { Schema } = mongoose;

const cuisineSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        }
    }
);

const Cuisine = mongoose.model('Cuisine', cuisineSchema);

module.exports = Cuisine;

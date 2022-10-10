const mongoose = require('mongoose')
const { Schema } = mongoose;

const foodSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        cuisine: {
            type: Schema.Types.ObjectId,
            ref: 'Cuisine',
            required: true
        }

    }
)

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;


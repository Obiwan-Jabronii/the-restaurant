const { Schema, model } = require('mongoose');

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

const Food = model('Food', foodSchema);

module.export = Food;


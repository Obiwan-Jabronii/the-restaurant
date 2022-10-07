const { Food, Cuisine } = require('../models');

const resolver = {
    Query: {
        food: async (parent, { cuisine, name }) => {
            const params = {};

            if (cuisine) {
                params.cuisine =  cuisine
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Food.find(params).populate('cuisine')
        },
        cuisine: async () => {
            return await Cuisine.find();
        }
    }
};

module.exports = resolver;
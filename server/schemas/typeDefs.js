const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        food(cuisine: ID, name: String): [Food]
        cuisine: [Cuisine]
    }

    type Food {
        _id: ID
        name: String
        description: String
        image: String
        cuisine: Cuisine
    }

    type Cuisine {
        _id: ID
        name: String
    }

`;

module.exports = typeDefs;
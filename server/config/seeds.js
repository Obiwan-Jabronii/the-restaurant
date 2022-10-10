const db = require('./connection');
const { Food , Cuisine } = require('../models');

db.once('open', async () => {
    await Cuisine.deleteMany();

    const cuisines = await Cuisine.insertMany([
        {name: 'pasta'},
        {name: 'Beef'},
        {name: 'Poultry'},
        {name: 'Fish'},
        {name: 'Appetisers'}
    ])

    console.log('Cuisines seeded');

    await Food.deleteMany();

    const food =  await Food.insertMany([
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        },
        {
            name: 'spaghetti',
            description: '',
            image: '',
            cuisine: cuisines[0]._id
        }
    ]);

    console.log('Food seeded!')
})
const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('connected to mongodb');

    } catch (error) {
        console.error(`error: ${error.message}`);
    }
};

export default connection;
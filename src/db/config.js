const mongoose = require('mongoose')
require('dotenv').config();

const DATABASE = process.env.DATABASE_URL || "";

const startConnection = async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log('Database conectada.');
    } catch (error) {
        console.log(error);
    }
}

startConnection();
const express = require('express');
const dotenv = require('dotenv').config();

//setup express and middleware 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Intitialize database
require('./db')();

const Todo = require('./routes/Todo.route');
app.use('/todos',Todo);

const User = require('./routes/User.route');
app.use('/users',User);

//Error handler
app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).json({
            message: err.message,
            data: err.data
        });
    }
    next();
}
);

const PORT = process.env.PORT || 3004;

//connect port and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

module.exports = app;

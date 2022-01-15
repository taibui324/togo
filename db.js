const mongoose = require('mongoose');

module.exports = () => {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Mongodb is connected');
      })
      .catch(err => console.log(err.message));
      //connect to db 
    mongoose.connection.on('connected', () => {
      console.log('Successfully Connected');
    });

    //error handling
    mongoose.connection.on('error', err => {
      console.log(err.message);
    });
    //close connection
    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected');
    });
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log(
          'Terminate'
        );
        process.exit(0);
      });
    });
  };
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
// Connect to DB
//  mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
//   .then(() => {
//         console.log('Connected to DB');
//     })
//   .catch((err) => {
//         console.log(err);
//     });
    

    const connectDB = async () => {
        try {
          await mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
      
          console.log('MongoDB connected!!')
        } catch (err) {
          console.log('Failed to connect to MongoDB', err)
        }
      }
      
      connectDB()


// Start SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ... ${port} `);
});
module.exports = connectDB;

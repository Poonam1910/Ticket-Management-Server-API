
const mongoose = require('mongoose');
const config= require('../config/default.json')

const db = config.mongoURI;

const connectDB =async() => {
  try {    
      mongoose.connect(  
      process.env.NODE_ENV === 'test' ? global.__DB_URL_: db,
        {
        useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology:true
        })

      console.log('MongoDB is Connected...');      
      const connection = mongoose.connection;

      connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
        })        
      }
     catch (err) {
        console.error(err.message);
        process.exit(1);
      }
};
const disconnect =async()=>{
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
  };

  const truncate = async () => {
    if (mongoose.connection.readyState !== 0) {
      const { collections } = mongoose.connection;
  
      const promises = Object.keys(collections).map(collection =>
        mongoose.connection.collection(collection).deleteMany({})
      );
  
      await Promise.all(promises);
    }
  };
 module.exports = {
    connectDB,
    truncate,
    disconnect,
  };
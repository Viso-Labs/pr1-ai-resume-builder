const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const  uri = process.env.ATLAS_URI
mongoose.set('strictQuery', true)
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('ai-resume-builder db is connected');
  })
  .catch(err => console.log(err.message));
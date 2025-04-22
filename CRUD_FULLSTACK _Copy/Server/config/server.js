// // const mongoose=require("mogoose");
// // const mongoose=require("mongoose")
// // const connection=mongoose.connect(process.env.MONGO_URI)
// // module.exports=connection



// const mongoose = require("mongoose");

// const connection = mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected successfully"))
// .catch(err => {
//     console.error("MongoDB connection error:", err);
//     throw err; // Ensure the error propagates to index.js
// });

// module.exports = connection;
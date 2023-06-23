const mongoose = require('mongoose');
require('dotenv').config();

// // connection to database
// const connect = () => {
//     return new Promise(resolve => {
//         let connectionString = process.env.DB_URL;
//         mongoose
//             .connect(
//                 connectionString,
//                 { useUnifiedTopology: true, useNewUrlParser: true,}
//             )
//             .then(async () => {
//                 console.log("DB connected successfully...");
//                 resolve();
//             })
//             .catch((error) => console.log(error));
//     });
// }

// module.exports = {
//     connect 
// }

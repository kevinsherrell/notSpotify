const express =require('express');
const app = express();
const port = 3000 // this will be moved to environment variable
const morgan = require('morgan');
// middleware
app.use(morgan('dev')); // Morgan is for server logging

// mongoose connection



app.listen(port, ()=>console.log(`server is listening on port ${port}`));
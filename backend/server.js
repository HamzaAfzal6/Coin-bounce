const express=require('express');
const app=new express();
const dbconnect=require('./database/db');
const {PORT}=require('./config/index');
const errorHandler=require('./middleware/errorHandler');
const router=require('./routes/userRoutes');
const cookieParser=require('cookie-parser');

app.use(cookieParser());
app.use(express.json()); //allowes app to communicate data in json
app.use(router);
dbconnect();
app.use('/storage',express.static('storage'));
app.use(errorHandler);
app.listen(PORT,console.log(`app is listening at port: ${PORT}`));
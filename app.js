const path = require('path');
const sequelize=require('./util/database');
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')


const app = express();

app.use(cors());

const ExpenseRoutes =require('./routes/Expenses')


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(ExpenseRoutes);

sequelize.sync().then(result=>{
   
    app.listen(3000);
})
.catch(err=>{console.log(err)})


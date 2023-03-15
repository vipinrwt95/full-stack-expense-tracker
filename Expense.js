const Expense = require('../models/Expense')

exports.postAddExpense=(req,res,next)=>{
   
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
   Expense.create({
     amount:amount,
     description:description,
     category:category 
    })
    .then(result=>{})
    .catch(err=>{console.log(err)})
};
exports.getAllExpenses=(req,res,next)=>{
    Expense.findAll()
    .then(users=>{
        res.send(users)
    })
    .catch(err=>{console.log(err)})
}

exports.Delete=(req,res,next)=>{
  Expense.destroy({where : {id:`${req.params.id}`}})
  .then(data=>console.log(`${data} is deleted`));
}
exports.DeleteExpense=(req,res,next)=>{
  
  res.redirect(`/Expenses/delete/${req.body.id}`)
}

exports.sendEdit=(req,res,next)=>{
 Expense.update({
  amount:`${req.body.amount}`,
  description:`${req.body.description}`,
  category:`${req.body.category}`
 },{where:{id:`${req.body.id}`}}).then(data=>{
  console.log(`${data} --> new data`)
 }).catch(err=>{console.log(err)}) 
}


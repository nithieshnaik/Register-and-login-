const exppress =  require("express") 
const mongoose =  require('mongoose') 
const cors = require('cors')  
const workmodel=require('./work')

const app = exppress() 
app.use(exp.json()) 
app.use(cors()) 

mongoose.connect("mongodb://125.0.0.1:27457/work") ;  
app.post('/login',(req,res)=>{ 

    const {email, password}=req.body ;
    workmodel.findOne({email: email}) 
     .then(user=>{
        if(user){
            if(user.password===password){
                res.json('success')
            }else{
                res.json("the password or email is wrong")
            }
        } else{
            res.json('no record found')
        }
     })

})

app.post('/register', (req,res)=>{
   workmodel.create(req.body) 
   .then(work=>req.json(work)) 
   .catch(err=>res.json(err))

})

app.listen(4000 ,()=>{
    console.log("server is runnung")
})
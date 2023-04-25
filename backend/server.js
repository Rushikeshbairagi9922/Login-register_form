import express from"express"
import cors from "cors"
import mongoose from "mongoose"

const {Schema} = mongoose;
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


await mongoose.connect('mongodb://127.0.0.1:27017/loginRegisterDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},)
    .then(() => console.log( "connected"))
    .catch((err) => {console.error(err);});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    reEnterPassword: String,
    dob: Number,
    phone: Number,
    address: String,
    pincode: Number
})

const User = new mongoose.model("User", userSchema)

app.post("/login", (req, res)=>{
    const { email, password } = req.body
    User.findOne({ email: email},(err, user) =>{
        if(user){
            if(password === user.password){
                res.send({message: "Login Successful", user: user})
            }else{
                res.send({message:"Password not match"})
            }
        }else{
            res.send({message:"User not register"})
        }
    })
})

app.post("/register", (req, res)=>{
    // console.log(req.body)
    const { firstName, lastName, email, password, reEnterPassword, dob, phone, address, pincode } = req.body;
    User.findOne({email: email}, (err, user) => {
        if(user){
           res.send({message: "User alredy registered"})
        } else {
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            reEnterPassword,
            dob, 
            phone,
            address,
            pincode
        })
        user.save(err => {
            if(err) {
                 res.send(err)
            } else{
                res.send({ message: "Successfully Registered, Login Now"})
            }

            })
        }  
    })
})

app.listen(8000,() => {
       console.log("started at port 8000")
})
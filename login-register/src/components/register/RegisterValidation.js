function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const name_pattern = /^[a-zA-Z]+$/
    

    if(values.firstName === ""){
        error.firstName ="First Name Should not be empty"
    }
    else if(!name_pattern.test(values.firstName)) {
        error.password = "Name should be 3 - 15 latters"
    }
    else{
        error.firstName =""
    }

    if(values.lastName === ""){
        error.lastName ="Last Name Should not be empty"
    }
    else if(!name_pattern.test(values.lastName)) {
        error.password = "Name should be 3 - 15 latters"
    }
    else{
        error.lastName =""
    }

    if(values.dob === ""){
        error.dod ="DOB Should not be empty"
    }
   else{
        error.dob =""
    }

    if(values.email === " "){
        error.email ="Email Should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email didn't Match"
    }else{
        error.email =""
    }

    if(values.password === ""){
        error.password = "Password Should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't Match"
    }else{
        error.password =""
    }
    

    if(values.address === ""){
        error.address ="Address Should not be empty"
    }
   else{
        error.address =""
    }

    if(values.pincode === ""){
        error.pincode ="Pincode Should not be empty"
    }
   else{
        error.pincodes =""
    }
    if(values.phone === ""){
        error.phone ="Phone Number Should not be empty"
    }
   else{
        error.phone =""
    }
    return error;
}
export default Validation;
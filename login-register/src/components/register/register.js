import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reEnterPassword: "",
    dob: "",
    phone: "",
    address: "",
    pincode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
        ...user,
        [name]: value
    })
  }

  const register = () => {
    const {firstName,lastName,email,password,reEnterPassword,dob,phone,address,pincode} = user
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      (password === reEnterPassword) &&
      dob &&
      phone &&
      address &&
      pincode
    ) {
      // alert("Posted");
      axios.post("http://127.0.0.1:8000/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Invalid Input");
    }
  }

  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          value={user.dob}
          placeholder="DOB"
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          value={user.phone}
          placeholder="Enter Phone Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={user.address}
          placeholder="Enter Address"
          onChange={handleChange}
        />
        <input
          type="number"
          name="pincode"
          value={user.pincode}
          placeholder="Enter Pincode"
          onChange={handleChange}
        />
        <div className="button" onClick={register}> Register </div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
      </div>
    </div>
  );
};

export default Register;

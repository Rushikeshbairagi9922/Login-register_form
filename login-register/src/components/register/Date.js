import { useState } from "react"
import moment from 'moment'

const Date = ()=>{

const [dateInput, setDateInput] = useState("");
const handleDateInputChange =(e) =>{
    setDateInput(e.target.value);
}

const formatDate =(date) => {
    moment(date).format('MMMM Do YYYY');
};
 
  return (
  <form action="" onSubmit={(e) =>{
    e.preventDefault();
    const formattedDate= formatDate(dateInput);
    console.log(formattedDate);
  }}>
        <input type="date" value= {dateInput} onChange={handleDateInputChange} />
        <button type="submit"> </button>

  </form>
  )
}

export default Date

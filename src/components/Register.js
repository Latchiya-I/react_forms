import React from "react";
import Button from '@mui/material/Button';

function Register()

{
    return(
        <div>
            <form>
               <label htmlFor="name">Name</label> 
               <input type="text" id="name" name="name"/>
               <label htmlFor="email">Email</label> 
               <input type="email" id="email" name="email"/>
               <label htmlFor="name">Course</label> 
               <input type="course" id="course" name="course"/>
                <div >
                <Button variant="contained">Submit</Button> 
                </div >
            </form>
        </div>
    )
}

export default Register
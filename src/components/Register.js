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
               <label htmlFor="college name">college name</label> 
               <input type="College name" id="college name" name="college name"/>
               <label htmlFor="Course">Course</label> 
               <input type="course" id="course" name="course"/>
                <div >
                <center><Button variant="contained">Submit</Button> </center>
                </div >
            </form>
        </div>
    )
}

export default Register
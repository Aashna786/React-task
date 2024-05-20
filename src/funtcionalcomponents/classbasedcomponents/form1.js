import { Component } from "react";


class Form1 extends Component{

    render(){
        return(

            <form>

<label for="fname">First Name:</label> 
<input type="text" id="fname" name="fname"></input><br></br><br></br>

<label for="lname">Last Name:</label>
<input type="text" id="lname" name="lname"></input><br></br><br></br>

<label for="phn">Mobile Number:</label>
<input type="tel" id="phn" name="phn"></input><br></br><br></br>

<label for="email">Email Id:</label>
<input type="mail" id="email" name="mail"></input><br></br><br></br>

<label for="pwd">Password:</label>
<input type="pwd" id="pwd" name="pswd"></input><br></br><br></br>

<input type="submit" value="Register"></input>

            </form>
        )
    }
}

export default Form1
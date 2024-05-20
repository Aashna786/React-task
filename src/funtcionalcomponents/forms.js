

const Form=()=>{
    return(
        <div>
        <form>
<label for="f.Name">First Name</label><br></br>
<input type="text" id="f.name" name="fname"></input><br></br><br></br>

<label for="l.name">Last Name</label><br></br>
<input type="text" id="l.name" name="lname"></input><br></br><br></br>

<label for="phn">Mobile Number</label><br></br>
<input type="tel" id="phn" name="phone"></input><br></br><br></br>

<input type="submit" value="Register"></input>
        </form>
        <hr/>
        </div>
    )
}
export default Form
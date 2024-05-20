import { Component } from "react";


class Table extends Component{
    render(){
        return(

            <table>
             <tr>
              <th>S.no</th>
              <th>Student Name</th> 
              <th>Phone Number</th> 
             </tr>

             <tr>
                <td>1</td>
                <td>S.Asha</td>
                <td>6304212478</td>
             </tr>

             <tr>
                <td>2</td>
                <td>S.Sahithi</td>
                <td>7896541203</td>
             </tr>

             <tr>
                <td>3</td>
                <td>R.Roopa</td>
                <td>9563210897</td>
             </tr>

             <tr>
                <td>4</td>
                <td>P.Vyshnavi</td>
                <td>7032818582</td>
             </tr>

             <tr>
                <td>5</td>
                <td>R.Rekha</td>
                <td>9490404374</td>
             </tr>

            </table>

        )
    }
}

export default Table


 export class List1 extends Component{

   render(){
       return(

           <ul>

            <li>RCB</li>
            <li>CSK</li> 
            <li>MI</li> 
            <li>SRH</li> 
            <li>GT</li> 
           </ul>
       )
   }
}
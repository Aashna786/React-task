import Listitems from "./listitems";


const Listcomponents=()=>{
    const iplteams=["RCB","CSK","KKR","MI"] ;
    const IndianLeague="INDIAN PREMIER LEAGUE"
    const Imageurl="https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=612x612&w=is&k=20&c=4wdOVJPPp3ocrnDM9Bu8EoCz9CPZyJViRMiQ6zCM6P8=";


 
    // [{
    //                       person1:"kohli",
    //                       person2:"maxwell"
    //                   },
    //                  {
    //                 person1:"Dhoni",
    //                 person2:"Ruthraj"
    //                  },

    //                  {
    //                     person1:"Shreyas",
    //                     person2:"Rink Singh"
    //                  },

    //                  {
    //                 person1:"Rohit",
    //                 person2:"Sky"
    //                  }
    //                 ]
    return(

        <div>

            <h3>{IndianLeague}</h3>
             <img src={Imageurl} height={200} width={200}></img>
             <button onClick={()=>{}}>Click me</button>

   <ul>

{/* <Listitems/> */}

        </ul>
        </div>
        
    
    )
}
export default Listcomponents;
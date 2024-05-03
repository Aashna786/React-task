import React from "react"

const Listitems=()=>{

    const iplHistory=[
        {
            name:"RCB",
            winningHistory:0,
            image:"https://media.crictracker.com/media/attachments/2022/02/Royal-Challengers-Bangalore-logo.jpg",
            teamplayers:[
                " Virat Kohli","DK","Mohammed Siraj","Glenn maxwell","Yash Dayal",
                "Cameron Green","Faf du Plesiss","Vijay Kumar","Mahipal Lomror",
                "Karn Sharma","Rajat Patidar"
            ]
        },

        {
            name:"Hyderabad",
            winningHistory:3,
            image:"https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png",
            teamplayers:[
                "Abdul Samad", "Abhishek Sharma", "Aiden Markram", "Marco Jansen", 
                "Rahul Tripathi", "Washington Sundar", "Glenn Phillips", "Sanvir Singh",
                 "Heinrich Klaasen", "Bhuvneshwar Kumar", "Mayank Agarwal"
            ]   
        },

        {
            name:"Chennai",
            winningHistory:5,
            image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
            teamplayers:[
                "Ruturaj Gaikwad", "MS Dhoni", "Moeen Ali", "Deepak Chahar",
                 "Tushar Deshpande", "Shivam Dube", "Rajvardhan Hangargekar", 
                 "Ravindra Jadeja", "Ajay Mandal", "Mukesh Choudhary", "Ajinkya Rahane"
            ]   
        },

        {
            name:"Mumbai",
            winningHistory:5,
            image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png", 
            teamplayers:[
                "Rohit Sharma","Hardik Pandya","Ishan Kishan","Tim david","Harvik Desai"
                ,"Naman Dhir","Shivalik Sharma","SKY","Nehal Wadhera","Vishnu Vinod",
                "Mohammed Nabi"
            ]   
        }
    ]

    
return(
        <React.Fragment>

        {
        
        iplHistory.map((value,index)=>

            <>
<h2>{index+1}. {value.name}</h2>
<img src={value.image} height={"300px"} width={"400px"}/>
{
    value.teamplayers.map(player=>
        <>
        <p>{player}</p>
        </>        
    )
}
</>
        )
     }

       {
         iplHistory.filter((eachTeam)=>{

            if(eachTeam.winningHistory>=5)
            {
                return true
            }

            else{
                return false
            }

        }).map((team)=>{
            return <h1>{team.name}</h1>
            
        })
        
       }

        </React.Fragment>
   )

}


export default Listitems
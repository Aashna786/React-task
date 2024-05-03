
const Buttoncomponent =(props)=>{
    console.log(props,"props")

    const {text,bgColor,buttonproperties:{width,height}}=props
    return(
        <button  style={{
            backgroundColor:bgColor,
            width:width,
            height:height
        }}>{text}</button>
    )

}

export default Buttoncomponent



// const Buttoncomponent=(props)=>{

//     const {text,buttonproperties:{height,width},bgColor}=props

//     return(

//         <button style={{
//             text:text,
//             height:height,
//             width:width,
//             backgroundColor:bgColor
//         }}>{text}</button>
//     )
// }

// export default Buttoncomponent
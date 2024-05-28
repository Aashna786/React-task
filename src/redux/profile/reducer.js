

const initialState={
    profile:{
   name:"Asha",
   email:"asha@gmail.com",
   mobile:63258,
   image:null
}
};

const profileReducer=(state=initialState,action)=>{

   switch(action.type)
   {
       case "PROFILE_INFO_CHANGE":
           return{...state,profile:action.payload}
           default:
               return state
           }
   }

   export default profileReducer;
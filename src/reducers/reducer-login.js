function getInitialState(){
  return {
    userUrls:[],
    user:{
      email:'',
      pass:''
    }
  }
}

export default function(state= getInitialState(), action){
  switch(action.type){
    case 'LOGIN_API':
      return {
        ...state,
        user:action.payload
      };
    case 'GET_ALL_URLS':
      return{
        ...state,
        userUrls:action.payload
      } 
    default:
      return state;
  }
}
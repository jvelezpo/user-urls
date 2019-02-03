function getInitialState(){
  return {}
}

export default function(state= getInitialState(), action){
  switch(action.type){
    case 'LOGIN_API':
      return {};
    default:
      return state;
  }
}
function getInitialState() {
  return {
    userUrls: [],
    token: '',
    user: {
      id: '',
      email: ''
    },
    success:false
  }
}

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case 'LOGIN_API':
      return {
        ...state,
        token: action.payload.token,
        success: action.payload.success
      };
    case 'GET_ALL_URLS':
      return {
        ...state,
        userUrls: action.payload
      }
    case 'GET_CURRENT_USER':
      return{
        ...state,
        user: action.payload
      }
    case 'SET_TOKEN':
      return{
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
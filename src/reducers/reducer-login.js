function getInitialState() {
  return {
    userUrls: [],
    token: '',
    user: {}
  }
}

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case 'LOGIN_API':
      return {
        ...state,
        token: action.payload.token
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
    default:
      return state;
  }
}
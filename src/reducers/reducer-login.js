function getInitialState() {
  return {
    userUrls: [],
    token: '',
    user: {
      id: '',
      email: ''
    },
    success: false,
    urlData: {
      url:'',
      score:0
    }
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
      return {
        ...state,
        user: action.payload
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'GET_ONE_URL':
      return {
        ...state,
        urlData: action.payload
      }
    case 'LOG_OUT':
      return state;
    default:
      return state;
  }
}
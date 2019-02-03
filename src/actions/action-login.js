import axios from 'axios';
const apiUrl = 'http://localhost:6000';

//login get by email and id
export function loginApi(email,pass) {
  return dispatch => {
    return axios
      .get(`${apiUrl}`,{params: {email,pass}})
      .then(res =>{
        dispatch({
          type:"LOGIN_API",
          payload: res.data
        });
      })
      .catch(error => {
        throw error;
      })
  }
}
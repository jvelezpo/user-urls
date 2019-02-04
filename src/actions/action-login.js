import axios from "axios";
const apiUrl = "http://localhost:7000";

//GET  ONE -login get by email and id
export function loginApi(email, password) {

  return dispatch => {
    return axios
      .post(`${apiUrl}/user`, { email,password } )
      .then(res => {
        dispatch({
          type: "LOGIN_API",
          payload: res.data
        });
      })
      .catch(error => {
        throw error;
      })
  }
}
//GET ALL THE USER URLS
export function getUrls(email, pass) {
  return dispatch => {
    return axios
      .get(`${apiUrl}`)
      .then(res => {
        dispatch({
          type:"GET_ALL_URLS",
          payload: res.data
        })
      })
      .catch(error => {
        throw (error);
      });
  }
}
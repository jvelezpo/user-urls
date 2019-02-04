import axios from "axios";
const apiUrl = "http://localhost:7000";

export function getCurrentUser(id) {
  return dispatch => {
    return axios
      .post(`${apiUrl}/getCurrentUser`, { id })
      .then(res => {
        dispatch({
          type: "GET_CURRENT_USER",
          payload: res.data
        })
      })
  }
}
//GET  ONE -login get by email and id
export function loginApi(email, password) {

  return dispatch => {
    return axios
      .post(`${apiUrl}/user`, { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token)
        dispatch({
          type: "LOGIN_API",
          payload: res.data
        });
        return res.data;
      })
      .then((data) => {
        dispatch(
          getCurrentUser(data.token)
        )
      })
      .catch(error => {
        throw error;
      })
  }
}
//GET all user urls by id
export function getUrls(id) {
  return dispatch => {
    return axios
      .get(`${apiUrl}`, { params: { id } })
      .then(res => {
        dispatch({
          type: "GET_ALL_URLS",
          payload: res.data
        })
      })
      .catch(error => {
        throw (error);
      });
  }
}
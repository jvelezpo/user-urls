import axios from 'axios';
const apiUrl = "http://localhost:7000";

//GET all user urls by id
export function getUrls(id) {
  // console.log("token - id:",id)
  return dispatch => {
    return axios
      .get(`${apiUrl}/getUserUrls`, { params: { userId: id } })
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
//
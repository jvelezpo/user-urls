import axios from 'axios';
const apiUrl = "http://localhost:7000";

//GET all user urls by id
export function getUrls(id) {
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
//Update stare rating
export function updateScore(id, score, userId) {
  console.log('userId: ', userId);
  return dispatch => {
    return axios
      .put(`${apiUrl}/updateScore`, { id, score })
      .then(res => {
        dispatch(
          getUrls(userId)
        )
      })
      .catch(error => {
        throw (error);
      });
  }
}
//delete url
export function deleteUrl(id, userId) {
  console.log('DATOS PARA BORRAR: ', id, userId)
  return dispatch => {
    return axios
      .delete(`${apiUrl}/deleteUrl`, { data: { id } })
      .then(res => {
        dispatch(
          getUrls(userId)
        )
      })
      .catch(error => {
        throw (error);
      })
  }
}
import { SET_NAME_REQUESTED, SET_NAME_SUCCESS } from "../constants/Home.js"

export const setName = (name) => {
	return dispatch => {
    dispatch({
      type: SET_NAME_REQUESTED,
      payload: name
    })

    dispatch({
      type: SET_NAME_SUCCESS,
      payload: name
    })
  }
}


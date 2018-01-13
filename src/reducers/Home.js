import { SET_NAME_REQUESTED, SET_NAME_SUCCESS } from "../constants/Home.js"

const initialState = {
	name: '',
	isNameSet: false
}

export default (state = initialState, action) => {
	switch(action.type) {
		case(SET_NAME_REQUESTED):
			return state
		case(SET_NAME_SUCCESS):
			if (action.payload === "") {
				return {...state};
			}
			return {...state, name: action.payload, isNameSet: true}
		default:
			return state
	}
}
export const authFormShow = () => {
	return {
		type: 'LOGIN_FORM_SHOW'
	}
}

export const authFormHide = () => {
	return {
		type: 'LOGIN_FORM_HIDE'
	}
}

export const authFormFieldsChanged = (payload) => {
	return {
		type: 'LOGIN_FORM_FIELDS_CHANGED',
		payload: payload
	}
}
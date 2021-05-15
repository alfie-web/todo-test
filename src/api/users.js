import api from './'

const usersAPI = {
	login: ({ username, password }) => {
		const formData = new FormData()
		formData.append('username', username)
		formData.append('password', password)

		return api.post('/login', formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
	}
}

export default usersAPI
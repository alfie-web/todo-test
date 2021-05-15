import api from '.'

const tasksAPI = {
	getAll: ({ page, sort_direction, sort_field }) => api.get(`/?page=${page}&sort_direction=${sort_direction}&sort_field=${sort_field}`),
	create: ({ username, email, text }) => {
		const formData = new FormData()
		formData.append('username', username)
		formData.append('email', email)
		formData.append('text', text)

		return api.post('/create', formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
	}
}

export default tasksAPI
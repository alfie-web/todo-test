import api from '.'

const tasksAPI = {
	getAll: ({ page, sort_direction, sort_field }) => api.get(`/?page=${page}&sort_direction=${sort_direction}&sort_field=${sort_field}`)
}

export default tasksAPI
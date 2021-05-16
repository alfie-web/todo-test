import api from '.'
import createFormData from '../helpers/createFormData'
import formDataHeaders from './'

const tasksAPI = {
   getAll: ({ page, sort_direction, sort_field }) =>
      api.get(`/?page=${page}&sort_direction=${sort_direction}&sort_field=${sort_field}`),

   create: ({ username, email, text }) => {
      const formData = createFormData({ username, email, text })

      return api.post('/create', formData, formDataHeaders)
   },
	
   edit: ({ id, text, status }) => {
      const formData = createFormData({
         text,
         status,
         token: window.localStorage.getItem('token'),
      })

      return api.post(`/edit/${id}`, formData, formDataHeaders)
   },
}

export default tasksAPI

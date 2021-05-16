import api from './'
import createFormData from '../helpers/createFormData'
import formDataHeaders from './'

const usersAPI = {
   login: ({ username, password }) => {
      const formData = createFormData({ username, password })

      return api.post('/login', formData, formDataHeaders)
   },
}

export default usersAPI

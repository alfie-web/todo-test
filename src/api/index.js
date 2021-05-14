import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
	params: {
		developer: 'Name'
  }
})

export default instance
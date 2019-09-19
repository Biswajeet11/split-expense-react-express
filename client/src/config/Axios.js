import Axios from 'axios'
const axios = Axios.create({
	baseURL: 'http://localhost:3020/user'
})
export default axios
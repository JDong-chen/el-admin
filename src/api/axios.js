import Axios from 'axios'

export default Axios.create({
  baseURL: 'localhost:9102',
  timeout: 2000
})


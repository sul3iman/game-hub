import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5d5229a858524525836a72b655c7eb76'
  }
})
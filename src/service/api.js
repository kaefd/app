// import router from '../router'
import axios from 'axios'
// import functions from './functions'

const instance = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '316b551bffmsh9ca4af3f5c67bfdp12722fjsn0ef73a81d9b9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
})

export default {
  async getCoins() {
    try {
      const response = await instance.get('/coins')
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
}

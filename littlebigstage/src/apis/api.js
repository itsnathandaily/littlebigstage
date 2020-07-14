import axios from 'axios'
import config from '../config'

const url = config.endpoint.url



export default {
  posts() {
    return {
      getSingleMovie: (id) => axios.get(`${url}/movies/${id}`),
      getAllMovies: () => axios.get(`${url}/movies`),
      updateMovie: (id,reviewUpdate)=> axios.put(`${url}/${id}`,reviewUpdate)
    }
  }
}



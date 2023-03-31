import axios from "axios";
import CustomFile from './File/types'

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

export { api as default, type CustomFile }
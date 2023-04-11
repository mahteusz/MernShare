import axios from "axios";
import CustomFile from './File/types'

const api = axios.create({
  baseURL: 'https://mernshare.onrender.com/api/',
})

export { api as default, type CustomFile }
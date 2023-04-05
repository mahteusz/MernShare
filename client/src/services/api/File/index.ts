import { requests } from '../util'
import CustomFile from './types'

export const url = "files"

const fileApi = {
  getFile: (id: string): Promise<CustomFile> => requests.get(`${url}/${id}`),
  createFile: (fileData: FormData): Promise<CustomFile> => requests.post(url, fileData),
}

export default fileApi
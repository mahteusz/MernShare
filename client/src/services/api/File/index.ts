import { requests } from '../util'

export const url = "files"

const fileApi = {
  getFile: (id: string): Promise<File> => requests.get(`${url}/${id}`),
  createFile: (exchange: FormData): Promise<FormData> => requests.post(url, exchange),
}

export default fileApi
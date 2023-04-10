import { requests } from '../util'
import CustomFile, { Metadata } from './types'

const url = "files"
const metadataUrl = "metadata"

const fileApi = {
  getFile: (id: string): Promise<CustomFile> => requests.get(`${url}/${id}`),
  createFile: (fileData: FormData): Promise<CustomFile> => requests.post(url, fileData),
  updateFile: (id: string, body: CustomFile): Promise<CustomFile> => requests.put(`${url}/${id}`, body),
  getMetadata: (): Promise<Metadata> => requests.get(`${url}/${metadataUrl}`)
}

export default fileApi
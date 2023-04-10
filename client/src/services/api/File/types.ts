type CustomFile = {
  _id?: string,
  name: string,
  url: string,
  sizeInBytes: number,
  format: string,
  numberOfDownloads:number
}

type Metadata = {
  numberOfSentFiles: number,
  downloadedFiles: number,
  sizeOfSavedData: number
}

export { type CustomFile as default, type Metadata }
const acceptedFileTypes: {[key: string]: string[]} = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'text/html': ['.html', '.htm'],
  'text/javascript': ['.js'],
  'application/pdf': ['.pdf']
}

const maxFileSize ={
  inMegabytes: 32,
  inBytes: 32 * 1024 * 1024,
} 

export { acceptedFileTypes, maxFileSize }
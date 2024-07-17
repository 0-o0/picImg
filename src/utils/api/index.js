import axios from '../http'
const UPLOAD_URL = '/upload'
const uploadServer = function (data) {
  const token = localStorage.getItem('config') ? JSON.parse(localStorage.getItem('config')).token : '1523|TUnfHpXF0XBLH4nq3aQqpjy0dZqcrwbGHL8UwuUF'
  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`
  }
  return axios.post(UPLOAD_URL, data, { headers })
}

export { uploadServer }

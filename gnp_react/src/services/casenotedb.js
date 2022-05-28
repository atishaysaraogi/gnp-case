import axios from 'axios'

axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

const baseUrl = 'api/casenote' 

const addCaseNote = activity => {
    const request = axios.post(baseUrl, activity)
    
    return request.then(response => {
      console.log('this got sent back from the backend', response)
      return response.data
    })
  }

exports.addCaseNote = addCaseNote
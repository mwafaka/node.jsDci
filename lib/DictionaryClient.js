const axios = require("axios")

const API_KEYS = {
  id: "1b9a10e9",
  key: "fd706d38c4f937a2568f256f8e84a4fe"
}

class DictionaryClient {
  constructor(keys) {
    this.appId = keys.id
    this.appKey = keys.key

    this.baseURL = "https://od-api.oxforddictionaries.com/api/v1/"

    // Configure axios to send credentials with every request
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Accept: "application/json",
        app_id: this.appId,
        app_key: this.appKey
      }
    })
  }

  async get(endpoint) {
    // get relevent data and parse errors if any
    const response = await this.client
      .get(endpoint)
      .catch(err =>
        Promise.reject(`${err.response.status}: ${err.response.statusText}`)
      )

    return response.data
  }

  async getEntries(word) {
    // get entries for a word
    const data = await this.get(`entries/en/${word}`)

    return data
  }
}

module.exports = new DictionaryClient(API_KEYS)

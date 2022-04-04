import { api_host, api_port } from "./config"

class Client {
  baseUri = `${api_host}:${api_port}`

  async handleResponse(response: Response) {
    const text = await response.text()
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  }

  async get(path: string) {
    const resp = await fetch(this.baseUri + path)
    return this.handleResponse(resp)
  }

  async post(path: string, body?: object) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Username: "amitphatak$r5labs.com"
      },
      body: JSON.stringify(body)
    }
    const resp = await fetch(this.baseUri + path, requestOptions)
    return this.handleResponse(resp)
  }
}

const _client = new Client()
export const API = {
  get: _client.get.bind(_client),
  post: _client.post.bind(_client)
}

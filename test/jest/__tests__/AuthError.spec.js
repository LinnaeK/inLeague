import flushPromises from "flush-promises"
import store from '../../../src/store/store'
import mockAxios from "axios";

describe('authenticated', () => {

  it("handles an error when invalid username/password have been presented and saves the error in the store", async () => {
    mockAxios.post.mockRejectedValue({"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},"method":"post","url":"https://demo.inleague.io/api/v1/authenticate","data":"{\"username\":\"job@inleague.com\",\"password\":\"openBook99\"}"},"request":{},"response":{"data":{"data":{},"error":true,"messages":["Invalid or Missing Authentication Credentials"]},"status":401,"statusText":"","headers":{"content-length":"101","content-type":"application/json;charset=utf-8"},"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},"method":"post","url":"https://demo.inleague.io/api/v1/authenticate","data":"{\"username\":\"job@inleague.com\",\"password\":\"openBook99\"}"},"request":{}}}
    )
    
    
    store.dispatch('authenticate', {
      username: "job@inleague.com",
      password: "openBook99",
    })
    
    await flushPromises()
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://demo.inleague.io/api/v1/authenticate',
              {
                username: "job@inleague.com",
                password: "openBook99"
              }
    )
    expect(store.state.error).toEqual(["Invalid or Missing Authentication Credentials"])
  })
})
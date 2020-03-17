import flushPromises from "flush-promises"
import store from '../../../src/store/store'
import mockAxios from "axios";

describe('authenticated', () => {

  it("handles an error when invalid type of username/password have been presented and stores error in the store", async () => {
    mockAxios.post.mockRejectedValue({"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},"method":"post","url":"https://demo.inleague.io/api/v1/authenticate","data":"{\"username\":\"job.inleague.com\",\"password\":\"ooo\"}"},"request":{},"response":{"data":{"data":{"password":[{"MESSAGE":"The 'password' value is not in the required size range (5..90)","VALIDATIONDATA":"5..90","ERRORMETADATA":{"MIN":"5","SIZE":"5..90","MAX":"90"},"REJECTEDVALUE":"","VALIDATIONTYPE":"Size","FIELD":"password"}],"username":[{"MESSAGE":"The 'username' has an invalid type, expected type is email","VALIDATIONDATA":"email","ERRORMETADATA":{"TYPE":"email"},"REJECTEDVALUE":"","VALIDATIONTYPE":"Type","FIELD":"username"}]},"error":true,"messages":["Request validation failure."]},"status":400,"statusText":"","headers":{"content-length":"297","content-type":"application/json;charset=utf-8"},"config":{"transformRequest":{},"transformResponse":{},"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;charset=utf-8"},"method":"post","url":"https://demo.inleague.io/api/v1/authenticate","data":"{\"username\":\"job.inleague.com\",\"password\":\"ooo\"}"},"request":{}}}
    )
      
    store.dispatch('authenticate', {
      username: "job.inleague.com",
      password: "ooo",
    })
    
    await flushPromises()
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(mockAxios.post).toHaveBeenCalledWith(
      'https://demo.inleague.io/api/v1/authenticate',
              {
                username: "job.inleague.com",
                password: "ooo"
              }
    )
    expect(store.state.error).toEqual(["Request validation failure.", "The 'username' has an invalid type, expected type is email", "The 'password' value is not in the required size range (5..90)"])
  })
})
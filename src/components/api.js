export const byId = (id) => document.getElementById(id);
export const byIdObj = (id) => document.getElementById(id);

export const url = "http://172.20.10.3/";
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJpYXQiOjE3MDQ5MDAzNTYsImV4cCI6MTcwNDk4Njc1Nn0.VkoBkP_UY-FdufFtIXAH3__AHb6mD8D-W-GWShH1dVP3V3DQxzjZ_ez0VfrEqMiQfGk3lWAVI1KYJvINT8VyOQ"
export const config = {
    headers: {
       Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJpYXQiOjE3MDQ5MDE3NjksImV4cCI6MTcwNDk4ODE2OX0.-aUKij0lVnV8hgjj6-igdhnN_sqsocQ2ULwO-Za2hVaDQsFvZGbsIFEP6asXe3oPNzT79Y4b4wKFfE8v0MxhfA",
    }
}
export const setConfig = () => config.headers.Authorization = token; 
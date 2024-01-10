export const byId = (id) => document.getElementById(id);
export const byIdObj = (id) => document.getElementById(id);

export const url = "http://172.20.10.3/";
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJpYXQiOjE3MDQ5MTU3NzcsImV4cCI6MTcwNTAwMjE3N30.0qy2adELPjUt333wUF9LA-ja8Y8kgAppGU_eeifnzPw9zWvyF8Y4GICNWzUZDs6Y4bBh2s4471lHYrEh6Yoo0A"
export const config = {
    headers: {
       Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJpYXQiOjE3MDQ5MTU3NzcsImV4cCI6MTcwNTAwMjE3N30.0qy2adELPjUt333wUF9LA-ja8Y8kgAppGU_eeifnzPw9zWvyF8Y4GICNWzUZDs6Y4bBh2s4471lHYrEh6Yoo0A",
    }
}
export const setConfig = () => config.headers.Authorization = token; 
// const commentUrl = "https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments"
// const userUrl = "https://wedev-api.sky.pro/api/user/login"
export let token 
export const setToken = (newToken) => {
  token = newToken
}
export let user 
export const setUser = (newUser) => {
  user = newUser
}

export function getComments() {
  return fetch("https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments", {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${user.token}`
      // },
  }).then((response) => {
      return response.json();
  });
}

// Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k
export function postComments( {comment, name} ) {
    return fetch(
        "https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments",
        {
          method: "POST", 
          headers: {
            Authorization: `Bearer ${user.token}`
          },
          forceError: true,
          body: JSON.stringify({
            text: comment,
            name: name,
          })
      
        })
}

export function login({ login, password }) {
  return fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify
    ({
      login,
      password,
    }),
  }).then((response) => {
    return response.json();
  });
}
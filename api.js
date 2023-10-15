// const commentUrl = "https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments"
// const userUrl = "https://wedev-api.sky.pro/api/user/login"
export let token = false

export function getComments() {
  return fetch("https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments", {
      method: "GET",
      
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
          body: JSON.stringify({
            text: comment,
            name: name,
            // headers: {
            //   Authorization: Bearer${token}
            // }
            forceError: true,
//             login: loginInputElement.value,
// 			password: passwordInputElement.value,
// 		})
// .then((responseData) => {
// 				setToken(responseData.user.token)
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
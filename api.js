let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"

export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments", {
        method: "GET",
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        return response.json();
    });
}

export function postComments( {comment, name} ) {
    return fetch(
        "https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments",
        {
          method: "POST",
          body: JSON.stringify({
            text: comment,
            name: name,
            headers: {
              Authorization: token,
            }
            // forceError: true,
          })
      
        })
}
export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/artem-khoroshavin/comments", {
        method: "GET",
      }).then((response) => {
        return response.json();
    });
}

export function postComments( {comment, name} ) {
    return fetch(
        "https://wedev-api.sky.pro/api/v1/artem-khoroshavin/comments",
        {
          method: "POST",
          body: JSON.stringify({
            text: comment,
            name: name,
            // forceError: true,
          })
      
        })
}
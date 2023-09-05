export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/artem-khoroshavin/comments", {
        method: "GET",
      }).then((response) => {
        return response.json();
    });
}

export function postComments( comment, name ) {
    return fetch(
        "https://wedev-api.sky.pro/api/v1/artem-khoroshavin/comments",
        {
          method: "POST",
          body: JSON.stringify({
            text: comment,
            name: name,
            forceError: true,
          }),
      
        }).then((response) => {
          if(response.status === 201) {
            return response.json();
        } else {
            if (response.status === 400) throw new Error("Мало символов")
              if (response.status === 500) throw new Error("Сервер упал")
              throw new Error ("Сломался интернет")
          }
        })
}
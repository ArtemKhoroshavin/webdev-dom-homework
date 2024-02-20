import { renderComments } from "./renderComments.js";
import { postComments, getComments } from "./api.js";
import { renderLogin } from "./renderLogin.js";

// renderComments();

// const listElement = document.getElementById("comments");

// function start() {
//   let start = document.getElementById('start');
//   if (start.style.display === 'none') {
//     start.style.display = 'block';
//   } else {
//     start.style.display = 'none';
//   }
// };

export let comments = [];
export let setComments = (newComments) => {
  comments = newComments
};
getComments().then((responseData) => {
  let start = document.getElementById('start');
  if (start.style.display === 'none') {
        start.style.display = 'block';
      } else {
        start.style.display = 'none';
      }
  const comments = responseData.comments.map((comment) => {
    return {
      name: comment.author.name,
      date: new Date().toLocaleDateString(),
      comment: comment.text,
      likes: comment.likes,
      Iliked: 0,
    };
  });
  // start();
  renderComments(comments);
  setComments(comments);
});

// const initEventListeners = () => {
//   const buttonElements = document.querySelectorAll(".like-button");

//   for (const buttonElement of buttonElements) {
//     buttonElement.addEventListener("click", (event) => {
//       event.stopPropagation();
//       // индекс = номер объекта в массиве, получаем из дата-атрибут кнопки на которую кликаем
//       const index = buttonElement.dataset.index;
//       // обращаемся к свойству isLiked объекта, который мы получили из массива comments по индексу 
//       if (comments[index].isLiked) {
//         comments[index].isLiked = false;
//         comments[index].likes--;
//       } else {
//         comments[index].isLiked = true;
//         comments[index].likes++;
//       }

//       renderComments();
//     });
//   }

//   const commentsElements = document.querySelectorAll(".comment");
//   for (const comment of commentsElements) {
    // comment.addEventListener("click", () => {
    //   const comments = comment.dataset.comments;
    //   commentInputElement.value = comments;
    // });
  // };
// };


// renderComments();

// const likesElements = document.querySelectorAll(".likes");

// initEventListeners();

// renderComments();

// buttonElement.addEventListener('click', () => {

//   nameInputElement.classList.remove('error');
//   commentInputElement.classList.remove('error');

//   if (nameInputElement.value === '') {
//     nameInputElement.classList.add('error');
//     return;
//   }
//   if (commentInputElement.value === '') {
//     commentInputElement.classList.add('error');
//     return;
//   }

//   buttonElement.disabled = true;
//   buttonElement.textContent = 'Ждём, комментарий добавляется...';

//   // тут(строчка ниже) был POST
//   postComments({
//     comment: commentInputElement.value,
//     name: nameInputElement.value,

//   }).then((response) => {
//     if (response.status === 201) {
//       return response.json();
//     } else {
//       if (response.status === 400) throw new Error("Мало символов")
//       if (response.status === 500) throw new Error("Сервер упал")
//       throw new Error("Сломался интернет")
//     }
//   })

//     // let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"

//     .then((responseData) => {
//       return fetch("https://wedev-api.sky.pro/api/v2/artem-khoroshavin/comments", {
//         method: "GET",
//         // headers: {
//         //   Authorization: token,
//         // }
//       });
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((responseData) => {
//       comments = responseData.comments.map((comment) => {
//         return {
//           name: comment.author.name,
//           date: newDate,
//           comment: comment.text,
//           likes: comment.likes,
//           Iliked: 0,

//         };
//       });
//       buttonElement.disabled = false;
//       buttonElement.textContent = 'Написать';
//       nameInputElement.value = '';
//       commentInputElement.value = '';

//       renderComments();
//     }).catch((error) => {
//       buttonElement.disabled = false;
//       buttonElement.textContent = 'Написать';
//       if (error.message === "Мало символов") return alert('Введите больше 3-х символов')
//       alert('Кажется, у вас сломался интернет, попробуйте позже');
//       console.warn(error);
//     })

//   renderComments();

// })

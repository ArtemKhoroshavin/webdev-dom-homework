import { token } from "./api.js";
import { renderLogin } from "./renderLogin.js";

export function renderComments(comments) {
    const appElement = document.querySelector(".container");
    const commentsHtml = comments.map((comment, index) => {
        return `<li class="comment" data-comments="${comment.comment} : ${comment.name}">
              <div class="comment-header">
                <div>${comment.name}</div>
                <div>${comment.date}</div>
              </div>
              <div class="comment-body">
                <div class="comment-text">
                  ${comment.comment}
                </div>
                <div class="comment-footer">
                <div class="likes">
                  <span class="likes-counter">${comment.likes}</span>
                  <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
                </div>
              </div>
            </li>`
    }).join('');
    const commentPageHtml = `
    <ul id="comments" class="comments"> 
    ${commentsHtml}
    </ul>
    ${token ? `<div class="add-form">
    <input
      type="text"
      class="add-form-name"
      placeholder="Введите ваше имя"
    id="name-input" value="" />
    <textarea id="comment-input"
      type="textarea"
      class="add-form-text"
      placeholder="Введите ваш коментарий"
      rows="4"
    ></textarea>
    <div class="add-form-row">
      <button id="add-button" class="add-form-button">Написать</button>
    </div>
  </div>` : `<a id="link-to-login">Что бы добавить комментарий, авторизуйтесь</a>`}
  `
    appElement.innerHTML = commentPageHtml;
    const buttonElement = document.getElementById('add-button');

    const nameInputElement = document.getElementById('name-input');
    const commentInputElement = document.getElementById('comment-input');
    const linkToLogin = document.getElementById('link-to-login');

    const buttonElements = document.querySelectorAll(".like-button");

    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener("click", (event) => {
            event.stopPropagation();
            // индекс = номер объекта в массиве, получаем из дата-атрибут кнопки на которую кликаем
            const index = buttonElement.dataset.index;
            // обращаемся к свойству isLiked объекта, который мы получили из массива comments по индексу 
            if (comments[index].isLiked) {
                comments[index].isLiked = false;
                comments[index].likes--;
            } else {
                comments[index].isLiked = true;
                comments[index].likes++;
            }

            renderComments(comments);
        });
    }
    linkToLogin?.addEventListener('click', () => {
        renderLogin();
    })
    buttonElement?.addEventListener('click', () => {

        nameInputElement.classList.remove('error');
        commentInputElement.classList.remove('error');

        if (nameInputElement.value === '') {
            nameInputElement.classList.add('error');
            return;
        }
        if (commentInputElement.value === '') {
            commentInputElement.classList.add('error');
            return;
        }
    })
}
// тут писать?
// renderLogin();
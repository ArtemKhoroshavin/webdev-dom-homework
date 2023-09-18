import { postComments, getComments } from "./api.js";
const buttonElement = document.getElementById('add-button');
    const commentElement = document.getElementById('comments');
    const nameInputElement = document.getElementById('name-input');
    const commentInputElement = document.getElementById('comment-input');
    const newDate = new Date();
    const listElement = document.getElementById("comments");

      function start() {
    let start = document.getElementById('start');
    if (start.style.display === 'none') {
      start.style.display = 'block';
    } else {
    start.style.display = 'none';
    }
  };
  
    
      getComments().then((responseData) => {

        comments = responseData.comments.map((comment) => {
          return {
            name: comment.author.name,
            date: newDate,
            comment: comment.text,
            likes: comment.likes,
            Iliked: 0,
    };
        });
        start();
  renderComments();
});


    let comments = [];

    const initEventListeners = () => {
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
          
          renderComments();
        });
      }

      const commentsElements = document.querySelectorAll(".comment");
      for(const comment of commentsElements) {
        comment.addEventListener("click", () => {
          const comments = comment.dataset.comments;
          commentInputElement.value = comments;
        });
      };
    };

    const renderComments = () => {
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

      listElement.innerHTML = commentsHtml;

      initEventListeners();
    };
    
    renderComments();

    const likesElements = document.querySelectorAll(".likes");

    initEventListeners();

    renderComments();

    buttonElement.addEventListener('click', () => {
      
      nameInputElement.classList.remove('error');
      commentInputElement.classList.remove('error');

      if(nameInputElement.value === '') {
        nameInputElement.classList.add('error');
        return;
      }
      if(commentInputElement.value === '') {
        commentInputElement.classList.add('error');
        return;
      }
    
    buttonElement.disabled = true;
    buttonElement.textContent = 'Ждём, комментарий добавляется...';

   // тут(строчка ниже) был POST
    postComments({ 
      comment: commentInputElement.value,
      
     }).then((response) => {
    if(response.status === 201) {
      return response.json();
    } else {
      if (response.status === 400) throw new Error("Мало символов")
        if (response.status === 500) throw new Error("Сервер упал")
        throw new Error ("Сломался интернет")
    }
  })
  .then((responseData) => {
    return fetch("https://wedev-api.sky.pro/api/v1/artem-khoroshavin/comments", {
        method: "GET"
      });
  })
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    comments = responseData.comments.map((comment) => {
          return {
            name: comment.author.name,
            date: newDate,
            comment: comment.text,
            likes: comment.likes,
            Iliked: 0,
    };
        });
        buttonElement.disabled = false;
        buttonElement.textContent = 'Написать';
        nameInputElement.value = '';
        commentInputElement.value = '';
  
  renderComments();
  }).catch((error) => {
        buttonElement.disabled = false;
        buttonElement.textContent = 'Написать';
        if (error.message === "Мало символов") return alert ('Введите больше 3-х символов')
      alert('Кажется, у вас сломался интернет, попробуйте позже');
      console.warn(error);
  })
    
    renderComments();

    })
    // Код писать здесь
    // console.log("It works!");
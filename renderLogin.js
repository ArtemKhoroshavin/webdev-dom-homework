import { login, setToken, setUser } from "./api.js";
import { renderComments } from "./renderComments.js";
import { comments } from "./main.js";


export const renderLogin = () => {
    const appElement = document.querySelector(".container");
    const loginHtml = `
    <h1>Страница входа</h1>
    <div class="add-form">
        <h3 class="add-form-title">Форма входа</h3>
        <div class="add-form-row">
            <input type="text" id="login-input" class="add-form-name" placeholder="Логин">
            <input 
            type="text"
            id="password-input"
            class="add-form-name"
            placeholder="Пароль"
            />
        </div>
        <br />
        <button class="add-form-button" id="login-button">Войти</button>
        <a class="add-form-button" href="index.html" id="link-to-comments">Перейти на страницу комментариев</a>
    </div>
    `;
    appElement.innerHTML = loginHtml;
    const loginInputElement = document.getElementById("login-input");
    const passwordInputElement = document.getElementById("password-input");
    const buttonElement = document.getElementById("login-button");
    buttonElement.addEventListener("click",() => {
        const loginValue = loginInputElement.value
        const passwordValue = passwordInputElement.value
        login({login: loginValue, password: passwordValue}).then((responseData) => {
            setUser(responseData.user);
            renderComments(comments);
        })
    });  
};
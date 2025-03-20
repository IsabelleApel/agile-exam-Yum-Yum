import { oData } from "../data/data.js";
import { getElement } from "../Utils/domUtils.js";
import { fetchUsers } from "./api.js";

export async function importUsers() {
  let users = [];

  try {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }
  } catch (error) {
    console.error("invalida JSON in localStorage. Clearing storage");
    localStorage.removeItem("users");
  }

  if (users.length === 0) {
    let fetchedUsers = await fetchUsers();

    if (fetchedUsers) {
      localStorage.setItem("users", JSON.stringify(fetchedUsers));
    }
  }
}

export function validateLogin() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const usernameRef = getElement("#username");
  const passwordRef = getElement("#password");
  const errorMsg = getElement("#errorMsg");

  const user = users.find((user) => user.username === usernameRef.value);

    try {
        if(!usernameRef.value){
            throw{
                message : 'Skriv in ditt användarnamn',
                nodeRef : usernameRef,
            }
        }else if(!user){
            throw{
                message : 'Användarnamnet finns inte',
                nodeRef : usernameRef,
            }
        }else if(!passwordRef.value){
            throw{
                message : 'Skriv in ditt lösenord',
                nodeRef : passwordRef,
            }
        }else if(user.password !== passwordRef.value){
            throw{
                message : 'Fel lösenord',
                nodeRef : passwordRef,
            }
        }
        localStorage.setItem('loggedIn', JSON.stringify(user));
        
        if (user.role === 'admin') {
            window.location.href = "/adminPage.html";
        } else {
            window.location.href = "/menu.html";
        }
        localStorage.setItem("loggedInUser", usernameRef.value); 
    } catch (error) {
        errorMsg.textContent = error.message;
        error.nodeRef.focus();
    }
}

export function validateForm() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const usernameRef = getElement("#username");
  const emailRef = getElement("#email");
  const passwordRef = getElement("#password");
  const errorMsg = getElement("#errorMsg");

    try {
        if(!usernameRef.value){
            throw{
                message : 'Välj ett användarnamn',
                nodeRef : usernameRef,
            }
        }else if(usernameRef.value.trim().length < 4){
            throw{
                message : 'Användarnamnet måste innehålla minst 4 tecken',
                nodeRef : usernameRef,
            };
        }else if(users.some(user => user.username === usernameRef.value)){
            throw{
                message : 'Användarnamnet är redan taget, välj ett annat',
                nodeRef : usernameRef,
            }
        }else if(!emailRef.value){
            throw{
                message : 'Skriv in en e-mailadress',
                nodeRef : emailRef,
            }
        }else if(users.some(user => user.email === emailRef.value)){
            throw{
                message : 'E-mailadressen är redan taget, välj ett annat',
                nodeRef : emailRef,
            }
        }else if(!passwordRef.value){
            throw{
                message : 'Välj ett lösenord',
                nodeRef : passwordRef,
            }
        }
     
    errorMsg.textContent = "";
    let newUser = {
      username: usernameRef.value,
      password: passwordRef.value,
      role: "user",
      email: emailRef.value,
      profile_image: `../../assets/profile-img/${randomImg()}`,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", usernameRef.value); 

    localStorage.setItem("loggedIn", JSON.stringify(newUser));

    window.location.href = "/menu.html";
  } catch (error) {
    errorMsg.textContent = error.message;
    error.nodeRef.focus();
  }
}

function randomImg() {
  const randomIndex = Math.floor(Math.random() * oData.profileImages.length);
  return oData.profileImages[randomIndex];
}

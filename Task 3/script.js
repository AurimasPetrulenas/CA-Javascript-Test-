/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener("click", fetchPosts);

function fetchPosts() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = document.getElementById("#output");
      data.forEach((user) => {
        output += `
       <div class="user-card">
          <h3 class="user-name">${user.login}</h3>
          <img class="img-style" src="${user.avatar_url}" alt="img"/>
       </div>   
    `;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

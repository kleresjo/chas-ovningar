// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.

const usersElement = document.getElementById("users");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((users) => {
    const usersEl = document.createElement("div");
    usersEl.innerHTML = `<div class="users-div"><h2>${users.name}</h2><p>${users.email}</p><p>${users.address.city}</p></div><hr>`;

    usersElement.appendChild(usersEl);
  });

  console.log(data);
}

getTodos();
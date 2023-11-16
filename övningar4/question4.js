// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.

const photosElement = document.getElementById("photos");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const filteredData = data.filter((photo) => photo.id <= 20);

  filteredData.forEach((photo) => {
    const photoEl = document.createElement("div");
    photoEl.innerHTML = ` <img src="${photo.url}"></img>`;

    photosElement.appendChild(photoEl);
  });

  console.log(data);
}

getTodos();
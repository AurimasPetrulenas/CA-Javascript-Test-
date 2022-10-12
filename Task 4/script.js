/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
window.addEventListener("load", function fetchPosts() {
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      let output = document.getElementById("#output");
      data.forEach((car) => {
        output += `
       <div class="car-card">
          <h3 class="car-brand">${car.brand}</h3>
          ${
            "<ul>" +
            car.models
              .map(function (model) {
                return "<li>" + model + "</li>";
              })
              .join("") +
            "</ul>"
          }
       </div>
       `;
      });
      document.querySelector("#output").innerHTML = output;
    });
});

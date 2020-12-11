let lista = document.getElementById("locality-dropdown");
let divMexico = document.getElementById("mexico");
lista.length = 0; // se usa para limpiar opciones con las que empieza

//crear la default option para la lista

let defaultOption = document.createElement("option");

defaultOption.text = "Selecciona una ciudad...";

lista.add(defaultOption);
lista.selectedIndex = 0;

// el selected index literal selecciona el valor de una dropdown list
//el lista.add es para agregar esa opciones

const url =
  "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json";
// en esta linea va la liga de Json

// creas el requestw
const request = new XMLHttpRequest();
request.open("GET", url, true);
// el onload es lo que va a pasar cuando

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    //console.log ('request exitosa')
    console.log(data.Mexico.length);
    let option;

    for (let i = 0; i < data.Mexico.length; i++) {
      option = document.createElement("option");
      option.text = data.Mexico[i];
      option.value = data.Mexico[i];
      lista.add(option); // le agregamos la propiedad
      console.log(data.Mexico[i]); // si lo esta mandando
    }
  } else {
    //Reached the server, but it returned an error
    //divMexico.innerHTML = `<p> ${data.Mexico}</p>`
  }
};

request.onerror = function () {
  console.error("An error occurred fetching the JSON from " + url);
};

request.send();

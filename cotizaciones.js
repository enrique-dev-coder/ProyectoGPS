const prueba = document.getElementById("prueba");
const lista = document.getElementById("locality-dropdown");
let option;
lista.length = 0; // se usa para limpiar opciones con las que empieza

//crear la default option para la lista

let defaultOption = document.createElement("option");

defaultOption.text = "Selecciona una ciudad...";

lista.add(defaultOption);
lista.selectedIndex = 0;

const listaEstados = document.getElementById("listaEstados");
let defaultOptionEstado = document.createElement("option");
defaultOptionEstado.text = "Selecciona tu Estado...";

listaEstados.length = 0;
listaEstados.add(defaultOptionEstado);
listaEstados.selectedIndex = 0;
let arrayPrueba = [];
let arrayEstados = [];
let soloEstados;

fetch("mx.json")
  .then((results) => results.json()) // es una promesa para llamar a la base de datos (estudiar mas, checar el curso de las peliculas)
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      //console.log(data[i].admin_name);

      arrayEstados.push(data[i].admin_name); // esto lo hice para que te pusiera un array de solo los puros nombres de Estados
    }

    let setArray = [...new Set(arrayEstados)]; // el ...new Set() en una variable sola te crea un array SIN valores repetidos
    //console.log(setArray);

    for (let i = 0; i < setArray.length; i++) {
      option = document.createElement("option");
      option.text = setArray[i];
      option.value = setArray[i];
      listaEstados.add(option);
    }

    listaEstados.addEventListener("change", () => {
      // let cityFilter = function (value) {
      //   return arrayPrueba.filter((data) => data.admin_name === value); // con esta funcion puedes sustituir  para bsucar cada estado
      // };

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].city;
        option.value = data[i].city;
        lista.add(option); // le agregamos la propiedad
      }
    });
  });

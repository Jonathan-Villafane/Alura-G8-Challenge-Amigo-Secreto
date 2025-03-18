// El principal objetivo de este desafío es fortalecer tus habilidades
// en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let outListaAmigos = document.getElementById('listaAmigos')
let outResultado = document.getElementById('resultado')
let inAmigo = document.getElementById('amigo');

/*  prueba onclick del boton añadir
function agregarAmigo() {
  console.log("test");
}
*/

// listaAmigos sirve para mostrar los amigos agregados

//posible forma de validar imput de entrada
// input.trim() === ""

// estuve unas horas para encontrar la formade para el if
// hasta que encontré el return, porque sino, se agregaba un espacio dentro dl array
function agregarAmigo() {
  if (inAmigo.value == "") {
    window.alert("Debe ingresar un nombre valido");
    return;
  }
  listaAmigos.push(inAmigo.value);
//console.log(listaAmigos);
  outListaAmigos.innerHTML += `<H1><li>${inAmigo.value}</li></H1>`;
}

// IMPORTANTE el math lleva mayuscula, estuve unos minutos buscando el error en la sintaxis.
function sortearAmigo() {
  let sorteoIndice = Math.floor(Math.random() * listaAmigos.length);
  let sorteoAmigo = listaAmigos[sorteoIndice];
  outResultado.innerHTML = `<H1>El amigo secreto es: ${sorteoAmigo}</H1>`;
//console.log(sorteoAmigo);
//console.log(listaAmigos);
}



// no pude lograr resetear la lista, para que solo aparezca el amigo sorteado
/*
function reseteo() {
    listaAmigos = []
    let reseteoLista = document.getElementById('listaAmigos');
    console.log(listaAmigos);
    reseteoLista = '';
}
*/

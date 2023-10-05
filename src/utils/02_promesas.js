/**ASYNC -> PROMESAS */

/**
 * Una promesa es un objeto especial en JS
 * El valor puede estar : ahora - en futuro - nunca
 * 2015 - Gestionar asincronia de una forma ma ordenada y legible
 */


// Ejemplo1️⃣ - [promea resuelta en lo inmediato]

// const condicion = false

// let promise = new Promise(function (resolve, reject) {
//   if (condicion) {
//     resolve('Me ejecute con exito inmediatamente ✅')
//   } else {
//     reject('Hubo un error ❌')
//   }
// })


// console.log(promise); // Promise { 'Me ejecute con exito inmediatamente ✅' }

//Manejos de promesa
/**
 * .then() //luego que resolvio, caputra el valor de la misma
 * .cath() //capturar el error
 *
 */

// promise
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e))


// Ejemplo2️⃣ - [promea resuelta en el futuro]

const promiseFuture = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Me ejecute en tan solo 5,5 segundos ✅')
  }, 5500)
})

console.log(promiseFuture); //Promise { <pending> }

promiseFuture
  .then((res) => console.log(res)) // res hace referencia a response
  .catch((error) => console.log(error)) //Me ejecute en tan solo 5,5 segundos ✅
  .finally(() => console.log('Termino la promesa ✅'))

console.log('tengo prisa, ejecutar ya y no quiero esperar 5 segundos');


//LLAMADO API
/**API (Application Programming Interface ) 
 
 *JSON -> (JavaScript  Object Notation) {propiedad:valor, propiedad2:valor2}, es un formato de intercambio ligero. 
 Su notacion es dervida de los objectos en JS, es decir que nomenclatura es bastante similar a los objetos que ya conocemos.

 * Es ampliamente utilzado para intercambiar informacion entre el front end con el backend.
 *
*/


function consumirApiFetch() { //fetch = buscar
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      for (const value of data) {
        ul.innerHTML += `
        <li>
          <h3>${value.title}</h3>
          <h4>${value.body}</h4>
        </li>
      `
      }
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('termine de hacer la peticion ✅ '))
}

const ul = document.querySelector("#ul")

consumirApiFetch()
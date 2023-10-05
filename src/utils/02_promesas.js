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
//ASYNC -> CALLBACKS


//Un callback, es una funcion que se pasa como argumento de otra funcion(funcion principal), con la salvedad, que el callback se ejecutara cuando las tareas de la primer funcion se hayan llevado a cabo.

function saludar(callback) {
  setTimeout(function () {
    console.log('Han pasado tan solo 5 segundos desde que el se ejecuto la funcion ✅');
    callback()
  }, 5000)
}

function callbackPrint() {
  console.log('Gracias funcion principal por terminar, gracias a ti ahora me puedo ejeuctar soy el callback✅');
}

saludar(callbackPrint)
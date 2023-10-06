// async function asyncAwait() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   try {
//     const data = await res.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
const dataApi = []
// asyncAwait() 

async function fetchApi() {
  const buscarUrl = await fetch('https://jsonplaceholder.typicode.com/posts')
  try {
    const data = await buscarUrl.json()
    for (const value of data) {
      dataApi.push(value)
    }
  } catch (error) {
    console.log(error);
  }
}

fetchApi()

setTimeout(() => {
  console.log(dataApi);
}, 1000);


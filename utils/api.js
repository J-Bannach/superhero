export async function getSuperheroes(name) {
  return fetch(
    `https://cors.machens.koeln/https://superheroapi.com/api/10157586572816260/search/${name}`
  )
    .then((response) => response.json())
    .then((response) => response.results);
}

// export async function getSuperheroes(id) {
//   const promise = fetch(
//     `https://cors.machens.koeln/https://superheroapi.com/api/10157586572816260/${id}`
//   );
//   const response = await promise;
//   if (response.status === 404) {
//     return [];
//   }
//   const data = await response.json();
//   return data.results;
// }

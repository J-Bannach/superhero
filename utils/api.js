// export async function getCharacters(id) {
//   const promise = fetch(
//     `https://cors.machens.koeln/https://superheroapi.com/api/10157586572816260/${id}`
//   )
//     .then((response) => response.json())
//     .then(console.log);
// }

export async function getCharacters(id) {
  const promise = fetch(
    `https://cors.machens.koeln/https://superheroapi.com/api/10157586572816260/${id}`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data.results;
}

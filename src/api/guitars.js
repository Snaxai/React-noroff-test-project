export function apiFetchAllGuitars() {
  return fetch("https://dce-noroff-api.herokuapp.com/guitars") // Promise - Eventloop
    .then((response) => response.json())
}

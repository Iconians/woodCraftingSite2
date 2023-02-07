export const deleteFetch = (getFavorite: any) => {
  return fetch(`http://localhost:3000/favorites/${getFavorite.id}`, {
    method: "DELETE",
  })
}
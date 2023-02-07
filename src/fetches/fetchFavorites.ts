export const fetchFavorites = () => {
  return fetch("http://localhost:3000/favorites")
  .then((data) => data.json())
}
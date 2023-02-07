export const fetchCarvings = () => {
  return fetch("http://localhost:3000/carvings")
  .then((res) => res.json())
}
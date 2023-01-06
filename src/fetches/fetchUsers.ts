export const fetchUsers = () => {
  return fetch("http://localhost:3000/users")
  .then((res) => res.json())
}
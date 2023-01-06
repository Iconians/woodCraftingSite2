export const addUserFetch = (user: object) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
}
export const addFavorite = (userId: any, id: number) => {
  return fetch("http://localhost:3000/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, carvingId: id }),
  })
}
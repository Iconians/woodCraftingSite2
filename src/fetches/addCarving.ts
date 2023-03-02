export const addCarvings = (carving: object) => {
  return fetch("http://localhost:3000/carvings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carving),
  });
};

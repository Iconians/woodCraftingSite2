export const addPurchase = (formData: object) => {
  return fetch("http://localhost:3000/purchases", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
}
import { Carving } from "../interfaces";

export const addToUserCart = (item: Carving, userId: number) => {
  return fetch("http://localhost:3000/userCart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, productId: item.id }),
  });
};

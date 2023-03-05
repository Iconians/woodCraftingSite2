import { writeFileSync } from "fs";
import { seedDB } from "./src/seedDB";
import { faker } from "@faker-js/faker";
import { sample } from "lodash-es";

// const name = faker.name.findName()

// const images = [
//   "./src/assets/bear.jpg",
//   "./src/assets/chair.jpg",
//   "./src/assets/elephant.jpg",
//   "./src/assets/helmet.jpg",
//   "./src/assets/intricate.jpg",
//   "./src/assets/owl.jpg",
//   "./src/assets/thaiChi.jpg",
// ]

// const seedDatabase = {
//   users: [
//     {
//       id: 1,
//       username: "user name",
//       email: faker.internet.email(name),
//       password: faker.internet.password(),
//     },
//   ],
//   carvings: [
//     {
//       id: 1,
//       image: sample(images),
//       carvingName: faker.commerce.product.name,
//       userId: 1,
//       carverName: "users name",
//       availableToPurchase: true,
//       story: faker.random.words(30),
//       type: sample([ "handCarved", "machinedCarved"]),
//       price: faker.commerce.price(),
//       qty: 1,
//     },
//     {
//       id: 1,
//       image: sample(images),
//       carvingName: faker.commerce.product.name,
//       userId: 1,
//       carverName: "users name",
//       availableToPurchase: false,
//       story: faker.random.words(30),
//       type: sample([ "handCarved", "machinedCarved"]),
//       price: null,
//       qty: 1,
//     },
//   ],
//   userCart: [],
//   favorites: [],
//   purchases: [],
// };

writeFileSync("db.json", JSON.stringify(seedDB), { encoding: "utf-8" });

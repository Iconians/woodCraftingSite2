import { writeFileSync } from "fs";
import { seedDB } from "./src/seedDB";
import { faker } from "@faker-js/faker";

const seedDatabase = {
  users: [
    {
      id: 1,
      username: "username",
      email: "name",
      password: "password",
    },
  ],
  carvings: [
    {
      id: 1,
      image: "src/assets/bear.jpg",
      carvingName: "Bear",
      userId: 3,
      carverName: "users name",
      availableToPurchase: false,
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "machinedCarved",
      price: null,
      qty: 1,
    },
  ],
  userCart: [],
  favorites: [],
  purchases: [],
};

writeFileSync("db.json", JSON.stringify(seedDB), { encoding: "utf-8" });

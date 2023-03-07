import { writeFileSync } from "fs";
// import { seedDB } from "./src/seedDB";
// import { faker } from "@faker-js/faker";
// import { sample } from "lodash-es";

const seedDB = {
  users: [
    {
      name: "userName",
      email: "email@gmail.com",
      password: "password",
      id: 1,
    },
  ],
  carvings: [
    {
      id: 1,
      image: "src/assets/bear.jpg",
      carvingName: "Bear",
      userId: 1,
      carverName: "userName",
      availableToPurchase: false,
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "machinedCarved",
      price: null,
      qty: 1,
    },
    {
      id: 2,
      image: "src/assets/chair.jpg",
      carvingName: "Chair with dog",
      userId: 1,
      carverName: "userName",
      availableToPurchase: true,
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: "machineCarved",
      price: 269,
      qty: 1,
    },
    {
      carvingName: "Chair with dog",
      image: "/src/assets/chair.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Lacus laoreet non curabitur gravida arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius duis at consectetur lorem donec. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Donec ultrices tincidunt arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Quisque id diam vel quam elementum. Et egestas quis ipsum suspendisse ultrices. Sapien et ligula ullamcorper malesuada proin. Gravida rutrum quisque non tellus orci.\n\nSit amet risus nullam eget felis eget. Integer feugiat scelerisque varius morbi enim nunc faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nascetur ridiculus mus mauris vitae. Sem fringilla ut morbi tincidunt augue. Risus quis varius quam quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed. Lacus viverra vitae congue eu consequat ac felis donec. Eget arcu dictum varius duis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tempus quam pellentesque nec nam aliquam.",
      type: "machinedCarved",
      availableToPurchase: false,
      price: null,
      userId: 1,
      carversName: "userName",
      qty: 1,
      id: 3,
    },
    {
      carvingName: "Elephant",
      image: "/src/assets/elephant.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Lacus laoreet non curabitur gravida arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius duis at consectetur lorem donec. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Donec ultrices tincidunt arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Quisque id diam vel quam elementum. Et egestas quis ipsum suspendisse ultrices. Sapien et ligula ullamcorper malesuada proin. Gravida rutrum quisque non tellus orci.\n\nSit amet risus nullam eget felis eget. Integer feugiat scelerisque varius morbi enim nunc faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nascetur ridiculus mus mauris vitae. Sem fringilla ut morbi tincidunt augue. Risus quis varius quam quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed. Lacus viverra vitae congue eu consequat ac felis donec. Eget arcu dictum varius duis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tempus quam pellentesque nec nam aliquam.",
      type: "handCarved",
      availableToPurchase: true,
      price: 300,
      userId: 1,
      carversName: "userName",
      qty: 1,
      id: 4,
    },
    {
      carvingName: "Helmet",
      image: "/src/assets/helmet.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Lacus laoreet non curabitur gravida arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius duis at consectetur lorem donec. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Donec ultrices tincidunt arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Quisque id diam vel quam elementum. Et egestas quis ipsum suspendisse ultrices. Sapien et ligula ullamcorper malesuada proin. Gravida rutrum quisque non tellus orci.\n\nSit amet risus nullam eget felis eget. Integer feugiat scelerisque varius morbi enim nunc faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nascetur ridiculus mus mauris vitae. Sem fringilla ut morbi tincidunt augue. Risus quis varius quam quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed. Lacus viverra vitae congue eu consequat ac felis donec. Eget arcu dictum varius duis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tempus quam pellentesque nec nam aliquam.",
      type: "handCarved",
      availableToPurchase: true,
      price: 200,
      userId: 1,
      carversName: "userName",
      qty: 1,
      id: 5,
    },
    {
      carvingName: "Intricate Art work",
      image: "/src/assets/intricate.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Lacus laoreet non curabitur gravida arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius duis at consectetur lorem donec. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Donec ultrices tincidunt arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Quisque id diam vel quam elementum. Et egestas quis ipsum suspendisse ultrices. Sapien et ligula ullamcorper malesuada proin. Gravida rutrum quisque non tellus orci.\n\nSit amet risus nullam eget felis eget. Integer feugiat scelerisque varius morbi enim nunc faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nascetur ridiculus mus mauris vitae. Sem fringilla ut morbi tincidunt augue. Risus quis varius quam quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed. Lacus viverra vitae congue eu consequat ac felis donec. Eget arcu dictum varius duis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tempus quam pellentesque nec nam aliquam.",
      type: "handCarved",
      availableToPurchase: false,
      price: null,
      userId: 1,
      carversName: "userName",
      qty: 1,
      id: 6,
    },
    {
      carvingName: "Owl",
      image: "/src/assets/owl.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Lacus laoreet non curabitur gravida arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius duis at consectetur lorem donec. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Donec ultrices tincidunt arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Quisque id diam vel quam elementum. Et egestas quis ipsum suspendisse ultrices. Sapien et ligula ullamcorper malesuada proin. Gravida rutrum quisque non tellus orci.\n\nSit amet risus nullam eget felis eget. Integer feugiat scelerisque varius morbi enim nunc faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nascetur ridiculus mus mauris vitae. Sem fringilla ut morbi tincidunt augue. Risus quis varius quam quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed. Lacus viverra vitae congue eu consequat ac felis donec. Eget arcu dictum varius duis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tempus quam pellentesque nec nam aliquam.",
      type: "handCarved",
      availableToPurchase: false,
      price: null,
      userId: 1,
      carversName: "userName",
      qty: 1,
      id: 7,
    },
    {
      carvingName: "Flower",
      image: "/src/assets/thaiChi.jpg",
      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Lacus laoreet non curabitur gravida arcu. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Varius duis at consectetur lorem donec. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Donec ultrices tincidunt arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Quisque id diam vel quam elementum. Et egestas quis ipsum suspendisse ultrices. Sapien et ligula ullamcorper malesuada proin. Gravida rutrum quisque non tellus orci.\n\nSit amet risus nullam eget felis eget. Integer feugiat scelerisque varius morbi enim nunc faucibus. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nascetur ridiculus mus mauris vitae. Sem fringilla ut morbi tincidunt augue. Risus quis varius quam quisque id diam vel quam. Vestibulum mattis ullamcorper velit sed. Lacus viverra vitae congue eu consequat ac felis donec. Eget arcu dictum varius duis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tempus quam pellentesque nec nam aliquam.",
      type: "machinedCarved",
      availableToPurchase: false,
      price: null,
      userId: 1,
      carversName: "userName",
      qty: 1,
      id: 8,
    },
  ],
  userCart: [],
  favorites: [],
  purchases: [],
};

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
//       username: "userName",
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
//       carverName: "usersName",
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
//       carverName: "usersName",
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

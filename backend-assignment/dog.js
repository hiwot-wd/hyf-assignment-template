/** @format */

//Dog API
const express = require("express");
const app = express();
const port = 3000;
//fetch five random dog images
app.get("/dogs/random", async (req, res) => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
  const data = await response.json();
  const html = `
<h1> Random Dog Gallery </h1> 
${data.message
  .map((url) => `<img src="${url}" style="max-width:300px;margin:10px;"/>`)
  .join("")}
`;
  res.send(html);
});
//List all dog breeds
app.get("/dogs/breeds", async (req, res) => {
  const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const data = await response.json();
  const breeds = Object.entries(data.message).map(([breed, subBreeds]) => {
    return subBreeds.length > 0 ? `${breed}(${subBreeds.join(", ")})` : breed;
  });
  const html = `
  <h1> Dog Breeds List</h1>
  <ul>
  ${breeds.map((breed) => `<li>${breed}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});
//Get 3 dog images from the "beagle" breed
app.get("/dogs/beagle/images", async (req, res) => {
  const response = await fetch(
    "https://dog.ceo/api/breed/beagle/images/random/3"
  );
  const data = await response.json();
  const html = `
  <h1>Beagle Gallery</h1>
  ${data.message
    .map((url) => `<img src="${url}" style="max-width:300px;margin:10px;"/>`)
    .join("")} 
    `;
  res.send(html);
});
//List all the sub-breeds of the poodle
app.get("/dogs/poodle/sub-breeds", async (req, res) => {
  const response = await fetch("https://dog.ceo/api/breed/poodle/list");
  const data = await response.json();
  const html = `
   <h1>Poodle Sub-Breeds</h1>
  <ul>
  ${data.message.map((subBreed) => `<li>${subBreed}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});
//Get all the dog images from the "toy poodle" sub breed
app.get("/dogs/poodle/toy/images", async (req, res) => {
  const response = await fetch("https://dog.ceo/api/breed/poodle/toy/images");
  const data = await response.json();
  const html = `
 <h1>Toy Poodle Gallery</h1>
 ${data.message
   .map((url) => `<img src="${url}" style="max-width:300px;margin:10px;"/>`)
   .join("")}
 `;
  res.send(html);
});
app.listen(port, () => {
  console.log(`Dog API server running at http://Localhost:${port}`);
});

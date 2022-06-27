const form = document.querySelector("form");
const input = document.querySelector("input");
const div = document.querySelector("div");
const delButton = document.querySelector("#delete");
let gify;
let image;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Getting Data from Search Input
  const searchInput = input.value;

  async function getGify(params) {
    let res = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    // Generating Image and Using Search Value to generate the current Image
    gify = res.data.data[0].images.downsized.url;
    image = new Image();
    image.src = gify;
    div.appendChild(image);
  }
  getGify();

  input.value = "";

  delButton.addEventListener("click", (e) => {
    div.remove();
  });
});

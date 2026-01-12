/** @format */
function sortStudent() {
  const inputElement = document.getElementById("Student-Name");
  const buttonElement = document.getElementById("Sort-Button");
  const houseText = document.getElementById("house-Text");
  const tagElement = document.getElementById("Sorted-House");

  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  const houseImages = {
    Gryffindor: "gryffindor.png",
    Hufflepuff: "hufflepuff.png",
    Ravenclaw: "ravenclaw.png",
    Slytherin: "slytherin.png",
  };

  buttonElement.addEventListener("click", function () {
    const studentName = inputElement.value.trim();

    if (!studentName) {
      houseText.textContent = "please enter your name first.";

      inputElement.classList.add("animate__animated", "animate__shakeX");

      setTimeout(() => {
        inputElement.classList.remove("animate__animated", "animate__shakeX");
      }, 600);
      return;
    }

    const randomIndex = Math.floor(Math.random() * houses.length);
    const sortedHouse = houses[randomIndex];

    houseText.textContent =
      `${studentName} has been sorted into ${sortedHouse}!` +
      `Not happy? click again to try your luck.`;
    const houseImageElement = document.getElementById("houseImage");
    houseImageElement.src = houseImages[sortedHouse];
    houseImageElement.style.display = "block";

    houseText.classList.remove("animate__animated", "animate__fadeIn");
    houseImageElement.classList.remove("animate__animated", "animate__zoomIn");
    void houseText.offsetWidth;
    void houseImageElement.offsetWidth;

    houseText.classList.add("animate__animated", "animate__fadeIn");
    houseImageElement.classList.add("animate__animated", "animate__zoomIn");
    inputElement.value = "";
  });
}
sortStudent();

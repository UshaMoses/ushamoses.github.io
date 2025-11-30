//DOM references
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay"); 

//Array of image objects
const images = [
  { filename: "pic1.jpg", alt: "closeup of a human eye"},
    { filename: "pic2.jpg", alt: "rocky that looks like a wave"}
    { filename: "pic3.jpg", alt: "purple and white pansies"},
    { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb"},
    { filename: "pic5.jpg", alt: "large moth on a leaf"}
];
//base URL for images
const baseURL = https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

//FUNCTION TO UPDATE LARGE IMAGE
function updateDisplayedImage(imageElement)
 {
  displayedImage.src = imageElement.src;
  displayedImage.alt = imageElement.alt;
}
//loop through images to create thumbnails
for (const image of images) {
  const newImage = document.createElement("image");
  newImage.src = baseURL + image.filename;
  newImage.alt = image.alt;
  newImage.tabIndex = 0;
  thumbBar.appendChild(newImage);
}
//click event for thumbnails
newImage.addEventListener("click", () => {
  updateDisplayedImage(newImage)});

//keyboard support: Enter key
newImage.addEventListener("keydown", (event) => {
  if (event.key === "Enter") 
    updateDisplayedImage(newImage)
});
//darken/lighten button fuuctionality
btn.addEventListener("click", () => {
  if (btn.classList.contains("dark")) {
    btn.classList.remove("dark");
    btn.textContent = "lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.classList.add("dark");
    btn.textContent = "darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
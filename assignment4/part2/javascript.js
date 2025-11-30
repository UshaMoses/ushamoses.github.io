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
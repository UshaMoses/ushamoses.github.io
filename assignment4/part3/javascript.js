// --- Canvas setup ---
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// ----------- SHAPE SUPER CLASS -----------
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
  }

// Utility — Random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Utility — Random color
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

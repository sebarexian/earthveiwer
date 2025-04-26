let x = 0;
let y = 0;
let speed = 0.02;  // Control the speed of the rotation
let zoom= 200

function setup() {
  createCanvas(800, 800, WEBGL);
  let img = loadImage("https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg");
  texture(img);
  noStroke();
}

function draw() {
  background(220);
  
  // Apply rotations based on user input
  rotateX(y);
  rotateY(x);
  
  // Control the rotation speed based on key presses
  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    x += speed; // Move right
  }
  if (keyIsPressed && keyCode === LEFT_ARROW) {
    x -= speed; // Move left
  }
  if (keyIsPressed && keyCode === UP_ARROW) {
    y += speed; // Move up
  }
  if (keyIsPressed && keyCode === DOWN_ARROW) {
    y -= speed; // Move down
  } if (keyIsPressed&&keyCode===87){zoom++}
  if (keyIsPressed&&keyCode===83){zoom--}
  
  sphere(zoom); // Adds a sphere with the applied rotation
}

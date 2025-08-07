let particles = [];
let centerX, centerY;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  // Center for melt logic
  centerX = width / 2;
  centerY = height / 2;
  
  // Create a grid of "molecules"
  let cols = 20;
  let rows = 20;
  let spacing = 15;
  let startX = 100;
  let startY = 100;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = startX + i * spacing;
      let y = startY + j * spacing;
      particles.push(new Particle(x, y));
    }
  }
}

function draw() {
  background(220);

  for (let p of particles) {
    p.update();
    p.display();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.originalY = y;
    this.velY = 0;
    this.melted = false;
  }

  update() {
    // Melting logic: more likely to melt if farther from center
    let d = dist(this.x, this.y, centerX, centerY);
    let meltChance = map(d, 0, 150, 0.0002, 0.02); // tune values
    if (!this.melted && random() < meltChance) {
      this.melted = true;
    }

    // Apply gravity if melted
    if (this.melted) {
      this.velY += 0.1;
      this.y += this.velY;
    }
  }

  display() {
    fill(this.melted ? 100 : 180, 200, 255);
    ellipse(this.x, this.y, 10, 10);
  }
}

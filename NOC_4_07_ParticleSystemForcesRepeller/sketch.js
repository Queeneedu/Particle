// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;
let repeller;
let light = [];

function setup() {
  createCanvas(640, 360);
  ps = new ParticleSystem(createVector(width / 2, 50));
  repeller = new Repeller(width / 2, height / 2);
}

function draw() {
  background(51);
  ps.addParticle(mouseX, mouseY);
  ps.addParticle(pmouseX, pmouseY);
  // Apply gravity force to all Particles
  // let gravity = createVector(0, 0.02);
  // ps.applyForce(gravity);
  ps.applyRepeller(repeller);

  for (let i = 0; i < light.length; i++) {
    light[i].run();
    // lightSystem[i].addParticle();
  }
  repeller.display();
  ps.run();
}
function mousePressed() {
  light.push(new Light(createVector(width/2,height/2)));
  light = light.filter(light => !light.isDead());
}

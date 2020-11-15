

class Light {
  constructor(pos) {
    this.pos = pos;
    this.lifespan = 200;
    this.light = 40;
  }


  run() {
    this.update();
    this.display();
    }

    update() {
      // this.velocity.add(this.acceleration);
      // this.position.add(this.velocity);
      this.lifespan -= 1;
      this.light += 5;

      // this.velocity.limit(5);
    }

    // Method to display
    display() {
      noStroke();
      fill(255, this.lifespan);
      ellipse(this.pos.x, this.pos.y, this.light, this.light);
    }


}

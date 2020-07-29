class Circle {
	constructor(x, y, d) {
		this.pos = createVector(x, y);
		this.d = d;
	}

	show() {
		strokeWeight(1);
		stroke(0);
		fill(0);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
	}

	distToSprite(position) {
		return (
			dist(this.pos.x, this.pos.y, position.x, position.y) - this.d / 2
		);
	}
}

class Square {
	constructor(x, y, l) {
		this.pos = createVector(x, y);
		this.l = l;
	}

	show() {
		strokeWeight(1);
		stroke(0);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.l, this.l);
	}

	distToSprite(position) {
		const minx = this.pos.x - this.l / 2;
		const miny = this.pos.y - this.l / 2;
		const maxx = this.pos.x + this.l / 2;
		const maxy = this.pos.y + this.l / 2;

		const dx = Math.max(minx - position.x, 0, position.x - maxx);
		const dy = Math.max(miny - position.y, 0, position.y - maxy);
		return sqrt(dx * dx + dy * dy);
	}
}

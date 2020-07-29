class Sprite {
	constructor() {
		this.pos = createVector(width / 2, height / 2);
	}

	show() {
		fill(0);
		stroke(0);
		ellipse(this.pos.x, this.pos.y, 5, 5);
	}

	setPos(x, y) {
		this.pos.x = x;
		this.pos.y = y;
	}

	castCircle(pt, r) {
		fill(0, 255, 0, 30);
		stroke(0);
		ellipse(pt.x, pt.y, r * 2, r * 2);
		fill(0);
	}

	rayMarching(start, angle) {
		let min = squares[0].distToSprite(start);
		for (let c of circles) {
			c.show();
			if (c.distToSprite(start) < min) {
				min = c.distToSprite(start);
			}
		}

		for (let sq of squares) {
			sq.show();
			if (sq.distToSprite(start) < min) {
				min = sq.distToSprite(start);
			}
		}
		line(
			start.x,
			start.y,
			start.x + cos(angle) * min,
			start.y + sin(angle) * min
		);
		this.castCircle(start, min);

		if (min <= 0.1) {
			intersections.push(createVector(start.x, start.y));
			return 1;
		} else if (min >= 200) {
			return Infinity;
		}

		const nextStart = createVector(
			start.x + cos(angle) * min,
			start.y + sin(angle) * min
		);
		stroke(0);
		strokeWeight(3);
		point(nextStart.x, nextStart.y);
		return min + this.rayMarching(nextStart, angle);
	}
}

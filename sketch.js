let s;
let circles = [];
let squares = [];
let angle = 0;
let intersections = [];

function setup() {
	createCanvas(600, 600);
	textSize(24);

	s = new Sprite();
	s.setPos(300, 300);

	// // demo1
	// circles[0] = new Circle(250, 200, 150);
	// circles[1] = new Circle(450, 400, 150);
	// squares[0] = new Square(800, 300, 600);

	// // demo2
	// circles[0] = new Circle(250, 200, 150);
	// circles[1] = new Circle(450, 400, 200);

	// // both
	squares[0] = new Square(490, 470, 160);
	circles[0] = new Circle(410, 450, 120);

	circles[1] = new Circle(100, 400, 160);
	circles[2] = new Circle(550, 200, 80);

	circles[0] = new Circle(150, 150, 150);
	circles[3] = new Circle(260, 130, 120);
	circles[4] = new Circle(400, 130, 100);
	squares[3] = new Square(460, 160, 100);

	squares[1] = new Square(80, 160, 110);
	squares[2] = new Square(350, 80, 100);

	squares[2] = new Square(230, 520, 80);
	squares[3] = new Square(520, 230, 80);
}

function draw() {
	for (let i = 0; i < 3; i++) {
		background(255);
		s.show();

		angle += 0.001;
		const d = s.rayMarching(s.pos, angle);

		text(`Distance: ${d.toFixed(2)}`, 10, 30);
		if (d !== Infinity) {
			text(
				`Point: (${intersections[intersections.length - 1].x.toFixed(
					2
				)}, ${intersections[intersections.length - 1].y.toFixed(2)})`,
				10,
				60
			);
		} else {
			text(`Point: no point`, 10, 60);
		}

		strokeWeight(2);
		stroke(255, 0, 0);
		for (let i of intersections) {
			point(i.x, i.y);
		}
	}
}

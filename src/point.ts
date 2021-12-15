export class Point {
	constructor(private x?: number, private y?: number) {}
	drawPoint() {
		console.log(`X : ${this.x}, Y: ${this.y}`);
	}
}

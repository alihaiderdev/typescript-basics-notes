"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// const button = document.querySelector('button');
// const n1 = document.getElementById('num1')! as HTMLInputElement; // this i stype casting in typescript
// const n2 = document.getElementById('num2')! as HTMLInputElement;
// function add(n1: number, n2: number) {
// 	return n1 + n2;
// }
// button.addEventListener('click', () => {
// 	// each and every kind of input value will always be a string
// 	console.log(add(+n1.value, +n2.value));
// });
// if we have compile time error then also tsc typescript compiler compile our .ts file to .js file
// // types in typescript
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3, 4, 45, 6, 78];
// let f: any[] = [1, 'ali', true];
// // enums in typescript
// // some related variables in JS
// const redColor = 0;
// const greenColor = 1;
// const blueColor = 2;
// automatically set values to 1, 2, 3 to color variables but if we set explicitly then it would be better
// enum Color {
// 	red,
// 	green,
// 	blue,
// }
// enum Color {
// 	red = 0,
// 	green = 1,
// 	blue = 2,
// }
// let bgColor = Color.blue;
// type assertion in typescipt
// let message = 'hello';
// message.endsWith('o');
// let message;
// message = 'Hello';
// // if we assign value to any variable we can access more its methods and other related stuff so in this case we use type assertion in typescript
// let firstWayOfTypeAssertion = (<string>message).endsWith('o'); //first way of type assertion
// let secondWayOfTypeAssertion = (message as string).endsWith('o'); //second way of type assertion
// // arrow functions in typescript
// let normalFunction = function (message) {
// 	console.log(message);
// };
// // OR
// let arrowFunction = (message) => {
// 	console.log(message);
// };
// custom types in typescript
// if our function have lost aof parameters then we should pass an object in function instead of so many argument passing in it
// let drawPoint = (point) => {
// 	//
// };
// drawPoint({ x: 1, y: 2 });
// but the issue with this approach is user mght be pass an object that have no x and y keys //#endregion
// to solve this issue we have 2 solutions
// 1. inline annotation
// let drawPoint = (point: { x: number; y: number }) => {
// 	//
// };
// drawPoint({ x: 1, y: 2 });
// this approach is ok and work fine but what if we have more than one function that uses the same point object then in this case we use interfaces
// any interface name should have first letter capitalize or should use pascal naming convention
// interface Point {
// 	x: number,
// 	y: number,
// }
// let drawPoint = (point: Point) => {
// 	//
// };
// drawPoint({ x: 1, y: 2 });
// cohesion : things that are related should be part of one unit they should go to gether
// we are not fulfilment of h=cohesion principle like all similar or related stuff in one unit like classes all properties and methods are at one place so to acheive this we can do this thing
// intefaces are purely for declaration not include any implementation
// // here Point is a class
// class Point {
// 	x: number;
// 	y: number;
// 	drawPoint() {
// 		console.log(`X : ${this.x}, Y: ${this.y}`);
// 	}
// }
// // let point: Point = new Point();
// // here this point is an object and an object is an instance of a class
// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.drawPoint();
// in typescript we can't have multiple constuctor but in C# we have
// class Point {
// 	private x: number;
// 	private y: number;
// 	// constructor(x: number, y: number) {
// 	constructor(x?: number, y?: number) {
// 		this.x = x;
// 		this.y = y;
// 	}
// 	drawPoint() {
// 		console.log(`X : ${this.x}, Y: ${this.y}`);
// 	}
// }
// let point = new Point(2, 4);
// // point.x = 5;  // here we override the point x coordinate but what if we restrict anyone to do such things after initialization of coordinates so we use access modifiers for it
// // access modifiers : is basically a keyword that we can apply to a member of a class to control it access from the outside
// // public;
// // private;
// // protected;
// // by default all members are public by default and the most common access modifiers are public and private and in our case our class has 3 members 2 properties and 1 method
// //  we can apply access modifiers to fields, properties and methods
// point.drawPoint();
// class Point {
// 	constructor(private x?: number, private y?: number) {
// 		// this.x = x;
// 		// this.y = y;
// 		// now in this way typescript compilar also do the above 2 line of code for us under the hood
// 		// but in this way if any field would be public then we declar it public manually
// 	}
// 	drawPoint() {
// 		console.log(`X : ${this.x}, Y: ${this.y}`);
// 	}
// }
// let point = new Point(2, 4);
// point.drawPoint();
// properties in typescript
// // now when we make our members private by using access modifiers we can't access it to show user or something like this
// class Point {
// 	constructor(private x?: number, private y?: number) {}
// 	drawPoint() {
// 		console.log(`X : ${this.x}, Y: ${this.y}`);
// 	}
// 	getX() {
// 		return this.x;
// 	}
// 	setX(value) {
// 		if (value < 0) {
// 			throw new Error('Value can not be less than 0.');
// 		}
// 		this.x = value;
// 	}
// }
// let point = new Point(2, 4);
// // getting and setting value of x although we make it private
// let x = point.getX(); // getting value of x
// point.setX(10); // setting value of x
// // now we can use properties for the same above scnerio for getting and setting values
// point.drawPoint();
// class Point {
// 	constructor(private _x?: number, private _y?: number) {}
// 	drawPoint() {
// 		console.log(`X : ${this._x}, Y: ${this._y}`);
// 	}
// 	// getter
// 	get x() {
// 		return this._x;
// 	}
// 	// setter
// 	set x(value) {
// 		if (value < 0) {
// 			throw new Error('Value can not be less than 0.');
// 		}
// 		this._x = value;
// 	}
// }
// let point = new Point(2, 4);
// let x = point.x; // getting value of x
// point.x = 20; // setting value of x
// point.drawPoint();
// modules in typescript
// let point = new Point(2, 4);
// point.drawPoint();
function hello() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 'world'];
        });
    });
}
// const person: Person = {
// 	first: 'ali',
// 	last: 'haider',
// 	middle: '',
// };
// to resolve the above error
// interface Person {
// 	first: string;
// 	last: string;
// 	[key: string]: any;
// }
// const person: Person = {
// 	first: 'ali',
// 	last: 'haider',
// 	middle: '',
// };
// function pow(x: number, y: number) {
// 	return Math.pow(x, y);
// }
// console.log(pow(2, 5));
// also declear type for return value if function return nothing then our type should be void
// function pow(x: number, y: number): string {
// 	return Math.pow(x, y).toString();
// }
// console.log(pow(2, 5));
// function pow(x: number, y: number): void {
// 	console.log(Math.pow(x, y));
// }
// pow(2, 5);
// new data structure called tuple
// tuple:  fixed length array where each element in this array has their own type
// const arr: number[] = [];
// arr.push(1);
// arr.push('ali');
// arr.push(true);
// type MyList = [number?, string?, boolean?];
// const arr: MyList = []; // we see this error because we initialize this array as empty array
// arr.push(1);
// arr.push('ali');
// arr.push(true);
// Generics in typescript
// use types internally like in class or a function
// class Observable<T> {
// 	constructor(public value: T) {}
// }
// let x = Observable<number>;
// let y = Observable<Person>;
// let z = new Observable(20)
// OOP vs functional
//  immutable data
// const data = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// // Function as arguments
// const addEmoji = (val) => toString(val) + ' 😊';
// const emojiData = data.map(addEmoji);
// console.log(emojiData);
// Function as return value
// this is very usefull when starts with some base functionality and then extend with some dynamic data
// const appendEmoji = (fixed) => (dynamic) => fixed + dynamic;
// const rain = appendEmoji('🌨');
// const sun = appendEmoji('🌞');
// console.log(rain(' today'));
// console.log(sun(' tomorrow'));
// class Emoji {
// 	icon: string;
// 	constructor(icon) {
// 		this.icon = icon;
// 	}
// }
// const sun = new Emoji('🌞');
// console.log(sun);
// in typscript we use the shorter way
// class Emoji {
// 	constructor(public icon) {}
// }
// const sun = new Emoji('🌞');
// console.log(sun);
// composition vs inheritence for code reuseablity
// class Human {
// 	constructor(public name) {}
// 	sayHi() {
// 		return `Hello, ${this.name}`;
// 	}
// }
// const ali = new Human('Ali Haider');
// console.log(ali.sayHi());
// class SuperHuman extends Human {
// 	heroName;
// 	constructor(name) {
// 		super(name);
// 		this.heroName = `HERO ${name}`;
// 	}
// 	superPower() {
// 		return `${this.heroName} pops treys 🔥🔥`;
// 	}
// }
// const ali = new SuperHuman('Ali Haider');
// console.log(ali.superPower());
// const hasName = (name) => {
// 	return { name };
// };
// const canSayHi = (name) => {
// 	return { sayHi: () => `Hello, ${name}` };
// };
// const Person = function (name) {
// 	return { ...hasName(name), ...canSayHi(name) };
// };
// const person = Person('Ali');
// console.log(person.sayHi());
// function applyMixins(derivedCtor: any, constructors: any[]) {
// 	constructors.forEach((baseCtor) => {
// 		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
// 			Object.defineProperty(
// 				derivedCtor.prototype,
// 				name,
// 				Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
// 					Object.create(null)
// 			);
// 		});
// 	});
// }
// class CanSayHi {
// 	name;
// 	sayHi() {
// 		return `Hello, ${this.name}`;
// 	}
// }
// class HasSuperPower {
// 	heroName;
// 	superPower() {
// 		return `${this.heroName} 🔥🔥🔥`;
// 	}
// }
// class SuperHero implements CanSayHi, HasSuperPower {
// 	heroName;
// 	constructor(public name) {
// 		this.heroName = `Super ${name}`;
// 	}
// 	sayHi: () => string;
// 	superPower: () => string;
// }
// applyMixins(SuperHero, [CanSayHi, HasSuperPower]);
// Union types in typescript
// let mixed: (string | number | boolean)[] = [];
// mixed.push('ali');
// mixed.push(23);
// mixed.push(true);
// console.log(mixed);
// let uuid: string | number;
// uuid = '12345';
// uuid = 12345;
// // Objects
// let ninjaOne: object;
// ninjaOne = { name: 'ali hiader', age: 23 };
// ninjaOne = ['hasnain', 'usman'];
// // ninjaOne = 'ali hiader';
// let ninjaTwo: { name: string; age: number; beltColor: string };
// ninjaTwo = {
// 	name: 'ali',
// 	age: 23,
// 	beltColor: 'black',
// };
// any type in typescript
// let age: any = 23;
// age = '23';
// console.log(age);
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = { name: 'ali' };
// console.log(age);
// age = [1, 2, 3, 4, 5];
// console.log(age);
// same we can use any typew with array ands objects
var ninja;

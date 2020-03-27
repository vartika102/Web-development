//JS is a scripting language that allows to implement complex things on webpages making it more alive and interactive.
//It is an interpreted language hence no compiler is needed.
//Mainly a client side scripting language.

//variable
let name='Harry Potter';//string
let option=true;//boolean
let height;//undefined
let eyecolour=null;//null

//constant
const pi=3.14;//number

//array
let shopping=[];
shopping = ['paint', 'colour', 'canvas'];

//sort array
let number=[];
number=[3,1,7,5,4,2,6];
number.push(8);
console.log(number.sort());

//example
let mix=[];
mix=['one',2,'three',4.2];
console.log(mix);

//object
let pen={
	type:'ballpoint',
	color:'black',
	cost:10,
	uses:['writing','scribling','drawing']
};
//objectname.propertyname
//objectname['propertyname']
console.log(pen.cost);
console.log(pen.uses[2]);

//function
function hello(){
	console.log('Hello');
}
hello();

function product(a,b){
	return a*b;
}
let x=product(2,6);
console.log('The product is ' +x);

/*if-else, switch-case(case can have string values too) and for, while and do-while loops 
are all similar to other Programming languages*/
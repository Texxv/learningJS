console.log("---VARIABLES---");

let age = 20;
let firstName = "Arthur";
let student = true;




console.log("Hello", firstName)
console.log("You are", + age, "years old")
console.log("Enrolled:", student)


document.getElementById("p1").innerHTML= "Hello " + firstName;
document.getElementById("p2").innerHTML= "You are " + age + " years old";
document.getElementById("p3").innerHTML= "Enrolled: " + student;



//easier way
console.log("---USER INPUT---");

let username = window.prompt("Whats your name? ");
console.log(username)

//hard way


document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}

console.log("---TYPE CONVERSION---")


age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "year old");



let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


console.log("---CONST---");

const PI  = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);

var student1 = {
    name: "kashan",
    rollno: 1,
    attendense: true
};
var student2 = {
    name: "huzaifa",
    rollno: 2,
    attendense: false
};
var student3 = {
    name: "maheen",
    rollno: 1,
    attendense: true
};
console.log(student1);
var car = "corolla";
car = 123;
car = true;
console.log(car);
var both = {
    name: "Anoosha naz",
    seatno: 937171,
    member: true,
    experiance: 2
};
console.log(both);
//structured typing
//there are a two type of structured object in a typing.
//1 fresh object
//2 stale object
var ball = {
    diameter: 10
};
console.log(ball); //fresh object
var sphere = {
    diameter: 20
};
ball = sphere; // stale object
console.log(ball);
var tube = {
    diameter: 30,
    length: 50
};
sphere = tube;
console.log(sphere);
//case 1 
// structured are different fresh show error 
//extra properties are not allowed
//case 2
//structured allowed different type of data in stale
//not show any error.

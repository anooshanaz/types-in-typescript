//type of alias
//type alias is the short way to represented type data.
type Istudentdetails = {
    name: string,
    rollno: number,
    attendense: boolean
};
let student1: Istudentdetails = {
    name: "kashan",
    rollno: 1,
    attendense: true
};
let student2: Istudentdetails = {
    name: "huzaifa",
    rollno: 2,
    attendense: false
};
let student3: Istudentdetails = {
    name:"maheen",
    rollno: 1,
    attendense: true
};
console.log(student1);

//type union alias
type Icardetail = string|number|boolean
let car:Icardetail = "corolla"
car = 123
car = true
console.log(car);

//intersection
//when you have a two type of aobject they show result in intersection . they accept 
//only one type of property.
//Extra primitive data type not used intersection.
type Istudents = {
    name: string,
    seatno: number
}
type Iteacher = {
    name: string,
    experiance: number
}
type Imanagement = {
    member: boolean
}
let both: Istudents & Iteacher & Imanagement = {
    name: "Anoosha naz",
    seatno: 937171,
    member: true,
    experiance: 2
}
console.log(both);

//structured typing
//there are a two type of structured object in a typing.
//1 fresh object
//2 stale object
let ball = {
    diameter: 10
}
console.log(ball); //fresh object
let sphere = {
    diameter: 20
}
ball = sphere // stale object
console.log(ball);
let tube = {
    diameter: 30,
    length: 50
}
sphere = tube
console.log(sphere);
//case 1 
// structured are different fresh show error 
//extra properties are not allowed
//case 2
//structured allowed different type of data in stale
//not show any error.
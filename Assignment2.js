//Assignment 2


//Variable declaration

let firstName;
let email;
let age;
let address;
let gender;
let phone;

//Undefind Value

console.log(firstName,email,age,address,gender,phone);
//Output
//undefined undefined undefined undefined undefined undefined

//Null Value

firstName= null;
email = null;
age = null;
address = null;
gender = null;
phone = null;

console.log(firstName,email,age,address,gender,phone);

//Output
//null null null null null null

//Object in js

const myInfo={
    firstName,
    email,
    age,
    address,
    gender,
    phone
};

console.log(myInfo);

//Output:
// {
//   firstName:undefined
//   email:undefined
//   age:undefined
//   address:undefined
//   gender:undefined
//   phone:undefined
// }

//assign value
 {
    firstName="Shruti";
    email="abcd@gmail.com";
    age=20;
    address="Shajapur";
    gender="Female";
    phone=1234567890;

 };

 console.log(myInfo);

 //Output:
 // {
//   firstName:Shruti
//   email:abcd@fgmail.com
//   age:20
//   address:Shajapur
//   gender:Female
//   phone:1234567890
// }


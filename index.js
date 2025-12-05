//This ,call apply ,bind
//Strict mode vs non strict mode
// var a=10;
// b=20;
// console.log(a,b)
// function user(name ,name){
//     console.log(name,name)
// }
// user("vishnu","vardhan")

// 'use strict'
// var a=109;
// b=1993;
// console.log(a,b)
// function user(name,name){
//     console.log(name,name)
// }
// user("vishnu","vardhan")
//Now in this code it will provide us  the errors because we had didn't declare the type f variable and parameters of functuions are same so they give us the error so that means we have to change the names of the paramerters and we have to declare the data type of variables 

// 'use strict'
// var a=109;
// var b=1993;
// console.log(a,b)
// function user(name1,name2){
//     console.log(name1,name2)
// }
// user("vishnu","vardhan")

// console.log(window)//It will give us the error because node.js doesn't understand window and window is created by the browser 
// // console.log(global)
// global is an global object of Node.js envirnment
//Window is  an global object  for browser
// console.log(globalThis)
// this global this  will  points to the global elemnets of that environment 
// works for all envioronments like nodejs,browser etc..

//This pointer
//This -->will be empty for  nodejs  and this pointer for browser it will points to the window object
// console.log(this)

//this == obj in this case 
// const obj={
//     name:"vishnu",
//     age:19,
//     greet:function(){
//         console.log(this)
//         console.log("hello form greetings")
//     }
// }
// obj.greet();

//Here this keyword is pointing to the global object
//This thing before the useage of strict mode 
// function greet(){
//     console.log(this)
// }
// greet();
// function greet(){
//     console.log(`${this.name}`);
// }
// const user1={
//     name:"vishnu",
//     age:19
// }
// const user2={
//     name:"vardhan",
//     age:19
// }
// greet();

// 'user strict'
// function greet(){
//     console.log(`${this.name}`);
//     console.log(`${this}`)
// }
// const user={
//     name:"vishnu",
//     age:19
// }
// const user2={
//     name:"vardhan",
//     age:19
// }
// greet.call(user)

// 'user strict'
// function calculate(value){
//     this.age+=value;
//     console.log(`${this.age}`)
// }
// const user1={
//     name:"vishnu",
//     age:19
// }
// const user2={
//     name:"vardhan",
//     age:19
// }
// calculate.call(user1,10)
// calculate.call(user2,19)

//Arroow function doesn't have this pointer for it 
// 'use strict'
// const greet=()=>{
//     console.log(this)
// }
// function meet(){
//     console.log(this)
// }
// greet();
// meet() 

// const stopwatch={
//     second:0,
//     start:function(){
//         const that=this;
//         setInterval(function(){
//             that.second++;
//             console.log(that.second);
//         },1000)
//     }
// }
// stopwatch.start();

'use strict'
const stopwatch={
    second:0,
    start:function(){
        setInterval(function(){
            this.second++;
            console.log(this.second);
        },1000)
    }
}
stopwatch.start()
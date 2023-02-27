// call back function 
/* a callback function is a function (it can be function Anonymous function, Arrow function) passed into another function as an argument, which is then invoked inside the outer function to complete some kind of  action or routine.
 */

// function show(){
//     console.log("I am show function");
// }

// function geeky(callback){
//     callback();
// }

// geeky(show);
// function show(a){
//     console.log("I am show function",a);
// }
// function geeky(callback){
//     var a =101;
//     callback(a);
// }
// geeky(show);

// function geeky(callback){
//     var a = 101;
//     callback(a);
// }

// geeky(function show(a){
//     console.log('I am show function '+a);
// });
// geeky(function(a){
//     console.log('I am show function '+a);
// });

// geeky(a => console.log('I am show function',a));

// function show(){
//     console.log("I am show function");
// }

// function geeky(callback){
//     callback();
// }

// geeky(show);
// console.log("End");

/*
Asynchronous - it never wait for each operation to complete,
rather it executes all operations in the first Go only.
 */

// setTimeout(function show(){
//     console.log("I am show function");
// }, 5000);

// console.log("End");

// function geeky(callback){
//     var a = 101;
//     callback(a);
// }

// geeky(a =>console.log("I am show function ",a) );
// console.log('End');

// setTimeout((a)=>{
//     console.log("I am show function ",a);
// },5000)
// console.log("End");

// function myfunc(){
//     console.log('Inside function');
// }
// console.log("Start");
// myfunc();
// console.log("END");

// console.log("Start");
// setTimeout(() => {
//     console.log("Inside setTime out");
// }, 5000);
// console.log("END");

// console.log('Start');
// const roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// roll.forEach((r)=>{
//     console.log(r);
// })
// console.log('End');

// console.log("Start");
// function getName(name) {
//     setTimeout(() => {
//         console.log("Inside SetTimeOut");
//         return name;
//     }, 2000);
// }

// const name = getName('Arvind');
// console.log(name);
// console.log("End");

// console.log('Start');
// function getName(name, callback){
//     setTimeout(()=>{
//         console.log("Inside SetTimeOut");
//         callback(name);
//     },2000);
// }

// function getHobbies(name, callback){
//     setTimeout(()=>{
//         console.log("Inside hobbies SetTimeOut");
//         callback(['Cricket Watching', 'Watch Tech Videos', 'Learn new Things in Programming','Listening Music like honey Singh or old or Gold also' ])
//     },2000);
// }

// const name = getName('Arvind', (name)=>{
//     console.log(name);
//     getHobbies(name, (hobby)=>{
//         console.log(hobby);
//     })
// })
// console.log('End');

/*                                PROMISE
A PROMISE IS AN OBJECT REPERSENTING THE EVENTUAL 
COMPLETION OR FAILURE OF AN ASYNCHRONOUS OPERATION.

A JS PROMISE OBJECT  CONTAINS BOTH THE PRODUCING CODE AND CALLS TO THE CONSUMING CODE. IT CAN BE USED TO DEAL WITH ASYNCHRONOUS OPERATION IN JAVA SCRIPT.

Promise State :- 
  * Pending - Initial State, Not yet fulfilled or Rejected
 * Fulfilled/Resolved :- Promise Completed
 * Rejected :- Promise Failed
 * A pending promise can either be Resolved with a value or Rejected with a reason (error).
 * when either of these of operation happens, the assoicated handlers queued up by a promise's then method are called.
 * A promise is said to be settled if it is either Resolved or Rejected, but not Pending.

  
                 ****** Creating Promise ********
   * A promise object is created using new keyword and its constructor. This constructor takes a function , called the 'executor function' as its parameter this function should take two parameter. it could be success or fail.
   * Another way to Create the function Using function Returning  a Promise
   * example 
   * function myFunction(){
        return new Promise((resolve, rejected)=>{
        })
    }

    for consuming promise we can use the Then() method
 */

// Promise Produce Code
// const promiseObj = new Promise((resolve, reject)=>{
//     let request = true;
//     if(request==true){
//         resolve("Request Success")
//     }else{
//         reject("Request Reject")
//     }
// });

// // Promise Consume code
// promiseObj.then(
// (value)=>{console.log(value);},
// (error)=>{console.log(error);}
// )
// const promiseObj = new Promise((resolve, reject)=>{
//     let request = true;
//     if(request==true){
//         resolve("Request Success")
//     }else{
//         reject("Request Reject")
//     }
// }).then(
//     (value)=>{console.log(value);},
//     (error)=>{console.log(error);}
// )
// const promiseObj = new Promise((resolve, reject)=>{
//     let request = true;
//     if(request==true){
//         resolve("Request Success")
//     }else{
//         reject("Request Reject")
//     }
// }).then(
//     (value)=>{console.log(value);},
//     (error)=>{console.log(error);}
// )

// Method Chaining
// const promiseObj = new Promise((resolve, reject)=>{
//     let num = 10;
//     resolve(num);
// }).then(
//     (value)=>{
//         console.log(value);
//         return value+10;
//     }
// ).then(
//     (value)=>{
//         console.log(value);
//     }
// )

//           Catch() Method
// const promiseObj = new Promise((resolve, reject)=>{
//     let request = true;
//     if(request){
//         resolve('Request Success');
//     }else{
//         reject('Request Rejected');
//     }
// }).then(
//     (value)=>{
//         console.log(value);
//     }
// ).catch(
//     (error)=>{console.log(error);}
// )
// const promiseObj = new Promise((resolve, reject)=>{
//     let request = true;
//     if(request){
//         resolve('Request Success');
//     }else{
//         reject('Request Rejected');
//     }
// }).then(
//     (value)=>{
//         console.log(value);
//     }
// ).catch(
//     (error)=>{console.log(error);}
// ).finally(
//     ()=>{console.log('cleaned');}
// )

// Chaining
// const promiseObj = new Promise((resolve, reject)=>{
//     let num = 10;
//     resolve(num);
// }).then(
//     (value)=>{
//         console.log(value);
//         return value+10;
//     }
// ).then(
//     (value)=>{
//         console.log(value);
//         return value;
//     }
// ).then(
//     ()=>{throw new Error('Error Found');}
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// )

// const promiseObj = new Promise((resolve, reject) => {
//     let req = true;
//     if (req) {
//         // resolve('Request Success');
//         resolve([1, 2, 3, 4, 5, 6, 7]);
//     } else {
//         reject('Request reject for some reason')
//     }
// }).then(
//     (value) => {
//         console.log(value);
//     },
//     (error) => {
//         console.log(error);
//     }
// ).catch(
//     (error)=>{console.log(errror);}
// )

// const promiseObj  = new Promise((resolve, reject)=>{
//     let num =10;
//     resolve(num);
// }).then(
//     (value) =>{
//         console.log(value);
//         return value+10;
//     }
// ).then(
//     (value)=>{
//         console.log(value);
//         return value+20;
//     }
// ).then(
//     value=>{
//         console.log(value);
//         return value+30;
//     }
// ).then(
//     value=>{
//         console.log(value);
//     }
// ).finally(
//     ()=>{
//         console.log("Done my Promise");
//     }
// )

// console.log('Start');
// function getName(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Inside SetTimeOut");
//             resolve(name);
//         }, 2000);
//     });
// }

// function getHobbies(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Inside hobbies SetTimeOut");
//             resolve(['Cricket Watching', 'Watch Tech Videos', 'Learn new Things in Programming', 'Listening Music like honey Singh or old or Gold also'])
//         }, 2000);
//     });
// }

// const name = getName('Arvind', (name)=>{
//     console.log(name);
//     getHobbies(name, (hobby)=>{
//         console.log(hobby);
//     })
// })
// getName('Arvind')
//     .then(nm => getHobbies(nm))
//     .then(hobby => console.log(hobby))

// async function showHobby(){
//     try{
//         const name = await getName('Arvind');
//         const hobby = await getHobbies(name);
//         console.log(name);
//         console.log(hobby);
//     }catch{
//         console.log("fail");
//     }
// }
// showHobby();
// console.log('End');

// const posts = [
//     {
//         title : "post one",
//         body : 'this is post one',
//         createdAt:new Date().getTime(),
//     },

//     {
//         title : "post two",
//         body : 'this is post two',
//         createdAt:new Date().getTime(),
//     }
// ]

// function getPost(){
//     let output = '';
//     for(let i=0; i<posts.length; i++){
//         output+= `<li>${posts[i].title} - last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds</li>`
//     }
//     document.body.innerHTML = output;
// }
// let intervalId =0;
// function createPost(post, callback){
//     clearInterval(intervalId);
//     intervalId = setInterval(()=>{
//         setTimeout(()=>{
//             posts.push({...post, createdAt : new Date().getTime()});
//             callback();
//         },2000);
//     },1000);
// }

// createPost({
//     title : "post one",
//     body : 'this is post one'
// }, getPost
// );

// const posts = [{ title: "post 1", body: "this is post 1" },
// { title: "post 2", body: "this is post 2" }]


// function getPosts() {
//     setTimeout(() => {
//         let output = ""
//         for (let i = 0; i < posts.length; i++) {
//             output += `<li>${posts[i].title}</li>`
//         }
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createPost(post, post4) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post, { ...post4 });

//             const error = false
//             if (!error) {
//                 resolve()
//             }
//             else { reject("Error:something went wrong") }

//         }, 2000);
//     });
// }
// function removePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if (posts.length > 0) {
//                 resolve(posts.pop())
//             }
//             else { reject("Array is empty now") }

//         }, 1000);
//     })
// }
// createPost({ title: "post 3", body: "this is post 3" }, { title: "post 4", body: "this is post 4" })

//     .then(() => {
//         getPosts()
//         removePost().then(() => {
//             getPosts()
//             removePost().then(() => {
//                 getPosts()
//                 removePost().then(() => {
//                     getPosts()
//                     removePost().then(() => {
//                         getPosts()
//                         removePost().then(() => { })

//                             .catch((err) => {
//                                 console.log("inside catch block", err)
//                             })
//                     })

//                 })
//             })
//         })
//     }) 

// const posts = [
//     {
//         title : "post one",
//         body : 'this is post one',
//         createdAt:new Date().getTime(),
//     },

//     {
//         title : "post two",
//         body : 'this is post two',
//         createdAt:new Date().getTime(),
//     }
// ]
// let intervalId =0;
// function getPost(){
//     // console.log("this is running id",intervalId);
//     clearInterval(intervalId);
//     setInterval(()=>{
//         let output ='';
//         for(let i=0; i<posts.length; i++){
//             output+=`<li>${posts[i].title} - last updated ${Math.floor((new Date().getTime() - posts[i].createdAt)/1000)} seconds ago</li>`
//         }
//         document.body.innerHTML=  output;
//     },1000);
// }

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push({...post, createdAt : new Date().getTime()});
//         callback();
//     },1000)
// }

// function create4thPost(post, callback){
//     setTimeout(()=>{
//         posts.push({...post, createdAt : new Date().getTime()});
//         callback();
//     }, 6000);
// }

// getPost();
// createPost({
//     title:'Post three',
//     body : 'This is post three'
// }, getPost)
// create4thPost({
//     title:'Post four',
//     body : 'This is post four'
// }, getPost)

const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' },
]

function getPost() {
    setTimeout(() => {
        let output ='';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML  = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

function create4thPost(post, callback){
    setTimeout(()=>{
        callback(post, function(){
            getPost();
            callback();
        })
    }, 3000)
}

// getPost();
createPost({ title: 'Post three', body: 'This is post three' }, getPost);
create4thPost({ title: 'Post four', body: 'This is post four' },createPost);

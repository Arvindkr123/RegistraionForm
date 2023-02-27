/*    Trip plan
   first I buy the Car
   After that I will go to shimla
   Book the hotel
 */

// function buyCar(){
//     setTimeout(()=>{
//         console.log("Buy a Car");
//     }, 10000);
// }

// function planTrip(){
//     setTimeout(()=>{
//         console.log("Let's go to Manali");
//     },2000);
// }

// buyCar();
// planTrip();
// function buyCar(callback){
//     setTimeout(()=>{
//         console.log("Buy a Car");
//         callback();
//     }, 10000);
// }

// function planTrip(callback){
//     setTimeout(()=>{
//         console.log("Let's go to Manali");
//         callback();
//     },2000);
// }

// function reachManli(callback){
//     setTimeout(()=>{
//         console.log("reached Manali");
//         callback();
//     }, 1000);
// }

// function BookHotel(callback){
//     setTimeout(()=>{
//         console.log("Book Hotel");
//         callback();
//     },2000);
// }

// function EatFood(callback){
//     setTimeout(()=>{
//         console.log("Eat food");
//         callback();
//     },3000);
// }

// function GoToSleep(callback){
//     setTimeout(()=>{
//         console.log("Good Night");
//         callback();
//     },3000);
// }

// function Morning(){
//     setTimeout(()=>{
//         console.log("Good Morning");
//     },3000);
// }

// buyCar(() => {
//     planTrip(() => {
//         reachManli(()=>{
//             BookHotel(()=>{
//                 EatFood(()=>{
//                     GoToSleep(()=>{
//                         Morning();
//                     });
//                 });
//             });
//         });
//     });
// });

// function buyCar(callback1, callback2, callback3){
//     setTimeout(()=>{
//         console.log("Buy a Car");
//         callback1(callback2, callback3);
//     }, 10000);
// }

// function planTrip(callback1, callback2){
//     setTimeout(()=>{
//         console.log("Let's go to Manali");
//         callback1(callback2);
//     },2000);
// }

// function reachManli(callback){
//     setTimeout(()=>{
//         console.log("reached Manali");
//         callback();
//     }, 1000);
// }
// function reachMountain(){
//     setTimeout(()=>{
//         console.log("reached Mountain");
//     }, 3000);
// }

// // buyCar(()=>{
// //     planTrip(()=>{
// //         reachManli();
// //     })
// // })

// buyCar(planTrip, reachManli, reachMountain);

// function buyCar(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const val = true;
//             if(val){
//                 resolve("Buy a Car");
//             }else{
//                 reject('Error :  something went wrong')
//             }
//         }, 10000);
//     })
// }

// function planTrip(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const val = true;
//             if(val){
//                 resolve("Let's go to Manali");
//             }else{
//                 reject('Error :  something went wrong')
//             }
//         },2000);
//     })
// }

// function reachManli(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const val = true;
//             if(val){
//                 resolve("reached Manali");
//             }else{
//                 reject('Error :  something went wrong')
//             }
//         }, 1000);
//     })
// }
// function reachMountain(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const val = true;
//             if(val){
//                 resolve("reached Mountain");
//             }else{
//                 reject('Error :  something went wrong')
//             }
//         }, 3000);
//     })
// }

// buyCar().then((msg)=>{
//     console.log(msg);
//     planTrip().then((msg)=>{
//         console.log(msg);
//         reachManli().then((msg)=>{
//             console.log(msg);
//             reachMountain().then((val)=>{
//                 console.log(val);
//             })
//         })
//     })
// })


// async function fun1(){
//     try{
//         const msg = await buyCar();
//         console.log(msg);
//         const msg2 = await planTrip();
//         console.log(msg2);
//         const msg3 = await reachManli();
//         console.log(msg3);
//         const msg4 = await reachMountain();
//         console.log(msg4);
//     }
//     catch{
//         console.log(err);
//     }
// }

// fun1();

// const posts = [{title: 'Post One'},{title: 'Post Two'}];

// //Do not touch this function below
// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }

// //Do not touch this function below
// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'post Three'});
//             resolve('post Three')
//         }, 3000)
//     }) 
// }

// //Do not touch this function below
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'post Four'});
//             resolve('post Four');
//         }, 2000)
//     }) 
// }

// Correct the lines below smartly such that post three gets printed before post four
// create3rdPost()
// create4thPost()
// printPost();
// async function fun1(){
//     const msg = await create3rdPost();
//     console.log(msg);
//     const msg2 =await create4thPost();
//     console.log(msg2);
// }
// fun1();

// const posts = [{title: 'Post One'},{title: 'Post Two'}];

// async function createPosts() {
//   await create3rdPost();
//   await create4thPost();
//   printPost();
// }

// createPosts();

// function printPost() {
//   posts.forEach((post) => {
//     console.log(post.title);
//   });
// }

// function create3rdPost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({title: 'post Three'});
//       resolve();
//     }, 3000);
//   });
// }

// function create4thPost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({title: 'post Four'});
//       resolve();
//     }, 2000);
//   });
// }

// const posts = [{ title: 'POST1' }, { title: 'POST2' }];

// // Do not touch the following function
// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }

// // Do not touch the following function
// function create3rdPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST3' });
//             resolve()
//         }, 3000)
//     })
// }

// // Do not touch the following function
// function create4thPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST4' });
//             resolve();
//         }, 2000)
//     })
// }

// // Complete the following function 
// // It should add POST5 to posts array with setTimeout of 1 second
// function create5thPost() {
//     // should return a promise
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST5' });
//             resolve();
//         }, 1000) // corrected timeout from 2000 to 1000
//     })
// }

// // The following function declaration should be async
// async function createPost() { // added async keyword before function declaration
//     // wrapped in try-catch block to handle errors
//     try {
//         await create3rdPost();
//         await create4thPost();
//         await create5thPost();
//         printPost();
//     } catch (error) {
//         console.error(error);
//     }
// }

// createPost();

// const posts = [{ title: 'POST1' }];

// // Function to create the second post
// function create2ndPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST2' });
//             resolve()
//         }, 3000)
//     })
// }

// // Function to create the third post
// function create3rPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST3' });
//             resolve();
//         }, 2000)
//     })
// }

// // Function to delete the last post
// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 const poppedElement = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// // Call the functions in the correct order using promises
// create2ndPost()
//     // .then(() => deletePost())
//     .then(() => create3rPost())
//     .then(() => deletePost())
//     .then(() => deletePost())
//     .then(() => deletePost())
//     .then((poppedElement) => {
//         console.log("Popped element:", poppedElement);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// const posts = [{ title: 'POST1' }];

// // Function to create the second post
// function create2ndPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST2' });
//             // console.log(posts[1].title); // Log the title of the new post
//             resolve()
//         }, 3000)
//     })
// }

// // Function to create the third post
// function create3rPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({ title: 'POST3' });
//             // console.log(posts[2].title); // Log the title of the new post
//             resolve();
//         }, 2000)
//     })
// }
// ``
// // Function to delete the last post
// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 const poppedElement = posts.pop();
//                 console.log(poppedElement.title); // Log the title of the deleted post
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// // Call the functions in the correct order using promises
// // create2ndPost()
// //     .then(() => {
// //         return deletePost();
// //     })
// //     .then(() => {
// //         return create3rPost();
// //     })
// //     .then(() => {
// //         return deletePost();
// //     })
// //     .then(() => {
// //         return deletePost();
// //     })
// //     .then(() => {
// //         return deletePost();
// //     })
// //     .catch((error) => {
// //         console.error(error);
// //     });

// async function run() {
//     try {
//         await create2ndPost();
//         await deletePost();
//         await create3rPost();
//         await deletePost();
//         await deletePost();
//         await deletePost();
//     } catch (error) {
//         console.error(error);
//     }
// }

// run();

// const blogs = [];

// //Do not touch these functions below at all
// function create1stBlog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             blogs.push({ title: 'BLOG1' });
//             resolve();
//         }, 3000)
//     })
// }

// //Do not touch these functions below at all
// function create2ndBlog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             blogs.push({ title: 'BLOG2' });
//             resolve()
//         }, 2000)
//     })
// }


// function deleteBlog() {
//     //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//     //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (blogs.length > 0) {
//                 const deletedBlog = blogs.pop();
//                 console.log(deleteBlog.title);
//                 resolve(deletedBlog.title);
//             } else {
//                 reject('No blog to delete.');
//             }
//         }, 1000);
//     });
// }

// //Call the function in the right way so that we can get the desired output
// // create1stBlog()
// // create2ndBlog()
// // deleteBlog()
// // deleteBlog()
// // deleteBlog()
// async function run(){
//     try{
//         await create1stBlog();
//         await create2ndBlog();
//         await deleteBlog();
//         await deleteBlog();
//     }
//     catch{
//         console.log(errr);
//     }
// }
// run();

// const blogs = [];

// function create1stBlog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             blogs.push({ title: 'BLOG1' });
//             resolve();
//         }, 3000)
//     })
// }

// function create2ndBlog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             blogs.push({ title: 'BLOG2' });
//             resolve();
//         }, 2000)
//     })
// }

// async function deleteBlog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (blogs.length > 0) {
//                 const deletedBlog = blogs.pop();
//                 resolve(deletedBlog.title);
//             } else {
//                 // reject('No blog to delete.');
//                 reject('ERROR');
//             }
//         }, 1000);
//     });
// }

// async function deleteBlogs() {
//     try {
//         await create1stBlog();
//         await create2ndBlog();
//         let title = await deleteBlog();
//         // console.log(`Deleted blog "${title}".`);
//         console.log(title);
//         title = await deleteBlog();
//         console.log(title);
//         // console.log(`Deleted blog "${title}".`);
//         title = await deleteBlog();
//         console.log(title);
//         // console.log(`Deleted blog "${title}".`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// deleteBlogs();

// const posts = [
//     { title: 'post One', body: 'This is post One' },
//     { title: 'post two', body: 'This is post two' },
// ]

// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const err = false; // Set to true to simulate an error
//             if (!err) {
//                 posts.push(post);
//                 resolve();
//             } else {
//                 reject('Something went wrong');
//             }
//         }, 2000);
//     })
// }

// async function fun1(){
//     try{
//         await createPost({
//             title : 'post Three',
//             body : 'this is post three'
//         })
//         getPost();
//     }catch (err) {
//         console.error(err);
//         document.body.innerHTML = `<h2>Error: ${err}</h2>`;
//     }
// }
// fun1();

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve,  2000, 'GoodBye')
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values)=>console.log(values));

// async function fetchUser(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }

// fetchUser();

// posts = [
//   {
//     title: 'post one',
//     body: 'this is post one'
//   },
//   {
//     title: 'post two',
//     body: 'this is post two'
//   }
// ]

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//     }, 1000)
//   })
// }

// function getPost(){
//   setTimeout(()=>{
//     let output = '';
//     posts.forEach((post)=>{
//       output+=`<li>${post.title}</li>`;
//     })
//     document.body.innerHTML = output;
//   },5000)
// }

// function deletePost(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       posts.pop();
//       resolve();
//     },1000)
//   })
// }

// async function fun1(){
//   // await createPost({
//     // title: 'post three',
//     // body: 'this is post three'
//   // })
//   // getPost();
//   // await deletePost();
//   // getPost();

//   Promise.all([await createPost({ title: 'post three',body: 'this is post three'}), getPost()]);
//   Promise.all([await deletePost(), getPost()]);
// }

// fun1();

// const posts = [
//   {
//     title: 'post one',
//     body: 'this is post one'
//   },
//   {
//     title: 'post two',
//     body: 'this is post two'
//   }
// ];

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//     }, 1000);
//   });
// }

// function displayPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000)
// }

// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.pop();
//       resolve();
//     }, 1000);
//   });
// }

// async function fun1() {
//   await createPost({
//     title: 'post three',
//     body: 'this is post three'
//   });
//   displayPosts();
//   await deletePost();
//   displayPosts();
//   const numPostsRemaining = posts.length;
//   console.log(`There are ${numPostsRemaining} posts remaining.`);
// }

// fun1();

//                                                  Async Await

// console.log('Person1 : shows ticket');
// console.log('Person2 : shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('ticket');
//   },3000)
// })

// const  getPopcorn  = promiseWifeBringingTicks.then((t)=>{
//   // console.log(`Person3 : shows ${t}`);
//   console.log("wife : I have got tickets");
//   console.log("Husband : we should go in");
//   console.log("wife : no i am hungry");
// console.log("Husband : I got some popcorn");
//   return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// })

// const getbutter = getPopcorn.then((t)=>{
// console.log("Husband : we should go in");
// console.log("wife : I need butter on my popcorn");
//   return new Promise((resolve, reject)=> resolve(`${t} butter`));
// });

// getbutter.then((t)=>console.log(t));
// console.log('Person4 : shows ticket');
// console.log('Person5 : shows ticket');

// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// // const preMovie = async ()=> 'premMovie';
// const preMovie = async()=>{
//   const promiseWifeBringingTicks = new Promise((resolve, reject)=> resolve(`ticket`))
//   const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
//   const addButter = new Promise((resolve, reject)=>resolve(`butter`));

//   let ticket = await promiseWifeBringingTicks;
//   console.log(`wife : I have got ${ticket}`);
//   console.log("Husband : we should go in");
//   console.log("wife : no i am hungry");

//   let popcorn = await getPopcorn;
//   console.log(`Husband : I got some ${popcorn}`);
//   console.log("Husband : we should go in");
//   console.log("wife : I need butter on my popcorn");

//   let butter = await addButter;
//   console.log(`Husband : i got some ${butter} on popcorn`);
//   console.log(`Husband : Anything else darling ?`);
//   console.log(`wife : lets go to we are getting late`);
//   console.log(`Husband : Thank your for remider *grins*`);
//   return ticket;
// }

// preMovie().then((m)=>console.log(m));

// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');

// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// // const preMovie = async ()=> 'premMovie';
// const preMovie = async()=>{
//   const promiseWifeBringingTicks = new Promise((resolve, reject)=> resolve(`ticket`))
//   const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
//   const getCandy = new Promise((resolve, reject)=>resolve(`candy`));
//   const getCoke = new Promise((resolve, reject)=>resolve(`coke`));
//   const addButter = new Promise((resolve, reject)=>resolve(`butter`));

//   let ticket = await promiseWifeBringingTicks;
//   // let popcorn = await getPopcorn;
//   // let butter = await addButter;
//   let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke])
//   console.log(`${popcorn} , ${candy}, ${coke}`);
//   return ticket;
// }

// preMovie().then((m)=>console.log(m));

// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');

// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// // const preMovie = async ()=> 'premMovie';
// const preMovie = async()=>{
//   const promiseWifeBringingTicks = new Promise((resolve, reject)=> reject(`ticket`))
//   let ticket;
//   try{
//      ticket = await promiseWifeBringingTicks;
//   }
//   catch(e){
//     ticket = `sad face`;
//   }
//   return ticket;
// }

// preMovie().then((m)=>console.log(`Person3 : ${m}`));

// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');

// const testUserForm = async ()=>{
//   const loadUserForm = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(`Page loaded`);
//     },3000)
//   })

//   const enterUserName = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(`User entered`)
//     },3000)
//   })

//   const verifyUserDetails = ()=>{
//   }

//   await loadUserForm;
//   await enterUserName; 
//   return verifyUserDetails();
// }

// testUserForm().then(()=>console.log('Verified'))

// console.log(`person1 : shows ticket`);
// console.log(`person2 : shows ticket`);

// const promiseWifeBringingTicks = new  Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(`ticket`);
//   },3000)
// })

// // promiseWifeBringingTicks.then((t)=>{
// //   console.log(`person3 : shows ${t}`);
// // })
// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log(`wife : i have tickets`);
//     console.log(`husband : we should go in`);
//     console.log(`wife : no i'm hungry`);

//     return new Promise((resolve, reject)=>resolve(`${t} popcorn`))
// });

// // getPopcorn.then((t)=>console.log(t));
// const getbutter = getPopcorn.then((t)=>{
// console.log(`husband : I have got the popcorn`);
// console.log(`husband : we should go in`);
// console.log(`wife : I need butter on my popcorn`);
//   return new Promise((resolve, reject)=>resolve(`${t} butter`))
// })

// getbutter.then((t)=>console.log(t))

// console.log(`person4 : shows ticket`);
// console.log(`person5 : shows ticket`);

// console.log(`person1 : shows ticket`);
// console.log(`person2 : shows ticket`);

// const preMovie = async () => {
//   const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`ticket`), 3000);
//   });

//   const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
//   const getCandy = new Promise((resolve, reject) => resolve(`candy`));
//   const getCoke = new Promise((resolve, reject) => resolve(`coke`))
//   const getbutter = new Promise((resolve, reject) => resolve(`butter`));

//   let ticket = await promiseWifeBringingTicks;
//   let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
//   console.log(`${popcorn},  ${candy} ,  ${coke}`);

//   // console.log(`wife : i have ${ticket}`);
//   // console.log(`husband : we should go in`);
//   // console.log(`wife : no i'm hungry`);

//   // let popcorn = await getPopcorn;
//   // console.log(`husband : I have got the ${popcorn}`);
//   // console.log(`husband : we should go in`);
//   // console.log(`wife : I need butter on my popcorn`);

//   // let butter = await getbutter;
//   // console.log(`husband : i got some ${butter} on popcorn`);
//   // console.log('husband : anything else darling');
//   // console.log(`wife : let go to w're getting late`);
//   // console.log(`husband : thank you for the remainder`);

//   return ticket;
// }

// // preMovie().then((m) => console.log(`person3 : shows ${m}`))
// // console.log(`person4 : shows ticket`);
// // console.log(`person5 : shows ticket`);

// console.log(`person1 : shows ticket`);
// console.log(`person2 : shows ticket`);

// const preMovie = async()=>{
//   const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
//     setTimeout(()=>reject(`ticket`),3000);
//   })

//   let ticket
//   try{
//     ticket = await promiseWifeBringingTicks;
//   }catch(e){
//     ticket = `sad face` ;
//   }
//   return ticket;
// }

// preMovie().then((m)=>console.log(`person3 : shows ${m}`))
// console.log(`person4 : shows ticket`);
// console.log(`person5 : shows ticket`);

// for testing purpose
// const testUserForm = async () =>{
//   const loadUserForm = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('page loaded'),3000);
//   })

//   const enterUserName = new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('user entered'),3000);
//   })

//   const verifyUserDetails = ()=>{
//     return true;
//   }

//   await loadUserForm;
//   await enterUserName;
//   const testResult = verifyUserDetails();
//   return testResult;
// }

// testUserForm().then((m)=>console.log(`shows ${m}`));

// console.log(`person1 : show ticket`);
// console.log(`person2 : show ticket`);
// const preMovie = async () => {

//   const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(resolve(`ticket`), 2000);
//   })

//   const EatBurger = new Promise((resolve, reject)=>{
//     resolve(`Eat burger`);
//   })

//   const getColdDrinks = new Promise((resolve, reject)=>{
//     resolve(`Cold Drinks`)
//   })

//   const getCandy = new Promise((resolve, reject)=>resolve(`Candy`));
//   const getPopcorn = new Promise((resolve, reject)=>{
//     resolve(`popcorn`);
//   })

//   const getbutter =  new Promise((resolve, reject)=>{
//     setTimeout(resolve(`butter`),2000);
//   })




//   let ticket = await promiseWifeBringingTicks;
//   console.log(`wife : I have ${ticket}`);
//   console.log(`husband : should we go in`);
//   console.log(`wife : no i'm hungry`);

//   let burger = await EatBurger;
//   console.log('husband : shall we go');
//   console.log(`wife : i want to eat ${burger}`);
//   console.log('husband : okay let\'s go to eat burger');

//   let coldDrink = await getColdDrinks;
//   console.log(`husband : shall we go`);
//   console.log(`wife  : I want to drink some bebrage ${coldDrink}`);
//   console.log('husband : okay let\'s go to drink babrage');

//   let candy = await getCandy;
//   console.log(`husband : shall we go`);
//   console.log(`wife : I want to eat some ${candy}`);
//   console.log(`husband : I get some candy for you`);

//   let popcorn = await getPopcorn;
//   console.log(`husband : shall we go`);
//   console.log(`wife : we should have some popcorn while watching movie`);
//   console.log(`husband : give me a minute i got some ${popcorn}`);

//   let butter = await getbutter;
//   console.log(`husband : shall we go`);
//   console.log(`wife : I need the ${butter} on popcorn`);
//   console.log(`husband : I get you butter `);
//   console.log(`husband : shall we go `);
//   console.log(`husband : shall we go `);
//   console.log(`wife : let's go w're getting late`);
//   console.log('husband : thank you for remainder');
//   console.log(`${burger} , ${coldDrink}, ${candy} , ${popcorn} , ${butter}`);

//   return ticket;
// }

// preMovie().then((m) => console.log(`person3 : shows ${m}`));
// console.log(`person4 : show ticket`);
// console.log(`person5 : show ticket`);

// console.log(`person1 : shows ticket`);
// console.log(`person2 : shows ticket`);

// const preMovie = async () => {
//   const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`ticket`), 3000);
//   });

//   const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
//   const getCandy = new Promise((resolve, reject) => resolve(`candy`));
//   const getCoke = new Promise((resolve, reject) => resolve(`coke`))
//   const getbutter = new Promise((resolve, reject) => resolve(`butter`));

//   let ticket = await promiseWifeBringingTicks;
//   let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
//   console.log(`${popcorn},  ${candy} ,  ${coke}`);
//   return ticket;
// }

// preMovie().then((m) => console.log(`person3 : shows ${m}`))
// console.log(`person4 : shows ticket`);
// console.log(`person5 : shows ticket`);

// const posts = [
//   {
//     title: 'post one',
//     body: 'this is post one'
//   },
//   {
//     title: 'post two',
//     body: 'this is post two'
//   }
// ];

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       resolve();
//     }, 1000);
//   });
// }

// function displayPosts() {
//   let output = '';
//   posts.forEach((post) => {
//     output += `<li>${post.title}</li>`;
//   });
//   document.body.innerHTML = output;
// }



// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.pop();
//       resolve();
//     }, 1000);
//   });
// }

// async function fun1() {
//   await createPost({
//     title: 'post three',
//     body: 'this is post three'
//   });
//   displayPosts();
//   await deletePost();
//   displayPosts();
//   const numPostsRemaining = posts.length;
//   console.log(`There are ${numPostsRemaining} posts remaining.`);
// }

// fun1();

// const posts = [
//   {
//     title: 'post one',
//     body: 'this is post one',
//     createdAt: new Date(),
//     updatedAt: null
//   },
//   {
//     title: 'post two',
//     body: 'this is post two',
//     createdAt: new Date(),
//     updatedAt: null
//   }
// ];

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       post.createdAt = new Date();
//       post.updatedAt = null;
//       posts.push(post);
//       resolve();
//     }, 1000);
//   });
// }

// function displayPosts() {
//   let output = '';
//   posts.forEach((post) => {
//     output += `<li>${post.title} (created at ${post.createdAt.toLocaleTimeString()}, last updated at ${post.updatedAt ? post.updatedAt.toLocaleTimeString() : 'never'})</li>`;
//   });
//   document.body.innerHTML = output;
// }

// function deletePost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const post = posts.pop();
//       post.updatedAt = new Date();
//       // posts.unshift(post);
//       resolve();
//     }, 1000);
//   });
// }

// async function fun1() {
//   console.log('Creating new post...');
//   await createPost({
//     title: 'post three',
//     body: 'this is post three',
//     createdAt: null,
//     updatedAt: null
//   });
//   console.log('New post created.');
//   displayPosts();

//   console.log('Deleting last post...');
//   await deletePost();
//   console.log('Last post deleted.');
//   displayPosts();
// }

// fun1();
// async function DadMakesPromise(){
//   try{

//     const dadPromise = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let salaryCreadit = true;
//         let salary = 34000;
//         let costofPs5 = 40000;
//         let costofPs4= 30000;
        
//         if (salaryCreadit === true && salary > costofPs5) {
//           resolve("I buy you son ps4");
//         } else if (salaryCreadit === true && salary > costofPs4) {
//           reject({SuccessCode : false, message : `Should I buy ps4 instead of ps5`});
//         } else {
//           reject("Sorry my I try next month");
//         }
//       }, 2000)
//     })
//     console.log(dadPromise);
//   }catch(err){
//     console.log(err);
//   }
  
// }

// DadMakesPromise();

// async function DadMakesPromise(){
//   console.log('a');
//   console.log('b');
//   const message = await new Promise((res, rej)=>{
//     setTimeout(()=>{
//       res('Buy me a play Station')
//     },1000)
//   })
  
//   const message2 = await new Promise((res, rej)=>{
//     setTimeout(()=>{
//       res('Start the play station')
//     },1000)
//   })
  
//   const message3 = await new Promise((res, rej)=>{
//     setTimeout(()=>{
//       res(`playing....................`);
//     },1000)
//   })
//   console.log(message);
//   console.log(message2);
//   console.log(message3);

// }

// DadMakesPromise();

// function buyCar(callback1, callback2, callback3){
//   setTimeout(() => {
//     console.log("Buy a Car first");
//     callback1(callback2, callback3);
//   }, 3000);
// }

// function planTrip(callback2, callback3){
//   setTimeout(()=>{
//     console.log(`let's go to manali`);
//     callback2(callback3);
//   },2000)
// }

// function reachManli(callback){
//   setTimeout(()=>{
//     console.log('reached manali');
//     callback();
//   },1000)
// }
// function reachMountain(){
//   setTimeout(()=>{
//     console.log('reached mountain');
//   },1000)
// }

// // buyCar();
// // planTrip();
// // reachManli();
// buyCar(planTrip,reachManli, reachMountain);

function buyCar(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Buy a Car");
      resolve();
    },4000)
  })
}

function planTrip(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(`let's go to manali`);
      resolve();
    },3000)
  })
}

function reachManli(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(`Reached manali`);
      resolve();
    },2000)
  })
}

function reachMountain(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(`Reached moutain`);
      resolve();
    },1000)
  })
}
async function main(){
  await buyCar();
  await planTrip();
  await reachManli();
  await reachMountain();
}
main();


// const posts = [
//     { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() },
//     { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() },
// ];

// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         const currentTime = new Date().getTime();
//         posts.forEach((post) => {
//             const timeDiff = currentTime - post.createdAt;
//             output += `<li>${post.title} (created ${timeDiff}ms ago) - ${new Date(post.createdAt).toLocaleString()}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(title, body) {
//     setTimeout(()=>{
//         const newPost = {
//             title: title,
//             body: body,
//             createdAt: new Date().getTime(),
//         };
//         posts.push(newPost);
//     },2000)
// }

// createPost('Post Three', 'This is post three')
// getPost();

// const posts = [
//     { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() },
//     { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() },
// ];

// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         const currentTime = new Date().getTime();
//         posts.forEach((post) => {
//             const timeDiff = currentTime - post.createdAt;
//             output += `<li>${post.title} (created ${timeDiff}ms ago) - ${new Date(post.createdAt).toLocaleString()}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(title, body, callback) {
//     setTimeout(() => {
//         const newPost = {
//             title: title,
//             body: body,
//             createdAt: new Date().getTime(),
//         };
//         posts.push(newPost);
//         callback();
//     }, 2000);
// }

// function createPost4(title, body) {
//     setTimeout(()=>{
//         createPost(title, body, getPost);
//     },3000)
// }

// createPost4('Post Four', 'This is post four');
// createPost('Post Three', 'This is post three', getPost);

// const posts = [
//     { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() - 10000 },
//     { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() - 20000 },
// ];

// function createPost(title, body) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const newPost = {
//                 title: title,
//                 body: body,
//                 createdAt: new Date().getTime(),
//             };
//             posts.push(newPost);
//             resolve();
//         }, 2000);
//     });
// }
// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         const currentTime = new Date().getTime();
//         posts.forEach((post) => {
//             const timeDiff = currentTime - post.createdAt;
//             output += `<li>${post.title} (created ${timeDiff}ms ago) - ${new Date(post.createdAt).toLocaleString()}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost3(title, body){
//     setTimeout(()=>{
//         createPost(title, body)
//             .then(getPost)
//             .catch((error)=>console.log(error))
//     },3000)
// }
// function createPost4(title, body) {
//     setTimeout(()=>{
//         createPost(title, body)
//             .then(getPost)
//             .catch((error) => console.error(error));
//     },4000)
// }

// createPost3('Post Three', 'This is post Three');
// createPost4('Post Four', 'This is post four');

// const posts = [
//     { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() },
//     { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() },
// ];
// function createPost(title, body) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const newPost = {
//                 title: title,
//                 body: body,
//                 createdAt: new Date().getTime(),
//             };
//             posts.push(newPost);
//             resolve();
//         }, 2000);
//     });
// }
// function getPost() {
//     setTimeout(() => {
//         let output = '';
//         const currentTime = new Date().getTime();
//         posts.forEach((post) => {
//             const timeDiff = currentTime - post.createdAt;
//             output += `<li>${post.title} (created ${timeDiff}ms ago) - ${new Date(post.createdAt).toLocaleString()}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost3(title, body) {
//     setTimeout(() => {
//         createPost(title, body)
//             .then(getPost)
//             .catch((error) => console.log(error))
//     }, 3000)
// }
// function createPost4(title, body) {
//     setTimeout(() => {
//         createPost(title, body)
//             .then(getPost)
//             .catch((error) => console.error(error));
//     }, 4000)
// }

// setInterval(() => {
//     const title = `Post ${posts.length + 1}`;
//     const body = `This is post ${posts.length + 1}`;
//     createPost(title, body);
// }, 5000);

// createPost3('Post Three', 'This is post Three');
// createPost4('Post Four', 'This is post four');

// const posts = [
//     { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() },
//     { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() },
// ];
// function createPost(title, body) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const newPost = {
//                 title: title,
//                 body: body,
//                 createdAt: new Date().getTime(),
//             };
//             posts.push(newPost);
//             resolve();
//         }, 2000);
//     });
// }
// function getPost() {
//     setInterval(() => {
//         let output = '';
//         const currentTime = new Date().getTime();
//         posts.forEach((post) => {
//             const timeDiff = currentTime - post.createdAt;
//             output += `<li>${post.title} (created ${timeDiff}ms ago) - ${new Date(post.createdAt).toLocaleString()}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createPost3(title, body) {
//     setTimeout(() => {
//         createPost(title, body)
//             .then(getPost)
//             .catch((error) => console.log(error))
//     }, 3000)
// }
// function createPost4(title, body) {
//     setTimeout(() => {
//         createPost(title, body)
//             .then(getPost)
//             .catch((error) => console.error(error));
//     }, 4000)
// }

// setInterval(() => {
//     const title = `Post ${posts.length + 1}`;
//     const body = `This is post ${posts.length + 1}`;
//     createPost(title, body);
// }, 5000);

// createPost3('Post Three', 'This is post Three');
// createPost4('Post Four', 'This is post four');

// const posts = [
//     { title: 'Post One', body: 'This is post One', createdAt: new Date().getTime() },
//     { title: 'Post Two', body: 'This is post Two', createdAt: new Date().getTime() },
// ];

// let intervalId =0;
// function getPost() {
//     clearInterval(intervalId);
//     intervalId = setInterval(() => {
//         let output = '';
//         const currentTime = new Date().getTime();
//         posts.forEach((post) => {
//             const timeDiff = currentTime - post.createdAt;
//             output += `<li>${post.title} (created ${Math.floor((timeDiff/1000))}ms ago) - ${new Date(post.createdAt).toLocaleString()}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push({...post,createdAt:new Date().getTime()});
//         callback();
//     }, 2000)
// }

// function createPost4(post, callback){
//     setTimeout(()=>{
//         posts.push({...post,createdAt:new Date().getTime()});
//         callback();
//     },3000)
// }
// createPost({ title: 'Post Three', body: 'This is post Three'}, getPost)
// createPost4({ title: 'Post four', body: 'This is post four'}, getPost)

// const posts = [
//     {
//         title: 'Post One',
//         body: 'This is Post One',
//         createdAt: new Date().getTime()
//     },
//     {
//         title: 'Post Two',
//         body: 'This is Post Two',
//         createdAt: new Date().getTime()
//     }
// ];

// // Dont touch this function. If you have please reset the code
// //Only change create4thPost function given below
// let interval = 0;
// function getPost() {
//     clearInterval(interval);
//     interval = setTimeout(() => {
//         posts.forEach((post) => {
//             console.log(post.title);
//         })
//     }, 1000);

// }

// // Dont touch this function. If you have please reset the code
// //Only change create4thPost function given below
// function createPost(post, callback) {
//     setTimeout(() => {
//         post.createdAt = new Date().getTime();
//         posts.push(post);
//         callback();
//     }, 1000)
// }

// function create4thPost(post4, callback) {
//     setTimeout(() => {
//         createPost(post4, () => {
//             getPost();
//             callback();
//         });
//     }, 2000);
// }
// createPost({title:'post Three', body:'This is post Three'}, getPost)
// create4thPost({title:'post four', body:'This is post four'},getPost);

// // function create4thPost(post4, callback) {
// //   createPost(post4, function() {
//     // getPost();
//     // callback();
// //   });
// // }

// const posts = [
//     {title: 'Post One',
//      body: 'This is Post One', 
//      createdAt: new Date().getTime()
//     },
//     {title: 'Post Two', 
//      body: 'This is Post Two', 
//      createdAt: new Date().getTime()
//     }
// ];

// // Dont touch this function. If you have please reset the code
// //Only change create4thPost function given below
// let interval =0;
// function getPost() {
//     clearInterval(interval);
//     interval = setTimeout( () => {
//         posts.forEach((post) => {
//             console.log(post.title);

//         })
//         process.exit();
//     }, 1000);

// }

// // Dont touch this function. If you have please reset the code
// //Only change create4thPost function given below
// function createPost(post, callback) {
//     setTimeout( () => {
//         post.createdAt = new Date().getTime();
//         posts.push(post);
//         callback();
//     }, 1000)
// }

// function create4thPost(post4, callback) {
//     //fill in the blanks
//     //hint => you have to smartly use callback function concept and use createPost and getPost smartly

//     // setTimeout(() => {
//     //     callback(post4, function(){
//     //         getPost();
//     //         callback();
//     //     });  //fill in the blanks smartly
//     // }, 2000);
//     setTimeout(() => {
//         post4.createdAt = new Date().getTime();
//         posts.push(post4);
//         callback();  //fill in the blanks smartly
//     }, 2000);
// }

// createPost({title:'Post Three', body:'This is Post Three'}, getPost);
// create4thPost({title:'Post Four', body:'This is Post Four'}, getPost);

// console.log('Namste JavaScript');
// setTimeout(() => {
//     console.log('Java Script');
// }, 1000)
// console.log('Season 2');

// const cart =['Shoes', 'pants', 'curta'];

// function create3rdPost(callback) {
//     setTimeout( () => {
//         console.log('Post Three')
//         //If callback function is passed call it
//         if(callback){
//             callback();
//         }
//     },2000)
// }

// // Do not touch this function at all
// function create4thPost() {
//     setTimeout( () => {
//         console.log('Post Four')
//     }, 1000);
// }

// //You have to  modify the syntax below to reach the desired output
// // create3rdPost()
// // create4thPost();

// create3rdPost(create4thPost);

// function create3rdPost(callback1, callback2, callback3) {
//     setTimeout( () => {
//         console.log('Post Three')
//         //If callback function is passed call it
//         callback3(callback1, callback2);
//     }, 3000)
// }

// //Please modify this function too to reach the desired output
// function create4thPost(callback) {
//     setTimeout( () => {
//         console.log('Post Four')
//         if(callback){
//             callback();
//         }
//     }, 2000);
// }

// // Do not touch this function at all
// function create5thPost(callback) {
//     setTimeout( () => {
//         console.log('Post Five')
//         callback();
//     }, 1000);
// }


// //You have to  modify the syntax below to reach the desired oxutput
// // create3rdPost()
// // create4thPost()
// // create5thPost()
// create3rdPost(create4thPost,create5thPost);

// function create3rdPost(callback1, callback2, callback3) {
//     setTimeout( () => {
//         console.log('Post Three');
//         if (callback3) {
//             callback3(callback1, callback2);
//         }
//     }, 3000);
// }

// function create4thPost(callback) {
//     console.log('Post Four');
//     if (callback) {
//         setTimeout(callback, 2000);
//     }
// }

// function create5thPost(callback) {
//     setTimeout( () => {
//         console.log('Post Five');
//         if (callback) {
//             callback();
//         }
//     }, 1000);
// }

// create3rdPost(null, null, create4thPost.bind(null, create5thPost.bind(null, null)));



// function create3rdPost(callback) {
//     setTimeout( () => {
//         console.log('Post Three')
//         //If callback function is passed call it
//         if(callback){
//             callback();
//         }
//     }, 3000)
// }

// //Please modify this function too to reach the desired output
// function create4thPost() {
//     setTimeout( () => {
//         console.log('Post Four')
//     }, 2000);
// }

// // Do not touch this function at all
// function create5thPost() {
//     setTimeout( () => {
//         console.log('Post Five')
//     }, 1000);
// }


// //You have to  modify the syntax below to reach the desired output
// create3rdPost()
// create4thPost()
// create5thPost()

// function create3rdPost(callback) {
//     setTimeout( () => {
//         console.log('Post Three')
//         //If callback function is passed call it
//         if(callback){
//             callback();
//         }
//     }, 4000)
// }

// //Please modify this function too to reach the desired output
// function create4thPost(callback) {
//     setTimeout( () => {
//         console.log('Post Four')
//         callback();
//     }, 3000);
// }

// // Do not touch this function at all
// function create5thPost(callback) {
//     setTimeout( () => {
//         console.log('Post Five')
//         callback();
//     }, 2000);
// }
// function create6thPost() {
//     setTimeout( () => {
//         console.log('Post Six')
//     }, 1000);
// }


// //You have to  modify the syntax below to reach the desired output
// // create3rdPost()
// // create4thPost()
// // create5thPost()
// create3rdPost(()=>{
//     create4thPost(()=>{
//         create5thPost(()=>{
//             create6thPost();
//         });
//     })
// })

// const posts = [
//     {title : 'post One', body: 'this is post One'},
//     {title : 'post Two', body: 'this is post Two'},
// ]

// function getPost(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },2000)
// }

// createPost({'title':'post three', body:'This is post three'}, getPost)

// const posts = [
//     {title : 'post One', body: 'this is post One'},
//     {title : 'post Two', body: 'this is post Two'},
// ]

// function getPost(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         posts.push(post);
//         const err = false;
//         if(!err){
//             resolve('Succed');
//         }else{
//             reject('Error : Something went wrong')
//         }
//     })
// }

// createPost({title : 'post three', body: 'this is post three'})
//     .then(getPost)
//     .catch(err=>console.log(err));


// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//      setTimeout(resolve, 2000, 'GoodBye');
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
// Promise.all([promise1, promise2, promise3. promise4]).then((values)=>{
//     console.log(values);
// })

// async function fetchUser(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data  =await res.json();
//     console.log(data);
// }

// fetchUser();

// function buyCar(callback){
//     setTimeout(()=>{
//         console.log('Buy a Car');
//         callback();
//     },1000)
// }

// function planTrip(callback){
//     setTimeout(()=>{
//         console.log('let\'s go to manali');
//         callback();
//     },2000)
// }

// function reachedManali(callback){
//     setTimeout(()=>{
//         console.log('let\'s go to hotel');
//         callback();
//     }, 3000)
// }

// function WalkManali(callback){
//     setTimeout(()=>{
//         console.log('let\'s go to walk to see beutifull things');
//         callback();
//     },4000)
// }

// function gotoMountain(callback){
//     setTimeout(()=>{
//         console.log('let\'s go to Moutain');
//         callback();
//     },5000)
// }
// function EatPopulourFood(){
//     setTimeout(()=>{
//         console.log('let\'s go to eat populour food in Manali');
//     },6000)
// }

// // buyCar(planTrip);
// buyCar(()=>{
//     planTrip(()=>{
//         reachedManali(()=>{
//             WalkManali(()=>{
//                 gotoMountain(()=>{
//                     EatPopulourFood();
//                 });
//             });
//         });
//     })
// })

// function createPost3(callback){
//     setTimeout(()=>{
//         console.log('Post Three');
//         callback();
//     },4000)
// }
// function createPost4(callback){
//     setTimeout(()=>{
//         console.log('Post four');
//         callback();
//     },3000)
// }
// function createPost5(callback){
//     setTimeout(()=>{
//         console.log('Post five');
//         callback();
//     },2000)
// }
// function createPost6(){
//     setTimeout(()=>{
//         console.log('Post Six');
//     },1000)
// }


// // createPost3();
// // createPost4();
// // createPost5();

// createPost3(()=>{
//     createPost4(()=>{
//         createPost5(()=>{
//             createPost6();
//         });
//     })
// })

// function buyCar(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const err = false;
//             if(!err){
//                 console.log('let\'s buy new Car');
//                 resolve();
//             }else{
//                 reject('Error : Something went wrong');
//             }
//         },5000);
//     })
// }

// function reachedManali(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const err = false;
//             if(!err){
//                 console.log('We have reached manali');
//                 resolve();
//             }else{
//                 reject('Error : Something went wrong');
//             }
//         },3000);
//     })
// }
// function BookHotel(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const err = false;
//             if(!err){
//                 console.log('let\'s book hotel with view of the sea');
//                 resolve();
//             }else{
//                 reject('Error : Something went wrong');
//             }
//         },2000);
//     })
// }

// function gotoMountain(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const err = false;
//             if(!err){
//                 console.log('let\'s go to moutain i ever seen in my life');
//                 resolve();
//             }else{
//                 reject('Error : Something went wrong');
//             }
//         },1000);
//     })
// }
// function EatPopulourFood(){
//     setTimeout(()=>{
//             console.log('let\'s eat good food in the manali');
//     },3000);
// }

// async function run(){
//     await buyCar();
//     await reachedManali();
//     await BookHotel();
//     await gotoMountain();
//     EatPopulourFood();
// }
// run();

// const posts = [
//     {title: 'Post One'},
//     {title: 'Post Two'}
// ];

// //Do not touch this function below

// function printPost() {
//         posts.forEach((post) => {
//             console.log(post.title)
//         })
// }

// //Do not touch this function below
// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'post Three'});
//             resolve()
//         }, 3000)
//     }) 
// }

// //Do not touch this function below
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'post Four'});
//             resolve();
//         }, 2000)
//     }) 
// }

// // Correct the lines below smartly such that post three gets printed before post four
// // create3rdPost()
// // create4thPost()
// // printPost()
// async function createPosts() {
//   await create3rdPost();
//   await create4thPost();
//   printPost();
// }

// createPosts();

// const posts = [{title: 'POST1'},{title: 'POST2'}];

// // Do not touch the following function
// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }

// // Do not touch the following function
// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve()
//         }, 3000)
//     }) 
// }

// // Do not touch the following function
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST4'});
//             resolve();
//         }, 2000)
//     }) 
// }

// // Complete the following function 
// // It should add POST5 to posts array with setTimeout of 1 second
// function create5thPost(){
//     // should return a promise
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST5'});
//             resolve();
//         }, 1000) // corrected timeout from 2000 to 1000
//     }) 
// }

// // The following function declaration should be async
// async function createPost(){ // added async keyword before function declaration
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

// const posts = [{title: 'POST1'},{title: 'POST2'}];

// function printPost() {
//     let output ='';
//     posts.forEach((post) => {
//         // console.log(post.title);
//         output+=`<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
// }

// function create3rdPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 3000);
//     });
// }

// function create4thPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({title: 'POST4'});
//             resolve();
//         }, 2000);
//     });
// }

// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.pop();
//             resolve();
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         await create3rdPost();
//         await deletePost();
//         await create4thPost();
//         printPost();
//     } catch (error) {
//         console.error(error);
//     }
// }
// main();

// const posts = [{title: 'POST1'}];

// // Function to create the second post
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2'});
//             // console.log(posts[1].title); // Log the title of the new post
//             resolve()
//         }, 3000)
//     }) 
// }

// // Function to create the third post
// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             // console.log(posts[2].title); // Log the title of the new post
//             resolve();
//         }, 2000)
//     }) 
// }

// // Function to delete the last post
// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 console.log(poppedElement.title); // Log the title of the deleted post
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// async function run() {
//   try {
//     await create2ndPost();
//     await deletePost();
//     await create3rPost();
//     await deletePost();
//     await deletePost();
//     await deletePost();
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();

// const posts = [{title: 'POST1', createdAt:new Date().getTime()}];

// // Function to create the second post
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2', createdAt:new Date().getTime()});
//             // console.log(posts[1].title); // Log the title of the new post
//             resolve()
//         }, 3000)
//     }) 
// }

// // Function to create the third post
// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3', createdAt: new Date().getTime()});
//             // console.log(posts[2].title); // Log the title of the new post
//             resolve();
//         }, 2000)
//     }) 
// }

// // Function to delete the last post
// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 console.log(poppedElement.title); // Log the title of the deleted post
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// function printPost(){
//     let output ='';
//     posts.forEach((post)=>{
//         output+=`<li>${post.title} - ${Math.floor((new Date().getTime() - post.createdAt)/1000)} second ago</li>`
//     })
//     document.body.innerHTML = output;
// }

// async function run() {
//   try {
//     printPost();
//     await create2ndPost();
//     printPost();
//     await deletePost();
//     printPost();
//     await create3rPost();
//     printPost();
//     await deletePost();
//     printPost();
//     await deletePost();
//     printPost();
//     await deletePost();
//     printPost();
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();

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

// // async function run() {
// //   try {
// //     await create2ndPost();
// //     await deletePost();
// //     await create3rPost();
// //     await deletePost();
// //     await deletePost();
// //     await deletePost();
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // run();
// create2ndPost()

//     .then(() => {

//         deletePost().then((deletedPost1) => {

//             console.log(deletedPost1.title)

//             create3rPost()

//                 .then(() => {

//                     deletePost().then((deletedpost2) => {

//                         console.log(deletedpost2.title)

//                         deletePost().then((deletedpost3) => {

//                             console.log(deletedpost3.title)

//                             deletePost().catch((msg) => console.log(msg))

//                         })

//                     })

//                 })

//         })

//     })

// const posts = [{title: 'POST1'},{title: 'POST2'}];

// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title);
//     });
// }

// function create3rdPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 3000);
//     });
// }

// function create4thPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push({title: 'POST4'});
//             resolve();
//         }, 2000);
//     });
// }

// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.pop();
//             resolve();
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         await create3rdPost();
//         await deletePost();
//         await create4thPost();
//         printPost();
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

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
//                 reject('Error: Something went wrong');
//             }
//         }, 2000);
//     })
// }

// async function fun1() {
//     try {
//         await createPost({
//             title: 'post Three',
//             body: 'this is post three'
//         })
//         getPost();
//     } catch (err) {
//         console.error(err);
//         document.body.innerHTML = `<h2>Error: ${err}</h2>`;
//     }
// }
// fun1();
// const user = {
//     name: "John Doe",
//     lastActivityTime: null,
//     posts: [],
// };

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             user.posts.push(post);
//             resolve();
//         }, 1000);
//     });
// }

// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             user.lastActivityTime = new Date();
//             resolve();
//         }, 1000);
//     });
// }

// function deleteLastPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             user.posts.pop();
//             resolve();
//         }, 1000);
//     });
// }

// async function updateAndDeletePosts() {
//     const postInput = document.getElementById("post-input");
//     const post = postInput.value;
//     postInput.value = "";
//     try {
//         await Promise.all([createPost(post), updateLastUserActivityTime()]);
//         updateUI();
//     } catch (error) {
//         console.error(error);
//     }
// }

// function updateUI() {
//     const nameElement = document.getElementById("name");
//     const lastActivityElement = document.getElementById("last-activity");
//     const postsElement = document.getElementById("posts");

//     nameElement.textContent = `Name: ${user.name}`;
//     lastActivityElement.textContent = `Last Activity Time: ${user.lastActivityTime}`;
//     postsElement.innerHTML = "";

//     user.posts.forEach((post) => {
//         const li = document.createElement("li");
//         li.textContent = post;
//         postsElement.appendChild(li);
//     });
// }

// function setupEventListeners() {
//     const createPostButton = document.getElementById("create-post-btn");
//     const deletePostButton = document.getElementById("delete-post-btn");

//     createPostButton.addEventListener("click", async () => {
//         await updateAndDeletePosts();
//     });

//     deletePostButton.addEventListener("click", async () => {
//         await deleteLastPost();
//         updateUI();
//     });
// }

// function init() {
//     updateUI();
//     setupEventListeners();
// }

// init();
// const blogs = []
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
// const user = {
//     posts : [],
//     lastActivityTime :'5th march 2023',
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const err =false;
//             if(!err){
//                 user.posts.push(post);
//                 resolve();
//             }else{
//                 reject('Error:Something went wrong')
//             }
//         },1000)
//     })
// }

// function lastActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             user.lastActivityTime= new Date();
//             resolve(user.lastActivityTime);
//         },1000)
//     })
// }

// function updateLastUserActivityTime(){
//     Promise.all([createPost('post one'), lastActivityTime()]).then(([createPostResolve, lastActivityTimeResolve])=>{
//         // console.log(user.posts);
//         // console.log(lastActivityTimeResolve);
//         let output =``
//         user.posts.forEach((post)=>{
//             output+=`<li>${post} last seen time ${lastActivityTimeResolve}</li>`
//         })
//         document.body.innerHTML = output;
//     })
//     .catch(err=>console.log(err))
// }

// updateLastUserActivityTime();
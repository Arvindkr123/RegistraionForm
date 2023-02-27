// const posts = [
//     {
//         title: 'post one',
//         body: 'this is post one'
//     },
//     {
//         title: 'post two',
//         body: 'this is post two'
//     }
// ];

// function getPosts() {
//     setInterval(() => {
//         let output = '';
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     },1000)
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const err = false;
            
//             if(!err){
//                 resolve();
//             }else{
//                 reject('Error : Something went wrong');
//             }
//         },2000);
//     })
// }

// function create4thPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//             const err = true;
//             if(err){
//                 resolve();
//             }else{
//                 reject('Error')
//             }
//         },3000)
//     })
// }

// // getPosts();

// createPost({
//     title : 'Post three',
//     body: 'this is my three post'
// })
//     .then(create4thPost({
//         title : 'Post four',
//         body: 'this is my four post'
//     }))
//     .then(getPosts)
//     .catch(err=>console.log(err));

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'GoodBye');
// })

// Promise.all([promise1, promise2, promise3])
//     .then(values => console.log(values));                                                    


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

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },2000);
// }
// // function createPost(post){
// //     setTimeout(()=>{
// //         posts.push(post);
// //     },2000);
// // }

// // getPosts();
// createPost( {title: 'post three',
// body: 'this is post three'}, getPosts);

// Dont touch this function. If you have please reset the code
//Only change create4thPost function given below
const posts = [
    {title: 'Post One',
     body: 'This is Post One', 
     createdAt: new Date().getTime()
    },
    {title: 'Post Two', 
     body: 'This is Post Two', 
     createdAt: new Date().getTime()
    }
];

// Dont touch this function. If you have please reset the code
//Only change create4thPost function given below
function getPost() {
    clearInterval(interval);
    interval = setTimeout( () => {
        posts.forEach((post) => {
            console.log(post.title);
        })
        process.exit();
    }, 1000);

}

// Dont touch this function. If you have please reset the code
//Only change create4thPost function given below
function createPost(post, callback) {
    setTimeout( () => {
        post.createdAt = new Date().getTime();
        posts.push(post);
        callback();
    }, 1000)
}

function create4thPost(post4, callback) {
    //fill in the blanks
    //hint => you have to smartly use callback function concept and use createPost and getPost smartly
    
    setTimeout(() => {
        callback(post4,getPost);  //fill in the blanks smartly
    }, 2000);
}

// Dont touch this function. If you have please reset the code
function fetchInput(postTitle, postBody){
    create4thPost({title: postTitle, body: postBody}, createPost);
}



// // Sample data for testing purposes
// const user = {
//     name: "John Doe",
//     lastActivityTime: null,
//     posts: [],
// };

// // Function to simulate creating a post
// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             user.posts.push(post);
//             resolve();
//         }, 1000);
//     });
// }

// // Function to update the user's last activity time
// function updateLastUserActivityTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             user.lastActivityTime = new Date();
//             resolve();
//         }, 1000);
//     });
// }

// // Function to simulate deleting the last post
// function deleteLastPost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             user.posts.pop();
//             resolve();
//         }, 1000);
//     });
// }

// // Usage
// async function updateAndDeletePosts() {
//     try {
//         await createPost("First post");
//         await updateLastUserActivityTime();
//         console.log("Posts:", user.posts);
//         console.log("Last activity time:", user.lastActivityTime);
//         await deleteLastPost();
//         console.log("New set of posts:", user.posts);
//     } catch (error) {
//         console.error(error);
//     }
// }

// updateAndDeletePosts();

// const user ={
//     name : 'Arvind  Kumar',
//     lastActivityTime : null,
//     posts: []
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             user.posts.push(post);
//             resolve();
//         },1000);
//     })
// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             user.lastActivityTime = new Date();
//             resolve();
//         },1000)
//     })
// }

// function deletePost(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             user.posts.pop();
//             resolve();
//         },1000);
//     })
// }

// async function updateAndDeletePosts(){
//     try{
//         await createPost("My first Post");
//         await updateLastUserActivityTime();
//         document.body.innerHTML =`
//         <li>Posts : ${user.posts}</li>
//         <li>last update : ${user.lastActivityTime}</li>
//         `;
//         await deletePost();
//         document.body.innerHTML =`
//         <li>Posts : ${user.posts}</li>
//         <li>last update : ${user.lastActivityTime}</li>
//         `;
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// updateAndDeletePosts();

// const user = {
//     name: "Arvind Kumar",
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
//     try {
//         await Promise.all([createPost("First post"), updateLastUserActivityTime()]);
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


const user = {
    name: "John Doe",
    lastActivityTime: null,
    posts: [],
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.posts.pop();
            resolve();
        }, 1000);
    });
}

async function updateAndDeletePosts() {
    const postInput = document.getElementById("post-input");
    const post = postInput.value;
    postInput.value = "";
    try {
        await Promise.all([createPost(post), updateLastUserActivityTime()]);
        updateUI();
    } catch (error) {
        console.error(error);
    }
}

function updateUI() {
    const nameElement = document.getElementById("name");
    const lastActivityElement = document.getElementById("last-activity");
    const postsElement = document.getElementById("posts");

    nameElement.textContent = `Name: ${user.name}`;
    lastActivityElement.textContent = `Last Activity Time: ${user.lastActivityTime}`;
    postsElement.innerHTML = "";

    user.posts.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post;
        postsElement.appendChild(li);
    });
}

function setupEventListeners() {
    const createPostButton = document.getElementById("create-post-btn");
    const deletePostButton = document.getElementById("delete-post-btn");

    createPostButton.addEventListener("click", async () => {
        await updateAndDeletePosts();
    });

    deletePostButton.addEventListener("click", async () => {
        await deleteLastPost();
        updateUI();
    });
}

function init() {
    updateUI();
    setupEventListeners();
}

init();

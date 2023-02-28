document.getElementById('btn').addEventListener('click', MakeRequest);

// function MakeRequest(){
//     // console.log('button clicked');
//     config ={
//         params :{id:1}
//     }
//     axios('https://jsonplaceholder.typicode.com/posts',config)
//         .then((res) => {
//             // console.log(res);
//             data = res.data[0];
//             // console.log(data);
//             // console.log(data.id);
//             // console.log(data.title);
//             // console.log(data.body);

//             document.getElementById('divData').innerHTML=`
//             <ul>
//                 <li>${data.id}</li>
//                 <li>${data.title}</li>
//                 <li>${data.body}</li>
//             </ul>
//             `
//         }).catch((err) => {
//             console.log(err);
//         });
// }

// function MakeRequest(){
//     axios('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         // console.log(res.data);
//         data  = res.data;
//         data.forEach(element => {
//             // console.log(element);
//             // console.log(element.id);
//             // console.log(element.title);
//             // console.log(element.body);
//             document.getElementById('divData').innerHTML=`
//                     <ul>
//                     <li>${element.id}</li>
//                     <li>${element.title}</li>
//                     <li>${element.body}</li>
//                     </ul>
//             `
//         });
//     })
// }
// function MakeRequest(){
//     axios('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         // console.log(res.data);
//         data  = res.data;
//         data.forEach(element => {
//             // console.log(element);
//             console.log(element.id);
//             console.log(element.title);
//             console.log(element.body);
//         });
//     })
// }

// function MakeRequest(){
//     axios('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         data = res.data;
        // let output = document.getElementById('allPost');
        // data.forEach((ele)=>{
        //     output.innerHTML+=`
        //     <div id="pid">${ele.id}</div>
        //     <div id="title">${ele.title}</div>
        //     <div id="body">${ele.body}</div>
        //     <hr>
        //     `
        // })
//     })
// }

// Async and Await | single Data
// async function MakeRequest(){
//     try{
//         const res = await axios('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         console.log(res.data);
//         data = res.data[0]
//         console.log(data.id);
//         console.log(data.title);
//         console.log(data.body);
//     }catch(err){
//         console.log(err);
//     }
// }
// async function MakeRequest(){
//     try{
//         const res = await axios('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         // console.log(res.data);
//         data = res.data[0]
//         // console.log(data.id);
//         // console.log(data.title);
//         // console.log(data.body);

//         document.getElementById('pid').innerText = data.id;
//         document.getElementById('title').innerText = data.title;
//         document.getElementById('body').innerText = data.body;
//     }catch(err){
//         console.log(err);
//     }
// }
// async function MakeRequest(){
//     try{
//         const res = await axios('https://jsonplaceholder.typicode.com/posts')
//         // console.log(res.data);
//         data = res.data
//         console.log(data);
//         // console.log(data.id);
//         // console.log(data.title);
//         // console.log(data.body);
//         let output = document.getElementById('allPost');
//         data.forEach((ele)=>{
//             output.innerHTML+=`
//             <div id="pid">${ele.id}</div>
//             <div id="title">${ele.title}</div>
//             <div id="body">${ele.body}</div>
//             <hr>
//             `
//         })
//         // document.getElementById('pid').innerText = ele.id;
//         // document.getElementById('title').innerText = ele.title;
//         // document.getElementById('body').innerText = ele.body;
//     }catch(err){
//         console.log(err);
//     }
// }


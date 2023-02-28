axios.defaults.headers.common['Authorization']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

document.getElementById('btn').addEventListener('click', MakeRequest);

async function MakeRequest(){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}

// function MakeRequest(){
//     console.log('button clicked');
//     const config = {
//         method : 'POST',
//         url : 'https://reqres.in/api/users',
//         headers :{
//             'Content-Type':'application/json'
//         },
//         data :'{"name":"Arvind", "job":"web dev"}'
//     }

//     axios(config).then((res)=>{
//         console.log(res.data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }
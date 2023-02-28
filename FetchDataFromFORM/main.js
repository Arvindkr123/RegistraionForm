document.getElementById('btn').addEventListener('click', MakeRequest)

// function MakeRequest(e){
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let job = document.getElementById('job').value;
//     config = {
//         method : 'Post',
//         url : 'https://reqres.in/api/users',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         data:JSON.stringify({name:name, job:job})
//     }

//     axios(config).then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }
async function MakeRequest(e){
    e.preventDefault();
    try{
        let name = document.getElementById('name').value;
        let job = document.getElementById('job').value;
        config = {
            method : 'Post',
            url : 'https://reqres.in/api/users',
            headers:{
                'Content-Type':'application/json'
            },
            data:JSON.stringify({name:name, job:job})
        }
        const res = await axios(config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}
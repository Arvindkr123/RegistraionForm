document.getElementById('btn').addEventListener('click', MakeRequest);

// function MakeRequest(){
//     const config = {
//         method :'POST',
//         url : 'https://reqres.in/api/users',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         data :{
//             'name':'Arvind',
//             'job' : 'web dev'
//         }
//     }

//     axios(config).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// Short hand for post
// function MakeRequest() {
//     config = {
// headers: {
//     'Content-Type': 'application/json',
// }
//     }
//     url = 'https://reqres.in/api/users'
//     data = { "name": "Arvind", "job": "web dev" }
//     axios.post(url, data, config).then((res) => {
//         console.log(res.data);
//     })
// }

async function MakeRequest() {
    try {
        config = {
            headers: {
                'Content-Type': 'application/json'
            },
            data: { 'name': 'Arvind', 'job': 'web dev' }
        }

        const res = await axios.post('https://reqres.in/api/users', config)
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}

// console.log("Hello World");
// document.getElementById('btn').addEventListener('click', MakeRequest);

// function MakeRequest(){
//     console.log(`button clicked`);
//     config ={
//         method : 'get',
//         url : 'data.text'
//     }
//     // axios return the promise
//     const promiseObj = axios(config);
//     promiseObj.then((res)=>{
//         console.log(res);
//         console.log(res.data);
//         console.log(res.status);
//         console.log(res.config);
//         console.log(res.headers);
//     })
// }
// MakeRequest();

// function MakeRequest(){
//     console.log(`button clicked`);
//     config ={
//         method : 'get',
//         url : 'data.text'
//     }
//     // axios return the promise
//     axios(config).then((res)=>{
//         console.log(res);
//     })
// }
// MakeRequest();
// function MakeRequest(){
//     console.log(`button clicked`);
//     // axios return the promise
//     axios({
//         method : 'get',
//         url : 'data.text'
//     }).then((res)=>{
//         console.log(res);
//     })
// }
// MakeRequest();

// function MakeRequest(){
//     console.log(`button clicked`);
//     // axios return the promise
//     // this is the sortHand
//     // axios.get('data.text').then((res)=>{
//     //     console.log(res.data);
//     // })
//     axios('data.text').then((res)=>{
//         console.log(res.data);
//     })
// }

// function MakeRequest() {
//     console.log('button clicked');
//     axios('data.text', { method: 'get' }).then((res) => {
//         console.log(res.data);
//     })
//     // axios.get('data.text').then((res)=>{
//     //     console.log(res.data);
//     // })
// }

// function MakeRequest(){
//     console.log('button clicked');
//     config={
//         method : 'get',
//     }
//     axios('data.text', config).then((res)=>{
//         console.log(res.data);
//     })
// }

// function MakeRequest(){
//     console.log('button cliked');
//     axios.get('data.text').then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err);
//     }).then(()=>{
//         console.log('Clean'); // always run
//     })
// }


// function MakeRequest(){
//     console.log('button clicked');
//     axios.get('data.text').then((res)=>{
//         // console.log(res.data);
//         document.getElementById('divData').innerText = res.data;
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// async function MakeRequest(){
//     console.log('button clicked');
//     config = {
//         method : 'get',
//         url : 'data.text'
//     }
//     const res = await axios(config);
//     document.getElementById('divData').innerText = res.data;
// }
// async function MakeRequest(){
//     console.log('button clicked');
//     config = {
//         method : 'get',
//         // url : 'data.text'
//     }
//     const res = await axios('data.text',config);
//     document.getElementById('divData').innerText = res.data;
// }
// async function MakeRequest(){
//     console.log('button clicked');
//     config = {
//         method : 'get',
//         // url : 'data.text'
//     }
//     const res = await axios('data.text',config);
//     document.getElementById('divData').innerText = res.data;
// }
// async function MakeRequest(){
//     console.log('button clicked');
//     const res = await axios.get('data.text');
//     document.getElementById('divData').innerText = res.data;
// }

document.getElementById('btn').addEventListener('click', MakeRequest);

async function MakeRequest(){
    console.log('button clicked');
    try{
        const res = await axios.get('data.text');
        document.getElementById('divData').innerText = res.data;
    }catch(err){
        console.log(err);
    }
}
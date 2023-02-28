document.getElementById('btn').addEventListener('click', MakeRequest);

// 000000000000000000000000000000 Create Axios Instances 000000000000000000000000000000000000000
const ai = axios.create({
    baseURL :'https://jsonplaceholder.typicode.com'
})

// function MakeRequest(){
//     console.log('button clicked');
//     ai('/posts/1').then((res)=>{
        // console.log("Data ",res.data);
        // console.log('Id ', res.data.id);
        // console.log('Title ', res.data.title);
        // console.log('Body ', res.data.body);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

async function MakeRequest(){
    console.log('button clicked');
    try{
        const res = await ai('/posts');
        console.log("Data ",res.data);
        console.log('Id ', res.data.id);
        console.log('Title ', res.data.title);
        console.log('Body ', res.data.body);
    }catch(err){
        console.log(err);
    }
}
document.getElementById('btn').addEventListener('click', MakeRequest);

function MakeRequest(){
    console.log('button clicked');
    axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.message);
        document.getElementById('img').setAttribute('src', res.data.message);
    }).catch((err) => {
        console.log(err);
    });
}
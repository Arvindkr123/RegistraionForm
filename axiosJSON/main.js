document.getElementById('btn').addEventListener('click', MakeRequest);

async function MakeRequest(){
    try{
        const mssg = await axios.get('data.json');
        // console.log(mssg);
        document.getElementById('divData').innerHTML = 
        `<ul>
            <li>RollNo and Name</li>
            <li>${mssg.data['rollNo']} , ${mssg.data['name']}</li>
        </ul>`;
    }catch(err){
        console.log(err);
    }
}
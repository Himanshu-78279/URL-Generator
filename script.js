let qrText = document.querySelector('#qrText');
let qrContainer = document.querySelector('#qrContainer');
let generateBtn = document.querySelector('#generateBtn');
let imageCon = document.querySelector('#imageCon');

generateBtn.addEventListener('click',async function(e){
    let text = qrText.value;
    console.log(text);
    if(text == ""){
        alert('Please Enter URL..');
    }
    else{
    imageCon.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    }
},false);

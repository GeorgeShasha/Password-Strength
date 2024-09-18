const passWord = document.getElementById('password');
const message = document.getElementById("message");
const str = document.getElementById("strength");

passWord.addEventListener('input', () => {

    if(passWord.value.length > 0){
        message.style.display = 'block';
    }else{
        message.style.display = 'none'; 
    }

    if(passWord.value.length < 4){
        str.innerHTML = 'weak!';
        passWord.style.borderColor = '1px solid #ff5925';
        message.style.color = '#ff5925';
    }else if(passWord.value.length >= 4 && passWord.value.length < 8){
        str.innerHTML = 'medium!';
        passWord.style.borderColor = '1px solid yellow';
        message.style.color = 'yellow';
    }else if(passWord.value.length >= 8){
        str.innerHTML = 'strong!';
        passWord.style.borderColor = '1px solid #26d730';
        message.style.color = '#26d730';
    }
});

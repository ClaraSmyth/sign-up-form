
function validatePassword() {  
    let pw1 = document.getElementById('pw');  
    let pw2 = document.getElementById('confirm-pw');  
    if(pw1 != pw2) {
        alert('Passwords did not match!');
        return false;
    } 
} 
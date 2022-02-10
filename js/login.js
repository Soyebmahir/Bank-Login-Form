document.getElementById('login-submit').addEventListener('click',()=>{
    const emailField=document.getElementById('user-email')
    const userEmail= emailField.value;
    // console.log(userEmail)

    
    const PasswordField=document.getElementById('user-password') ;
    const userPassword=PasswordField.value;
    // console.log(userPassword);
    if(userEmail=='banking@gmail.com' && userPassword=='1234'){

        window.location.href='Banking.html'

    }
})

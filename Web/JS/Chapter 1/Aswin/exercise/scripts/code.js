function validateForm(){
    const email=document.getElementById("Email");
    const passwd=document.getElementById("passwd");
    const emailError=document.getElementById("emailError");
    const passwdError=document.getElementById("passwdError");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid=true;
    if(email==="" || !emailRegex.test(email.value)){
        emailError.innerText="Enter a valid email id";
        isValid=false;
    }
    else{
        emailError.innerText="";
    }
    if(passwd.value===""){
        passwdError.innerText="Password cannot be Empty";
       isValid=false;
    }
    else{
        passwdError.innerText="";
    }
    if(!isValid){
        return false;
    }

    alert("Successfully signed in");
    return true;
}
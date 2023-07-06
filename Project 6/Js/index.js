function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter six letter";
        return false;
    }

    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter";
        return false;
    }

    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your email";
        return false; 
    }

    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password";
        return false; 
    }

    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }

    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="Confirm Password is required.";
        return false;
    }

    else if(document.Formfill.cPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password does'nt matched"; 
        return false;
    }

    else if(document.Formfill.Password.value == document.Formfill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }

}

var popup = document.getElementById('popup');
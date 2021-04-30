function login(){
    let uname = document.getElementById("uName").value;
    let pass = document.getElementById("pass").value; 

    if ((uname == "anu gupta" || uname == "Anu Gupta" || uname == "Anu gupta") && (pass == "12345678")){
        location.assign("http://127.0.0.1:5501/html/login1.html");
    }
    else if((uname == "Saksham Abrol" || uname == "saksham abrol" || uname == "Saksham abrol") && (pass == "12345678")){
        location.assign("http://127.0.0.1:5501/html/login2.html");
    }
    else{
        alert("Invalid Username or Password");
    }
}

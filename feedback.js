function myFunc(form){
    
    let element = document.getElementById("yayy");
    console.log(element);
    element.innerHTML = "Thank you and have a nice day!!!";
    element.style.color = "red";
    form.reset();
}
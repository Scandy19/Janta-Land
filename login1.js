let click = document.getElementById("clicker");
let disp1 = document.getElementById("disp1");
let disp2 = document.getElementById("disp2");
let disp3 = document.getElementById("disp3");
let disp4 = document.getElementById("disp4");
let disp5 = document.getElementById("disp5");
let disp6 = document.getElementById("disp6");
let disp7 = document.getElementById("disp7");
let arrClient = ["Ronaldo", "Messi", "Mahendra Singh Dhoni", "Virat Kohli", "K L Rahul", "Mr. Makhija"];
let min = 0, max = arrClient.length;
let ranClient = Math.floor(Math.random() * max);

function loadContent(){
    click.innerHTML = "Your Personal details";
    let x = "000001";
    disp1.innerHTML = "User Id: " + x;
    disp2.innerHTML = "Mails: " + 5 + " unread";
    disp3.innerHTML =  "Properties sold(in total): " + 21;
    disp4.innerHTML = "Target Properties(this year): " + 45;
    disp5.innerHTML = "Client to Attend today: " + arrClient[ranClient];
    disp6.innerHTML = "Clients to attend this month: "
    for(let i of arrClient){

        disp6.innerHTML +=  i + " , ";
    }
    disp7.innerHTML = "Number of clients: " + arrClient.length;
}

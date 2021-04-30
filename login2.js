let click1 = document.getElementById("clicker1");
let dis1 = document.getElementById("dis1");
let dis2 = document.getElementById("dis2");
let dis3 = document.getElementById("dis3");
let dis4 = document.getElementById("dis4");
let dis5 = document.getElementById("dis5");
let dis6 = document.getElementById("dis6");
let dis7 = document.getElementById("dis7");
let arrClient1 = ["Rohit Sharma", "Mohit Sharma", "Rahul Devgn", "Raj Kapoor", "Sarthatk Sharma", "Rohan"];
let min1 = 0, max1 = arrClient1.length;
let ranClient1 = Math.floor(Math.random() * max1);

function loadContent1(){
    click1.innerHTML = "Your Personal details";
    let x = "000002";
    dis1.innerHTML = "User Id: " + x;
    dis2.innerHTML = "Mails: " + 21 + " unread";
    dis3.innerHTML =  "Properties sold(in total): " + 12;
    dis4.innerHTML = "Target Properties(this year): " + 40;
    dis5.innerHTML = "Client to Attend today: " + arrClient1[ranClient1];
    dis6.innerHTML = "Clients to attend this month: "
    for(let j of arrClient1){

        dis6.innerHTML +=  j + " , ";
    }
    dis7.innerHTML = "Number of clients: " + arrClient1.length;
}
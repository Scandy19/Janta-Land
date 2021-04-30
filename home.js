let clientReviews = ["“I am a resident of C-302, JLPL-Regency Height, Sector 90,Mohali. The security guard and other person of security are very helpful and Gym and swimming pool all services are very good and we are satisfied.”" ,
"“Just when you thought that Urban life could not get any better. It has JLPL has brought in the vicinity of Chandigarh, a miniature City Beautiful. State of the art living style, sylvan and peaceful surroundings are the hall marks of excellence here.”",
"“I am r/o 1003 Tower A2, Regency heights since june 2012, living here is a very comfortable experience with all the maintenance services just a phone call away, hope the standards continue to enjoy our stay here, Just a suggestion for working professional like us pool and gym time in the evening till 9 pm. All the Best”",
"Janta Land Promoters Pvt. Ltd., Sector 82, Mohali. My life has changed from the day I brought this plot : 1. Excellent Security. :  2. Maintenance upto date. If any requirment regarding maintanance JLPL people resolves it within 5 to 10 mints. :  3. Roads excellent. :  4. Environment excellent. 5. No problem for electricity and water supply. ”",
"Life enhancing developments, the mega master planning, innovative engineering, harmonious perfect locations, sustainable, mixed used communities, high-grade architectural designs delivered with the vision, passion, creativity & commitment."
];
function showReviews(){
    let reviewDisplay = document.getElementsByName("clientNames")[0].selectedIndex;
    document.getElementById("review").innerHTML = clientReviews[reviewDisplay];
}


let images = [];
let cImage = 0;
images[0] = "/images/sanawar1.jpg";
images[1] = "/images/sanawar.jpg"
images[2] = "/images/canal.jpg"
images[3] = "/images/canal2.jpg"
images[4] = "/images/falcon1.jpg"
images[5] = "/images/falcon4.jpg"
images[6] = "/images/galaxy1.jpg"
images[7] = "/images/ind3.jpg"
images[8] = "/images/sky2.jpg"
images[9] = "/images/canal-view_one.jpg"
images[10] = "/images/ind.jpg"
images[11] = "/images/office.jpg"
images[12] = "/images/sanawar3.png"
images[13] = "/images/sky-gardens.jpg"
images[14] = "/images/sanawarhome.jpg"
images[15] = "/images/sky.jpg"

function animations(){
    if (cImage == 15){
        cImage = 0;
    }
    else{
        cImage++;
        document.getElementById("imageEffect").src = images[cImage];
    }
}
setInterval(animations, 2000);
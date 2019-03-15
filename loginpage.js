function validate() {
    var user=document.getElementById("username");
    var alerts=document.getElementById("alerts");
    var pass=document.getElementById("password");
    var alerts2=document.getElementById("alerts2");
    if (user.value.length<5){
        alerts.innerHTML=("      Username too short!!!")
    }
    alerts.style.color="red"
    alerts.style.marginLeft="100px"
    alerts.style.fontSize="15px"
    alerts.style.fontStyle="italic"
    if (pass.value.length<5){
        alerts2.innerHTML=("Password too short!!!")
    }
    alerts2.style.color="red"
    alerts2.style.marginLeft="100px"
    alerts2.style.fontSize="15px"
    alerts.style.fontStyle="italic"
    return false;
}
function change() {
    var user=document.getElementById("username");
    user.value=user.value.toUpperCase()
}
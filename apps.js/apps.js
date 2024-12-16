const Btn = document.getElementById("Btn");

Btn.onclick=()=>{
if (document.body.style.backgroundColor==="white") {
   document.body.style.backgroundColor="grey";
   document.body.style.color="white"
   Btn.textContent="Switch to light Mode";
}
else{
    document.body.style.backgroundColor="white";
    document.body.style.color="black"
    Btn.textContent="Switch to dark Mode";

}
}
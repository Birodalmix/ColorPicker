const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn =document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    let hexnumber="#";
    for(let i=0;i<6;i++){
        hexnumber+=hex[getRandomHex()];
    }
    color.textContent=hexnumber;
    document.body.style.backgroundColor=hexnumber;
})
function getRandomHex(){
    return Math.floor(Math.random()*hex.length);
}
const colors =["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    const randomNuber=getRandomNuber();
    document.body.style.backgroundColor=colors[randomNuber];
    color.textContent=colors[randomNuber];
})
function getRandomNuber(){
    return Math.floor(Math.random()*colors.length);
}
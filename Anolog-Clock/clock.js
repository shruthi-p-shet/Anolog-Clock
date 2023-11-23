const houeElnt=document.querySelector(".hour");
const minuteElnt=document.querySelector(".minute");
const secondElnt=document.querySelector(".second");

function updateClock(){
    const date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    let hourD=(hour/12)*360;
    let minD=(minute/60)*360;
    let secD=(second/60)*360;
    houeElnt.style.transform=`rotate(${hourD}deg)`;
    minuteElnt.style.transform=`rotate(${minD}deg)`;
    secondElnt.style.transform=`rotate(${secD}deg)`;

}
setInterval(updateClock,1000);

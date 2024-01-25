const canvas =document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const increasebtn =document.getElementById('increase');
const decreasebtn =document.getElementById('decrease');
const sizeEl=document.getElementById('size');

const colorEl=document.getElementById('color');
const clearEl=document.getElementById('clear');



let size=30;

let ispressed=false;
let color='black'
let x=undefined;
let y=undefined;

updateSize()

canvas.addEventListener('mousedown',(e)=>{
    
    ispressed=true;
    x=e.offsetX;
    y=e.offsetY;
})

canvas.addEventListener('mouseup',()=>{
    ispressed=false

    x=undefined;
    y=undefined;
    
})

canvas.addEventListener('mousemove',(e)=>{
    if(ispressed){

    const x2=e.offsetX;
    const y2=e.offsetY;
    drawCircle(x2,y2);
    drawline(x,y,x2,y2);
    x=x2;
    y=y2;

    }
    
})
colorEl.addEventListener('change',(e)=>{
    color=e.target.value;
})
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fillStyle=color;
    ctx.fill();
    

}



increasebtn.addEventListener('click',()=>{
    size+=5;
    if(size>50){
        size=50;
    }
    updateSize()

    


})
decreasebtn.addEventListener('click',()=>{

    size-=5;
    if(size<5){
        size=5;
    }
    updateSize(    )
    
})
function updateSize(){
sizeEl.innerHTML=size;    
}

function drawline(x1,y1,x2,y2){

    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();
    

}
//----------clear----------------

clearEl.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    


})
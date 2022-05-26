a1=["1.jpg","2.jpg","3.jpg","4.jpg"];
r=Math.floor(Math.random()*4);
console.log(r);
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background=a1[r];
console.log(background);
rover="rover.png";
roverX=10;
roverY=10;
roverWidth=100;
roverHeight=90;
function a(){
    b=new Image();
    b.onload=upload_background;
    b.src=background;

    r=new Image();
    r.onload=upload_rover;
    r.src=rover;
}
function upload_background(){
    ctx.drawImage(b,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(r,roverX,roverY,roverWidth,roverHeight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(E){
    kc=E.keyCode;
    console.log(kc);
    if(kc == '38'){
        up();
      console.log("up");
    }
    if(kc == '39'){
        right();
      console.log("right");
    }
    if(kc == '40'){
        down();
        console.log("down");
    }
    if(kc == '37'){
        left();
        console.log("left");
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        upload_background();
        upload_rover();
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        upload_background();
        upload_rover();
    }

}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
        upload_background();
        upload_rover();
    }
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
        upload_background();
        upload_rover();
    }
}
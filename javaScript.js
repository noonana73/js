
var ctx = document.getElementById("ctx").getContext("2d");
var ball = {
     posX: 350,
	 posY: 250,
	 speedX: 1,
	 speedY: 0.4
};
setInterval(dessinball,10);
function dessinball(){
	ctx.fillStyle = 'white';
    ctx.fillRect(1,1,698,498);
	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.arc(ball.posX,ball.posY,10,0,360);
	ctx.fill();
	ball.posX = ball.posX + ball.speedX;
	ball.posY = ball.posY + ball.speedY;
}

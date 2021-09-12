
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width= 75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


car_x=10;
car_y=10;
function add() {

	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
    background_imgTag = background_image;

    car_imgTag = new Image();
	car_imgTag.onload = uploadgreencar;
    car_imgTag = greencar_image;

}


function uploadBackround() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function greencar_image() {
    ctx.drawImage(greencar_image,greencar_x,greencar_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if (greencar_y >=0){
        greencar_y=greencar_y-10;
        uploadBackround();
        greencar_image();
    }
}
function down(){
    if (greencar_y <=510){
        greencar_y=greencar_y+10;
        uploadBackround();
        greencar_image();
    }
}
function right(){
    if (greencar_x <=700){
        greencar_x=rover_xz+10;
        uploadBackround();
        greencar_image();
    }
}
function left(){
    if (greencar_x >=0){
        greencar_x=greencar_x-10;
        uploadBackround();
        greencar_image();
    }
}

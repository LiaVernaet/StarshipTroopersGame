// JavaScript Document

//// LINK: https://www.w3schools.com/graphics/game_score.asp


//VARIABLES
var	scrollingBackground = document.getElementById("#background");
var	asteroid = document.getElementById("#asteroid");
var startButton = document.getElementById("#startButton");
var score;
var myGamePiece;


myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();


function startGame() {
	startButton.style.display = 'none';
    myGameArea.start();
	myGamePiece = new component(30, 30, "../images/starship.gif", 10, 120, "image");		
//		starship.style.position='relative';
//		starship.style.left='0px';
//	    starship.style.top='500px';
//		score = new component("30px", "Consolas", "black", 280, 40, "text");
}


	function moveShip(e){				
		var key_code=e.which||e.keyCode;
		switch(key_code){

			case 38: //Up arrow key
				moveUp();
				break;

			case 40: //down arrow key
				moveDown();
				break;						
		}
	}

	function moveUp(){
		starship.style.top=parseInt(objImage.style.top)-5 +'px';
	}

	function moveDown(){
		starship.style.top=parseInt(objImage.style.top)+5 +'px';
	}


//FUNCTIONS
function moveBackground() {
	
}


//function moveShip() {
	
	
//	IF key = up {
//	move up
//}
	//	IF key = down {
//	move down
//}
	
}





//EVENT LISTENERS
starship.addEventListener('keypress', moveShip);
startButton.addEventListener('click', startGame);
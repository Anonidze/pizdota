#pragma strict

var tst: float;
var mouseX : int;
var mouseY : int;
var screenWidth : int;
var screenHeight: int; 
var moveSpeed : float = 10;


function Start () {

}

function Update () {

	mouseX = Input.mousePosition.x;
	mouseY = Input.mousePosition.y;
	screenWidth = Screen.width;
	screenHeight = Screen.height;


	if (mouseX <= 0)
	{
		this.transform.position.x -= moveSpeed * Time.deltaTime;	
		
	}
	if (mouseX >= screenWidth - 1)
	{
		this.transform.position.x += moveSpeed * Time.deltaTime;	
		
	}
	if (mouseY <= 0)
	{
		this.transform.position.z -= moveSpeed * Time.deltaTime;	
		
	}
	if (mouseY >= screenHeight -1)
	{
		this.transform.position.z += moveSpeed * Time.deltaTime;	
		
	}

}
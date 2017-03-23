
function validate()
{
    if(   document.getElementById("uname").value == "workshop"
       && document.getElementById("pass").value == "workshop" )
    {
        alert( "validation succeeded" );
        location.href="run.html";
    }
    else
    {
        alert( "validation failed" );
        location.href="fail.html";
    }
}

var img = new Array(2);
img[0] = new Image();
img[0].src = "1.jpg";
img[1]= new Image();
img[1].src = "2.jpg";
img[2]=new Image();
img[2].src = "3.jpg";

var number = 0;

function next(){
	
	number++;
	if(number>2){
		
		number = 0;
	}
	document.slider.src = img[number].src;
}

function previous(){
	
	number--;
if(number <0){
	number = 2;
}
document.slider.src = img[number].src
}
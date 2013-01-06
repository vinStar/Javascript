var num=7.561;
num=Math.round(num);
//alert(num);

function popUp(winURL){

	window.open(winURL,"popup","width=320,height=480");
}

function showHref(){
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
	if(links[i].className=="popup"){
	links[i].onclick=function(){
		popUp(this.getAttribute("href"));
		return false;
		}
	}
	}
	
}

//ÏòcssÑ§Ï°
window.onload=showHref;


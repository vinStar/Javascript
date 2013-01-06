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

//向css学习
window.onload=showHref;

//检测对象、方法是否存在--对象检测技术
if(document.getElementById){
	alert("document.getElementById is supported");
}
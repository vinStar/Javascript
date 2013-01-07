
// 处理window.onload 添加多个 函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload !="function"){
	window.onload=func;
	}else{
	window.onload=function(){
		oldonload();
		func();
		}
	}
}

addLoadEvent(prepareGallery);




function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
	links[i].onclick=function(){
		return showPic(this);		 
		}
	}


}



function showPic(whichpic){
			
	var source=whichpic.getAttribute("href");
	if(!document.getElementById("placeholder")) return true;
	var placeholder=document.getElementById("placeholder");
	//if(placeholder.nodeName !="IMG") return true;
	placeholder.setAttribute("src",source);
	//test commit
	 var titletext=whichpic.getAttribute("title");
	 var description=document.getElementById("description");
	 //alert(description.childNodes[0].nodeValue);
	description.firstChild.nodeValue=titletext;
	return false;
	
}

function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
//	alert("the count of body childElement is "+body_element.childNodes.length);
	alert(body_element.nodeType);

}


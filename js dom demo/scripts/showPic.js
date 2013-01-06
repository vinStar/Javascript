
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

window.onload=addLoadEvent(prepareGallery);



function prepareGallery(){
	if(!document.getElementByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
	links[i].onclick=function(){
		showPic(this);
		return false;
		}
	}


}



function showPic(whichpic){
			
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	//test commit
	 var titletext=whichpic.getAttribute("title");
	 var description=document.getElementById("description");
	 //alert(description.childNodes[0].nodeValue);
	description.firstChild.nodeValue=titletext;
	
}
//window.onload=countBodyChildren;
function countBodyChildren(){
	var body_element=document.getElementsByTagName("body")[0];
//	alert("the count of body childElement is "+body_element.childNodes.length);
	alert(body_element.nodeType);

}
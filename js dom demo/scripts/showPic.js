
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
// 自定义 insertAfter 函数
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
     parent.appendChild(newElement);
  } else {
     parent.insertBefore(newElement,targetElement.nextSibling);
  }
}


function preparePlaceholder(){

  if(!document.createElement) return false;
  if(!document.createTextNode) return false;

  var placeholder = document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","images/placeholder.jpg");
  placeholder.setAttribute("alt","my image gallery");
  var description = document.createElement("p");
  description.setAttribute("id","description");
  var desctext = document.createTextNode("Choose an image");
  description.appendChild(desctext);
  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);

}


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




addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);


























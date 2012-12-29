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
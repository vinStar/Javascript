// ����window.onload ��Ӷ�� ����
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

// ����insertBefore�Զ���insertAfter����
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
     parent.appendChild(newElement);
  } else {
     parent.insertBefore(newElement,targetElement.nextSibling);
  }

}

// ׷����ʽ
function addClass(element,value){
  if(!element.calssName){
    element.className=value;
  }else{
    var newClassName=element.className;
    newClassName+=" ";
    newClassName+= value;
    element.className=newClassName;
  }
}



 
































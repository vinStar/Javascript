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
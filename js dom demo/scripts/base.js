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

// 利用insertBefore自定义insertAfter函数
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if(parent.lastChild == targetElement){
     parent.appendChild(newElement);
  } else {
     parent.insertBefore(newElement,targetElement.nextSibling);
  }

}
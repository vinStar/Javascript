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
//window.onload=showHref;

//检测对象、方法是否存在--对象检测技术
//if(document.getElementById){
//	alert("document.getElementById is supported");
//}
//------------------------- begin chapter 7

function insertParagraph(text){
  var str="<p>";
  str+=text;
  str+="</p>";
  document.write(str);
}

window.onload=function(){
  //var testdiv=document.getElementById("testdiv");
  //testdiv.innerHTML="<p>I inserted <em>this</em> content.</p>";
  
  var para = document.createElement("p");
  //var info = "nodeName: ";
  //info+=para.nodeName;
  //info+=" nodeType: ";
  //info+=para.nodeType;
  //alert(info);

//---
  //var testdiv = document.getElementById("testdiv");
  
  //var txt = document.createTextNode("Hello world");
  //para.appendChild(txt);
  //var testdiv = document.getElementById("testdiv");
  //testdiv.appendChild(para);

//---
  var txt1= document.createTextNode("This is ");
  para.appendChild(txt1);
  var emphasis =document.createElement("em");
  var txt2 = document.createTextNode("my");
  emphasis.appendChild(txt2);
  para.appendChild(emphasis);
  var txt3 = document.createTextNode(" content.");
  para.appendChild(txt3);
  var testdiv= document.getElementById("testdiv");
  testdiv.appendChild(para);
  
}

// 点击label为对应的元素获取焦点
function focusLabels(){

  if(!document.getElementsByTagName) return false;
  var labels = document.getElementsByTagName("label");
  for(var i=0;i<labels.length;i++){
    if(!labels[i].getAttribute("for")) continue;
    labels[i].onclick = function(){
       var id= this.getAttribute("for");
       if(!document.getElementById(id)) return false;
       var element = document.getElementById(id);
       element.focus();
    }     
  }
}

//文本框默认值控制
function resetFields(whichform){
  for(var i=0; i<whichform.elements.length;i++){
     var element = whichform.elements[i];
     if(element.type =="submit") continue;
     if(!element.defaultValue) continue;
     element.onfocus = function(){
       if(this.value == this.defaultValue){
         this.value="";
       }
     }
     element.onblur = function(){
       if(this.value == ""){
         this.value = this.defaultValue;
       }
     }
  }
}
// 遍历form 调用 resetFields
function prepareForms(){
  for(var i=0;i<document.forms.length;i++){
  var thisform = document.forms[i];
  resetFields(thisform);
  }
}

addLoadEvent(focusLabels);
addLoadEvent(prepareForms);
//alert(window.onload);

































 //账号下拉account popuu menu
function account(){
	var account=document.getElementById("account_info_nav");
	account.onmouseover=function(){
     		var accountList = document.getElementById("account_info_list");   
     	 	if(accountList){
      	  		accountList.style.display="block";
    	 	}else{
       	 		//accountList.style.display="none";
    	 	}
    	 	account.onmouseout= accountList.onmouseout=function(){     
     	 		if(accountList){
      	 			accountList.style.display="none";
      			}  
    		}
	}
}

function swithListDetail(){
	$("view_as_list").onclick=$("view_as_detail").onclick=function(){
		//alert(this.getAttribute("class"));
		if(this.getAttribute("class")=="on") return;			
		else{
			$("view_as_list").setAttribute("class","none");
		        $("view_as_detail").setAttribute("class","none");
			this.setAttribute("class","on")			 
			var item = document.getElementsByTagName("tr");
			for(var i=0;i<item.length;i++){
				if(item[i].getAttribute("class")=="tr_detail"){
				item[i].style.display!="table-row"?item[i].style.display="table-row":item[i].style.display="none";
				} 				 
			}
			 
		}
	}
}

//条纹
function stripeTable(){
	var item = document.getElementsByTagName("tr");
	var odd=true;

	//悬浮
	for(var i=0;i<item.length;i++){

		if(item[i].className=="tr_detail") continue;

		if(odd){
			item[i].className+=" odd";
			odd=false;
		}else{
			odd=true;
		}

		
		var oldClass=item[i].className;
		if(i>0){
			item[i].onmouseover=function(){
				if(this.className)this.className+=" hover";
			};
			(function(o){
				item[i].onmouseout=function(){
					if(this.className)this.className=o;
				};
			})(oldClass);
		}
		
	}
}

 
//删除默认值
function delInfo(obj){
if(obj.getAttribute("info")==obj.value){
obj.value="";
}
}
//添加默认值
function addInfo(obj){
if(obj.value.trim()==""){
   obj.value=obj.getAttribute("info");
  }
}

 if(!String.prototype.trim){
     String.prototype.trim = function() 
     { 
	 var rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
         return this.replace(rtrim,"");
     }
 }

//window.onload add multi func
function addLoadEvent(func){
	var oldOnload=window.onload;
	if(typeof window.onload !="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldOnload();
			func();
		}
	}	
}
//get element by id
function $(eId){
	return document.getElementById(eId);
}


function allCheck(){
	var chk=$("AllCheck");
	if(!chk) return;
	var checkFlag=chk.checked;
	chk.onclick=function(){		
		var items = document.getElementsByTagName("input");
		for(var i=0;i<items.length;i++){
			if(items[i].type=="checkbox"&&items[i].id!="AllCheck"){
				items[i].checked=checkFlag;
			}
		}
	};
}

addLoadEvent(account);
addLoadEvent(swithListDetail);
addLoadEvent(stripeTable);
addLoadEvent(allCheck);
var account=document.getElementById("account_info_nav");
account.onmouseover=function(){
     var accountList = document.getElementById("account_info_list");
   
     if(accountList){
        accountList.style.display="block";
     }    
     account.onmouseout=accountList.onmouseout=function(){          
       accountList.style.display="none";      
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
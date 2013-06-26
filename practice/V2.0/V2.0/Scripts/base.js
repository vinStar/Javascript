var account=document.getElementById("account_info_nav");
account.onmouseover=function(){
     var accountList = document.getElementById("account_info_list");
   
     if(accountList){
        accountList.style.display="block";
     }
     else{
        //accountList.style.display="none";
     }
     accountList.onmouseout=function(){     
      if(accountList){
       accountList.style.display="none";
      }  
     }
}
 
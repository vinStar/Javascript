
function positionMessage(){
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  moveElement("message",200,100,10);
 if(!document.getElementById("message2")) return false;
  var elem = document.getElementById("message2");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "50px";
  moveElement("message2",125,75,10);
}

addLoadEvent(positionMessage);


function moveElement(elementID,final_x,final_y,interval){
  
  if(!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  //≥ı ºŒª÷√
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);

  if(xpos == final_x && ypos == final_y){
    return true;
  }

  if(xpos < final_x ){
    var dist = Math.cell((final_x - xpos)/10);
    xpos+=dist;
  }
  if(xpos > final_x ){
    var dist = Math.cell((xpos - final_x)/10);
    xpos-=dist;
  }
  if(ypos < final_y){
    var dist = Math.cell((final_y - ypos)/10);
    ypos+=dist;
  }
  if(ypos > final_y){
    var dist = Math.cell(( ypos - final_y)/10);
    ypos-=dist;
  }

  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";

  var repeat  = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  movement = setTimeout(repeat,interval);
  
}






















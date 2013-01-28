
//测试 函数传参形式：数组
function sayHi(){
   alert(arguments.length);
}

addLoadEvent=sayHi("1","2");

// 函数按值类型传递，函数内参数为局部变量
function setName(obj){
  obj.name = "Nicholas";
  obj = new Object();
  obj.name="Greg";
}

function test(){
var person = new Object();
setName(person);
alert(person.name);
alert(1 instanceof Object);

//没有块级作用域
if(true){
var color = "bule";
}

alert("没有块级作用域if" + color);

for(var i = 0; i< 10;i++){  }
alert(i);
}


addLoadEvent = test(); 

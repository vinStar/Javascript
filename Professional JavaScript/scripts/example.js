
//���� ����������ʽ������
function sayHi(){
   alert(arguments.length);
}

addLoadEvent=sayHi("1","2");

// ������ֵ���ʹ��ݣ������ڲ���Ϊ�ֲ�����
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

//û�п鼶������
if(true){
var color = "bule";
}

alert("û�п鼶������if" + color);

for(var i = 0; i< 10;i++){  }
alert(i);
}


addLoadEvent = test(); 

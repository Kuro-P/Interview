/*��Ҫ�õ��ĺ�����ʽ*/
function f(x){
    return Math.sin(x);
}
/*��������*/
function dx(f,x){
    var f_change,
        f_last;
    var x_change=0.00001,
        x_last;
    var dx;
    x_last = x+x_change;
    f_last = f(x_last);
    f_change = f_last - f(x);
    dx = f_change / x_change;
    if(dx>99999){
        console.log("�˺������ɵ�");
    }else{
        return dx;
    }
}

var step = 0.1; //��������Ϊ0.1 
var x = 2; //��ʼֵΪ2
var f_change = f(x),
    f_last = f(x);
var fx = f(x); 
while(Math.ceil(f_change)>0.0000001){
    x = x - dx(f,x)*step; // ����Ϊ�� �����ֵ������Ϊ�� ����Сֵ
    fx = f(x);
    f_change = Math.abs( fx - f_last);
    f_last = fx;
}
console.log("x:"+x+" fx:"+fx);

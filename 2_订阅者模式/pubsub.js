// publish/subscribe模式 ，目标更新后，向订阅了的对象推送更新
// 以下例子来模仿 商店有新品，根据顾客订阅是商品类型，向顾客推送对应类型的新品

//types = {}
//types.type = [ { GID:0, UpDate:fun(){}},{ GID:1, UpDate:fun(){}} ]
var pubsub = {};
(function(q){
    var types = {}; //商店里所有商品的类型

    // 向所有订阅者通知更新 
    q.publish = function(type,data){
        if(!types[type]){
            return false;
        }
        for(var i=0; i<types[type].length; i++){
            types[type][i].UpDate(types[type][i].Custom, data);
        }
    };
    // 订阅者订阅事件注册 将订阅者添加入此类事件的订阅者
    q.subscribe = function(type,custom,todo){
        if(!types[type]){
            types[type] = [];
        }
        types[type].push({ 
            Custom: custom, 
            UpDate:todo});
    };
    // 订阅者取消订阅 将订阅者从此类事件的订阅者中删除
    q.unsubscribe = function(type,custom){
        for(t in types){
            if(t == type){
                for(var i=0; i<types[t].length;i++){
                    if(types[t][i].Custom == custom){
                        types[t].splice(i,1);
                    }
                }
            }
        }
    };
})(pubsub);

function callCustom(cus,data){
    console.log("Custom: "+ cus +" AD:"+data.toString());
}

pubsub.subscribe('cloth','custom1',callCustom);
pubsub.subscribe('cloth','custom2',callCustom);
pubsub.subscribe('shoes','custom3',callCustom);

pubsub.publish('cloth',[
    goodsName = "西装",
    price = "￥350.00"]);
pubsub.publish('shoes',[
    goodsName = "皮鞋",
    price = "￥250.00"]);

pubsub.unsubscribe('cloth',"custom1");

pubsub.publish('cloth',[
    goodsName = "睡袍",
    price = "￥150.00"]);

// js订阅者模式-第二版-2018/2/28

let msgcenter = (function (){

    function sendmsg(user, msg){
        console.log(`${user.name}:${msg}`)
    }

    var userList = [];

    return { sendmsg ,userList ,name: "每日精选" };
})();

let middleware = (function () {

    function subscribe(xcenter, user){
        if( xcenter.userList.includes(user) ) return;
        xcenter.userList.push(user);
        console.log(`${user.name}成功订阅${xcenter.name}`);
    }

    function unsubscribe(xcenter, user){
        if( !xcenter.userList.includes(user) ) return;
        var idx = xcenter.userList.indexOf(user.id);
        xcenter.userList.splice(idx,1);
        console.log(`${user.name}成功取消订阅${xcenter.name}`)
    }

    function publish(xcenter,msg){
        if(xcenter.userList.length >= 0){
            for(user of xcenter.userList){
                xcenter.sendmsg(user, msg);
            }
        }
    }

    return { subscribe, unsubscribe, publish };
})();

function User(name, id){
    this.name = name;
    this.id = id;
}
let xm = new User("小明", "00"),
    xh = new User("小盒", "01"),
    xw = new User("小王", "02");


middleware.publish(msgcenter, "信息中心成立了");
middleware.subscribe(msgcenter, xm);
middleware.unsubscribe(msgcenter, xm);
middleware.publish(msgcenter, "您好");
middleware.subscribe(msgcenter, xh);
middleware.publish(msgcenter, "欢迎您！");
middleware.subscribe(msgcenter, xw);
middleware.publish(msgcenter, "特邀您参与每日活动");

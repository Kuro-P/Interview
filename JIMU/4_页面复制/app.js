var express = require('express'); 
var swig = require('swig'); 
var path = require('path');
var app = express(); 
var port = process.env.PORT || 4000 ;


swig.setDefaults({ cache: false });
app.set('view cache', false); //设置swig页面不缓存 
app.set('views', __dirname );
app.set('view engine','html'); 
app.engine('html', swig.renderFile); 
app.listen(port); 

console.log('server is started at http://localhost:'+port); //index page  http://localhost:4000/
app.get('/',function(req, res){
     res.render('index',{
        title:'关于盒子 ', 
        features : [{
            index : 1,
            img : "imgs/safe.png",
            caption : "安全保障",
            desc : ["第三方担保、保证金","风险互助金、法律援助金","多重安全防线","为投资者提供保障"]
     },{
           index : 2,
           img : "imgs/property.png",
           caption : "合规透明",
           desc : ["交易资金由民生银行全程","存管，资金流转清晰","可查，交易真实、合法","让投资者安心"] 
     },{
           index : 3,
           img : "imgs/service.png",
           caption : "贴心服务",
           desc : ["积木盒子只做一件事","为投融双方倾力服务","积木盒子全员参与","为您提供一站式服务"]    
     },{
           index : 4,
           img : "imgs/choice.png",
           caption : "丰富选择",
           desc : ["我们为您提供","多期限、多地域、多行业","多种形式的投资项目","总有一款适合您"]  
     }],
        cards : [{
            year : 2016,
            events : [{
                time : "9月",
                thing : "积木盒子成为积木拼图集团旗下网络借贷平台"
            },{
                time : "9月",
                thing :"在多条业务线坚实的基础上，微金融服务集团积木拼图正式成立"
            }]
        },{
            year : 2015,
            events : [{
                time : "7月",
                thing : "正式切换至民生银行 盒子树立P2P资金存管新标杆",
            },{
                time : "4月",
                thing : "英国天达集团领投 盒子完成C轮融资共8400万美元"
            },{
                time : "2月",
                thing : "盒子交易额突破50亿元"
            }]
        },{
            year : 2014,
            events : [{
                time : "2014年11月",
                thing : "盒子交易额突破30亿元"
            },{
                time : "2014年10月",
                thing : "盒子启动“寒门学子项目"
            },{
                time : "2014年9月",
                thing : "小米顺为领投3719万美元，盒子完成B轮融资"
            },{
                time : "2014年7月",
                thing : "盒子与第三方法律服务商绿狗网进行证据存管，降低投资风险"
            },{
                time : "2014年6月",
                thing : "盒子推实名制项目，公开监管制度更加完善"
            },{
                time : "2014年5月",
                thing : "盒子的交易额突破10亿元"
            },{
                time : "2014年2月",
                thing : "来自欧洲的Ventech投资千万美元"
            }]
        },{
            year : 2013,
            events : [{
                time : "2013年12月",
                thing : "交易额突破1亿元"
            },{
                time : "2013年8月",
                thing : "踩着76hui的肩膀，积木盒子闪亮登场"
            },{
                time : "2012年7月",
                thing : "专注尽职调查数据服务的平台76hui上线"
            },{
                time : "2012年3月",
                thing : "来自金融与互联网的好积友开始了跨界创业之旅"
            }]
        }],
        advantages : [{
            img : "imgs/simple.png",
            chapter : "简洁活跃",
            desc : ["从积木的基本造型出发","一切可能性都来自于用户对于我们的期许","和丰富的想象力"]
        },{
            img : "imgs/colorful.png",
            chapter : "色彩缤纷",
            desc : ["在这里只有缤纷和欢乐","理财也可以丰富多彩的"]
        },{
            img : "imgs/smart.png",
            chapter : "智能搭配",
            desc : ["所有的色彩和造型都来自于合理的","布局和规划。欢乐的背后","是专业和严谨的计算","自由和想象，是基于细节完美的处理。"]
        }] }); 
 });
app.use(express.static(path.join(__dirname)));
// node work_space\swig\app.js
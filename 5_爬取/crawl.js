var Nightmare = require("nightmare");
var cheerio = require("cheerio");
var pageScraper = new Nightmare();

function fliter(h){
  var $ = cheerio.load(h);
  var projectList = $('.project');
  var projects = [];
  for(let i=0; i<projectList.length; i++){
    var obj = {};
    obj.name = $(projectList[i]).find('.title').text();
    obj.rate = $(projectList[i]).find('.rate').text().replace(/[^\d\.\+\%]/g, "");
    obj.month = $(projectList[i]).find('.time .time-limit').text().replace(/[\r\n\s]/g, "");
    obj.statu = $(projectList[i]).find('.status .status-blue').text();
    projects.push(obj);
  }
  console.log(projects);
}
 pageScraper.goto('https://box.jimu.com/Venus/List')
            .wait('.project-list')
            .evaluate(function(){
              return document.querySelector('.project-list').innerHTML;
            }) 
            .then(val => fliter(val)
              )
            .catch(error => console.error("获取数据失败:",error)
            );



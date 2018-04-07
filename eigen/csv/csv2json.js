const fs = require('fs');
const readline = require('readline');

function csv2json(file_name) {

    const rl = readline.createInterface({
        input: fs.createReadStream(file_name),
        crlfDelay: Infinity
    });

    let catalog = {}; //生成的数据对象
    let curList; //正在进行更改操作的某一目录
    let chain = []; //链缓存，用于存放与上一行相同部分的目录信息

    rl.on('line', (line) => {

        var lineArr = line.split(',');

        if (lineArr[0]) {
            var newCata = addProp(catalog, lineArr[0], []); //写入新键值
            curList = catalog[lineArr[0]];
            chain[0] = newCata[lineArr[0]]; //链加入第一个缓存字段
        }

        generateList(lineArr);

    }).on('close', (err, data) => print());

    process.on('uncaughtException', function (err) {
        console.log(err);
    });

    //生成目录
    function generateList(lineArr) {
        let cursor = curList;

        for (var i = 1; i < lineArr.length; i++) {
            if (lineArr[i]) {
                var curObj = addProp(new Object(), lineArr[i], []);
                curList.push(curObj);
                curList = curObj[lineArr[i]];

                chain[i] = curObj[lineArr[i]]; //更新链
            } else {
                curList = chain[i]; //逗号前无值，读取链缓存，得到之前存储的目录信息
            }
        }
        curList = cursor;
    }

    //查找关键字
    function find(result, str) {

        if (result.includes(str) == false) {
            console.log(`不存在关键字:${str}`);
            return;
        }

        var hasFind = false;
        var catalog = JSON.parse(result);

        var path = [];

        for (key in catalog) {
            path[0] = key;
            if (key == str) {
                hasFind = true;
                break;
            }
            loopfind(catalog[key], 0);
            if (hasFind) {
                break;
            }
        }

        return path;

        function loopfind(arr, n) {
            let _n = n + 1;
            for (item of arr) {
                for (k in item) {
                    path[_n] = k;

                    if (k == str) {
                        hasFind = true;
                        break;
                    } else {
                        loopfind(item[k], _n);
                    }
                }
                if (hasFind) break;
            }
        }
    }

    function addProp(obj, key, value) {
        Object.defineProperty(obj, key, {
            writable: true,
            configurable: true,
            enumerable: true,
            value: value
        });
        return obj;
    }

    //输出
    function print() {
        var result = JSON.stringify(catalog, null, 2);
        console.log(result);
        var path = find(result, '最小二乘法');
        console.log(path);
    }

}

module.exports = csv2json;





let cvs2json = require('./csv2json');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入csv文件路径: '
});

rl.prompt();

rl.on('line', (file_path) => {
    cvs2json(file_path);
    rl.close();
});


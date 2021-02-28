var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let lines = [];
readline.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const [j, s] = lines;
    const arrJ = j.split(''), arrS = s.split('');
    const result = arrS.reduce((res, cur) => arrJ.includes(cur) ? ++res : res, 0);
    	
    process.stdout.write(result.toString());
})

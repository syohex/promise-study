const https = require('https');

function getContent(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const statusCode = res.statusCode;

            let error;
            if (statusCode === 200) {
                resolve(res);
            } else {
                reject(new Error(`Error: status code = ${statusCode}`));
            }
        }).on('error', err => {
            reject(err)
        });
    })
}

var argv = process.argv.slice(2);
if (argv[0] == undefined) {
    console.log("Usage: 001.js URL");
    process.exit(1);
}

getContent(argv[0]).then((res) => {
    res.setEncoding('utf8');

    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        console.log(`data is ${data}`);
    });
}).catch((err) => {
    console.log(err)
});

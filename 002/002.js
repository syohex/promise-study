function func1(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n / 1000);
        }, n);
    });
}

const a = Promise.all([
    func1(600),
    func1(500),
    func1(400),
    func1(300),
    func1(200),
    func1(100),
]).then((vals) => {
    console.log(`values=${vals}`);
}).catch(e => console.log("Error=", e));

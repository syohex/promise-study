function func1(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n);
        }, n);
    });
}

const a = Promise.race([
    func1(Math.random() * 100),
    func1(Math.random() * 100),
    func1(Math.random() * 100),
    func1(Math.random() * 100),
    func1(Math.random() * 100),
    func1(Math.random() * 100),
]).then((value) => {
    console.log(`values=${value}`);
}).catch(e => console.log("Error=", e));

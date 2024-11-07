function square(n){
    return n*n;
}

function cal(nos, fn){
    for(let v of nos){
        console.log(fn(v))
    }
}
// cal([1,2,3,4,5], square)
// cal([1,2,3,4,5], (n) => console.log(n**3))

let flag = false;
// eager loading
const prom = new Promise((resolve, reject)=>{
    let c = 1;
    console.log('promise object')
    setInterval(() => {
        c++;
        console.log(c)
        resolve(c);
    }, 2000);
    
});
prom.then(data => console.log(data))
.catch(err => console.log(err))
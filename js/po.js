// import { Observable } from 'rxjs';
// const observable = new Observable((res) => {
//     let count = 0;
//     setInterval(() => {
//         count = count + 1;
//         res.next(count);
//     }, 1000)
// })
// //subscribe the observable
// let subscription = observable.subscribe(ele => {
//     console.log(ele)
// })
// //unsubscribe the observable
// setTimeout(() => {
//     subscription?.unsubscribe();
// }, 12000);


const p = new Promise((resolve, reject)=>{
    let count = 0;
    setInterval(() => {
        count = count + 1;
        resolve(count);
        console.log('interval ',count)
    }, 1000)
});

p.then(d => console.log('promise resolve ',d))
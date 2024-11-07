// // Example using RxJS
 import { Observable } from 'rxjs';
// // Create an Observable
const observable = new Observable(subscriber => {
  console.log('observable called')
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});
// Subscribe to the Observable
observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Observable completed')
});
observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Observable completed')
});

// import { interval} from 'rxjs';
// import { take } from 'rxjs/operators';

// // Create an Observable that emits a value every second
// const observable1 = interval(1000).pipe(
//     take(5) // Take only 5 values
//   );
//   // Subscribe to the Observable
//   // observable1.subscribe(value => console.log(value));

  
//   // import { from } from 'rxjs';
//   // import { filter, map, reduce, } from 'rxjs/operators';
  
//   // const source = from([1, 2, 3, 4, 5]);
//   // const doubled = source.pipe(map(value => value * 2));
  
//   // doubled.subscribe(result => console.log(result));


//   // import { of } from 'rxjs';
//   // import { tap, map } from 'rxjs/operators';
  
//   // const source = of(1, 2, 3, 4, 5);
//   // // transparently log values from source with 'tap'
//   // const example = source.pipe(
//   //   tap(val => console.log(`BEFORE MAP: ${val}`)),
//   //   map(val => val + 10),
//   //   tap(val => console.log(`AFTER MAP: ${val}`))
//   // );
  
//   // //'tap' does not transform values
//   // //output: 11...12...13...14...15
//   // const subscribe = example.subscribe(val => console.log(val));

//   import { merge } from 'rxjs';
// // import { take } from 'rxjs/operators';

// const source1 = interval(1000).pipe(take(3));
// const source2 = interval(500).pipe(take(6));
// const merged = merge(source1, source2);

// merged.subscribe(result => console.log(result));

// import { fromEvent } from './rxjs';
 import {  map } from 'rxjs/operators';

// const input = document.getElementById('input');
// const keyup = rxjs.fromEvent(input, 'keyup').pipe(
//   rxjs.map((event) => event.target.value),
//   rxjs.debounceTime(300)
// );

// keyup.subscribe(result => console.log(result));
// Emits input after 300ms of inactivity
// const observable = new Observable((res) => {
//   let count = 0;
//   setInterval(() => {
//       count = count + 1;
//       res.next(count);
//   }, 300)
// })
// //subscribe the observable
// let subscription = observable.subscribe(ele => {
//   console.log(ele)
// })
// //unsubscribe the observable
// setTimeout(() => {
//   console.log('time up')
//   subscription?.unsubscribe();
// }, 5000)

// import { of } from 'rxjs';
// import { mergeMap, map, toArray } from 'rxjs/operators';

// const source = of([1, 2,3,4]);

// source.pipe(
//   map(v => v)
//   // map(value => {
//   //   console.log('map',value);
//   //    return value.map(n=>n*n)
//   // })
// ).subscribe(result => console.log(result*result));

// source.pipe(
//   mergeMap(value => {
//     console.log(value);
//      return value 
//   })
// ).subscribe(result => console.log(result*result));
// import Rx from 'rxjs';
import { from,interval } from 'rxjs';
 import { mergeMap, flatMap, concatMap, switchMap, exhaustMap, tap, take, debounceTime } from 'rxjs/operators';



  // from([0,1,2,3,4])
  // .pipe(
  //   switchMap(x => interval(1000).pipe(take(3)))
  // )
  // .subscribe(x => console.log(x));

const myObservable = new Observable(subscriber => {
    const rdn = Math.floor(Math.random() * 200) + 1;
    subscriber.next(rdn);
});
myObservable
    .subscribe(a => console.log('Subscription A', a));
myObservable
    .subscribe(a => console.log('Subscription B', a));

import {Subject, BehaviorSubject} from 'rxjs';
 const subject = new BehaviorSubject('hello');

 subject.
 subscribe(data => {
      console.log("First Subscription value: ",data);
 });

 subject.subscribe(data => {
      console.log("Second Subscription value: ",data);
 });
setTimeout(() => {
  subject.next(Math.floor(Math.random() * 10)+1); 
}, 2000);
 
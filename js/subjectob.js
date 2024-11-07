import { BehaviorSubject, debounceTime, Observable ,Subject } from "rxjs";

const observable = new Observable(observer=>{
    const rdn = Math.floor(Math.random() * 200) + 1; // rest api call
    observer.next(rdn);
})

observable//.pipe(debounceTime(1000))
.subscribe({
    next : (value )=> console.log(`Observer 1 ${value}`)
})
observable//.pipe(debounceTime(1000))
.subscribe({
    next : (value )=> console.log(`Observer 1 ${value}`)
})

let subject = new BehaviorSubject('inital value')
console.log(subject.getValue())
subject.subscribe((value )=> console.log(`Subscriber 1 ${value}`))
subject.subscribe((value )=> console.log(`Subscriber 2 ${value}`))

// subject.next(Math.floor(Math.random() * 200) + 1)
// console.log(subject.getValue())
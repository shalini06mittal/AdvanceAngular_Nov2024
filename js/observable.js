
class Observable {
    constructor(subscribe) {
      console.log(subscribe)
      this._subscribe = subscribe;
    }
    subscribe(observer) {
      return this._subscribe(observer);
    }
    static fromArray(array) {
      return new Observable(observer => {
        array.forEach(item => observer.next(item));
        observer.complete();
      });
    }
  }
  function f1(observer){
      observer.next(1);
      setTimeout(() => {
          observer.next(2);
      }, 2000);
      observer.next(3);
      observer.complete();
      return {unsubscribe : () => {
        console.log('Observer unsubscribed');
      }}
    }
  const observable = new Observable(f1);
  // Subscribe to the observable
  const subscription = observable.subscribe({
    next: value => console.log('Received:', value),
    error: err => console.error('Error occurred:', err),
    complete: () => console.log('Observable completed')
  });
//   console.log(subscription)
//   // Unsubscribe (cleanup)
//   subscription.unsubscribe();

   Observable.fromArray([1,2,3,4,5])
.subscribe({next: data => console.log(data),
     complete: () => console.log('Observable completed')})


const obj = {
  f1: ()=> console.log('f1 called'),
  f2: (n) => console.log('n',n)
}
obj.f1()
obj.f2(10)
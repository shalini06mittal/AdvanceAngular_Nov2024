import { of , from} from 'rxjs';
import { map , delay, mergeMap, switchMap} from 'rxjs/operators';

// Observable.of([1, 2, 3]).subscribe(x => console.log(x));

// would print the whole array at once.

// On the other hand,

// Observable.from([1, 2, 3]).subscribe(x => console.log(x));

// prints the elements 1 by 1.
/**
 * map is the most common operator in Observables. It acts relatively similar to map in Arrays. 
 * map takes in every value emitted from the Observable,
 *  performs an operation on it and returns an Observable 
 *  
 * Imagine we have an Observable of Array. This Array is a collection of persons. An Object represents each person, 
 * and every person has their name and favorite character. We are only interested in getting a list of all characters
 */
const observable = of([
    {
        name: "Parwinder",
        character: "Calcifer"
    },
    {
        name: "Laure",
        character: "Alchemist"
    },
    {
        name: "Eliu",
        character: "X-Men"
    },
    {
        name: "Robert",
        character: "Link"
    }
]);

observable.pipe(
    map(arr => {
        console.log('map 1 ', arr)
        return arr.map(person => person.character)
    }) // loops over objects and returns characters
).subscribe(
    char => console.log(char) // ["Calcifer", "Alchemist", "X-Men", "Link"]
);

/**
 * mergeMap is a combination of Observable merge and map. There are times when your map or projection will generate multiple Observables. 
 * For example, now I have an array of characters, and for each character, I would like to make a backend call and get some information.
 */



const dummyApi = (character) => { // fake api call function
    console.log(character)
  return of(`API response for character: ${character}`).pipe(
    delay(1000) // the fake api takes 1 second
  );
}

from(["Calcifer", "Alchemist", "X-Men", "Link"]) // characters I need to get information for
.pipe(
  map(arr =>{
    console.log('map', arr);
   return dummyApi(arr);// generates 4 new Observables
  })
).subscribe( // subscribing Observable (outer) of 4 Observables (inner)
  data => {
    console.log('data ', data)
    data.subscribe(i => console.log(i)) // subscribing to inner Observables
  }
)
/**
 * The output is what we expected. You see the problem here?
 *  We are subscribing to what map provides and then subscribing again inside the subscribe block to 
 * each Observable supplied by the API call. The approach works, but it is not ideal. 
 * This is where mergeMap comes in to play. As I said, it maps, and it merges!
 */
from(["Calcifer", "Alchemist", "X-Men", "Link"])
.pipe(
  mergeMap(arr => dummyApi(arr)) // gets 4 Observable as API response and merges them
).subscribe( // we subscribe to one mapped and merged Observable
  data => console.log('mp',data)
)

/**
 * switchMap does what mergeMap does but with a slight twist. 
 * switchMap will subscribe to all the inner Observables inside the outer Observable but
 *  it does not merge the inner Observables. It instead switches to the latest Observable and passes that along to the chain.

It still provides one Observable as output, not by merging but by the idea of only emitting the result from the latest Observable

There are scenarios where switchMap excels. One such example will be an input box where we provide
 suggestions to an end-user based on what they have entered (by making an API call for the text in the input field).

If the user is searching for "Chase", they start typing "C", and we make a call. As soon as they type "h", we have to make another call for "Ch".
 At this moment, our call with value "C" is of no use to us.
 We should cancel that Observable and subscribe to "Ch" Observable. We need to switch to the latest Observable!
 */

from(["Calcifer", "Alchemist", "X-Men", "Link"])
.pipe(
  switchMap(arr => dummyApi(arr))
).subscribe(
  data => console.log('sm',data) // API response for character: Link
)
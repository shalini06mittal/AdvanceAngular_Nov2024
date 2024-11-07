// function loginUser(email, callback) {
//   setTimeout(() => {
//     console.log('Now we have the data');
//     if(email === 'abc')
//         callback({email})
//     else
//         callback({'status':'email not found'})
//   }, 1500);
// }
// loginUser('abc', (msg)=> console.log(msg))
// console.log('Start');
// //COMMENT::Three callback function
// function loginUser(email, callback) {
//   setTimeout(() => {
//     console.log('Now we have the data');
//     callback({ email });
//   }, 1500);
// }

// function getUserVidoes(email, callback) {
//   setTimeout(() => {
//     callback(['HTML', 'CSS', 'JAVASCRIPT']);
//   }, 1200);
// }

// function videosDetails(video, callback) {
//   setTimeout(() => {
//     callback(`title of the video ${video}`);
//   }, 1000);
// }

// //COMMENT::Callback function execution.
// //here we get nested function of 3 callback function which make code not clean.
// //this problem is call callback hell.
// const user = loginUser('shirshakkandel@gmail.com', '1234', function (user) {
//   console.log(user);
//   getUserVidoes(user.userEmail, videos => {
//     console.log(videos);
//     videosDetails(videos[0], title => {
//       console.log(title);
//     });
//   });
// });
// // console.log(user);
// //undefined as user come after 1.5 second
// console.log('Finished');


console.log('Start');
//COMMENT::Three callback function
function loginUser(email) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Now we have the data');
            if(email === 'abc')
                resolve({ email});
            reject({status:'failure'})
          }, 1500);
    })
  
}

function getUserVidoes(email) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(['HTML', 'CSS', 'JAVASCRIPT']);
    }, 1200);
})
}

function videosDetails(video) {
    return new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(`title of the video ${video}`);
  }, 1000);
})
}

//COMMENT::Callback function execution.
//here we get nested function of 3 callback function which make code not clean.
//this problem is call callback hell.

loginUser('abc1')
.then(resp => 
    getUserVidoes(resp.email)
    .then(videos => 
        videosDetails(videos[0])
        .then(resp => console.log(resp))
    )

)
.catch(err => console.log(err))

const details = async()=> {
 const user =   await loginUser('abc','123');
 console.log(user)
 const videos = await getUserVidoes(user.email);
 console.log(videos)
 let detail = await videosDetails(videos[0])
 return detail
}
details().then(data => console.log(data))

console.log('Finished');
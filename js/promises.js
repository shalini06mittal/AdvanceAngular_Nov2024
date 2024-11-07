console.log('Start');
function loginUser(email) {
    return new Promise((resolve, reject)=>{
        console.log('login user in promise')
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
        if(email !== undefined)
         resolve(['HTML', 'CSS', 'JAVASCRIPT']);
        reject('error from get user videos')
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

// loginUser('abc1')
// .then(resp => 
//     getUserVidoes(resp.email)
//     .then(videos => 
//         videosDetails(videos[0])
//         .then(resp => console.log(resp))
//     )

// )
// .catch(err => console.log(err))

const details = async()=> {
 const user =   await loginUser('abc');
 console.log(user)
 const videos = await getUserVidoes(undefined);
 console.log(videos)
 let detail = await videosDetails(videos[0])
 return detail
}
details().then(data => console.log(data)).catch(err => console.log(err))

console.log('Finished');
// promise.all 如何防⽌某⼀个 promise 失败从⽽使整个 promise 失败?
Promise.all(arrayOfPromises)
  .catch(function (err) {
    // log that I have an error, return the entire array;
    console.log('A promise failed to resolve', err)
    return arrayOfPromises
  })
  .then(function (arrayOfPromises) {
    // full array of resolved promises;
  })


  https://stackoverflow.com/questions/31424561/wait-until-all-promises-complete-even-if-some-rejected
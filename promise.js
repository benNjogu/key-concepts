const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 5000);
  } else {
    reject("I have failed");
  }
});

myPromise
  .then((value) => value + "!!!")
  .then((newValue) => console.log(newValue))
  .catch((error) => console.log(error));

/**
 * @resolve:
 *  used when api call is successful
 * @reject:
 *  used when api call gives us an error
 */

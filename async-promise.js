const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

let count = 0;

setTimeout(() => {
  fetchData()
    .then((text) => {
      console.log(text, ++count);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2, ++count);
    });
}, 2000);

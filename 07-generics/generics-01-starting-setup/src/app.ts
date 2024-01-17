// const names: Array<string> = ["Max", "Manuel"]

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("bobbi")
//     resolve("This is done!");
//     console.log("bobun");
//   }, 2000)
// });

// promise.then(data => {
//   data.split(" ");
// })

function merge<T, U>(objA: T, objB: U) {
  return {...objA, ...objB};
}

const mergedObj = merge({name: "Max"}, {age: 30});

mergedObj.age;
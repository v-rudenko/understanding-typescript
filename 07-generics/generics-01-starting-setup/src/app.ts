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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  }
  if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

const result = extractAndConvert({ name: "max" }, "name");

console.log(result);

import { FakeApiType, AsyncLoopType } from "../types";

  export const fakeApi: FakeApiType = (item, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, delay);
    });
  }
  
export const asyncLoop: AsyncLoopType = async (elements, callbaack, index = 0) => {

  const element = elements[index];

  if (element && element.status !== 'done') {
    callbaack("fetch", index);

    await fakeApi(element, 2000);

    callbaack("done", index);

    if (index >= elements.length - 1) {
      //loadall callback
      return;
    } else {
      await asyncLoop(elements, callbaack, index + 1);
    }
  } else {
    await asyncLoop(elements, callbaack, index + 1);
  }
}
  
  

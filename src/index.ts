const worker = new Worker("./worker.js", {
  type: "module",
});

const appEle = document.querySelector("#app")!;

worker.onmessage = (e) => {
  console.log(e.data);
  appEle.innerHTML = e.data;
};

worker.postMessage("main data");

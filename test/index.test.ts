import { describe, it, expect } from "vitest";

// it("web worker 文件请求", async () => {});

it("init web worker", async () => {
  const resp = await fetch("/api/worker.js");
  const text = await resp.text();
  console.log(text);

  const worker = new Worker("/api/worker.js", {
    // type: "module",
  });

  let data;
  worker.addEventListener("message", (e) => {
    console.log(e.data);
    data = e.data;
  });

  worker.addEventListener("error", (e) => {
    console.log(e);
  });

  worker.addEventListener("messageerror", (e) => {
    console.log(e);
  });

  worker.postMessage("main data");
  // worker.terminate();
  console.log('main');
  expect(data).toBe("data");
  
});

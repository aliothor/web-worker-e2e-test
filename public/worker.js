/**
 *
 * @param {MessageEvent} e
 */
self.onmessage = (e) => {
  console.log(e.data);
  postMessage("worker data1");
};

postMessage('worker init data')

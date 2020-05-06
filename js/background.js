const types = [
  "main_frame",
  "sub_frame",
  "stylesheet",
  "script",
  "image",
  "object",
  "xmlhttprequest",
  "other",
];

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // if (details.url === "https://www.baidu.com/favicon.ico") {
    //   console.log(details);
    //   return { redirectUrl: "https://www.baidu.com/favicon.ico2" };
    // } else {
    //   return {};
    // }
    details.url = "https://test.cjd6568358.workers.dev";
    return {};
  },
  {
    urls: ["<all_urls>"],
    types,
  },
  ["blocking", "requestBody"]
);
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    var newHeaders = details.requestHeaders;
    newHeaders.push({
      name: "href",
      value: details.url,
    });
    return { requestHeaders: newHeaders };
  },
  {
    urls: ["<all_urls>"],
    types,
  },
  ["blocking", "requestHeaders"]
);

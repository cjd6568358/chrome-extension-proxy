// document.addEventListener('DOMContentLoaded', function() {
//     // 向页面注入JS
//     function injectCustomJs() {
//         var jsPath = 'js/inject.js';
//         var temp = document.createElement('script');
//         temp.setAttribute('type', 'text/javascript');
//         // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
//         temp.src = chrome.extension.getURL(jsPath);
//         // temp.onload = function() {
//         //     // 放在页面不好看，执行完后移除掉
//         //     this.parentNode.removeChild(this);
//         // };
//         document.body.appendChild(temp);
//     }
//     injectCustomJs()
// });

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        console.log(details)
        //details 具有所有的请求信息
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            //查找和修改需要处理头信息
            if (details.requestHeaders[i].name === 'Origin') {
                details.requestHeaders[i].value = "https://example.com";
                break;
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["<all_urls>"] },
    ['blocking', 'requestHeaders']
);
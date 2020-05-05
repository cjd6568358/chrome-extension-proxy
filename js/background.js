chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        console.log(details)
        return { requestHeaders: details.requestHeaders };
    },
    {
        urls: ["<all_urls>"],
        types: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "object",
            "xmlhttprequest",
            "other"
        ]
    },
    ['blocking', 'requestHeaders']
);
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        var url = details.url;
        //通过匹配测试一个请求
        if (url.indexOf("min-player") != -1) {
            return { redirectUrl: "localhost/player.js" }; //我试了本机服务器下的一个文件。
            //1. 记得要返回rediretUrl. 之前我用url,是无效的。     
        }
        return true;
    },
    { urls: ["<all_urls>"] },  //监听所有的url,你也可以通过*来匹配。
    ["blocking"]
)
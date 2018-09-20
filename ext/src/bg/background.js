// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "click":
            onClickListener(request);
            break;
        case "tags":
            tagsListener(request);
    }
    return true;
});

var onClickListener = function(request) {
    var post_url = "http://localhost:3000/api/logs";
    switch(request.class) {
        case "questionclicked":
            post_url = "http://localhost:3000/api/logs";
            break;
        case "upvoteclicked":
            post_url = "http://localhost:3000/api/votes";
            break;
        case "downvoteclicked":
            post_url = "http://localhost:3000/api/votes";
            break;
    }

    var date = new Date();
    var day = date.getDate();
    chrome.cookies.get({url:"http://localhost:8080",name:"user_token"},function(cookie){
        $.ajax({
            type: "POST",
            url: post_url,
            data: {
                time:new Date(),
                day: day,
                type: request.type,
                class:request.class
            },
            headers: {
                "Authorization": "Bearer " + cookie.value
            }
        });

    });

};
var tagsListener = function(request) {
    var post_url = "http://localhost:3000/api/tags";
    chrome.cookies.get({url:"http://localhost:8080",name:"user_token"},function(cookie){
        $.ajax({
            type: "POST",
            url: post_url,
            data: {
                time:new Date(),
                type: request.type,
                class:request.class,
                "tags": request.tags
            },
            headers: {
                "Authorization": "Bearer " + cookie.value
            }
        });
    });
};
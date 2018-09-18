chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            console.log("Hello. This message was sent from scripts/inject.js");
            // ----------------------------------------------------------

        }
    }, 5);
});
//Find all Tags
$(window).load(function () {
    var tags_list = [];
    $('.post-tag.js-gps-track').each(function(ele){
        tags_list.push($( this ).text());
    });
    chrome.extension.sendMessage({
        type:"tags",
        class: "tags",
        tags :tags_list.toString()
    })
});
//Logging Question HyperLink Clicked
$(".question-hyperlink").click(function (event) {
   if (event.button==0){
       chrome.extension.sendMessage({
           type:"click",
           class: "questionclicked",
       })
   }
});
//
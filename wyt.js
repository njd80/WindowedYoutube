chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url.indexOf('youtube.com/watch?v=') !== -1) {
      var newURL = "https://www.youtube.com/watch_popup?v="+tab.url.substring(32);
      chrome.tabs.update({
         'url':newURL
      });
  }
});

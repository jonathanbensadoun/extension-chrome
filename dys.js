chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.selectedFont) {
      document.body.style.fontFamily = request.selectedFont;
    }
  });
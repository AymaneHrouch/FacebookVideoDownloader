chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
	  "id": "sampleContextMenu",
	  "title": "Sample Context Menu",
	  "contexts": ["link"]
	});
	chrome.contextMenus.onClicked.addListener(function (data) {
		alert(`linkURL: ${data.linkURL} \nsrcURL: ${data.srcURL}\npageURL: ${data.pageURL}\nframeURL: ${data.frameURL}\n`)
	})
});

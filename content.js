/*let xhr = new XMLHttpRequest();

xhr.open('GET', document.URL, true);

xhr.onprogress = () => {
			console.log('fetching link...')
}

xhr.onload = () => {
	let str = xhr.responseText;
	let n, i, x, linkHead, linkTail, link;

	linkHead = str.search("\"playable_url\"");

	linkHead += 16;

	str = str.split('');

	linkTail = str.indexOf("\"", linkHead);

	link = [];

	for(i=linkHead;i<linkTail;i++)
	  {
	    link.push(str[i]);
	  }

	 n = str.indexOf('\\');
	// Unescaping the string 
	while(n!==-1) {
		link.splice(n, 1);
		n = link.indexOf('\\');
	}

	link = link.join('')

	// window.open(link)
	alert("link is : ", link);
}

xhr.send()
*/
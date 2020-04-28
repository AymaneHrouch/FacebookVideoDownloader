document.addEventListener('DOMContentLoaded', () => {
	let btn = document.getElementById('btn');
	let sdBtn = document.getElementById('sd');
	let hdBtn = document.getElementById('hd');
	btn.addEventListener('click', () => {
		hdBtn.hidden = false;
		let xhr = new XMLHttpRequest();
		xhr.open("GET", document.getElementById('input').value, true);
		xhr.onload = () => {
			alert(xhr.status);
			console.log(xhr.responseText)
			let str = xhr.responseText;
			let n, i, x, linkHead, linkTail, link;

			linkHead = str.search("\"playable_url\"");
			if(linkHead == -1) {
				alert("Video not found!");
				return;
			}
			linkHead += 16;
			str = str.split('');

			linkTail = str.indexOf("\"", linkHead);

			link = [];

			for(i=linkHead;i<linkTail;i++)
			  {
			    link.push(str[i]);
			  }

			// Unescaping the string 
			 n = str.indexOf('\\');
			while(n!==-1) {
				link.splice(n, 1);
				n = link.indexOf('\\');
			}

			link = link.join('');

			window.open(link)
		}
		xhr.send();
	})    





})
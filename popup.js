document.addEventListener('DOMContentLoaded', () => {
	let btn = document.getElementById('btn');
	let sdBtn = document.getElementById('sd');
	let hdBtn = document.getElementById('hd');
	let wait = document.getElementById('wait');
	btn.addEventListener('click', () => {
		let input = document.getElementById('input').value
		// Checking if the facebook.com is the hostname
		let regex = new RegExp('.*//www\.facebook\..+');
		if(!regex.test(input)) {
			alert("Please enter a valid link");
			return;
		}

		let xhr = new XMLHttpRequest();
		xhr.open("GET", input, true);
		wait.hidden = false;
		xhr.onload = () => {
			let str = xhr.responseText;
			let linkHeadSd = str.search("\"playable_url\":\"");
			if(linkHeadSd == -1) { // if the SD version doesn't exist then the video doesn't exist
				wait.hidden = true;
				alert("Video not found! Review your link and try again.");
				return;
			}

			// Check if the Hd version is available

			let linkHeadHd = str.search("\"playable_url_quality_hd\":");
			linkHeadHd += 27;
			// "playable_url_quality_hd":null when HD isn't available
			let hdBool = !(str[linkHeadHd - 1] === 'n');

			if(hdBool) {
				let linkTailHd = str.indexOf("\"", linkHeadHd);
				let linkHd = [];
				for(let i=linkHeadHd;i<linkTailHd;i++) {
			    	linkHd.push(str[i]);
			  	}

			  	let m = linkHd.indexOf('\\');
				while(m!==-1) {
					linkHd.splice(m, 1);
					m = linkHd.indexOf('\\');
				}

				linkHd = linkHd.join('');
				hdBtn.href = linkHd;
				hdBtn.hidden = false;
			}


			linkHeadSd += 16;
			let linkTailSd = str.indexOf("\"", linkHeadSd);
			let linkSd = [];
			for(let i=linkHeadSd;i<linkTailSd;i++) {
			    linkSd.push(str[i]);
			}

			// Unescaping the string 
			let n = linkSd.indexOf('\\');
			while(n!==-1) {
				linkSd.splice(n, 1);
				n = linkSd.indexOf('\\');
			}

			linkSd = linkSd.join('');
			sdBtn.href = linkSd;
			wait.hidden = true;
			sdBtn.hidden = false;
		}
		xhr.send();
	})
})
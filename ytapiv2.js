const delay = 1000; // 10 min

function request_data() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var output = this.responseText;
			output = JSON.parse(output);
			document.getElementById("sub_count").style.display = "inline";
			document.getElementById("sub_count_platform").style.display = "inline";
			if(output.items[0].statistics["hiddenSubscriberCount"] === true)
			{
				console.log("Subscriber count is hidden by the channel");
			   	return document.getElementById("sub_count").innerHTML = "N/A";
			}
			document.getElementById("sub_count").innerHTML = output.items[0].statistics["subscriberCount"];
		}
		else if(this.readyState == 4)
		{
				return console.log(JSON.parse(this.responseText)["error"]["message"]);	
		}
	};
	xhttp.open("GET", "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCQUBBBEQgDxnFTd52UtjSTg&key=AIzaSyB-GAzFAC5AQlDmBHfotKCQwGnZmag0UlU", true);
	xhttp.send();
}

setInterval(() => { request_data(); }, delay);
 // Get Subscribers
 const youtubeKey = 'AIzaSyB-GAzFAC5AQlDmBHfotKCQwGnZmag0UlU';
 const youtubeUser = 'UCQUBBBEQgDxnFTd52UtjSTg';
 const subCount = document.getElementById('subCount');
 const subCount1 = document.getElementById('subCount');
 const delay = 1000; // 10 min

 let getSubscribers = () => {

	 fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
	 .then(response => {
		 return response.json()
	 })
	 .then(data => {
		 console.log(data);
		 subCount.innerHTML = data["items"][0].statistics.subscriberCount;
	 })

 }

 setInterval(() => {
	 getSubscribers();
 }, delay);
<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let isVisible = false;

    /**
	 * @param {{ key: string; preventDefault: () => void; }} event
	 */
   function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleHiddenRow();
      event.preventDefault();  // Prevent default scrolling behavior for space key
    }
  }

  let commitMessage = 'Loading...';
  let commitDate = '';
  let commitURI = 'https://github.com/toonnongaeoy/mysite'
  $: commitGUI_URI = `https://github.com/toonnongaeoy/${repo}/commits/${branch}`;
  let commitUser_URI = 'https://github.com/toonnongaeoy';
  let commitUser = 'toonnongaeoy';
  let feed = [
    {
      "title": "Do you remember? The 21st night of September?",
      "link": "https://youtu.be/Gs069dndIYk",
      "date": "21/09/1978"
    },
  ]

  const branch = 'v2-dev';  // specify the branch you want to fetch commits from
  const owner = 'toonnongaeoy';
  const repo = 'mysite';

    // Function to format date to DD/MM/YYYY
    /**
	 * @param {string | number | Date} dateString
	 */
    function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  async function fetchRSSFeed() {
    const feedUrl = 'https://blog.toonstorytime.me/rss.xml';
    const response = await fetch(feedUrl);
    const text = await response.text();
    feed = parseXMLToJSON(text);
    // Sort by pubDate in descending order and take the top 3
    feed.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
        return 0; // Return 0 to maintain the original order if either date is invalid
      }
      return dateB.getTime() - dateA.getTime();
    });
    feed = feed.slice(0, 3);
  }

    // Function to format date to DD/MM/YYYY
    /**
	 * @param {string} xml
	 */
  function parseXMLToJSON(xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');
    return Array.from(items).map(item => ({
      title: item.querySelector('title')?.textContent,
      link: item.querySelector('link')?.textContent,
      date: formatDate(item.querySelector('pubDate')?.textContent ?? ''),
    }));
  }

// Fetch the latest commit message and date on component mount
onMount(async () => {
    try {
      // fetchRSSFeed();
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
      if (response.ok) {
        const data = await response.json();
        commitMessage = data[0].commit.message;
        commitDate = formatDate(data[0].commit.author.date);
        commitURI = data[0].html_url;
        commitUser = data[0].author.login;
        commitUser_URI = data[0].author.html_url;
      } else {
        commitMessage = 'Error fetching commit data';
        commitDate = '';
      }
    } catch (error) {
      commitMessage = 'Error fetching commit data';
      commitDate = '';
    }
    const script = document.createElement('script');
    script.src = 'https://webring.hackclub.com/embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Return the cleanup function directly
    return;
  });

function toggleHiddenRow() {
  isVisible = !isVisible;
}
</script>

<style>
    .container {
        padding: 2rem;
    }

    .link {
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }

    .divider {
    background-image : linear-gradient(to right, rgba(255,0,0,0), 
	rgba(223, 152, 156, 1), rgba(255,0,0,0));
    }

    @media (max-width: 430px) {
        .webring-wrapper {
            max-width: 50px;
        }
    }
</style>  
<div class="flex justify-center" transition:fade>
  <div class="container mx-auto px-4">
    <div class="inline">
      <span class="text-3xl font-bold">Hi! 👋</span>
      <span class="text-xl">ToonStoryTime (ToonNongAeoy) have been reconstruct this site recently! And (almost) finally ready to operate again!</span>
      <span role="button" on:click={toggleHiddenRow} on:keydown={handleKeydown} class="cursor-pointer" tabindex="0">(Click here to read about the changes.)</span>
    </div>
    <div id="st" class={`mt-2 mb-2 ${isVisible ? 'block' : 'hidden'}`}>
      <p>
				       
				You may have noticed, It looks like my old site that I do previously,
        Yep. And this is what's I want to be like. You can think a moden version of it.
        And also, I want to make this kind of site,
        (And I already mention on my another site on <a href="http://toonnongaeoy.dino.icu">toonnongaeoy.dino.icu</a> 
        if you doesn't read it already.)&nbsp;
      </p>
      <br>
        <p>
                 
          TL;DR : I want to make the anime theme version of my site after found some Inspiration from Tiktoker (@Chokunplayz). 
          And I trow this idea out for a long time (Cause I'm too lazy and honestly not brave enough , Cause I'm a man.) 
          And then I upon saw <a href="https://koinuko.pink/">koinuko.pink</a> (v5 at that time.) and I say to myself, I want that. 
          And then, I make this site and other site like there!
        </p>
    </div>
    <div class={`m-3 h-0.5 divider`}> </div>
    <div class="flex flex-row justify-center">
      <div class="flex flex-col justify-center items-center text-center mr-4">
        <span>Since koinuko closed her Webring, and I forget the password. And it should be her webring here. So, enjoy my blog updates instead!</span>
        <span>&nbsp;</span>
        {#each feed as { title, link, date }}
        <div>
          <a href="{link}" target="_blank"><b>{date} :</b> {title}</a>
        </div>
      {/each}
      </div>
    </div>
    <div class={`m-3 h-0.5 divider`}> </div>
    <div class="text-center mt-2">
      <div class="inline">
        <span class="font-bold">Last Update ({commitDate}) : </span>
        <span><a href={commitURI}>{commitMessage}</a></span> <span class="font-bold"><a href={commitUser_URI}>({commitUser})</a></span>
      </div>
    </div>
    <p class="font-bold text-center mt-2"><a href={commitGUI_URI}>[Update Log]</a></p>
    <div class={`m-3 h-0.5 divider`}> </div>
    <div class="flex flex-row">
      <div class="flex flex-col items-center max-w-32 text-center mr-4">
        <p>current feeling :</p>
        <img src="https://moods.imood.com/display/uname-toonnongaeoy/fg-FFFFFF/trans-1/imood.gif" width="72" style="padding:3px; padding-bottom:5px; margin-bottom:1px; background-color: #e34c2d; border:3px double #FFF2C9;">
        <div id="webring-wrapper" class="webring-wrapper">
          <a href="https://webring.hackclub.com/" id="previousBtn" class="webring-anchor" title="Previous">‹</a>
          <a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
          <a href="https://webring.hackclub.com/" id="nextBtn" class="webring-anchor" title="Next">›</a>
        </div>
        <div class="flex flex-col mt-2 max-w-9">
          <a href="https://webring.wonderful.software#YOUR.DOMAIN" title="วงแหวนเว็บ">
            <img alt="วงแหวนเว็บ" src="https://webring.wonderful.software/webring.black.svg"
            />
          </a>
        </div>
      </div>
      <div class="flex flex-col mr-4">
        <div class="inline">
          <span class="font-bold">୨୧ Myself | </span>
          <span>Everything that need to know about me.</span>
        </div>
        <div class={`m-3 h-0.5 divider`}> </div>
        <span>About Me --- Blog --- Social</span>
        <span>Scrapbook --- Story behind this site --- Graveyard</span>
        <div class={`m-3 h-0.5 divider`}> </div>
        <div class="inline">
          <span class="font-bold">୨୧ Archive | </span>
          <span>Everything that I want to keep to myself but also want to be public.</span>
        </div>
        <div class={`m-3 h-0.5 divider`}> </div>
        <span>Download (FTP Server) --- Spotify/Apple Music Playlist</span>
        <span>Schoolworks</span>
        <div class={`m-3 h-0.5 divider`}> </div>
        <div class="inline">
          <span class="font-bold">୨୧ For you | </span>
          <span>Maybe you will like this.</span>
        </div>
        <div class={`m-3 h-0.5 divider`}> </div>
        <span>What the lyrics? --- 88x31 Button --- Pinterest</span>
        <div class={`m-3 h-0.5 divider`}> </div>
        <div class="inline">
          <span class="font-bold">୨୧ Retro Site | </span>
          <span>For anyone who likes retro stuff!</span>
        </div>
        <div class={`m-3 h-0.5 divider`}> </div>
        <span>Wanna break for modern age, Click here to go to retro version of this site! (Not quite suitable with your phone!)</span>
        <span>[Insert the logo here!]</span>
        <div class={`m-3 h-0.5 divider`}> </div>
        <div class="inline">
          <span class="font-bold">୨୧ Collective | </span>
          <span>Button linking to this (yep! that's toonstorytime.me) and other, including original one. and also some site that you should visit.</span>
        </div>
        <div class={`m-3 h-0.5 divider`}> </div>
        <span>[Insert the logo here!]</span>
      </div>
    </div>
  </div>
</div>

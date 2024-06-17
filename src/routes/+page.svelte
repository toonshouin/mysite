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

// Fetch the latest commit message and date on component mount
onMount(async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
      if (response.ok) {
        const data = await response.json();
        commitMessage = data[0].commit.message;
        commitDate = formatDate(data[0].commit.author.date);
        commitURI = data[0].html_url;
      } else {
        commitMessage = 'Error fetching commit data';
        commitDate = '';
      }
    } catch (error) {
      commitMessage = 'Error fetching commit data';
      commitDate = '';
    }
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
</style>  
<div class="flex justify-center" transition:fade>
  <div class="container mx-auto px-4">
    <div class="inline">
      <span class="text-3xl font-bold">Hi! 👋</span>
      <span class="text-xl">ToonStoryTime (ToonNongAeoy) have been reconstruct this site recently! And finally ready to operate again!</span>
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
        <p>current feeling :</p>
          <img src="https://moods.imood.com/display/uname-toonnongaeoy/fg-FFFFFF/trans-1/imood.gif" width="72" style="padding:3px; padding-bottom:5px; margin-bottom:1px; background-color: #e34c2d; border:3px double #FFF2C9;">
      </div>
      <div class="flex flex-col mr-4 mt-0.5">
        <div id="webring-wrapper">
          <a href="https://webring.hackclub.com/" id="previousBtn" class="webring-anchor" title="Previous">‹</a>
          <a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
          <a href="https://webring.hackclub.com/" id="nextBtn" class="webring-anchor" title="Next">›</a>
          <script src="https://webring.hackclub.com/embed.min.js"></script>
        </div>                
      </div>
      <div class="flex flex-col">
        <a href="https://webring.wonderful.software#YOUR.DOMAIN" title="วงแหวนเว็บ">
          <img
            alt="วงแหวนเว็บ"
            width="36"
            height="36"
            src="https://webring.wonderful.software/webring.black.svg"
            style="margin-top: 3px;"
          />
        </a>
      </div>
    </div>
      
    <div class={`m-3 h-0.5 divider`}> </div>
    <div class="inline">
      <span class="font-bold">Last Update ({commitDate}) : </span>
      <span><a href={commitURI}>{commitMessage}</a></span>
    </div>
  </div>
</div>

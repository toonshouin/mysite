<script>
    import { fade } from 'svelte/transition';

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
	rgba(227, 76, 45, 1), rgba(255,0,0,0));
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
      <p class="link"><a href="/about">Go to About Page</a></p>
      <p>Some temporary string here!</p>
  </div>
</div>

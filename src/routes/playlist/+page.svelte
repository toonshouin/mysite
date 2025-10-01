<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let title = ''; // Reactive variable for the dynamic title
    const fullTitle = "Music Playlist | Toonshouin's Site"; // The full title you want to display

        /**
    @param {number} i
    */

  function typeTitle(i) {
    if (i < fullTitle.length) {
      title += fullTitle[i];
      setTimeout(() => typeTitle(i + 1), 250); // Adjust the speed of typing here
    } else {
      // Wait a bit before starting to delete the title
      setTimeout(() => deleteTitle(fullTitle.length - 1), 1000); // Adjust the pause duration here
    }
  }

    /**
    @param {number} i
    */

  function deleteTitle(i) {
    if (i >= 1) {
      title = title.substring(0, i);
      setTimeout(() => deleteTitle(i - 1), 200); // Adjust the speed of deleting here
    } else {
      // Wait a bit before starting to type again
      setTimeout(() => typeTitle(1)); // Adjust the pause before typing again
    }
  }

	onMount(async () => {
		typeTitle(0);
		// Return the cleanup function directly
		return;
	});
</script>

<style>
    .container {
        padding: 2rem;
    }

    a {
		color: #890606;
		font-weight: bold;
		text-decoration: underline;
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex justify-center" transition:fade>
<div class="container">
    <div class="text-center justify-center">
        <div class="inline">
            <span class="text-4xl font-bold">Music Playlist</span>
            <span>&nbsp;(of some kind of my taste 🎵)</span>
        </div>
    </div>
    <div class="m-3 h-0.5 divider"> </div>
    <p>Here's are my Music Playlist that I (mostly) listened to.</p>
    <p>&nbsp;</p>
    <p>PS : My taste (or Genere) is mosly a old song, (that because as a kid, there's only one thing that I listen all the time.) but at least. Enjoy!</p>
    <div class="m-3 h-0.5 divider"> </div>
    <p>&nbsp;</p>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5kxcPVxrx30s5EzPtargat?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <p>&nbsp;</p>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1uah4PHDQpoWuIgP5ihxOk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <p>&nbsp;</p>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/60ApKwxQAOwacHdCHKMtqe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <p>&nbsp;</p>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6agt5mD2an4TpqFvpIujlI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <p>&nbsp;</p>
    <div class="m-3 h-0.5 divider"> </div>
    <a href="./"><p class="text-center">Back on homepage.</p></a>
</div>
</div>
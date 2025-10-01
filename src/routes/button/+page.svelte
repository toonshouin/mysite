<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let title = ''; // Reactive variable for the dynamic title
    const fullTitle = "Button Collection | Toonshouin's Site"; // The full title you want to display

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
    <div class="flex items-center space-x-2">
        <img class="w-20 h-20" src="easybtt.png" alt="That what's easy button.">
        <span class="text-4xl font-bold">Button</span>
    </div>
    <div class="m-3 h-0.5 divider"> </div>
    <p>There is my 88x31 button collection, you can use on your site. Or if you have one. You can also send me via E-mail or MSN or whatever that you want. Enjoy &lt;3.</p>
    <div class="m-3 h-0.5 divider"> </div>
    <div class="flex flex-wrap justify-center space-x-2">
        <img border="0" src="button/anydamn.gif" width="88" height="31">
        <img border="0" src="button/browser.gif" width="88" height="31">
        <img border="0" src="button/dekdee.gif" width="88" height="31">
        <img border="0" src="button/get.gif" width="88" height="31">
        <img border="0" src="button/imissxp.gif" width="88" height="31">
        <img border="0" src="button/microsoft_frontpage.gif" width="88" height="31">
        <img border="0" src="button/nvidia.gif" width="88" height="31">
        <img border="0" src="button/sanook.gif" width="88" height="31">
        <img border="0" src="button/discord.gif" width="88" height="31">
        <img border="0" src="button/0.gif" width="88" height="31">
        <img border="0" src="button/macos_mov.gif" width="88" height="31">
        <img border="0" src="button/darwin.gif" width="88" height="31">
        <img border="0" src="button/getwmp7.gif" width="88" height="31">
        <img border="0" src="button/hotmail3.gif" width="88" height="31">
        <img border="0" src="button/dell_88x31.gif" width="88" height="31">
    </div>
    <div class="m-3 h-0.5 divider"> </div>
    <p>Some from site that I have inspiration to.</p>
    <div class="m-3 h-0.5 divider"> </div>
    <div class="flex flex-wrap justify-center space-x-2">
        <img border="0" src="button/tbsite.gif" width="88" height="31">
        <img border="0" src="button/koinuko2.gif" width="88" height="31">
        <img border="0" src="button/sslnossl.gif" width="88" height="31">
        <img border="0" src="button/masto.gif" width="88" height="31">
        <img border="0" src="button/nginx.gif" width="88" height="31">
        <img border="0" src="button/youtube.gif" width="88" height="31">
    </div>
    <div class="m-3 h-0.5 divider"> </div>
    <p>This one I made here.</p>
    <div class="m-3 h-0.5 divider"> </div>
    <div class="flex flex-wrap justify-center space-x-2">
        <img border="0" src="button/tst_old.gif" width="88" height="31">
        <img border="0" src="button/pantip.gif" width="88" height="31">
        <img border="0" src="button/instagram.gif" width="88" height="31">
    </div>
    <div class="m-3 h-0.5 divider"> </div>
    <a href="./"><p class="text-center">Back on homepage.</p></a>
</div>
</div>
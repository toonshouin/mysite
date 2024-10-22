<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let title = ''; // Reactive variable for the dynamic title
    let fullTitle = ''; // The full title you want to display

    $: fullTitle = `${$page.status} - ${$page.error.message} | ToonStoryTime (ToonNongAoey)'s Site`;

    /**
     * Types out the title character by character.
     * @param {number} i - The current index of the character to type.
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
     * Deletes the title character by character.
     * @param {number} i - The current index of the character to delete.
     */
    function deleteTitle(i) {
        if (i >= 0) {
            title = title.substring(0, i);
            setTimeout(() => deleteTitle(i - 1), 200); // Adjust the speed of deleting here
        } else {
            // Wait a bit before starting to type again
            setTimeout(() => typeTitle(0), 1000); // Adjust the pause before typing again
        }
    }

    // Start the typing effect on component mount
    onMount(() => {
        typeTitle(0);
    });
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<style>
    .container {
        text-align: center;
        padding: 2rem;
    }

    .link {
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }


	a {
		color: #890606;
		font-weight: bold;
		text-decoration: underline;
	}
</style>



<div class="flex justify-center">
<div class="container">
    <h1 class="text-5xl font-bold">{$page.status}</h1>
    <h2 class="text-2xl font-bold">{$page.error.message}</h2>
    <div class={`m-3 h-0.5 divider`}> </div>
    <p>If you think this shouldn't happened or something unexpected occured! Please report us on <a href="https://github.com/toonoeichi/mysite/issues/new">Github</a> or <a href="mailto:contact@toonstorytime.me/">E-mail</a> to us!</p>
    <div class={`m-3 h-0.5 divider`}> </div>
    <a href="./"><p class="text-center">Back on homepage.</p></a>
</div>
</div>
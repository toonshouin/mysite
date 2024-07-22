<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let title = ''; // Reactive variable for the dynamic title
    const fullTitle = "About Me | ToonStoryTime (ToonNongAoey)'s Site"; // The full title you want to display

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

// Fetch the latest   commit message and date on component mount
onMount(async () => {
    typeTitle(0);
    // Return the cleanup function directly
    return; 
  }
);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

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
<div class="flex justify-center" transition:fade>
<div class="container mx-auto px-4">
    <div class="inline">
        <span class="text-3xl font-bold">Hi! 👋</span>
        <span class="text-2xl">I'm Kritthapath Yaviraj!</span>
    </div>
    <p>or you also may know as CartoonGamerTeamThai , CartoonLovePangKung , ToonWannaMoveOn , ToonAoeychi!</p>
    <div class={`m-3 h-0.5 divider`}> </div>
    <img src="tna_event24.avif" alt="ToonAoeychi in 2024.">
    <div class={`m-3 h-0.5 divider`}> </div>
    <p>A 17 years old in Thailand studying 3rd Year Vocational Certificate in Computer Business at Dusit Commercial Nonthaburi Vocational College that Interested in Web Developing, starting from want to be Computer Technician to Dev-Ops Web Developer</p>
    <br>
    <div class="inline">
        <span>For more detail of my education, you can visit my resume,</span>
        <a href="https://resume.toonstorytime.me"><span class="font-bold">Here!</span></a>
    </div>
</div>
</div>
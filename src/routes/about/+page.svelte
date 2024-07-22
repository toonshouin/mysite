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
    <div class={`m-3 h-0.5 divider`}> </div>
        <div class="flex flex-row">
            <div class="flex flex-col max-w-sm w-full pr-2.5                                                                ">
                <span class="text-3xl text-bold">Projects</span>
                <span>- <a href="#here">Main site (toonstorytime.me)</a> My personal site</span>
                <span>- <a href="http://toonnongaeoy.dino.icu">Other Site (toonnongaeoy.dino.icu)</a> My retro site based on <a href="https://koinuko.pink" style="color: black;">koinuko.pink</a> v.5 and 6</span>
                <span>- <a href="https://blog.toonstorytime.me">Blog Site</a> My blog site</span>
                <span>- <a href="https://tree.toonstorytime.me">Tree's Site</a> My linktree.</span>
                <span>- <a href="https://wtlyrics.toonstorytime.me">What the Lyrics?</a> My lyrics site with all the weird , dirty , and everything that possible in the Lyrics!</span>
                <span>- <a href="https://github.com/toonnongaeoy/rosepine-discord-newthemes">Rosé Pine for Discord (But in diffrent fonts)</a> Yeah, like the name suggest, and also add Rosé Pine Moon (that I like.)</span>
                <span>- <a href="https://thai.hackclub.com">Hack Club Thai Translation Site.</a> Yeah, contribute on <a href="https://github.com/hackclub/global" style="color: black;">hackclub/global</a></span>
            </div>
            <div class="flex flex-col max-w-sm w-full">
                <span class="text-3xl text-bold">Tools</span>
                <span>- Visual Studio Code</span>
                <span>- Git</span>
                <span>- GitHub</span>
                <span>- Figma</span>
                <span>- Adobe Photoshop</span>
                <span>- Adobe Illustrator</span>
                <span>- Adobe Premiere Pro</span>
                <span>- Davinci Reslove</span>
                <span>- OBS Studio</span>
                <span>- PyCharm</span>
                <span>- IntelliJ</span>
                <span>- Postman</span>
            </div>
        </div>
        <br>
        <div class="flex flex-row">
            <div class="flex flex-col max-w-sm w-full">
                    <span class="text-3xl text-bold">Language</span>
                    <span>- HTML</span>
                    <span>- CSS</span>
                    <span>- PHP</span>
                    <span>- Visual Basic</span>
                    <span>- Svelte</span>       
                    <span>- Python</span>
                    <span>- C</span>
                    <span>- C++</span>
            </div>
            <div class="flex flex-col max-w-sm w-full">
                <span class="text-3xl text-bold">Hobby</span>
                <span>- Web Developing</span>
                <span>- Gaming</span>
                <span>- Watching Anime</span>
                <span>- Listening to Music</span>
                <span>- Watching YouTube</span>
                <span>- Making Youtube Videos</span>
                <span>- Livestreaming on YouTube and Twitch</span>
            </div>
        </div>
    <a href="./"><p class="text-center">Back on homepage.</p></a>
</div>
</div>
<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let title = ''; // Reactive variable for the dynamic title
    const fullTitle = "Other Way to Contact | ToonStoryTime (ToonOeiChi)'s Site"; // The full title you want to display

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
    <div class="flex justify-center text-center">
        <div class="inline">
            <span class="text-2xl font-bold">Ways to find me outside this.</span>
            <span class="text-l">(If you want to know somehow.)</span>
        </div>
    </div>
    <div class={`m-3 h-0.5 divider`}> </div>
    <p>&nbsp;</p>
    <div class="flex justify-center text-center">
        <div class="inline">
            <span class="text-2xl font-bold">Games</span>
        </div>
    </div>
    <h2 class="text-2xl font-bold">Minecraft</h2>
    <p>&emsp;- I don't often play public online multiplayer like Hypixel, But you can ask me. My ID right now is <u><b>ToonWannaMoveOn.</b></u> (If you want to add me in to your Realms. Please ask me first.) and I don't always play or even paid for Xbox Game Pass. So, ask me first.</p>
    <h2 class="text-2xl font-bold"><a href="https://www.roblox.com/users/422281521/profile">Roblox</a></h2>
    <p>&emsp;- I usually play Royale High, Especially Campus 2,3 and Sunset Island. Registered as <u><b>CartoonLovePangKung</b></u> but shown as <u><b>ToonWannaMoveOn.</b></u> (and I don't accept random friend request, so If you want to add me. Please tell me on my e-mail or in the social tab.)</p>
    <h2 class="text-2xl font-bold">Ensemble Stars Music (JP)</h2>
    <p>&emsp;- I don't often play that much, But when my character event out, I will play it every single day until I get him, Anyways. My ID is <u><b>yubjmyt</b></u> and Registered as <u><b>Cartoon17.</b></u> And for this game, Feel free to add me if you want. And maybe tell me that you comes from this. (also, I don't understand Japanese but managed to play this thanks to my sis. and I don't play this on Global Server soon.)</p>
    <h2 class="text-2xl font-bold"><a href="https://steamcommunity.com/profiles/76561198264061882">Steam</a></h2>
    <p>&emsp;- I also play games on Steam such as my favorite games of all time like, Portal 2. Registered as <u><b>Cartoongamer71</b></u> shown as <u><b>ToonNongAeoy.</b></u></p>
    <p>&nbsp;</p>
    <div class={`m-3 h-0.5 divider`}> </div>
    <p>&nbsp;</p>
    <div class="flex justify-center text-center">
        <div class="inline">
            <span class="text-2xl font-bold">Social</span>
        </div>
    </div>
    <a href="https://fb.com/toonoeichi"><h2 class="text-2xl font-bold">Facebook</h2></a>
    <p>&emsp;- I still mostly online on Facebook cause a lot of friends is on there. Registered as <u><b>Cartoon Kritthapath Yaviraj</b></u>, and I don't publicly receive any add request. So, recommended to talk to me a few bit and then try to add me.</p>
    <h2 class="text-2xl font-bold"><a href="https://instagram.com/toonoeichi">Instagram</a> and <a href="https://www.threads.net/@toonoeichi">Threads</a> (Cause it is the same thing.)</h2>
    <p>&emsp;- Another way to find me, Cause I play Instagram (almost) every single day (even I didn't post any story.) but my mostly 90% depends on it, Mine is <u><b>@toonoeichi</b></u> and feels free to follow me to dm me if you want to.</p>
    <h2 class="text-2xl font-bold">Ensemble Stars Music (JP)</h2>
    <p>&emsp;- I don't often play that much, But when my character event out, I will play it every single day until I get him, Anyways. My ID is <u><b>yubjmyt</b></u> and Registered as <u><b>Cartoon17.</b></u> And for this game, Feel free to add me if you want. And maybe tell me that you comes from this. (also, I don't understand Japanese but managed to play this thanks to my sis. and I don't play this on Global Server soon.)</p>
    <a href="https://steamcommunity.com/profiles/76561198264061882"><h2 class="text-2xl font-bold">Steam</h2></a>
    <p>&emsp;- I also play games on Steam such as my favorite games of all time like, Portal 2. Registered as <u><b>Cartoongamer71</b></u> shown as <u><b>ToonNongAeoy.</b></u></p>
    <div class="inline">
        <span>For more detail about my education, you can visit my resume,</span>
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
                <span>- Make a project <i>and then throw it away.</i></span>
            </div>
        </div>
        <br>
        <div class={`m-3 h-0.5 divider`}> </div>
        <p class="text-center">If you like to contact me (for some reason), you can contact me on <a href="mailto:kritthapath@toonstorytime.me">kritthapath (at) toonstorytime.me</a>. And I always check my inbox. So I will reply you with in 1 - 2 day!
        <div class={`m-3 h-0.5 divider`}> </div>
    <a href="./"><p class="text-center">Back on homepage.</p></a>
</div>
</div>
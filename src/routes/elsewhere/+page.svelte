<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let title = ''; // Reactive variable for the dynamic title
	const fullTitle = "Other Way to Contact | ToonStoryTime (ToonNongAoey)'s Site"; // The full title you want to display

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
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex justify-center" transition:fade>
	<div class="container mx-auto px-4">
		<div class="flex justify-center text-center">
			<div class="inline">
				<span class="text-2xl font-bold">Ways to find me outside this.</span>
				<span class="text-l">(If you want to know somehow.)</span>
			</div>
		</div>
		<div class={`m-3 h-0.5 divider`}></div>
		<div class="flex justify-center text-center">
			<div class="inline">
				<span class="text-2xl font-bold">Games</span>
			</div>
		</div>
		<h2 class="text-2xl font-bold">Minecraft</h2>
		<p>
			&emsp;- I don't often play public online multiplayer like Hypixel, But you can ask me. My ID
			right now is <u><b>ToonOeiChi.</b></u> (If you want to add me in to your Realms. Please ask
			me first.) and for Xbox Live, My ID is <u><b>Cartoon17</b></u> or <u><b>Cartoon176333</b></u>.
		</p>
		<h2 class="text-2xl font-bold">
			<a href="https://www.roblox.com/users/422281521/profile">Roblox</a>
		</h2>
		<p>
			&emsp;- I usually play Royale High, Especially Campus 2,3 and Sunset Island. Registered as <u
				><b>CartoonLovePangKung</b></u
			>
			but shown as <u><b>ToonWannaMoveOn.</b></u> (and I don't accept random friend request, so If you
			want to add me. Please tell me on my e-mail or in the social tab.)
		</p>
		<h2 class="text-2xl font-bold">Ensemble Stars Music (JP)</h2>
		<p>
			&emsp;- I don't often play that much, But when my character event out, I will play it every
			single day until I get him, Anyways. My ID is <u><b>yubjmyt</b></u> and Registered as
			<u><b>Cartoon17.</b></u> And for this game, Feel free to add me if you want. And maybe tell me
			that you comes from this. (also, I don't understand Japanese but managed to play this thanks to
			my sis. and I don't play this on Global Server soon.)
		</p>
		<h2 class="text-2xl font-bold">
			<a href="https://steamcommunity.com/profiles/76561198264061882">Steam</a>
		</h2>
		<p>
			&emsp;- I also play games on Steam such as my favorite games of all time like, Portal 2.
			Registered as <u><b>Cartoongamer71</b></u> shown as <u><b>ToonNongAeoy.</b></u>
		</p>
		<p>&nbsp;</p>
		<div class={`m-3 h-0.5 divider`}></div>
		<div class="flex justify-center text-center">
			<div class="inline">
				<span class="text-2xl font-bold">Social</span>
			</div>
		</div>
		<h2 class="text-2xl font-bold"><a href="https://fb.com/toonoeichi">Facebook</a></h2>
		<p>
			&emsp;- I still mostly online on Facebook cause a lot of friends is on there. Registered as <u
				><b>Cartoon Kritthapath Yaviraj</b></u
			>, and I don't publicly receive any add request. So, recommended to talk to me a few bit and
			then try to add me.
		</p>
		<h2 class="text-2xl font-bold">
			<a href="https://instagram.com/toonoeichi">Instagram</a> and
			<a href="https://www.threads.net/@toonoeichi">Threads</a> (Cause it is the same thing.)
		</h2>
		<p>
			&emsp;- Another way to find me, Cause I play Instagram (almost) every single day (even I
			didn't post any story.) but my mostly 90% depends on it, Mine is <u><b>@toonoeichi</b></u> and
			feels free to follow me to dm me if you want to.
		</p>
		<h2 class="text-2xl font-bold">Line</h2>
		<p>
			&emsp;- Personally, I don't use Line that much, <b
				><i>but since we are Thai People. ofc, everything based on Line.</i></b
			>
			So my ID is <u><b>toon815341.</b></u> Registered as <u><b>ToonNongAeoy.</b></u>
		</p>
		<h2 class="text-2xl font-bold"><a href="https://twitter.com/toonoeichi">Twitter</a></h2>
		<p>
			&emsp;- This one, I also don't use it that much, But you can follow anyways, Registered as <b
				><u>@toonoeichi.</u></b
			>
			(And yes, I know it called X. But
			<b
				><i
					><u
						>just why? Why you want to change from app that feels great and looks beautifully on
						home screen into some legal free por-</u
					></i
				></b
			> ... I think you got the idea.)
		</p>
		<h2 class="text-2xl font-bold"><a href="https://bsky.app/profile/toonstorytime.me">Bluesky</a></h2>
		<p>
			&emsp;- New Platform with same creator of Twitter <b><u>(that they got kicked out by some placeholders that brought that and make it like Social As a Service [SAaS])</u></b> Anyways, Registered as <b
				><u>@toonstorytime.me</u></b
			>
			(And it hosted on my own server, in my homelab. In case of unaccessable or anything, just tell me on my e-mail or <b><u>just blame my router or my ISP for that</u></b>.)
		</p>
		<h2 class="text-2xl font-bold">
			<a href="https://discord.com/users/409324079326167043">Discord</a>
		</h2>
		<p>
			&emsp;- I also use Discord (Even through, I didn't have friends on Discord that much.)
			Registered as <b><u>@toonoeichi</u></b> and
			<b><i>please don't spam on my dm or else you may got blocked.</i></b>
		</p>
		<h2 class="text-2xl font-bold">
			<a href="msnim:chat?contact=kritthapath@escargot.chat">MSN Messenger (Escargot)</a>
		</h2>
		<p>
			&emsp;- Yep, Even I don't that old, but I use MSN Messenger <b
				><i>(even I don't have any friends on it)</i></b
			>
			My mail is <b><u>kritthapath@escargot.chat</u></b> (and yep.
			<b><i><u>I use Escargot, If you use another server like OMessenger, It won't work</u></i></b>)
			Registered as <b><u>ToonNongAeoy</u></b> and
			<b
				><i
					><u
						>please don't nudge my screen too much that makes me annoying of else you will be
						blocked.</u
					></i
				></b
			> And if you use MSN 7.5 or higher. You can click on the header to add me automatically.
		</p>
		<p>&nbsp;</p>
		<div class={`m-3 h-0.5 divider`}></div>
		<div class="flex justify-center text-center">
			<div class="inline">
				<span class="text-2xl font-bold">Other</span>
			</div>
		</div>
		<h2 class="text-2xl font-bold"><a href="mailto:kritthapath@toonstorytime.me">E-mail</a></h2>
		<p>
			&emsp;- There is a pretty simple thing that you can use to contact me, <b
				><i>(or you tell me you don't have any e-mail.)</i></b
			>
			You can send me to this e-mail <b><u>kritthapath (at) toonstorytime.me</u></b> And I always check
			my inbox. So I will reply you with in 1 - 2 day.
		</p>
		<h2 class="text-2xl font-bold">
			<a href="https://hackclub.com/slack/?event=toonoeichi-room">Hack Club Slack</a>
		</h2>
		<p>
			&emsp;- If you are teenagers like me who like to code or thinkering. You can join us here.
		</p>
		<div class={`m-3 h-0.5 divider`}></div>
		<a href="./"><p class="text-center">Back on homepage.</p></a>
	</div>
</div>

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
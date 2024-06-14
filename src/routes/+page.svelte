<script>
    import { fade } from 'svelte/transition';
    import "../app.css";

    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { fetchSubscriberCount } from '$lib/ytapi';

    const subscriberCount = writable(0);
    const channelId = 'UCQUBBBEQgDxnFTd52UtjSTg';

  onMount(async () => {
    const count = await fetchSubscriberCount(channelId);
    subscriberCount.set(count);
</script>

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
</style>

<div class="container mx-auto px-auto" transition:fade>
    <h1 class="text-3xl font-bold underline">Welcome to My new site!</h1>
    <p>This is the home page for </p>
    <span class="inline-flex items-baseline">
        <span>[$subscriberCount}</span>
        <span> Subscribers Youtuber and Developer.</span>
      </span>
    <p class="link"><a href="/about">Go to About Page</a></p>
    <p>Some temporary string here!</p>
</div>

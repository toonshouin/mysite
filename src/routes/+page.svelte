<script>
    import { fade } from 'svelte/transition';
    import "../app.css";
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
    <p>This is the home page.</p>
    <p class="link"><a href="/about">Go to About Page</a></p>
    <p>Some temporary string here!</p>
</div>

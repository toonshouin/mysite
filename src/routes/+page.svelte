<script>
    import { fade } from 'svelte/transition';
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

<div class="container" transition:fade>
    <h1>Welcome to My  and yep, new site!</h1>
    <p>This is the home page.</p>
    <p class="link"><a href="/about">Go to About Page</a></p>
    <p>Some temporary string here!</p>
</div>

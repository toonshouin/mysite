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
<div class="flex justify-center" transition:fade>
<div class="container">
    <h1>About This Website</h1>
    <p>This is the about page.</p>
    <p class="link"><a href="./">Go to Home Page</a></p>
</div>
</div>
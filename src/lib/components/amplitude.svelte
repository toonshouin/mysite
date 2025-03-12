<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  export let songs = [];
  
  onMount(async () => {
    if (browser) {
      // Fetch songs data if not provided as a prop
      if (songs.length === 0) {
        try {
          const response = await fetch('/data/songs.json');
          const data = await response.json();
          songs = data.songs;
        } catch (error) {
          console.error("Failed to load songs data:", error);
        }
      }
      
      // Initialize Amplitude
      import('amplitudejs').then((Amplitude) => {
        Amplitude.default.init({
          songs: songs,
          debug: true // Helps you see initialization issues
        });
      });
    }
  });
</script>

<div id="amplitude-player" class="w-full max-w-sm w-full mx-auto">
  <!-- Basic Player Controls -->
  <div class="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md">
    <div class="song-info mb-4">
      <div class="amplitude-song-info amplitude-song-title font-bold text-lg"><span data-amplitude-song-info="name"></span></div>
      <div class="amplitude-song-info amplitude-song-artist text-sm"><span data-amplitude-song-info="artist"></span></div>
    </div>
    
    <div class="controls flex justify-center space-x-4 my-2">
      <button class="amplitude-prev p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        ⏮️
      </button>
      <button class="amplitude-play-pause p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        ▶️
      </button>
      <button class="amplitude-next p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        ⏭️
      </button>
    </div>
    
    <div class="progress mt-4">
      <div class="amplitude-song-time-progress text-xs text-center"></div>
      <input type="range" class="amplitude-song-slider w-full" />
      <div class="time-container flex justify-between text-xs mt-1">
        <span class="amplitude-current-time"></span>
        <span class="amplitude-duration-time"></span>
      </div>
    </div>
  </div>
</div>
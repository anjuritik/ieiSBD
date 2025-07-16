<script>
    import { onMount } from "svelte";
    let photos = [];
  
    onMount(async () => {
      const res = await fetch("http://localhost:5000/api/gallery");
      photos = await res.json();
    });
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Photo Gallery</h1>
  
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    {#each photos as photo}
      <div class="border p-2">
        <img src={photo.image_url} alt="gallery" class="w-full rounded shadow" />
        <p class="mt-1 text-center">{photo.caption}</p>
      </div>
    {/each}
  </div>
  
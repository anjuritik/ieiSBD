<script>
    import { onMount } from "svelte";
    let academics = [];
  
    onMount(async () => {
      const res = await fetch("http://localhost:5000/api/academics");
      academics = await res.json();
    });
  </script>
  
  <h1 class="text-2xl font-bold mb-4">Academic Programs</h1>
  <ul class="space-y-3">
    {#each academics as item}
      <li class="p-3 border bg-white rounded shadow">
        <h2 class="font-semibold">{item.title}</h2>
        <p>{item.description}</p>
      </li>
    {/each}
  </ul>
    
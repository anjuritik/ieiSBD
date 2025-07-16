<script>
  import { onMount } from "svelte";
  let members = [];

  onMount(async () => {
    const res = await fetch("http://localhost:5000/api/members");
    members = await res.json();
  });
</script>

<!-- Bootstrap 5 CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<!-- Member List Section -->
<div class="container mt-4">
  <!-- Back Button -->
  <!-- Section Title -->
  <h2 class="mb-4 text-center text-primary fw-bold">Our Esteemed Members</h2>

  <!-- Cards Grid -->
  <div class="row">
    {#each members as member}
      <div class="col-sm-6 col-lg-4 mb-4">
        <div class="card shadow h-100 border-0">
          <!-- Member Image (optional) -->
          {#if member.image_url}
            <img src={member.image_url} class="card-img-top img-fluid rounded-circle mx-auto mt-3" style="width: 120px; height: 120px; object-fit: cover;" alt={member.name} />
          {/if}

          <div class="card-body text-center">
            <h5 class="card-title text-dark fw-semibold">{member.name}</h5>
            <p class="card-text text-muted">{member.designation || 'Member'}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

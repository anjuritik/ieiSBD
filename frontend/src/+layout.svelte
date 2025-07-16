<script>
 </script>
<div>


</div>
<nav>
  <div class="logo">Institution of Engineers</div>
  <div class="menu">
    <a href="/">Home</a>
    <a href="/members">Members</a>
    <a href="/academics">Academics</a>
    <a href="/gallery">Gallery</a>
    <a href="/contact">Contact</a>
    <a href="/admin" class="admin-btn">Admin</a>
  </div>
</nav>

<main>
  <slot />
</main>

<footer>
  © 2025 Institution of Engineers. All rights reserved.
</footer>

<style>
  body {
    margin: 0;
    font-family: "Segoe UI", sans-serif;
    background-color: #f4f7fa;
    color: #333;
  }

  nav {
    background-color: #003366;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .menu a {
    color: white;
    text-decoration: none;
    margin-left: 16px;
    padding: 8px 12px;
    background-color: #0055a5;
    border-radius: 4px;
  }

  .menu a:hover {
    background-color: #0078d4;
  }

  .admin-btn {
    background-color: #ffaa00 !important;
    color: #222 !important;
  }

  main {
    padding: 24px;
  }

  footer {
    text-align: center;
    padding: 16px;
    background-color: #003366;
    color: white;
    margin-top: 40px;
  }
</style>

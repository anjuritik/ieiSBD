<script>
  import { onMount } from 'svelte';
  import { setupDropdownHover } from '$lib/js/dropdown';
  import '$lib/js/dropdown.css';
  import '$lib/js/hero.css';

  onMount(() => {
    setupDropdownHover();
  });
</script>

<!--Start of Mega Menu-->
<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">IEI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <!-- Home Mega Menu -->
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle" href="iei-Home.aspx" id="homeDropdown" role="button">
            <i class="fa fa-home"></i> Home
          </a>
          <div class="dropdown-menu p-4 mega-menu" aria-labelledby="homeDropdown">
            <div class="row">
              <div class="col-md-6">
                <h6>Explore IEI</h6>
                <a class="dropdown-item" href="iei-home.aspx#about-iei">About IEI</a>
                <a class="dropdown-item" href="iei-home.aspx#history-iei">History</a>
                <a class="dropdown-item" href="iei-home.aspx#services">Services</a>
                <a class="dropdown-item" href="iei-home.aspx#forthcoming-events">Forthcoming Events</a>
                <a class="dropdown-item" href="IEI-Tender.aspx">Tender</a>
                <a class="dropdown-item" href="ajax/Custom/IEI_Arbitrator_Panel_New.html">Arbitration</a>
              </div>
              <div class="col-md-6">
                <h6>More</h6>
                <a class="dropdown-item" href="ajax/Custom/RoyalCharter.html">Royal Charter</a>
                <a class="dropdown-item" href="IEI_Council_Members.aspx">IEI Council</a>
                <a class="dropdown-item" href="ajax/Custom/Committees.html">Committees</a>
                <a class="dropdown-item" href="iei-home.aspx#links-downloads">Links & Downloads</a>
                <a class="dropdown-item" href="iei_career.html">Careers</a>
              </div>
            </div>
          </div>
        </li>

        <!-- Membership Mega Menu -->
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle" href="iei-Memb.aspx" id="membershipDropdown" role="button">
            <i class="fa fa-users"></i> Membership
          </a>
          <div class="dropdown-menu p-4 mega-menu" aria-labelledby="membershipDropdown">
            <div class="row">
              <div class="col-md-6">
                <h6>Member Info</h6>
                <a class="dropdown-item" href="iei-Memb.aspx#members-benefit">Benefits to Members</a>
                <a class="dropdown-item" href="iei-Memb.aspx#membership-grade">Grades of Membership</a>
                <a class="dropdown-item" href="iei-Memb.aspx#Status_Membership">Application Status</a>
                <a class="dropdown-item" href="iei-Memb.aspx#chartered-engineering">Chartered Engineer</a>
                <a class="dropdown-item" href="iei-Memb.aspx#career-advancement">Career Advancement</a>
              </div>
              <div class="col-md-6 text-center align-self-center">
                <a href="IEI-RegistrationForMembApp.aspx" class="btn btn-primary w-100"><strong>Apply for Membership</strong></a>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</nav>
<!--End of Mega Menu-->

<section class="hero d-flex align-items-center text-center text-white">
  <div class="container py-5">
    <h1 class="display-4 fw-bold">Institution of Engineers - Sunabeda</h1>
    <p class="lead">Empowering Innovation • Engineering Excellence • National Progress</p>
    <h3 class="fst-italic mb-4">Welcome to the official portal of IEI - Sunabeda</h3>

    <div class="d-flex justify-content-center flex-wrap gap-3">
      <a href="/members" class="btn btn-warning fw-bold px-4 py-2">Members</a>
      <a href="/academics" class="btn btn-warning fw-bold px-4 py-2">Academics</a>
      <a href="/gallery" class="btn btn-warning fw-bold px-4 py-2">Photo Gallery</a>
      <a href="/contact" class="btn btn-warning fw-bold px-4 py-2">Contact Us</a>
    </div>
  </div>
</section>

<section class="about py-5 bg-light text-center">
  <div class="container">
    <h2 class="text-primary mb-3">What We Do</h2>
    <p class="fs-5 text-secondary">
      The Institution of Engineers is dedicated to fostering technological advancement, academic collaboration, and professional excellence across engineering disciplines. We provide a platform for engineers to connect, collaborate, and contribute to India's progress.
    </p>
  </div>
</section>


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

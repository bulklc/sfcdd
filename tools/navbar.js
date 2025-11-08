// Function to load the navbar
function loadNavbar() {
  // Build the navbar HTML with Bootstrap dropdown
  const navbarHTML = `
    <style>
      :root {
        --primary-blue: #017dc3;
        --primary-yellow: #fdb813;
        --primary-green: #8ac73e;
        --faded-blue: #8bbbd8;
        --faded-yellow: #fae8c6;
        --faded-green: #b8dc8f;
      }
      .custom-navbar {
        background-color: var(--primary-blue) !important;
        padding: 1rem 2rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .navbar-brand {
        color: white !important;
        font-weight: bold;
        font-size: 1.5rem;
      }
      .nav-link {
        color: white !important;
        font-weight: 500;
        transition: all 0.3s ease;
      }
      .nav-link:hover {
        color: var(--faded-yellow) !important;
      }
      .dropdown-toggle::after {
        margin-left: 0.5rem;
      }
      .dropdown-menu {
        background-color: white;
        border: 2px solid var(--primary-blue);
        border-radius: 0.5rem;
        margin-top: 0.5rem;
      }
      .dropdown-item {
        color: var(--primary-blue);
        padding: 0.75rem 1.5rem;
        transition: all 0.3s ease;
      }
      .dropdown-item:hover {
        background-color: var(--faded-yellow);
      }
      .dropdown-item:first-child:hover {
        border-radius: 0.5rem 0.5rem 0 0;
      }
      .dropdown-item:last-child:hover {
        border-radius: 0 0 0.5rem 0.5rem;
      }
    </style>
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="background-color: var(--faded-yellow);">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="standardsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Standards
              </a>
              <ul class="dropdown-menu" aria-labelledby="standardsDropdown">
                <li><a class="dropdown-item" href="/standards/plans.html">Plans</a></li>
                <li><a class="dropdown-item" href="/standards/specs.html">Specs</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a class="navbar-brand ms-auto" href="/">SFCDD</a>
      </div>
    </nav>
  `;

  // Inject the navbar HTML into the navbar container
  const navbarElement = document.getElementById("navbar");
  if (navbarElement) {
    navbarElement.innerHTML = navbarHTML;
  }
}

// Load navbar when DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);

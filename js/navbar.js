const header = document.getElementById('header');
const myNavBar = `
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
<div class="container-fluid" id="nav-wrap">
  <a id="navbar-brand" class="navbar-brand">Brent Newman's Portfolio</a>
  <ul id="navbar-nav" class="navbar-nav d-flex flex-row bd-highlight">
    <li class="nav-item">
      <a
        class="nav-link active"
        aria-current="page"
        href="https://bnewman917.github.io/"
        >Home</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="./projects.html">Projects</a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link active"
        href="https://github.com/BNewman917"
        target="_blank"
        ><img class="logo" src="../images/GitHub-Mark-Light-32px.png"
      /></a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link active"
        href="http://www.linkedin.com/in/brent-newman-97838022a"
        target="_blank"
        ><img class="logo" src="../images/linkedin-white.png"
      /></a>
    </li>
  </ul>
</div>
</nav>
`;

const createNavBar = () => header.innerHTML = myNavBar;
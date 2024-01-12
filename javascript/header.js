function createheader() {
  document.getElementById('header').innerHTML = `<a href="#main" class="skip-to-main-content-link">Skip to main content</a>
  <button aria-label="Menu" aria-controls="navigation" aria-expanded="false">☰</button>
  <nav role="navigation" class="sidebar">
  <ul>
    <li><a href="index.html">Introduction</a></li>
    <li><a href="colour.html">Colour</a></li>
    <li><a href="font-size.html">Font Size</a></li>
    <li><a href="keyboard-nav.html">Keyboard Navigation</a></li>
    <li><a href="semantic-html.html">Semantic HTML</a></li>
    <li><a href="aria.html">ARIA</a></li>
    <li><a href="references.html">References</a></li>
  </ul>
</nav>`
}

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('#header > button')
  const sidebar = document.querySelector('.sidebar')

  menuButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true'
    this.setAttribute('aria-expanded', !isExpanded)
    sidebar.style.left = isExpanded ? '-300px' : '0px'
  })
})



createheader()
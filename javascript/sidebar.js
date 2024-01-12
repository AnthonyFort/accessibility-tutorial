function createSidebar() {
  document.getElementById('header').innerHTML = `<nav role="navigation">
  <button aria-label="Menu" aria-controls="navigation" aria-expanded="false">☰</button>
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
createSidebar()
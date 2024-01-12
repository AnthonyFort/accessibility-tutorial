document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('#header > button')
  const sidebar = document.querySelector('.sidebar')

  menuButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true'
    this.setAttribute('aria-expanded', !isExpanded)
    sidebar.style.left = isExpanded ? '-300px' : '0px'
  })
})
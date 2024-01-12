document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.querySelector('.sidebar')
  const sidebarOpenButton = document.getElementById('sidebar-open-button')
  const sidebarCloseButton = document.getElementById('sidebar-close-button')

  sidebarOpenButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true'
    this.setAttribute('aria-expanded', !isExpanded)
    sidebarCloseButton.setAttribute('aria-expanded', !isExpanded)
    sidebar.style.left = isExpanded ? '-300px' : '0px'
  })

  sidebarCloseButton.addEventListener('click', function(){
    const isExpanded = this.getAttribute('aria-expanded') === 'true'
    this.setAttribute('aria-expanded', !isExpanded)
    sidebarOpenButton.setAttribute('aria-expanded', !isExpanded)
    sidebar.style.left = isExpanded ? '-300px' : '0px'
  })

})
document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.querySelector('.sidebar')
  const sidebarOpenButton = document.getElementById('sidebar-open-button')
  const sidebarCloseButton = document.getElementById('sidebar-close-button')
  const siderbarItems = document.getElementsByClassName('sidebar-item')
  const lightModeSwitchButton = document.getElementById('light-mode-switch')

  let isSidebarOpen = false
  let lightModeOn = true

  sidebarOpenButton.addEventListener('click', function(e) {
    e.stopPropagation()
    this.setAttribute('aria-expanded', 'true')
    sidebarCloseButton.setAttribute('aria-expanded', 'true')
    Array.from(siderbarItems).forEach(item => item.setAttribute('tabindex', '0'))
    sidebar.style.left = '0px'
    isSidebarOpen = true
  })

  sidebarCloseButton.addEventListener('click', function(e){
    e.stopPropagation()
    this.setAttribute('aria-expanded', 'false')
    sidebarOpenButton.setAttribute('aria-expanded', 'false')
    Array.from(siderbarItems).forEach(item => item.setAttribute('tabindex', '-1'))
    sidebar.style.left = '-300px'
    isSidebarOpen = false
  })

  document.onclick = function(e) {
    if (isSidebarOpen === true) {
      sidebarOpenButton.setAttribute('aria-expanded', 'false')
      sidebarCloseButton.setAttribute('aria-expanded', 'false')
      Array.from(siderbarItems).forEach(item => item.setAttribute('tabindex', '-1'))
      sidebar.style.left = '-300px'
      isSidebarOpen = false
    } 
  }

  lightModeSwitchButton.addEventListener('click', function(e){
    if (e.target === lightModeSwitchButton.querySelector('input')) {
      document.body.classList.toggle('dark-mode')
    }
  })


  

})
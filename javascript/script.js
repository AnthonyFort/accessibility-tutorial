document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.querySelector('.sidebar')
  const sidebarOpenButton = document.getElementById('sidebar-open-button')
  const sidebarCloseButton = document.getElementById('sidebar-close-button')
  const siderbarItems = document.getElementsByClassName('sidebar-item')
  const lightModeSwitchButton = document.getElementById('light-mode-switch')
  const lightModeText = document.getElementById('light-mode-text')

  let isSidebarOpen = false
  let lightModeOn = true

  const pageList = [
    'index.html',
    'colour.html',
    'font-size.html',
    'keyboard-nav.html',
    'semantic-html.html',
    'aria.html',
    'references.html'
  ]

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
      if (lightModeOn === true) {
        lightModeText.innerText = 'Select dark mode'
        lightModeOn = false
      } else {
        lightModeText.innerText = 'Select light mode'
        lightModeOn = true
      }
    }
  })

  document.addEventListener('keydown', function(e){
    if (e.key === 'n' || e.key === 'N') {
      const currentLocation = window.location.href
      const filename = currentLocation.match(/[^/]*$/)
      const index = pageList.indexOf(filename[0])
      if (index + 1 < pageList.length) {
        window.location.href = `../html/${pageList[index + 1]}`
      }   
    }
  })
})
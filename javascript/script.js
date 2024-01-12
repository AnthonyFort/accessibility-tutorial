document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.querySelector('.sidebar')
  const sidebarOpenButton = document.getElementById('sidebar-open-button')
  const sidebarCloseButton = document.getElementById('sidebar-close-button')
  const siderbarItems = document.getElementsByClassName('sidebar-item')
  const lightModeSwitchButton = document.getElementById('light-mode-switch')
  const lightModeText = document.getElementById('light-mode-text')
  const increaseButton = document.getElementById('increase-button')
  const decreaseButton = document.getElementById('decrease-button')
  const documentBody = document.getElementsByTagName('body')
  const semanticAnswerButton = document.getElementById('semantic-answer-button')
  const semanticAnswerDiv = document.getElementById('semantic-answer')
  const semanticAnswertext = document.getElementById('semantic-answer-text')

  let isSidebarOpen = false
  let lightModeOn = true
  let currentFontSizeIndex = 0

  const pageList = [
    'index.html',
    'colour.html',
    'font-size.html',
    'keyboard-nav.html',
    'semantic-html.html',
    'aria.html',
    'references.html'
  ]

  const fontSizesInRem = [1, 1.125, 1.25, 1.375, 1.5]

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
    const currentLocation = window.location.href
    const filename = currentLocation.match(/[^/]*$/)
    const index = pageList.indexOf(filename[0])
    if (e.key === 'n' || e.key === 'N') {
      if (index + 1 < pageList.length) {
        window.location.href = `../html/${pageList[index + 1]}`
      }   
    }
    if (e.key === 'p' || e.key === 'P') {
      if (index > 0) {
        window.location.href = `../html/${pageList[index - 1]}`
      }
    }
  })

  increaseButton.addEventListener('click', function(){
    if (currentFontSizeIndex < fontSizesInRem.length - 1){
      currentFontSizeIndex++
      documentBody[0].style.fontSize = `${fontSizesInRem[currentFontSizeIndex]}rem`
    } 
  })

  decreaseButton.addEventListener('click', function(){
    if (currentFontSizeIndex > 0) {
      currentFontSizeIndex--
      documentBody[0].style.fontSize = `${fontSizesInRem[currentFontSizeIndex]}rem`
    }
  })

  semanticAnswerButton.addEventListener('click', function(e){
    e.preventDefault()
    const semanticChoice = document.querySelector('input[name="semanticChoice"]:checked')
    if (semanticChoice.value === 'option1') {
      semanticAnswertext.innerHTML = 'Correct! Option 1 uses semantic HTML.'
      semanticAnswerDiv.style.display = 'block'
    } else if (semanticChoice.value === 'option2') {
      semanticAnswertext.innerHTML = 'Incorrect. Div elements are not considered semantic.'
      semanticAnswerDiv.style.display = 'block'
    } 
  })
})
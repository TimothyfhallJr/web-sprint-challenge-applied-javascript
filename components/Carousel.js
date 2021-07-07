/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')

// <div class="carousel-container"> -- Attach the carousel to this element
  // const carouselContainer = document.querySelector('.carousel-container')
/**********************************************************/ 

// Element variables
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const mountains = document.createElement('img')
  const computer = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const rightButton = document.createElement('div')

// Source values for all the carousel images
  const imgMountains = './assets/carousel/mountains.jpeg'
  const imgComputer = './assets/carousel/computer.jpeg'
  const imgTrees = './assets/carousel/trees.jpeg'
  const imgTurntable = './assets/carousel/turntable.jpeg'

// Add property values and event listeners to the appropriate elements
  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  mountains.setAttribute('src', 'imgMountains')
  computer.setAttribute('src', 'imgComputer')
  trees.setAttribute('src', 'imgTrees')
  turntable.setAttribute('src', 'imgTurntable')
  rightButton.classList.add('right-button')


  // Updating Content for Images

  mountains.src = "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg"
  computer.src = "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg"
  trees.src = "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg"
  turntable.src = 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg'

// All of the carousel elements are to be enclosed in one div with the class of carousel
  carousel.appendChild(leftButton)
  carousel.appendChild(mountains)
  carousel.appendChild(computer)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightButton)

// Define event handlers for the buttons
  const moveLeft = () => {
    // Test to see which image is being displayed
    let currentSlide = 0
    let anyVisible = false
    imgList.forEach((img, ndx) => {
      const lastSlide = (imgList.length -1)

      // Check to see if the current
      // slide is being displayed
      if (img.style.display) {
        anyVisible = true

        // If it is being displayed, hide it then
        // show the previous slide in the rotation
        img.style.display = 'none'

        // If the current slide ndx == 0 then show the last slide,
        // otherwise, show the previous slide
        let nextSlide = (ndx !=0? ndx -1: lastSlide)
        imgList[nextSlide].style.display = 'block'
      }
    })
    console.log(imgList[1].style.display)
  }
  const moveRight = () => {
    if (imgList[1].style.display) {
      imgList[1].style.display = null
    }
  }

// Add click event listeners to the left and right buttons
  leftButton.addEventListener('click', moveLeft)
  rightButton.addEventListener('click', moveRight)

  carouselContainer.appendChild(carousel)

  const imgList = document.querySelectorAll('img')
  imgList[0].style = 'display:block'
  // console.log(imgList)
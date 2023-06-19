// Import Dog class and dog data 
import Dog from './Dog.js'
import dogData from './data.js'

// Initialization of global variables 
let currentDogIndex = 0
let currentDog = new Dog(dogData[currentDogIndex])
let mainContent = document.getElementById('main-content')
const heartBtn = document.getElementById("heart-btn")
const crossBtn = document.getElementById("cross-btn")

// Add event listeners to buttons
heartBtn.addEventListener('click', handleLikeButtonClick)
crossBtn.addEventListener('click', handleDislikeButtonClick)

// Function to render the current dog
function render(){
    mainContent.innerHTML = currentDog.getDogHtml()
}

// Function to get the next dog
function getNextDog(){
    currentDogIndex++
    if (currentDogIndex >= dogData.length) {
        // This is the end, show the ending message and GIF
        mainContent.innerHTML = `
            <div class='end-message'>
                <p>Sorry, we're fresh out of dogs. Time for a bark... I mean, break!</p>
                <iframe src="https://giphy.com/embed/xUA7aQaXbhnkX4znm8" width="480" height="475" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/namslam-dogdings-xUA7aQaXbhnkX4znm8">via GIPHY</a></p>
            </div>
        `
        disableButtons()
    } else {
        currentDog = new Dog(dogData[currentDogIndex])
        render()
    }
}

// Function for the 'like' button click 
function handleLikeButtonClick() {
    
    // Show like badge and change heart button color 
    document.getElementById('badge-like').style.display = 'initial'
    heartBtn.classList.add('heart-btn-active-background-color')
    
    // After a delay, set the match status, get the next dog, reset the button color, and reset the focus state
    setTimeout(() => {
        currentDog.setMatchStatus(true)
        getNextDog()    
        heartBtn.classList.remove('heart-btn-active-background-color')
        heartBtn.blur()
    }, 2000)
}

// Function for the 'dislike' button click
function handleDislikeButtonClick() {
    
    // Show nope badge and change cross button color
    document.getElementById('badge-nope').style.display = 'initial'
    crossBtn.classList.add('cross-btn-active-background-color')
    
    // After a delay, set the match status, get the next dog, reset the button color, and reset the focus state
    setTimeout(() => {
        currentDog.setMatchStatus(false)
        getNextDog()    
        crossBtn.classList.remove('cross-btn-active-background-color')
        crossBtn.blur()
    }, 2000)
}

// Function to disable both 'like' and 'dislike' buttons
function disableButtons() {
    heartBtn.removeEventListener('click', handleLikeButtonClick)
    crossBtn.removeEventListener('click', handleDislikeButtonClick)

    heartBtn.disabled = true;
    crossBtn.disabled = true;
}

// Render the first dog when the page loads
render()
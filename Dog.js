// Class definition for dog 

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    // Method to set the match status 
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    // Method to generate HTML for a Dog object 
    getDogHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class='dog-profile'>
                <img class='dog-avatar' src='${avatar}' alt='${name}'>
                <img class='badge-like' id='badge-like' src='images/badge-like.png' alt=''>
                <img class='badge-nope' id='badge-nope' src='images/badge-nope.png' alt=''>
                <div class='dog-info'>
                    <h2 class='dog-name-age'>${name}, ${age}<h2>
                    <p class='dog-bio'>${bio}</p>
                </div>
            </div>
        `
    }

}

// Export the Dog class
export default Dog
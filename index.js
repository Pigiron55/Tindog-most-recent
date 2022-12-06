import dogs from './data.js'
import Dog from './Dog.js'

let dcurrentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

const liked = () => {
    currentDog.setMatchStatus(true)
    document.getElementById('badge').innerHtml = 
    `<img src="images/badge-like.png">`
    setTimeout(getNextDog, 1000)
}

const disLiked = () => {
    currentDog.setMatchStatus(false)
    document.getElementById('badge').innerHtml = 
    `<img src="images/badge-nope.png">`
    setTimeout(getNextDog, 1000)
}

function getNewProfile() {
    const nextProfileData = dogs[dogsArray.shift()]
    return nextProfileData ? new Dog(nextProfileData) : {}
    render()
}

function disliked(){
    document.body.innerHTML = `
                <div class="disliked">
                    <img class="disliked"></img>
                </div>
                `
}

document.getElementById("cross").addEventListener('click', disliked())
document.getElementById("heart").addEventListener('click', liked())

function render() {
    document.getElementById('profile').innerHTML = dog.getProfileHtml()
    
}

let dog = getNewProfile()
render()
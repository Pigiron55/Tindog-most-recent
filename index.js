import dogs from './data.js'
import Dog from './Dog.js'

let dogsArray = ["Rex", "Bella", "Teddy"]

function getNewProfile() {
    const nextProfileData = dogs[dogsArray.shift()]
    return nextProfileData ? new Dog(nextProfileData) : {}
    render()
}

function disliked(){
    document.body.innerHTML = `
                <div class="end-game">
                    <h2>Game Over</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
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
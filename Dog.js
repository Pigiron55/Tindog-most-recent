

class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    getProfileHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        
        return `
        
            <div class="profile-card" id="container">
                <img class="profile-img" src="${avatar}" />
                <div class="profile-info">
                <div class="name-age"> ${name}, ${age}</div>
                <div class="bio">${bio}</div>
                </div>
                
            </div>`
    }
}


export default Dog
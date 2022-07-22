const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const propertyRecsDisplay = document.querySelector('.properties');

export function showPropRecs(arr){
    arr.forEach((element) => {
        propertyRecsDisplay.innerHTML += `
            <div class="card">
                <img src="${element.image}">
                <h4 class="title">${element.title}</h4>
            </div>
        `
    })
}

export function showReviewTotal(value: number, reviewer: string, isLoyalty: string) {
    const goldUser = (isLoyalty === 'Gold') ? true : false;
    const iconDisplay = goldUser ? '⭐' : '';
    reviewTotalDisplay.innerHTML = `Reviews total: ${value.toString()} | Last reviewed by: ${reviewer} ${iconDisplay}`;
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}
let fetchUser = () => {
    console.log("fetching....")
    fetch("https://api.randomuser.me/?nat=US&results")
        .then(response => response.json())
        .then(userFormat => {

        userFormat.results.map(user => {

            let userName = document.getElementById('name')
            let gender = document.getElementById('gender')
            let userLocation = document.getElementById('location')
            let registeredDate = document.getElementById('date')
            let curentImg = document.getElementById('picture')


                userName.textContent = `Name: ${user.name.first}`
                gender.innerText = `Gender: ${user.gender}`
                userLocation.innerText = user.location.state
                registeredDate.innerText = `Date: ${user.registered.date}`
                curentImg.innerHTML = `<img src= '${user.picture.large}'/>`

         })

        })
        .catch(error => console.log(error, 'Logging error'))
}

        document.addEventListener('DOMContentLoaded', fetchUser)

        // THE BUTTON REALOADING DEFFIRENT USERS
        const reloadBtn = document.getElementById('btn')
        reloadBtn.addEventListener('click', fetchUser)

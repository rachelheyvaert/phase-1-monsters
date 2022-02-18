document.addEventListener('DOMContentLoaded', () => {
    fetchMonster();
    createForm();
    document.querySelector('#monster-form').addEventListener('submit', (event)=>{
        event.preventDefault();
            let name = document.querySelector('#monster-name').value
            let age = document.querySelector('#monster-age').value
            let description = document.querySelector('#monster-description').value
            monsterObj = {
                name,
                age,
                description
        }
        postNewMonster()
    }
    )
})

const createForm = () => {
    let formContainer = document.querySelector('#create-monster')
    let form = document.createElement('form')
    form.id = 'monster-form'
    let nameInput = document.createElement('input')
    let nameLabel = document.createElement('label')
    let describeInput = document.createElement('input')
    let describeLabel = document.createElement('label')
    let ageInput = document.createElement('input')
    let ageLabel = document.createElement('label')
    let h2 = document.createElement('h2')
    h2.innerHTML = 'Create Monster'
    let button = document.createElement('button')
    button.innerText = 'MAKE MONSTER!!'
    nameInput.id = 'monster-name'
    describeInput.id = 'monster-description'
    ageInput.id = 'monster-age'

    nameLabel.innerText = 'name'
    ageLabel.innerText = 'age'
    describeLabel.innerText = 'description'

    form.append(nameLabel, nameInput, describeLabel, describeInput, ageLabel, ageInput)
    formContainer.append(h2, form, button)
}
const postNewMonster = () => {
    fetch('http://localhost:3000/monsters', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ name, age, description}),
        }
        .then(resp => resp.json())
        .then(monster => monster)
    )

    {

    }

  


}
const fetchMonster = () => {
    let monsterContainer = document.getElementById('monster-container')
    fetch('http://localhost:3000/monsters/?_limit=50&_page=0')
        .then(response => response.json())
        .then(monsterData => {
            monsterData.forEach((monster) => {
                let card = document.createElement('div')
                let name = document.createElement('h2')
                name.innerText = `Name: ${monster.name}`
                let description = document.createElement('p')
                description.innerText = `Bio: ${monster.description}`
                let age = document.createElement('h4')
                age.innerText = `Age: ${monster.age}`
                card.append(name, age, description)
                monsterContainer.append(card)
            });
        })
}
    //     data = data.filter(entry)
    //
    // h1.innerHTML = monster.target.value.name
    // const h1 = document.createElement('h1')
    // //
    // const h2 = document.createElement('h2')})}

    // h2.innerHtml =
    // .then(response => function(e) {
        // console.log('fetch response', response)
        // e.preventDefault();
        // console.log(e.target.name)



// })

//add map for all elements to present target information
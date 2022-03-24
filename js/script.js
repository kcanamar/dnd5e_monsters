const API ="https://www.dnd5eapi.co/api/"

$.ajax(`${API}/monsters`)
.then((data) => {
    console.log(data)
})

$.ajax(`
${API}monsters/adult-blue-dragon
`)
.then((data) => {
    console.log(data);
})
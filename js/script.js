const API ="https://www.dnd5eapi.co/api/monsters/"
const $input = $('input')
const $button = $('button')

$button.on("click", () =>{
    let $monsterName = $input.val()
    $monsterName = $monsterName.replaceAll(" ","-").toLowerCase()
    console.log($monsterName)
    // add the input as a string formatted to ("word-word-word")
    $.ajax(`${API}/${$monsterName}`)
    .then((data) => { 
        console.log("you clicked", data)
    })

})
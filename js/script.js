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
        $('.name').text(data.name);
        const $type = $('<div class="type">')
        $type.appendTo('.facts')
        $type.text(`
            Hit Points: ${data.hit_points} \n
            Type: ${data.type} \n
            Strength: ${data.strength}
            Dexterity: ${data.dexterity}
            `)
        // $('.type').text(data.type);
    })

})
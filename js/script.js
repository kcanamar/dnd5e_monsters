const API ="https://www.dnd5eapi.co/api/monsters/"
const $input = $('input')
const $button = $('button')
let $display = $('#display')

$button.on("click", () =>{
    $display.empty()
    let $monsterName = $input.val();
    $monsterName = $monsterName.replaceAll(" ","-").toLowerCase();
    $.ajax(`${API}/${$monsterName}`)
    .then((data) => { 
        console.log("you clicked", data)
        $('.name').text(data.name);
        // attributes list build
        const $type = $('<div class="type">')
        $type.appendTo('#display')
        $type.html(`
            <h3 class="attr">Attributes</h3>
            Type: ${data.type} <br/>
            Subtype: ${data.subtype} <br/>
            Alignment: ${data.alignment} <br/>
            Hit Dice: ${data.hit_dice} <br/>
            Hit Points: ${data.hit_points} <br/>
            XP: ${data.xp} <br/>
            Challenger Rating: ${data.challenge_rating} <br/>
            Armor Class: ${data.armor_class} <br/>
            Constitution: ${data.constitution} <br/>
            Charisma: ${data.charisma} <br/>
            Dexterity: ${data.dexterity} <br/>
            Intelligence: ${data.intelligence} <br/>
            Strength: ${data.strength} <br/>
            Wisdom: ${data.wisdom} <br/>
        `)
        // skills list build
        const $skills = $('<div class="skills"></div>')
        $skills.appendTo('#display')
        $skills.html(`
            <h3 class="ski">Skills</h3>
            Actions: ${data.actions}<br/> 
            Legendary Actions: ${data.legendary_actions}<br/> 
            Senses: ${data.senes}<br/> 
            Speed: ${data.speed}<br/> 
            Special Abilities: ${data.special_abilities}<br/> 
            `)
        console.log(data.special_abilities)
        // $skills.text(`${data.special_abilities}`)
    })

})
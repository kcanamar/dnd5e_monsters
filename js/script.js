const API = "https://www.dnd5eapi.co/api/monsters"
const $button = $('button')
let $input = $('input')
let $display = $('#display')
let $skills = $('.skills')

$button.on("click", () =>{
    $display.children().empty()
    let $monsterName = $input.val();
    $monsterName = $monsterName.replaceAll(" ","-").toLowerCase();
    $.ajax(`${API}/${$monsterName}`)
    .then((data) => { 
        console.log("you clicked", data)
        $('.name').text(data.name);
        // attributes list build
        const $type = $('<div class="type">')
        $type.appendTo('.attributes')
        $type.html(`
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
        actionsMagic(data.actions, $skills)
        // weakness list build

    })
    $input.val("")
})
function actionsMagic(data, div) {
    for (let obj of data) {
        $(`<p>${obj.name} - ${obj.desc}</p>`).appendTo(div)
    }
}
function spcAbilityMagic (data, div) {
    for (let obj in data) {
        $(`<p>${obj.name} - ${obj.desc}</p>`).appendTo(div)
    }
}
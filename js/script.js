const API = "https://www.dnd5eapi.co/api/monsters"
const $button = $('button')
let $input = $('input')
let $display = $('#display')
let $skills = $('.skills')
let $weak = $('.weakness')

$.ajax(`${API}`)
.then((data) => { 
    console.log( data)
})
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
            <h2 class="attribute">Attributes</h2>
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
        arrayMagic(data.actions, $skills)
        arrayMagic(data.special_abilities, $skills)
        // objMagic(data.)
        // weakness list build
        weakMagic(data.damage_immunities, $weak)

    })
    $input.val("adult blue dragon")
})
function arrayMagic(data, div) {
    for (let obj of data) {
        $(`<h4 class="skill">${obj.name}</h4><p><a class="skill-desc">${obj.desc}</a></p>`).appendTo(div)
    }
}
function weakMagic(data, div) {
    for (let obj of data) {
        $(`<h4 class="skill">Weakness</h4><p><a class="skill-desc">${obj}</a></p>`).appendTo(div)
    }
}
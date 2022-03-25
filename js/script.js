const API = "https://www.dnd5eapi.co/api/monsters"
const $icon = $('i')
let $input = $('input')
let $display = $('#display')
let $skills = $('.skills')
let $weak = $('.weakness')

$.ajax(`${API}`)
.then((data) => { 
    console.log( data)
})
$icon.on("click", () =>{
    $display.children().empty()
    let $monsterName = $input.val();
    $monsterName = $monsterName.replaceAll(" ","-").toLowerCase();
    $.ajax(`${API}/${$monsterName}`)
    .then((data) => { 
        $('.name').text(data.name);
        const $type = $('<div class="type">')
        $type.appendTo('.attributes')
        $type.html(`
            <h2 class="attribute">Attributes</h2>
            <a class="stat">Type</a>: ${data.type} <br/>
            <a class="stat">Subtype</a>: ${data.subtype} <br/>
            <a class="stat">Alignment</a>: ${data.alignment} <br/>
            <a class="stat">Hit Dice</a>: ${data.hit_dice} <br/>
            <a class="stat">Hit Points</a>: ${data.hit_points} <br/>
            <a class="stat">XP</a>: ${data.xp} <br/>
            <a class="stat">Challenger Rating</a>: ${data.challenge_rating} <br/>
            <a class="stat">Armor Class</a>: ${data.armor_class} <br/>
            <a class="stat">Constitution</a>: ${data.constitution} <br/>
            <a class="stat">Charisma</a>: ${data.charisma} <br/>
            <a class="stat">Dexterity</a>: ${data.dexterity} <br/>
            <a class="stat">Intelligence</a>: ${data.intelligence} <br/>
            <a class="stat">Strength</a>: ${data.strength} <br/>
            <a class="stat">Wisdom</a>: ${data.wisdom} <br/>
        `)
        const $skillTitle = $('<h2 class="skills-title">Skills</h2>')
        $skillTitle.appendTo('.skills')
        arrayMagic(data.actions, $skills)
        arrayMagic(data.special_abilities, $skills)
        const $weakTitle = $('<h2 class="weak-title">Weaknesses</h2>')
        $weakTitle.appendTo('.weakness')
        weakMagic(data.damage_immunities, $weak)
    })
    $input.val("")
})
function arrayMagic(data, div) {
    for (let obj of data) {
        $(`<h4 class="skill">${obj.name}</h4><p><a class="skill-desc">${obj.desc}</a></p>`).appendTo(div)
    }
}
function weakMagic(data, div) {
    for (let obj of data) {
        $(`<p><i class="fa-solid fa-dice-d6"></i><a class="weak-item">${obj}</a></p>`).appendTo(div)
    }
}
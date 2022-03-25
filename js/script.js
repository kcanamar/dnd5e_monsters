const API = "https://www.dnd5eapi.co/api/monsters"
const $icon = $('i')
let $input = $('input')
let $display = $('#display')
let $attributes = $('<div class="attributes column"></div>')
let $skills = $('<div class="skills column"></div>')
let $weakness = $('<div class="weakness column"></div>')
$icon.on("click", () =>{
    $attributes.appendTo($display)
    $skills.appendTo($display)
    $weakness.appendTo($display)
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
            <a class="stat">Type</a>: <a class="data-text">${data.type}</a><br/>
            <a class="stat">Subtype</a>: <a class="data-text">${data.subtype}</a><br/>
            <a class="stat">Alignment</a>: <a class="data-text">${data.alignment}</a><br/>
            <a class="stat">Hit Dice</a>: <a class="data-text">${data.hit_dice}</a><br/>
            <a class="stat">Hit Points</a>: <a class="data-text">${data.hit_points}</a><br/>
            <a class="stat">XP</a>: <a class="data-text">${data.xp}</a><br/>
            <a class="stat">Challenger Rating</a>: <a class="data-text">${data.challenge_rating}</a><br/>
            <a class="stat">Armor Class</a>: <a class="data-text">${data.armor_class}</a><br/>
            <a class="stat">Constitution</a>: <a class="data-text">${data.constitution}</a><br/>
            <a class="stat">Charisma</a>: <a class="data-text">${data.charisma}</a><br/>
            <a class="stat">Dexterity</a>: <a class="data-text">${data.dexterity}</a><br/>
            <a class="stat">Intelligence</a>: <a class="data-text">${data.intelligence}</a><br/>
            <a class="stat">Strength</a>: <a class="data-text">${data.strength}</a><br/>
            <a class="stat">Wisdom</a>: <a class="data-text">${data.wisdom}</a><br/>
        `)
        const $skillTitle = $('<h2 class="skills-title">Skills</h2>')
        $skillTitle.appendTo('.skills')
        arrayMagic(data.actions, $skills)
        arrayMagic(data.special_abilities, $skills)
        const $weakTitle = $('<h2 class="weak-title">Weaknesses</h2>')
        $weakTitle.appendTo('.weakness')
        weakMagic(data.damage_immunities, $weakness)
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
        $(`<p><i class="fa-solid fa-skull"></i><a class="weak-item">${obj}</a></p>`).appendTo(div)
    }
}
const API = "https://www.dnd5eapi.co/api/monsters"
const $icon = $('i')
let $input = $('input')
let $display = $('#display')
let $attributes = $('<div class="attributes column"></div>')
let $skills = $('<div class="skills column"></div>')
let $weakness = $('<div class="weakness column"></div>')
let $monstOpt = $('.custom-select')
let $options = $('option')

optListPopulator()
// console.dir()
// on input or on change for drop down box to change api call
// $monstOpt.on("change", (event) => {
//     console.log(event.target.name)
// })
function optVal() {
    $input.val($monstOpt.val())
    getMonsterData()
    $input.val("")
}
$icon.on("click", () => {
    getMonsterData()
    $input.val("")
})
function optListPopulator () {
    let $option = $('<option name="one" class="option-placeholder" value=""></option>')
    $option.text("Chose From the Monster List")
    $option.appendTo($monstOpt)
    $.ajax(`${API}`).then((data) => {
        arrayList(data, $monstOpt)
    })
}
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
function arrayList(data, selection) {
    for (let i = 0; i < 332; i++) {
        const $option = $('<option class="option-name" value="">');
        $option.text(`${data.results[i].name}`);
        $option.attr('value', data.results[i].name);
        $option.attr('name', data.results[i].name);
        $option.appendTo(selection);
    }
}
function getMonsterData() {
    let $monsterName = $input.val();
    $monsterName = $monsterName.replaceAll(" ","-").toLowerCase();
    $.ajax(`${API}/${$monsterName}`)
    .then((data) => { 
        $attributes.appendTo($display)
        $skills.appendTo($display)
        $weakness.appendTo($display)
        $display.children().empty()
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
    }).catch((error) => {
        $display.empty()
        alert(`The name you entered was not recognized please try again`)
        $input.val("")
    })

} 
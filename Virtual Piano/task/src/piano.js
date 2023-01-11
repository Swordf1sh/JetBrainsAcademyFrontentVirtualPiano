const pianoKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU']
document.addEventListener("keydown", function (e) {
    if (pianoKeys.includes(e.code)) {
        let key = document.getElementById(e.code)
        key.style.border = "grey 2px solid"
        let audio = new Audio(`sounds/${e.key.toUpperCase()}.mp3`)
        audio.play()
    } else {
        console.log(`There is no key '${e.key}'`)
    }
})
document.addEventListener("keyup", function (e) {
    if (pianoKeys.includes(e.code)) {
        let key = document.getElementById(e.code)
        key.style.border = 'black 1px solid'
    }
})
const nobutton = document.getElementById('no-button')
const yesbutton = document.getElementById('yes-button')
const offset = 300

nobutton.addEventListener('click', moveButton)
yesbutton.addEventListener('click', celebrate)

function moveButton(){
    nobutton.style.position = 'absolute'
    var x = Math.floor(Math.random() * (window.innerWidth - offset))
    var y = Math.floor(Math.random() * (window.innerHeight - offset))
    nobutton.style.left = `${x}px`
    nobutton.style.top = `${y}px`
}

function celebrate()
{

}

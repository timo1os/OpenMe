const nobutton = document.getElementById('no-button')
const yesbutton = document.getElementById('yes-button')
const canvas = document.getElementById('confetti-canvas')
const text = document.getElementsByClassName('message')[0]
const jsConfetti = new JSConfetti();
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
    jsConfetti.addConfetti({emojis : ['🎉', '✨', '💖', '💗', '🐈', '💐']}).
    then(() => {
        text.textContent = 'I love you 💖'          
    });
}

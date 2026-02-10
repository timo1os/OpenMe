const nobutton = document.getElementById('no-button')
const yesbutton = document.getElementById('yes-button')
const canvas = document.getElementById('confetti-canvas')
const envelopeCover = document.getElementsByClassName('Envelope-Image')[0]
const offset = 300

nobutton.addEventListener('click', moveButton)
yesbutton.addEventListener('click', celebrate)
envelopeCover.addEventListener('click', openEnvelope)

const envelope = document.getElementsByClassName('Envelope')[0]
const children = envelope.children

for (const child of children) {
    child.style.opacity = '0'
}

function openEnvelope()
{
    const envelopeText = document.getElementsByClassName('Envelope-Text')[0]
    envelopeText.style.opacity = '0'
    const envelope = document.getElementsByClassName('Envelope')[0]
    const children = envelope.children
    for (const child of children) {
        child.style.transition = 'opacity 0.5s ease-in-out'
        child.style.opacity = '1'
    }
    envelope.style.height = '500px'
}

function moveButton(){
    nobutton.style.position = 'absolute'
    var x = Math.floor(Math.random() * (window.innerWidth - offset))
    var y = Math.floor(Math.random() * (window.innerHeight - offset))
    nobutton.style.left = `${x}px`
    nobutton.style.top = `${y}px`
}

function celebrate()
{
    const text = document.getElementsByClassName('message')[0]
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({emojis : ['🎉', '✨', '💖', '💘' , '💗', '🐈', '💐']}).
    then(() => {
        text.style.fontSize = '48px' 
    });
}

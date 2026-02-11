const nobutton = document.getElementById('no-button')
const yesbutton = document.getElementById('yes-button')
const canvas = document.getElementById('confetti-canvas')
const envelopeCover = document.getElementsByClassName('Envelope-Image')[0]
let noFontSize = parseInt(window.getComputedStyle(nobutton).fontSize, 10)
let yesButtonSize = parseInt(window.getComputedStyle(yesbutton).fontSize, 10)


nobutton.addEventListener('click', makeButtonSmaller)
yesbutton.addEventListener('mouseenter', () => {
    yesbutton.style.fontSize = yesButtonSize + 30 + 'px'})
yesbutton.addEventListener('mouseleave', () => {
        yesbutton.style.fontSize = yesButtonSize + 'px'})
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
    envelope.style.height = 'auto'
}

function makeButtonSmaller(){
    noFontSize -= 10
    nobutton.style.fontSize = noFontSize + 'px'
    yesButtonSize += 10
    console.log(yesButtonSize)
    yesbutton.style.fontSize = yesButtonSize + 'px'
    if(noFontSize <= 0){
        nobutton.style.opacity = '0'
    }
}

function celebrate()
{
    const text = document.getElementsByClassName('message')[0]
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({emojis : ['🎉', '✨', '💖', '💘' , '💗', '🐈', '💐']}).
    then(() => {
        text.style.fontSize = '36px' 
    });
}

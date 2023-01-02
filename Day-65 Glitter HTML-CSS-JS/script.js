const container =document.getElementById('container')
const colors = ['#FF7B54', '#1A120B','#DC0000', '#2B3467','#4B56D2', '#181D31' ]

const SQUARES = 1537

//loop for the squares

for (let i = 0; i<SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

//setting the color
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}



//removing the color
function removeColor(element) {
    element.style.background = '#000'
    element.style.boxShadow = '0 0 2px #000'



}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length )]
}
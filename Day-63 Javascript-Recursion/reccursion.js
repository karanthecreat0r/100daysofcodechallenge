// function power(base, exponent) {
//     let result  = 1

//     for(let i=1; i<= exponent; i++){
//         result *=base
//     }
//     return result
// }

// function factorial(position) {
//     let answer = 1
//     for(let num = position; num >0; num--){
//         answer *= num
//     }
//     return answer

// }

// function poer(base, exponent) {
//     if (exponent === 0) {
//         return 1
//     }
//     return base * power(base, exponent - 1)
// }


// function factorial(index) {
//     if (index === 0) {
//         return 1
//     }
//     return index * factorial(index -1)
// }

class LinkedList {
    constructor(){
        this.data = 0
        this.next = null
    }

}


function listItem(data) {
    let temp = new LinkedList()
    temp.data = data
    temp.next = null
    return temp
}

let trackingPosition = 0
let midPoint = null
function findMidPoint(head) {
    if(head === null){
        trackingPosition = trackingPosition /2
        return
    }

    trackingPosition++

    findMidPoint(head.next)
    trackingPosition --

    if (trackingPosition == 0) {
        midPoint = head
        
    }

}

function midPoint(head) {
    midPoint = null
    trackingPosition = 1
    findMidPoint(head)
    return midPoint
}

let head = listItem(16)
head.next = listItem(7)
head.next.next = listItem(3)
head.next.next.next = listItem(4)
head.next.next.next.next = listItem(9)

let midPointResult = midPointTrack(head)

console.log(midPointResult)
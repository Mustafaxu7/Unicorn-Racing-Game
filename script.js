"use strict"


const colors = "green,red,blue,yellow,pink,silver,grey,gold,black,brown, ".split(",")

let uniDivs=[]

let uniXs = []

const numUnicorns = 15

let i = 0

setup()

let j = 0

createUniXs()
    
requestAnimationFrame(moveUnicorns)



































// const finish=10
// let finishLine = document.getElementById("finish_line")
// finishLine.style.left = finish + "%"

// //Extra challenges .. Set the background colour of each unicorn .. (so they are different) .. ideally with Javascript (not CSS)
// //Add a third unicorn - three horse race
// // - What if we wanted 20 unicorns ??  []


// let winningUnicorn = ""

// setInterval(moveUnicorns,100)  //How fast the race is - smaller=faster


// function moveUnicorns(){

//     uni0.style.left= uni0x +"%"
//     uni1.style.left= uni1x +"%"
//     uni0x += Math.random()  //add 1% to the unicorns x position (Add a random amount instead)
//     uni1x += Math.random()

//     let unicorns = [uni1x, uni0x]

//     for (let i = 0; i < unicorns.length; i++) {

//         if(unicorns[i] >= finish) {

//             winningUnicorn = unicorns[i]


//             if (unicorns.includes(winningUnicorn)) {
//                 console.log(unicorns.indexOf(winningUnicorn))
//             }
//             console.log(`${winningUnicorn} is the winner`)
//         }
//     }

    
//     //Move all unicorns a random amount each
//     //If a unicorn has crossed the finish line
//         //Display winner
//         // restart race           

// }
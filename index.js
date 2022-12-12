let scoreHome = document.getElementById('score1')
let scoreAway = document.getElementById('score2')
let count = 0

function addOne() {
    count +=1 
    scoreHome.textContent = count
    console.log()

}

function addTwo() {
     count +=2 
     scoreHome.textContent = count
     console.log(count)
     
}

function addThree() {
    count +=3 
    scoreHome.textContent = count
    console.log(count)
}    


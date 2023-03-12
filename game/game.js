let pac_x = 3
let pac_y = 10

let coin_x = 2
let coin_y = 5

//HW2:
let bomb_x = 8
let bomb_y = 2

let score= 0
let health_points = 0

function action(){ // functia intercepteaza apasarea unei taste
    console.log(
        event.key
    )
    switch(event.key){ // verifica codul tastei apasate
        case "ArrowUp": pac_y--; break
        case "ArrowRight": pac_x++; break
        case "ArrowDown": pac_y++; break
        case "ArrowLeft": pac_x--; break
    }

    if(pac_x == coin_x & pac_y == coin_y){
        score += 10 // += - adauga la scor 10 unitati
    }
    renderMap() //  - functia redeseneaza harta
}



function renderMap(){
    gameMap.innerHTML = `` // pentru a sterge harta

    for(let y = 1; y<=10; y++){
        for(let x=1; x<=10; x++){

            if( x == pac_x && y == pac_y){
                gameMap.innerHTML +=  
                `<div class="pac"></div>`
            } else if (x == coin_x && y == coin_y){
                gameMap.innerHTML +=  
                `<div class="coin"></div>`
            // HW:2
            } else if(x == bomb_x && y == bomb_y){
                gameMap.innerHTML +=  
                `<div class="bomb"></div>`
            }
            
            else {
                gameMap.innerHTML +=  
                `<div></div>`
            }
            
        }
    }
    gameScore.innerHTML = `Score: ${score}`
    gameHealthPoints.innerHTML = `Health Points: ${health_points}`
}

renderMap()


// HW1: add limits (1,10) to pacman movement
// HW2: add bomb - add hp (health points) 0 ...100
//      fiecare bomba scade 20 unitati si afisarea sub score
// HW3: coin/bomb - add doua variabile coin_state si bomb_state - false/true < movement
//       coin_state, bomb_state > renderMap
let board = document.getElementById('main-board')

let player = new Player(255, 750, board)
player.insertPlayer()

window.addEventListener('keydown', (e) => {
  switch(e.key){
    case 'a':
      console.log(e.key)
      player.direction = -1
      break
    case 'd':
      player.direction = 1
      break
  }
})

window.addEventListener('keyup', (e) => {
  if(e.key === 'a' || e.key === 'd'){
    player.direction = 0
  }
})

let timerId = setInterval(playerMovement, 24)

function playerMovement(){
  player.move()
}
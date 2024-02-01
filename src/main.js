let board = document.getElementById('main-board')

let player = new Player(255, 750, board)
player.insertPlayer()

let enemies = []

function createEnemy(){
  let randomX = Math.floor(Math.random() * 450)
  let enemy = new Enemy(randomX, -50, board, player, enemies)
  enemy.insertEnemy()
  enemies.push(enemy)
  enemy.timerId = setInterval(enemy.move, 100)
}

let enemyGenerator = setInterval(createEnemy, 2000)



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
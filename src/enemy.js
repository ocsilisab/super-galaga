class Enemy{
  constructor(x, y, parent, player, enemies){
    this.x = x
    this.y = y
    this.player = player
    this.enemies = enemies
    this.width = 50
    this.height = 50
    this.speed = 5
    this.parent = parent
    this.sprite
    this.timerId

    this.move = this.move.bind(this)
  }

  insertEnemy(){
    let newEnemy = document.createElement('div')
    newEnemy.classList.add('enemy')
    newEnemy.style.top = this.y + 'px'
    newEnemy.style.left = this.x + 'px'
    this.parent.appendChild(newEnemy)
    this.sprite = newEnemy
    console.log(this.sprite)
  }
  move(){
    this.y += this.speed
    this.sprite.style.top = this.y + 'px'
    this.checkCollision()
    if(this.y >= 850){
      this.removeEnemy()
    }
  }
  removeEnemy(){
    this.parent.removeChild(this.sprite)
    clearInterval(this.timerId)
    this.enemies = this.enemies.filter(enemy => {
      return enemy !== this.sprite
    })
  }
  checkCollision(){
    if( this.x < (this.player.x + this.player.width) &&
        (this.x + this.width) > this.player.x &&  
        this.y < (this.player.y + this.player.height) &&
        (this.y + this.height) > this.player.y){
          alert('GAME OVER')
        }
  }
}
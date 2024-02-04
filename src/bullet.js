class Bullet{
  constructor(x, y, parent, enemies, bullets){
    this.x = x
    this.y = y
    this.parent = parent
    this.enemies = enemies
    this.bullets = bullets
    this.speed = 10
    this.width = 10
    this.height = 10
    this.sprite
    this.timerId
    //this.move = this.move.bind(this)
  }

  insertBullet(){
    let newBullet = document.createElement('div')
    newBullet.classList.add('bullet')
    newBullet.style.top = this.y + 'px'
    newBullet.style.left = this.x + 'px'
    this.parent.appendChild(newBullet)
    this.sprite = newBullet
  }
  move(){
    this.y -= this.speed
    this.sprite.style.top = this.y + 'px'
    this.checkCollision()
    if(this.y <= -10){
      this.removeBullet()
    }
  }
  removeBullet(){
    this.parent.removeChild(this.sprite)
    clearInterval(this.timerId)
    this.bullets = this.bullets.filter(bullet => {
      return bullet !== this.sprite
    })
  }
  checkCollision(){
    this.enemies.forEach((enemy, i) => {
      if( this.x < (enemy.x + enemy.width) &&
          (this.x + this.width) > enemy.x &&
          this.y < (enemy.y + enemy.height) &&
          this.y + this.height > enemy.y
          ){
            enemy.removeEnemy()
            this.removeBullet()
            this.enemies.splice(i, 1)
          }
    })
  }
}
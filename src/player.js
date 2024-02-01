class Player {
  constructor(x, y, parent){
    this.x = x
    this.y = y
    this.parent = parent
    this.direction = 0
    this.width = 50
    this.height = 50
    this.speed = 5
    this.sprite
  }
  insertPlayer(){
    let newPlayer = document.createElement('div')
    newPlayer.setAttribute('id', 'player')
    newPlayer.style.top = this.y + 'px'
    newPlayer.style.left = this.x + 'px'
    this.parent.appendChild(newPlayer)
    this.sprite = newPlayer
  }
  move(){
    let nextX = this.x + this.speed * this.direction
    if(nextX >= 0 && nextX <= 450){
      this.x += this.speed * this.direction
      this.sprite.style.left = this.x + 'px'
    }
  }
}
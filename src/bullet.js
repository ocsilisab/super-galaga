class Bullet{
  constructor(x, y, parent, enemies, bullets){
    this.x = x
    this.y = y
    this.parent = parent
    this.enemies = enemies
    this.bullets = bullets
    this.width = 10
    this.height = 10
    this.sprite
  }

  insertBullet(){
    let newBullet = document.createElement('div')
    newBullet.classList.add('bullet')
    newBullet.style.top = this.y + 'px'
    newBullet.style.left = this.x + 'px'
    this.parent.appendChild(newBullet)
    this.sprite = newBullet
  }
}
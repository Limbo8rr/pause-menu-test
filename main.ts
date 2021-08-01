controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    // `
    if (!(gamePaused)) {
        sprites.setDataNumber(enemySprite, "prePauseVelocityX", enemySprite.vx)
        sprites.setDataNumber(enemySprite, "vy", enemySprite.vy)
        enemySprite.setVelocity(0, 0)
        blockMenu.showMenu(["Black", "Yellow", "Close Menu"], MenuStyle.List, MenuLocation.TopRight)
    } else {
        enemySprite.setVelocity(sprites.readDataNumber(enemySprite, "prePauseVelocityX"), sprites.readDataNumber(enemySprite, "vy"))
        blockMenu.closeMenu()
    }
    gamePaused = !(gamePaused)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Black") {
        scene.setBackgroundColor(15)
    } else if (option == "Yellow") {
        scene.setBackgroundColor(5)
    } else {
        enemySprite.setVelocity(sprites.readDataNumber(enemySprite, "prePauseVelocityX"), sprites.readDataNumber(enemySprite, "vy"))
        blockMenu.closeMenu()
        gamePaused = !(gamePaused)
    }
})
let gamePaused = false
let enemySprite: Sprite = null
enemySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy)
enemySprite.setStayInScreen(true)
enemySprite.setBounceOnWall(true)
enemySprite.setVelocity(randint(0, 75), randint(0, 75))
gamePaused = false
blockMenu.setColors(15, 15)

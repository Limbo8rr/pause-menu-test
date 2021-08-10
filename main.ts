controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    // `
    if (!(gamePaused)) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            sprites.setDataNumber(value, "prePauseVelocityX", value.vx)
            sprites.setDataNumber(value, "vy", value.vy)
            value.setVelocity(0, 0)
        }
        blockMenu.setControlsEnabled(true)
        blockMenu.showMenu(["Black", "Yellow", "Close Menu"], MenuStyle.List, MenuLocation.TopRight)
    } else {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.setVelocity(sprites.readDataNumber(value, "prePauseVelocityX"), sprites.readDataNumber(value, "vy"))
        }
        blockMenu.closeMenu()
        blockMenu.setControlsEnabled(false)
    }
    gamePaused = !(gamePaused)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Black") {
        scene.setBackgroundColor(15)
    } else if (option == "Yellow") {
        scene.setBackgroundColor(5)
    } else if (option == "Close Menu") {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.setVelocity(sprites.readDataNumber(value, "prePauseVelocityX"), sprites.readDataNumber(value, "vy"))
        }
        blockMenu.closeMenu()
        blockMenu.setControlsEnabled(false)
        gamePaused = !(gamePaused)
    }
    blockMenu.setSelectedOption("")
})
let gamePaused = false
let enemySprite: Sprite = null
for (let index = 0; index < 4; index++) {
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
}
gamePaused = false
blockMenu.setColors(15, 5)
blockMenu.setControlsEnabled(false)

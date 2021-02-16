namespace SpriteKind {
    export const left_paddle = SpriteKind.create()
    export const right_paddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.left_paddle, function (sprite, otherSprite) {
    ball.vx = ball.vx * -1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.right_paddle, function (sprite, otherSprite) {
    ball.vx = ball.vx * -1
    info.player2.changeScoreBy(1)
})
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.right_paddle)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.left_paddle)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . f 2 1 1 2 2 2 2 f . . . . 
        . . . f 2 1 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    right_paddle.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
let left_paddle: Sprite = null
let right_paddle: Sprite = null
let ball: Sprite = null
create_ball()
create_right_paddle()
create_left_paddle()

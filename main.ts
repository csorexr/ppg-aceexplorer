namespace SpriteKind {
    export const mobileEnemy = SpriteKind.create()
}
function inCamera (spr: Sprite) {
    if (Math.abs(scene.cameraProperty(CameraProperty.X) - spr.x) < 80) {
        return true
    } else {
        return false
    }
}
function spawnDirectBogey (speed: number, angle: number, initx: number, inity: number) {
    bogey = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.mobileEnemy)
    bogey.setPosition(initx, inity)
    bogey.setVelocity(speed, 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
}
function adjustTurretDirection () {
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of sprite_list) {
        if (inCamera(value)) {
            adjustSingleTurretDirection(value)
            turretShoot(value)
        }
    }
}
function turretShoot (spr: Sprite) {
    if (Math.percentChance(2)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c b a c . . . . . . 
            . . . . c c b c f a c . . . . . 
            . . . . a f b b b a c . . . . . 
            . . . . a f f b a f c c . . . . 
            . . . . c b b a f f c . . . . . 
            . . . . . b b a f a . . . . . . 
            . . . . . . c b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, spr, plane.x - spr.x, plane.y - spr.y)
    }
}
function adjustSingleTurretDirection (spr: Sprite) {
    if (plane.x < spr.x) {
        if (spr.x - plane.x > spr.y - plane.y && sprites.readDataNumber(spr, "facing") != 0) {
            sprites.setDataNumber(spr, "facing", 0)
            spr.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                1 1 1 . . 1 1 1 1 1 . . . . . . 
                1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                `)
        } else if (spr.x - plane.x < spr.y - plane.y && sprites.readDataNumber(spr, "facing") != 1) {
            sprites.setDataNumber(spr, "facing", 1)
            spr.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 1 1 . . . . . . . . . . . . 
                . . 1 1 1 . . . . . . . . . . . 
                . . . 1 1 1 . . . . . . . . . . 
                . . . . 1 1 1 1 1 1 . . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                `)
        }
    } else {
        if (plane.x - spr.x > spr.y - plane.y && sprites.readDataNumber(spr, "facing") != 2) {
            sprites.setDataNumber(spr, "facing", 2)
            spr.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 . . . 1 1 1 
                . . . . 1 1 1 1 1 1 1 1 1 1 1 1 
                . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                `)
        } else if (plane.x - spr.x < spr.y - plane.y && sprites.readDataNumber(spr, "facing") != 3) {
            sprites.setDataNumber(spr, "facing", 3)
            spr.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 1 1 . . 
                . . . . . . . . . . . 1 1 1 . . 
                . . . . . . . . . 1 1 1 1 . . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                `)
        }
    }
}
function triggerEngine () {
    if (scene.cameraProperty(CameraProperty.X) == 100 || scene.cameraProperty(CameraProperty.X) == 110) {
        spawnDirectBogey(-50, 1, scene.cameraProperty(CameraProperty.X) + 80, randint(0, 120))
    }
}
let projectile: Sprite = null
let sprite_list: Sprite[] = []
let bogey: Sprite = null
let mySprite2: Sprite = null
let plane: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000002000000000000000000040500000000000000040500000000000000000203060500000000000203070000000000000000040606070000000000040607000000000101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . 2 2 . . . . 
    . . . . . 2 2 2 . . . . . . 2 2 . . . . 
    . . . . 2 2 2 2 . . . . . 2 2 2 . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.hazardHole,myTiles.tile1,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundEast], TileScale.Sixteen))
plane = sprites.create(img`
    .......ff...............
    ....ffff2ff.............
    ..ffeeeef2ff............
    .ffeeeeef22ff...........
    .feeeeffeeeef...........
    .fffffee2222ef..........
    fffe222ffffe2f..........
    ffffffffeeefff..........
    fefe44ebf44eef..........
    .fee4d4bfddef...........
    ..feee4dddee.c..........
    ...f2222eeddeccccccc....
    ...f444e44ddecddddd.....
    ...fffffeeee.ccccc......
    ..ffffffff...c..........
    ..fff..ff...............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
plane.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(plane)
for (let value2 of tiles.getTilesByType(myTiles.tile1)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 . . 1 1 1 1 1 . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, value2)
    sprites.setDataNumber(mySprite2, "facing", 0)
    tiles.setTileAt(value2, myTiles.transparency16)
}
game.onUpdateInterval(100, function () {
    if (scene.cameraProperty(CameraProperty.X) < 240) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 1, scene.cameraProperty(CameraProperty.Y))
        plane.x += 1
    }
    adjustTurretDirection()
    triggerEngine()
})

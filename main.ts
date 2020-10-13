function adjustTurretDirection () {
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of sprite_list) {
        if (plane.x < value.x) {
            if (value.x - plane.x > value.y - plane.y && sprites.readDataNumber(value, "facing") != 0) {
                sprites.setDataNumber(value, "facing", 0)
                value.setImage(img`
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
            } else if (value.x - plane.x < value.y - plane.y && sprites.readDataNumber(value, "facing") != 1) {
                sprites.setDataNumber(value, "facing", 1)
                value.setImage(img`
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
            if (plane.x - value.x > value.y - plane.y && sprites.readDataNumber(value, "facing") != 2) {
                sprites.setDataNumber(value, "facing", 2)
                value.setImage(img`
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
            } else if (plane.x - value.x < value.y - plane.y && sprites.readDataNumber(value, "facing") != 3) {
                sprites.setDataNumber(value, "facing", 3)
                value.setImage(img`
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
}
function checkFacing () {
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of sprite_list) {
        if (plane.x > value.x && sprites.readDataBoolean(value, "facingLeft")) {
            value.image.flipX()
            sprites.setDataBoolean(value, "facingLeft", false)
        } else if (plane.x < value.x && !(sprites.readDataBoolean(value, "facingLeft"))) {
            value.image.flipX()
            sprites.setDataBoolean(value, "facingLeft", true)
        }
    }
}
let sprite_list: Sprite[] = []
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
})

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
for (let value of tiles.getTilesByType(myTiles.tile1)) {
    mySprite2 = sprites.create(img`
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
    tiles.placeOnTile(mySprite2, value)
    sprites.setDataBoolean(mySprite2, "facingLeft", true)
    tiles.setTileAt(value, myTiles.transparency16)
}
game.onUpdateInterval(100, function () {
    if (scene.cameraProperty(CameraProperty.X) < 240) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 1, scene.cameraProperty(CameraProperty.Y))
        plane.x += 1
    }
    checkFacing()
})

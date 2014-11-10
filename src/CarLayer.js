var CarLayer = cc.Layer.extend({
    carSprite : null,
    leftAction : null,
    rightAction : null,
    centerAction : null,
    ctor : function () {
        this._super();

        this.createCar();

        this.createActions();

    },
    createCar : function () {
        var sprite = this.carSprite = new cc.Sprite(res.Car_png),
            size = cc.winSize;
        sprite.attr({
            x : size.width / 2,
            y : size.height / 2
        });
        this.addChild(sprite);
    },
    createActions : function () {
        var size = cc.winSize;
        this.leftAction = new cc.moveTo(0.4, size.width / 4, size.height / 2);
        this.rightAction = new cc.moveTo(0.4, size.width / 4 * 3, size.height / 2);
        this.centerAction = new cc.moveTo(0.4, size.width / 2, size.height / 2);
    },
    move : function (action) {
        cc.log(action);
        this.carSprite.runAction(action);
    },
    moveLeft : function () {
        this.move(this.leftAction);
    },
    moveRight : function () {
        this.move(this.rightAction);
    },
    moveCenter : function () {
        this.move(this.centerAction);
    }
});
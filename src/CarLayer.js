var CarLayer = cc.Layer.extend({
    ctor : function () {
        this._super();

        this.createCar();
    },
    createCar : function () {
        var sprite = new cc.Sprite(res.Car_png),
            size = cc.winSize;
        sprite.attr({
            x : size.width / 2,
            y : size.height / 2
        });
        this.addChild(sprite);
    }
});
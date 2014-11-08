var ControlLayer = cc.Layer.extend({
    speed : 10,
    ctor : function () {
        this._super();


    },
    setSpeed : function (speed) {
        this.speed = speed;
    },
    getSpeed : function () {
        return this.speed;
    }
});
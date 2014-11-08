var PlayScene = cc.Scene.extend({
    onEnter : function () {
        this._super();

        this.addChild(new RoadLayer(), 0, 0);

        //this.addChild(new CarLayer(), 0, 1);

        this.addChild(new ControlLayer(), 0, 2);
    }
});
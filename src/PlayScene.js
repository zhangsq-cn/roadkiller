var PlayScene = cc.Scene.extend({
    onEnter : function () {
        this._super();

        //var roadLayer = window.roadLayer = new RoadLayer();
        //console.log(window);
        //roadLayer = new RoadLayer();
        this.addChild(new RoadLayer(), 0, 0);
        //this.addChild(roadLayer);

        this.addChild(new CarLayer(), 0, 1);

        //this.addChild(new ControlLayer(), 0, 2);

        this.addChild(new StartLayer(), 0, 2);
    }
});
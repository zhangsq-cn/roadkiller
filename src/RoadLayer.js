var RoadLayer = cc.Layer.extend({
    roads : [],
    roadHeight : 0,
    roadIdx : 0,
    ctor : function () {
        this._super();

        this.createRoads();

        //this.start();
    },
    createRoads : function () {
        var i = 0;
        while (this.createRoad(i++)) {}
    },

    createRoad : function (idx) {
        var road = new cc.Sprite(res.PlayBG_png),
            bounds,
            height,
            size = cc.winSize;

        if (idx === 0) {
            bounds = road.getBoundingBox();
            this.roadHeight = bounds.height;
        }
        height = this.roadHeight;

        road.attr({
            x : 0,
            y : idx * height,
            anchorX : 0,
            anchorY : 0
        });
        this.roads.push(road);
        this.addChild(road);
        return road.y < size.height;
    },

    updateRoads : function () {
        this.roads.forEach(function (road, idx) {
            road.attr({
                y : road.y -= 30
            });
            if (road.y <= -this.roadHeight) {
                road.attr({
                    y : (this.roads.length - 1) * this.roadHeight
                });
            }
        }.bind(this));
    },

    update : function () {
        this.updateRoads();
    },

    start : function () {
        this.scheduleUpdate();
    },

    stop : function () {
        this.unscheduleUpdate();
    }
});

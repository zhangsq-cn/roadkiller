var RoadLayer = cc.Layer.extend({
    road00 : null,
    road01 : null,
    roads : [],
    roadHeight : 0,
    roadIdx : 0,
    ctor : function () {
        this._super();

        this.createRoads();



        //cc.log(this.road00.getPositionY());

        //this.scheduleUpdate();
    },
    createRoads : function () {
        this.createRoad(0);
        this.createRoad(1);
    },

    createRoad : function (idx) {
        var road = new cc.TMXTiledMap(res.road_tmx);
        if (idx === 0) {
            cc.log(road.getBoundingBox());
            //this.roadHeight = road.getContentSize().height;
            this.roadHeight = road.getBoundingBox().height;
        }
        //road.setPositionY(idx * this.roadHeight);
        cc.log(idx * this.roadHeight);
        road.attr({
            y : idx * (this.roadHeight) + 10
        });
        this.roads.push(road);
        this.addChild(road);
    },

    updateRoads : function () {
        var y;
        this.roads.forEach(function (road, idx) {
            y = road.getPositionY() - 5;
            if (y <= -this.roadHeight) {
                y = this.roadHeight;
            }
            road.setPositionY(y);
            y = road.y - 4;
            if (y <= -this.roadHeight) {
                y = this.roadHeight;//cc.winSize.height;//
            }
            road.attr({
                y : y
            });
        }.bind(this));
    },

    update : function () {
        this.updateRoads();
    }
});

var StartLayer = cc.Layer.extend({
    countdownTxt : ['3', '2', '1', 'GO'],
    countdownIdx : 0,
    countdownActions : [],
    ctor : function () {
        this._super();

        this.init();

        //this.createActions();

        this.schedule(this.countdown, 0.5, 4, 0);
    },
    init : function () {
        this._super();

        var size = cc.winSize;

        this.label = new cc.LabelTTF('准备', 'Helvetica', 200);
        this.label.setColor(cc.color(255, 255, 255));
        this.label.setPosition(size.width / 2, size.height / 2);

        this.addChild(this.label);

        this.createActions();
    },
    createActions : function () {
        this.countdownActions.push(new cc.ScaleTo(0.5, 1));
        this.countdownActions.push(new cc.FadeTo(0.4, 255));
    },
    countdown : function () {
        var txt = this.countdownTxt[this.countdownIdx++];
        this.label.setScale(100);
        this.label.setOpacity(0);
        if (txt) {
            this.label.setString(txt);


            this.countdownActions.forEach(function (action) {
                this.label.runAction(action);
            }.bind(this));
        } else {
            this.unschedule();
            cc.log('Start');
            cc.log(this.getParent().getChildByTag(1));
            this.parent.getChildByTag(1).start();
        }
    }
});
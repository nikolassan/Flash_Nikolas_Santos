(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 410,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Símbolo10 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("PAPÁ", "11px 'Oswald'", "#003300");
	this.text.lineHeight = 13;
	this.text.lineWidth = 24;
	this.text.setTransform(-13.9,-10.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.9,-10.1,27.9,20.3);


(lib.Símbolo9 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("DIA", "11px 'Oswald'", "#00FF00");
	this.text.lineHeight = 13;
	this.text.lineWidth = 15;
	this.text.setTransform(-13.2,-14.1,1.388,1.388);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-14.1,26.4,28.2);


(lib.Símbolo8 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("FELIZ", "11px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 13;
	this.text.lineWidth = 23;
	this.text.setTransform(-18.4,-13.7,1.353,1.353);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-13.7,36.8,27.5);


(lib.P3 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("PAPÁ", "11px 'Oswald'", "#FFFF00");
	this.text.lineHeight = 13;
	this.text.lineWidth = 24;
	this.text.setTransform(-13.9,-10.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.9,-10.1,27.9,20.3);


(lib.P2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("PAPÁ", "11px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 13;
	this.text.lineWidth = 24;
	this.text.setTransform(-13.9,-10.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.9,-10.1,27.9,20.3);


(lib.Interpolación6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,165.6).s().p("AjcP2Qj7lMjhihQh+iGiLiiQkWlDhBiMQgXgsgXhIQguiPgDiGQgKmvGpi5IBvgfQCKgcCCAPQGgAwC9HNQAJgoAYg6QAxh1BLhaQDwkgGbBQIBsAXQCAAmBkBKQFADvhQIDQgSBcg/CEQh9EGjiDJQiEB0iMCAQinCZhSBTQg3A4gRAZQhIBMhTBhQimDBg1BqQhQiGh9img");
	this.shape.setTransform(0,0,0.182,0.177);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,7.8).s().p("AgYAXQAQgXA2g4QhWBxgEAAQgDAAAXgig");
	this.shape_1.setTransform(7,14.5,0.182,0.177);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-23.2,51,46.6);


(lib.Símbolo6 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Interpolación6("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-23.2,51,46.6);


// stage content:
(lib.anima2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 8
	this.instance = new lib.Símbolo10();
	this.instance.setTransform(265.6,263.2);
	this.instance._off = true;

	this.instance_1 = new lib.P2();
	this.instance_1.setTransform(275.4,263.2,7.176,7.149);

	this.instance_2 = new lib.P3();
	this.instance_2.setTransform(275.4,263.2,7.176,7.148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},79).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},9).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:7.18,scaleY:7.18,rotation:360,x:275.4},20).to({_off:true},11).wait(30));

	// Capa 7
	this.instance_3 = new lib.Símbolo9();
	this.instance_3.setTransform(375.2,97.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).to({scaleX:5.55,scaleY:5.55,rotation:-360,y:107},19).wait(61));

	// Capa 5
	this.instance_4 = new lib.Símbolo8();
	this.instance_4.setTransform(158.3,95.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({scaleX:4.43,scaleY:4.43,rotation:360,y:104.8},20).wait(81));

	// Capa 6
	this.instance_5 = new lib.Símbolo6();
	this.instance_5.setTransform(268.3,198.6,1.113,1.113);
	this.instance_5.alpha = 0.398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({scaleX:8.66,scaleY:8.66,y:208.3,alpha:1},19).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
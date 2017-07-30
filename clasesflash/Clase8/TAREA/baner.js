(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1350,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Símbolo2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("CANVAS", "23px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 23;
	this.text.lineWidth = 100;
	this.text.setTransform(-52,-50.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-50.9,104,101.8);


(lib.Símbolo1 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("ANIMACIONES", "11px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 11;
	this.text.lineWidth = 65;
	this.text.setTransform(-66.6,-347.7,1.922,2.017);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.6,-347.7,133.3,695.4);


(lib.Interpolación1 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("ANIMACIONES", "11px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 11;
	this.text.lineWidth = 65;
	this.text.setTransform(-66.6,-347.7,1.922,2.017);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.6,-347.7,133.3,695.4);


// stage content:
(lib.baner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(1418,134);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:682.8},19).wait(41));

	// T
	this.instance_1 = new lib.Interpolación1("synched",0);
	this.instance_1.setTransform(-193,380.6);

	this.instance_2 = new lib.Símbolo1();
	this.instance_2.setTransform(678.1,380.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:678.1,mode:"independent"},19).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},19).wait(20).to({x:1427.8},20).wait(1));

	// B1
	this.text = new cjs.Text("Santos Huertas Nicolas", "11px 'Oswald'", "#FFFFFF");
	this.text.lineHeight = 11;
	this.text.lineWidth = 100;
	this.text.setTransform(5.5,92,1.407,1.411);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003333").s().p("Eg3sAJoIAAzPMBvYAAAIAATPg");
	this.shape.setTransform(675,60.8,1.896,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(415.4,199.2,1729.7,729.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
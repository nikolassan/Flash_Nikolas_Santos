(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Símbolo1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHgAAQAADHiNCMQiMCNjHAAQjGAAiMiNQiNiMAAjHQAAjGCNiMQCMiNDGAAQDHAACMCNQCNCMAADGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AlSFTQiMiNAAjGQAAjFCMiNQCMiMDGgBQDHABCMCMQCNCNAADFQAADGiNCNQiMCMjHABQjGgBiMiMg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49,-49,98,98);


// stage content:
(lib.ejemplo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(74,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:474,y:333},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300.5,228.5,97,97);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
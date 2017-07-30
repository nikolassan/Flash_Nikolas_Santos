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



(lib.Símbolo3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHIAAIlTB4IgKFoIjZkeIlZBmIDMkoIjMknIFZBmIDZkeIAKFog");
	this.shape.setTransform(0,0,0.908,0.908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,54.5).s().p("AhuDCIlZBmIDMkoIjMknIFZBnIDZkeIAKFoIFTB2IlTB4IgKFng");
	this.shape_1.setTransform(0,0,0.908,0.908);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.4,-44.5,84.9,89.2);


(lib.Interpolación3 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("NIKOLAS", "11px 'Oswald'", "#FF0000");
	this.text.lineHeight = 13;
	this.text.lineWidth = 39;
	this.text.setTransform(-116.6,-55.1,5.428,5.428);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.5,-55.1,233.1,110.2);


(lib.Interpolación2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("NIKOLAS", "11px 'Oswald'", "#FF0000");
	this.text.lineHeight = 13;
	this.text.lineWidth = 39;
	this.text.setTransform(-116.6,-55.1,5.428,5.428);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.5,-55.1,233.1,110.2);


(lib.Interpolación1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHIAAIlTB4IgKFoIjZkeIlZBmIDMkoIjMknIFZBmIDZkeIAKFog");
	this.shape.setTransform(0,0,0.908,0.908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,54.5).s().p("AhuDCIlZBmIDMkoIjMknIFZBnIDZkeIAKFoIFTB2IlTB4IgKFng");
	this.shape_1.setTransform(0,0,0.908,0.908);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.4,-44.5,84.9,89.2);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación1("synched",0);

	this.instance_1 = new lib.Símbolo3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360,mode:"independent"},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-44.5,84.9,89.2);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AulnzIdLAAIAAPnI9LAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AulH0IAAvnIdLAAIAAPng");

	this.instance = new lib.Símbolo2();
	this.instance.setTransform(-0.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339933").s().p("AulH0IAAvnIdLAAIAAPng");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AulH0IAAvnIdLAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-51,189,102);


// stage content:



(lib.EJEMPLO2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.btn1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(20);
		}
	}
	this.frame_34 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(15));

	// BOTON
	this.btn1 = new lib.Símbolo1();
	this.btn1.setTransform(113.5,97);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},20).wait(29));

	// TEXTO
	this.instance = new lib.Interpolación2("synched",0);
	this.instance.setTransform(285.6,266.5);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolación3("synched",0);
	this.instance_1.setTransform(285.6,266.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance_1}]},15).to({state:[]},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294,246,189,102);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
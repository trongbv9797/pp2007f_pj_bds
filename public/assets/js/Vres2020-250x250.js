(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.flash0ai = function() {
	this.initialize(img.flash0ai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,27);


(lib.flash0ai_1 = function() {
	this.initialize(img.flash0ai_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,33);


(lib.flash0aiAssets = function() {
	this.initialize(img.flash0aiAssets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,261);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0aiAssets();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,346,261), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,24,27), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,189,33), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,250,250), null);


(lib.replay_mcanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAQgKAMIgDAEIgUgiIAUAAQgBgNgKgJQgKgKgOAAQgNAAgLAKQgKAKAAAOQAAAOAKALQALAKANAAQAGAAAAAGQAAAHgGAAQgTAAgOgOg");
	this.shape.setTransform(7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.369)").s().p("AgwAyQgVgVAAgdQAAgcAVgUQAUgVAcAAQAdAAAVAVQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgUgUg");
	this.shape_1.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.replay_mcanimation, new cjs.Rectangle(0,0,14,14), null);


(lib.click_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.008)").s().p("AwZXcMAAAgu3MAgzAAAMAAAAu3g");
	this.shape.setTransform(105,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.click_mc, new cjs.Rectangle(0,0,210,300), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(167.6,139.6,0.9,0.9,0,0,0,173.2,130.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(11.7,22,311.4,234.9), null);


(lib.replay_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(1));

	// Layer 3
	this.instance = new lib.replay_mcanimation();
	this.instance.parent = this;
	this.instance.setTransform(7,7,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},9).to({rotation:180},9).to({rotation:270},9).to({rotation:360},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


// stage content:
(lib.Vres2020250x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.click_mc.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			var query=window.location.search.substring(1);
			var link=query.replace("link=","");
			window.open(link, "_blank");
		}
		
		var bodyStyle = document.body.style;
			bodyStyle.margin = 0;
			bodyStyle.padding = 0;
	}
	this.frame_127 = function() {
		this.stop();
		//this.ani1.stop();
		//this.ani2.stop();
		//this.ani3.stop();
		
		this.replay_mc.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
			//this.ani1.play();
			//this.ani2.play();
			//this.ani3.play();
		}
		
		this.replay_mc.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		function fl_MouseOverHandler()
		{
			this.replay_mc.play();
		}
		
		this.replay_mc.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		function fl_MouseOutHandler()
		{
			this.replay_mc.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(127).call(this.frame_127).wait(1));

	// replay
	this.replay_mc = new lib.replay_mc();
	this.replay_mc.parent = this;
	this.replay_mc.setTransform(237,236.7,1,1,0,0,0,7,7);
	this.replay_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay_mc).wait(127).to({_off:false},0).wait(1));

	// click
	this.click_mc = new lib.click_mc();
	this.click_mc.parent = this;
	this.click_mc.setTransform(120,149.8,1.143,1,0,0,0,105,149.8);
	new cjs.ButtonHelper(this.click_mc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_mc).wait(128));

	// Layer 4
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(205.5,232.6,0.65,0.65,0,0,0,12.1,13.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:189.5,y:217.4,alpha:1},11,cjs.Ease.get(1)).to({x:191.1,y:219},10).wait(39).to({regX:12.2,regY:13.7,scaleX:0.55,scaleY:0.55},6,cjs.Ease.get(0.93)).to({regY:13.6,scaleX:0.8,scaleY:0.8,alpha:0},5).wait(57));

	// Layer 3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.1,204.3,0.7,0.7,0,0,0,94.7,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({regY:16.7,scaleX:0.65,scaleY:0.65,x:125},5).to({regY:16.6,scaleX:0.7,scaleY:0.7,x:125.1},6).wait(7).to({regX:94.6,scaleX:0.65,scaleY:0.65,x:125},5).to({regX:94.7,scaleX:0.7,scaleY:0.7,x:125.1},6).wait(5).to({regX:94.6,scaleX:0.65,scaleY:0.65,x:125},5).to({regX:94.7,scaleX:0.7,scaleY:0.7,x:125.1},6).wait(6).to({regX:94.6,scaleX:0.65,scaleY:0.65,x:125},5).to({regX:94.7,scaleX:0.7,scaleY:0.7,x:125.1},6).wait(3));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.8,97.8,0.65,0.65,0,0,0,164.2,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128));

	// Layer 1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125,125,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,125,250,300);
// library properties:
lib.properties = {
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.jpg?1576571609308", id:"BG"},
		{src:"images/flash0ai.png?1576571609308", id:"flash0ai"},
		{src:"images/flash0ai_1.png?1576571609308", id:"flash0ai_1"},
		{src:"images/flash0aiAssets.png?1576571609308", id:"flash0aiAssets"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
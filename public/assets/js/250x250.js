(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg250x250 = function() {
	this.initialize(img.bg250x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.Line = function() {
	this.initialize(img.Line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,164);


(lib.Line2 = function() {
	this.initialize(img.Line2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,164);


(lib.logopngcopy = function() {
	this.initialize(img.logopngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,61);


(lib.model = function() {
	this.initialize(img.model);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,347);


(lib.r1 = function() {
	this.initialize(img.r1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,17);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.tk = function() {
	this.initialize(img.tk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.tk2 = function() {
	this.initialize(img.tk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.v = function() {
	this.initialize(img.v);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);// helper functions:

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


(lib.vong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.v();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vong, new cjs.Rectangle(0,0,1600,900), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logopngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5846,0.5846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,69,35.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tk2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,1600,900), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1600,900), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.model();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,347,347), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFyCBQgFgBgEgEQgEgFgCgFQgBgFABgGQACgFAEgEQAEgEAFgCQAGgBAFABQAFACAEAEQAFAEABAFQABAGgBAFQgBAFgFAFQgEAEgFABIgFAAIgGAAgAkjCBQgGgCgEgEQgEgEgBgFQgCgFACgGQABgFAEgEQAEgEAGgCQAFgBAFABQAFACAFAEQAEAEABAFQACAGgCAFQgBAFgEAEQgFAEgFACIgFAAIgFAAgArmCBQgFgBgEgEQgEgFgBgFQgCgFACgGQABgFAEgEQAEgEAFgCQAGgBAFABQAFACAFAEQAEAEABAFQABAGgBAFQgBAFgEAFQgFAEgFABIgFAAIgGAAgAP4AxQgIgKgEgLQgEgNAAgOQAAgNAEgMQAEgMAIgKQAIgKAKgEQALgFAMAAQAMAAAKAFQAKAFAIAKIAAgNQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgBIAdAAIADABIABAEIAAB4IgBADIgDABIgdAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgNQgIAKgKAFQgKAFgMAAQgZAAgQgUgAQhgbQgGADgEAEQgEAFgCAFQgDAGAAAFQAAAHADAGQACAFAEAFQAEAEAGACQAFACAGAAQAGAAAGgCQAFgCAEgEQAFgFACgFQACgGAAgHQAAgFgCgGQgCgFgFgFQgEgEgFgDQgGgCgGAAQgGAAgFACgAFeBAQgMgFgKgKQgKgKgFgMQgFgMAAgOQAAgNAFgMQAFgMAKgKQAKgKAMgEQAMgFAOAAQAOAAAMAFQALAEAKAKQAKAKAFAMQAEAMAAANQAAAOgEAMQgFAMgKAKQgKAKgLAFQgMAFgOAAQgOAAgMgFgAFigUQgIAJAAAMQAAAOAIAIQAJAJANAAQAMAAAJgJQAIgIAAgOQAAgMgIgJQgJgJgMAAQgNAAgJAJgABFBAQgMgFgJgKQgKgKgFgMQgFgMAAgOQAAgNAFgMQAFgMAKgKQAJgKAMgEQAMgFAOAAQALAAAJADQAKADAJAGIADADIgCADIgPAWQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgJgEIgJgBQgNAAgIAJQgIAJgBAMQABAOAIAIQAIAJANAAIAKgBIAJgEIADAAIADACIAQAWIAAADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQgJAGgJADQgKADgLAAQgOAAgMgFgAi5AxQgIgKgEgMQgFgMAAgOQAAgNAFgMQAEgMAIgKQAIgKAKgEQAKgFANAAQALAAAKAFQAKAFAIAKIAAgNQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIADgBIAdAAIAEABIABAEIAAB4IgBADIgEABIgdAAIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAgNQgIAKgKAFQgKAFgLAAQgZAAgQgUgAiRgbQgFADgEAEQgFAFgCAFQgCAGAAAFQAAAHACAFQACAGAFAFQAEAEAFACQAFACAHAAQAGAAAFgCQAFgCAFgEQAEgFACgGQACgFAAgHQAAgFgCgGQgCgFgEgFQgFgEgFgDQgFgCgGAAQgHAAgFACgAlSA2QgNgQAAgcIAAhEIABgEIAEgBIAdAAIADABIABAEIAAA9QAAANAGAIQAGAIANAAQAFAAAFgCQAFgCADgEQAIgIAAgLIAAg/QAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgBIANAAQAGAAAGgBQAFgCAEgFQAEgEAAgKIABgCIACgBIAYADIACACIABACQAAAMgFAJQgFAJgIAGQgHAGgKADIAABiIgBADIgDABIgdAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgPQgIALgKAFQgJAGgNAAQgYAAgMgPgAp/A2QgNgQAAgcIAAhEIABgEIAEgBIAdAAIADABIABAEIAAA9QAAANAGAIQAGAIANAAQAFAAAFgCQAEgCAEgEQAIgIAAgLIAAg/QAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAEgBIAdAAIADABIABAEIAAB4IgBADIgDABIgdAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgPQgIALgKAFQgJAGgNAAQgYAAgMgPgAr3BAQgMgFgKgKQgKgKgFgMQgFgMAAgOQAAgMAFgMQAEgMAJgKQAKgKALgFQALgFAOAAQAPAAAMAFQAMAFAIALQAJAKAFAOQAEANAAAOIgBAEIgEABIhYAAQADALAJAHQAIAHANAAQAIAAAHgCQAHgCAHgDIAEgBIADACIANATIABADIgCADQgLAGgMAEQgNADgNAAQgOAAgMgFgArFgKQgCgMgHgHQgHgHgMAAQgLAAgHAHQgHAHgCAMIA3AAIAAAAgAOyBCIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAg+QAAgNgGgIQgGgIgMAAQgFAAgFACQgEACgEAFQgEAEgCAFQgCAFAAAFIAAA/IgBADIgEABIgdAAIgDgBIgBgDIAAi5IABgEIADgBIAdAAIAEABIABAEIAABOQAHgKAKgFQAKgFANAAQAXAAANAPQANAPAAAcIAABFIgBADIgEABgAMVBCIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAg+QAAgNgGgIQgGgIgMAAQgFAAgFACQgFACgEAEQgDAEgCAFQgCAFAAAFIAABAIgBADIgEABIgdAAIgDgBIgBgDIAAh4IABgEIADgBIAdAAIAEABIABAEIAAAOQAIgKAKgGQAKgFAMAAQAXAAANAPQANAPAAAcIAABFIgBADIgEABgAIuBCIgDgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAg+QAAgNgGgIQgGgIgMAAQgFAAgFACQgFACgEAEQgDAEgCAFQgCAFAAAFIAABAIgBADIgEABIgdAAIgDgBIgBgDIAAh4IABgEIADgBIAdAAIAEABIABAEIAAAOQAIgKAKgGQAKgFAMAAQAXAAANAPQANAPAAAcIAABFIgBADIgEABgAD/BCIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAg+QAAgNgGgIQgGgIgMAAQgGAAgEACQgFACgEAFQgEAEgCAFQgCAFAAAFIAAA/IgBADIgDABIgdAAIgEgBIgBgDIAAi5IABgEIAEgBIAdAAIADABIABAEIAABOQAIgKAKgFQAKgFAMAAQAYAAANAPQAMAPAAAcIAABFIgBADIgDABgAmeBCIgEgBIgBgDIAAi5IABgEIAEgBIAdAAIADABIABAEIAAC5IgBADIgDABgAtaBCIgDgBIgBgDIAAh4IABgEIADgBIAdAAIAEABIABAEIAAB4IgBADIgEABgAvJBCIgDgBIgBgDIAAh4IABgEIADgBIAdAAIAEABIABAEIAAAQIAAAAQAEgJAJgHQAJgHALAAIALABQAFABAEACIABACIAAAFIgIAaIgCADIgEgBIgFgBIgGgBQgNAAgIAKQgIAJAAAQIAAA3IgBADIgEABgAw3BCIgEgBIgBgDIAAiLIguAAIgDgBIgBgEIAAgcIABgEIADgBICDAAIADABIABAEIAAAcIgBAEIgDABIguAAIAACLQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABgArJhPIgXgUIgXAUIgEACQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgGgJQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAXgaQADgEAEAAIAPAAIAFABIADADIAWAaQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIgCADIgHAJQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgEgCgAQshQIgggcQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAQgNQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABIAaAeIACADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgKAKIgDACIgDgCgAtbhVQgGgGAAgJQAAgKAGgGQAGgGAJAAQAKAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKABQgJgBgGgGg");
	this.shape.setTransform(252.3914,61.1247,0.4117,0.4117);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(205.7,55.8,93.5,10.700000000000003), null);


(lib.Symbol_5_Layer_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_93
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9g8IBqgLIARB9IhqASg");
	this.shape.setTransform(860.4255,300.5718,1.0657,1.0657,37.9428);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(73).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},3).wait(3).to({_off:false},0).wait(5).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_92
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgGgTgEgZIgDgUIBpgUIAbB8IhoAZg");
	this.shape.setTransform(849.6796,320.527,1.0984,1.0984,32.9514);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_91
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9g8IBqgLIARB9IhqASg");
	this.shape.setTransform(860.4255,300.5718,1.0657,1.0657,37.9428);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},3).wait(3).to({_off:false},0).wait(5).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_90
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9g8IBqgLIARB9IhqASg");
	this.shape.setTransform(860.4254,300.5721,1.0657,1.0657,37.9436);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},3).wait(3).to({_off:false},0).wait(5).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_89
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgGgTgEgZIgDgUIBpgUIAbB8IhoAZg");
	this.shape.setTransform(849.6795,320.5279,1.0984,1.0984,32.9512);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggCIBBgjIgCBLg");
	this.shape.setTransform(1123.925,141.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(73).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggCIBBgjIgCBLg");
	this.shape.setTransform(1133.225,142.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggCIBBgjIgCBLg");
	this.shape.setTransform(1123.925,141.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggCIBBgjIgCBLg");
	this.shape.setTransform(1133.225,142.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(79));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggCIBBgjIgCBLg");
	this.shape.setTransform(1133.225,142.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(23).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgggCIBBgjIgCBLg");
	this.shape.setTransform(1123.925,141.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(17).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},2).wait(2).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5_flash0_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AKQgGgTgEgZIgDgUIBpgUIAbB8IhoAZg");
	this.shape.setTransform(849.6796,320.527,1.0984,1.0984,32.9514);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07528F").s().p("AmCBBQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgCgCAAgDIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgCADgBIAEAAIAEADQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAIAAAFQgBADgCACIgEACIgCAAIgCAAgAFyAkQgFgCgEgFQgFgEgCgFQgCgGAAgFQAAgGACgFQACgFAEgFQAEgEAFgCQAFgCAGAAQAHAAAFACQAGACADAFQAFAEABAGQACAFAAAHIAAABIgCABIgnAAQABAFAEADQAEADAGAAIAGgBIAGgCIACgBIACABIAFAJIABABIgBABQgFADgFACIgMABQgGAAgGgCgAGJADQgBgFgDgDQgEgCgFgBQgEABgEACQgDADgBAFIAZAAIAAAAgAAvAiQgFgGAAgJIAAgXIgFAAIgCgBIAAgBIAAgMIAAgBIACAAIAFAAIAAgQIAAgBIACgBIANAAIABABIABABIAAAQIAPAAIAAABIAAAMIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBAAIgNAAIAAAVQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAIADgBIADgBIABAAIABABIAFALIAAABIgBABIgHADIgIABQgJAAgFgEgAi3AkQgFgCgFgFQgFgEgCgFQgCgGAAgFQAAgGACgFQACgFAEgFQAEgEAGgCQAEgCAHAAQAGAAAGACQAFACADAFQAFAEACAGQACAFAAAHIgBABIgCABIgnAAQACAFADADQAEADAGAAIAHgBIAGgCIACgBIABABIAGAJIAAABIgBABQgFADgFACIgMABQgGAAgFgCgAihADQgBgFgDgDQgDgCgFgBQgFABgEACQgCADgCAFIAZAAIAAAAgAlQAiQgFgGAAgJIAAgXIgFAAIgBgBIgBgBIAAgMIABgBIABAAIAFAAIAAgQIABgBIACgBIAMAAIACABIAAABIAAAQIAOAAIABAAIAAABIAAAMIAAABIgBABIgOAAIAAAVQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIADgBIACgBIACAAIABABIAFALIAAABIgBABIgIADIgHABQgKAAgFgEgAmMAkQgFgCgFgFQgEgEgCgFQgCgGAAgFQAAgHACgEIAGgKQAFgFAFgBQAFgCAHAAQAGAAAFACQAFABAFAFQAEAFACAFQADAEAAAHQAAAFgDAGQgCAFgEAEQgFAFgFACQgFACgGAAQgHAAgFgCgAmJgBQgEAEgBAGQABAFAEAEQADAEAGAAQAFAAAEgEQAEgEAAgFQAAgGgEgEQgEgEgFAAQgGAAgDAEgAHyAlIgBgBIgBgBIAAgbQAAgGgCgDQgEgEgEAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIgEACQAAABgBAAQAAAAAAAAQgBAAAAABQAAAAAAABIgBAFIAAAcIgBABIgBABIgNAAIgCgBIgBgBIAAgbQAAgGgCgDQgCgEgFAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABIgDACIgDADIgBAFIAAAcIgBABIgBABIgNAAIgBgBIgBgBIAAg1IABgBIABAAIAOAAIABABIAAAGQAEgEAEgCQAFgCAFAAQAFAAAFACQADACAEAFQAEgFAGgCQAFgCAGAAQAKAAAGAGQAFAHAAALIAAAfIgBABIgBABgAFHAlIgDgBIAAgBIAAg1IAAgBIADAAIAMAAIACAAIAAABIAAA1IAAABIgCABgAErAlIgCgBIgCgBIgOgUIgEAFIAAAPIgBABIgCABIgNAAIgCgBIAAgBIAAhRIAAgDIACAAIANAAIACAAIABADIAAAuIAQgSIACgBIACAAIAPAAIABAAIAAABIgSAWIATAfIABABIgBABgADGAlIgCgBIAAgBIAAgbQAAgGgDgDQgCgEgFAAIgFACIgDACQAAABgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAcIAAABIgBABIgNAAIgCgBIgBgBIAAgbQAAgGgCgDQgCgEgGAAIgEACIgDACIgDADIgBAFIAAAcIAAABIgCABIgNAAIgCgBIAAgBIAAg1IAAgBIACAAIANAAIACAAIAAABIAAAGQAEgEAEgCQAEgCAGAAQAFAAAEACQAFACACAFQAFgFAGgCQAFgCAGAAQAKAAAGAGQAFAHAAALIAAAfIgBABIgBABgABaAlIgCgBIAAgBIAAg1IAAgBIACAAIANAAIABAAIABABIAAA1IgBABIgBABgAgWAlIgCgBIAAgBIAAgbQAAgGgDgDQgDgEgFAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgCAEQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAABIAAAcIAAABIgBABIgNAAIgCgBIAAgBIAAhRIAAgDIACAAIANAAIABAAIAAADIAAAiQAEgEAFgCQAEgCAGAAQAKAAAGAGQAGAHAAALIAAAfIgBABIgCABgAhdAlIgBgBIgBgBIAAgbQAAgGgDgDQgCgEgFAAQgDAAgCACIgEACIgCADIgBAFIAAAcIgBABIgCABIgMAAIgCgBIAAgBIAAg1IAAgBIAOAAIACAAIABABIAAAHQADgFAFgCQAEgCAGAAQAKAAAGAGQAGAHAAALIAAAfIgBABIgBABgAjeAlIgCgBIgCgBIgNgUIgGAFIAAAPIAAABIgCABIgMAAIgCgBIAAgBIAAhRIAAgDIACAAIAMAAIACAAIAAADIAAAuIARgSIACgBIACAAIAPAAIABAAIAAABIgSAWIAUAfIAAABIgCABgAm4AlIgBgBIgBgBIAAgzIgUAoIgBACIgBAAIgIAAIgCAAIgBgCIgUgoIAAAzIAAABIgCABIgNAAIgBgBIgBgBIAAhMIABgBIABgBIASAAIACABIABABIAUArIAVgrIACgBIABgBIASAAIACABIAAABIAABMIAAABIgCABgAGHgbIgLgJIgKAJIgCABIgBgBIgDgDIgBgCIABgCIAKgLIADgCIAHAAIACABIACABIAJALIABACIgBACIgDADIgBABIgCgBgAiigbIgLgJIgKAJIgCABIgCgBIgDgDIgBgCIABgCIAKgLQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAGAAIACABIACABIAKALIABACIgBACIgEADIgBABIgBgBgAl2gbIgKgJIgLAJIgBABIgCgBIgDgDIgBgCIABgCIAKgLQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAIACABIABABIAKALIABACIgBACIgDADQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCgBgAFFgdQgCgDAAgEQAAgFACgCQAEgDAEAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgEAAgEgCgABegbIgOgNIgBgBIABgBIAHgHIACAAIABABIAMANIAAACIAAABIgFAFIgBAAIgCAAgAGUgqIgFgEIgBgCIABgCIANgNIABgBIACABIAHAFIABACIgBABIgQANIgBABIgBgBg");
	this.shape.setTransform(-182.675,31.4875);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21).to({_off:false},0).wait(238));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.r1();
	this.instance.parent = this;
	this.instance.setTransform(-242,1,1.1,1.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(257));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Line();
	this.instance.parent = this;
	this.instance.setTransform(-229,39);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(230));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Line2();
	this.instance.parent = this;
	this.instance.setTransform(-229,39);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(238));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_flash0_ai_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63B3D7").s().p("ApZAKIAAgTISiAAIAMAAQAFABAAABIAAAPIgFABIgMABg");
	this.shape.setTransform(-181.775,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63B3D7").s().p("ApZAbIAAg2ISiAAQAHABAFABQAFACAAACIAAAsQAAABgFACQgFACgHgBg");
	this.shape_1.setTransform(-181.775,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#63B3D7").s().p("ApZArIAAhVISiAAQAHAAAFACQAFACAAAEIAABFQAAADgFACQgFADgHAAg");
	this.shape_2.setTransform(-181.775,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63B3D7").s().p("ApZA5IAAhxISiAAQAHAAAFADQAFAEAAAEIAABbQAAAEgFADQgFADgHABg");
	this.shape_3.setTransform(-181.775,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#63B3D7").s().p("ApZBEIAAiHISiAAQAHAAAFAEQAFADAAAFIAABvQAAAEgFAFQgFADgHAAg");
	this.shape_4.setTransform(-181.775,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#63B3D7").s().p("ApZBNIAAiZISiAAQAHAAAFAEQAFAEAAAGIAAB9QAAAFgFAFQgFAEgHAAg");
	this.shape_5.setTransform(-181.775,28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#63B3D7").s().p("ApZBVIAAioISiAAQAHAAAFAEQAFAFAAAGIAACJQAAAGgFAFQgFAFgHAAg");
	this.shape_6.setTransform(-181.775,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#63B3D7").s().p("ApZBaIAAizISiAAQAHAAAFAFQAFAFAAAHIAACRQAAAHgFAFQgFAFgHAAg");
	this.shape_7.setTransform(-181.775,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#63B3D7").s().p("ApZBdIAAi5ISiAAQAHAAAFAFQAFAFAAAIIAACWQAAAGgFAGQgFAFgHAAg");
	this.shape_8.setTransform(-181.775,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#63B3D7").s().p("ApZBeIAAi7ISiAAQAHAAAFAFQAFAFAAAIIAACYQAAAGgFAGQgFAFgHAAg");
	this.shape_9.setTransform(-181.775,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(238));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_flash0_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApZAQIAAgfISiAAIAMABQAFABAAABIAAAZQAAABgFABIgMABg");
	this.shape.setTransform(-181.775,22.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApZAgIAAg/ISiAAQAHAAAFACQAFABAAACIAAA0QAAADgFACIgMABg");
	this.shape_1.setTransform(-181.775,24.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApZAvIAAhcISiAAQAHAAAFACQAFADAAACIAABMQAAADgFAEQgFACgHAAg");
	this.shape_2.setTransform(-181.775,25.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApZA7IAAh1ISiAAQAHAAAFADQAFADAAAEIAABgQAAAEgFAEQgFADgHAAg");
	this.shape_3.setTransform(-181.775,27.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApZBGIAAiLISiAAQAHAAAFAEQAFAEAAAFIAABxQAAAFgFAEQgFAEgHAAg");
	this.shape_4.setTransform(-181.775,28.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ApZBOIAAibISiAAQAHAAAFAEQAFAFAAAFIAAB/QAAAGgFAFQgFADgHAAg");
	this.shape_5.setTransform(-181.775,28.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ApZBVIAAipISiAAQAHAAAFAFQAFAEAAAGIAACKQAAAHgFAFQgFAEgHAAg");
	this.shape_6.setTransform(-181.775,29.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ApZBaIAAizISiAAQAHAAAFAFQAFAFAAAHIAACRQAAAHgFAFQgFAFgHAAg");
	this.shape_7.setTransform(-181.775,30.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ApZBdIAAi5ISiAAQAHAAAFAFQAFAFAAAIIAACWQAAAHgFAFQgFAFgHAAg");
	this.shape_8.setTransform(-181.775,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApZBeIAAi7ISiAAQAHAAAFAFQAFAFAAAIIAACYQAAAGgFAGQgFAFgHAAg");
	this.shape_9.setTransform(-181.775,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},21).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(229));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bg250x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

}).prototype = p = new cjs.MovieClip();


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4BtIDPj5IAiAcIjKD8g");
	this.shape.setTransform(12.05,14.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_84, new cjs.Rectangle(0,0,24.1,28.1), null);


(lib.Path_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah7BpIDXjyIAgAdIjSD2g");
	this.shape.setTransform(12.425,13.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_83, new cjs.Rectangle(0,0,24.9,27.5), null);


(lib.Path_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/BkIDfjqIAgAeIjaDvg");
	this.shape.setTransform(12.775,13.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_82, new cjs.Rectangle(0,0,25.6,26.9), null);


(lib.Path_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCBgIDmjiIAfAeIjiDng");
	this.shape.setTransform(13.1,13.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_81, new cjs.Rectangle(0,0,26.2,26.3), null);


(lib.Path_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFBcIDujbIAdAfIjpDgg");
	this.shape.setTransform(13.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_80, new cjs.Rectangle(0,0,26.8,25.6), null);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIBXID1jTIAcAhIjwDYg");
	this.shape.setTransform(13.725,12.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_79, new cjs.Rectangle(0,0,27.5,24.9), null);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLBSID8jKIAbAhIj4DQg");
	this.shape.setTransform(14,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_78, new cjs.Rectangle(0,0,28,24.2), null);


(lib.Path_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOBNIEDjBIAaAiIj+DHg");
	this.shape.setTransform(14.275,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_77, new cjs.Rectangle(0,0,28.6,23.4), null);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiRBJIEKi5IAYAjIkFC+g");
	this.shape.setTransform(14.55,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_76, new cjs.Rectangle(0,0,29.1,22.7), null);


(lib.Path_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTBEIEPiwIAYAjIkLC2g");
	this.shape.setTransform(14.775,10.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_75, new cjs.Rectangle(0,0,29.6,21.9), null);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVA/IEUinIAXAkIkRCtg");
	this.shape.setTransform(15,10.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_74, new cjs.Rectangle(0,0,30,21.1), null);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXA6IEaieIAVAlIkWCkg");
	this.shape.setTransform(15.2,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_73, new cjs.Rectangle(0,0,30.4,20.2), null);


(lib.Path_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZA1IEfiVIAUAmIkcCbg");
	this.shape.setTransform(15.4,9.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_72, new cjs.Rectangle(0,0,30.8,19.4), null);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AibAwIEkiLIATAmIkhCRg");
	this.shape.setTransform(15.575,9.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_71, new cjs.Rectangle(0,0,31.2,18.5), null);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicArIEoiCIARAnIklCIg");
	this.shape.setTransform(15.725,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_70, new cjs.Rectangle(0,0,31.5,17.6), null);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieAlIEsh3IARAnIkqB+g");
	this.shape.setTransform(15.875,8.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_69, new cjs.Rectangle(0,0,31.8,16.7), null);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifAgIEwhuIAPAoIkuB0g");
	this.shape.setTransform(16,7.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_68, new cjs.Rectangle(0,0,32,15.7), null);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AigAbIEzhkIAOApIkxBqg");
	this.shape.setTransform(16.125,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_67, new cjs.Rectangle(0,0,32.3,14.8), null);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihAVIE3hZIAMApIk1Bgg");
	this.shape.setTransform(16.2,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,32.4,13.8), null);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiAPIE6hOIALApIk4BWg");
	this.shape.setTransform(16.275,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_65, new cjs.Rectangle(0,0,32.6,12.8), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiAKIE8hEIAJApIk6BMg");
	this.shape.setTransform(16.325,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,32.7,11.8), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAFIE+g6IAJAqIk9BBg");
	this.shape.setTransform(16.375,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,32.8,10.8), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAAIFAgwIAHAqIk/A3g");
	this.shape.setTransform(16.375,4.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,0,32.8,9.8), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijgFIFBgmIAGArIlAAsg");
	this.shape.setTransform(16.375,4.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,32.8,8.7), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijgKIFDgbIAEApIlCAig");
	this.shape.setTransform(16.375,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,32.8,7.7), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiigQIFDgQIACApIlCAYg");
	this.shape.setTransform(16.325,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(0,0,32.7,6.6), null);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiigVIFEgGIABAqIlDAMg");
	this.shape.setTransform(16.275,2.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0,32.6,5.5), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihgYIFDAFIAAAqIlDACg");
	this.shape.setTransform(16.225,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,32.5,5), null);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiAVIACgyIFDARIgCAqg");
	this.shape.setTransform(16.275,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,32.6,5.9), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAPIAEgxIFCAcIgDApg");
	this.shape.setTransform(16.35,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,32.7,7), null);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAKIAGgxIFBAmIgFApg");
	this.shape.setTransform(16.375,4.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(0,0,32.8,8.1), null);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAEIAHgxIFAAwIgGAqg");
	this.shape.setTransform(16.375,4.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,32.8,9.1), null);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijgBIAJgxIE+A6IgHArg");
	this.shape.setTransform(16.375,5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(0,0,32.8,10.2), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijgGIAKgxIE8BFIgJAqg");
	this.shape.setTransform(16.35,5.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,32.7,11.2), null);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTAGIhPgRIAMgxIE5BPIgKAqg");
	this.shape.setTransform(16.3,6.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,32.6,12.2), null);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiigRIAOgwIE2BaIgLApg");
	this.shape.setTransform(16.25,6.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,32.5,13.2), null);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihgWIAPgwIE0BkIgNApg");
	this.shape.setTransform(16.175,7.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,32.4,14.2), null);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiggcIAFgNIAAAAIAMgiIEwBuIgKAcIAAAAIgFANg");
	this.shape.setTransform(16.05,7.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(0,0,32.1,15.1), null);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifggIASgvIEsB3IgPAog");
	this.shape.setTransform(15.95,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,31.9,16), null);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiegmIAUguIEoCBIgRAog");
	this.shape.setTransform(15.85,8.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,31.7,17), null);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AicgrIAVguIEkCMIgSAng");
	this.shape.setTransform(15.675,8.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,31.4,17.9), null);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiagwIAWgtIEfCUIgTAng");
	this.shape.setTransform(15.525,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,31.1,18.8), null);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYg1IAXgsIEaCeIgUAlg");
	this.shape.setTransform(15.325,9.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,30.7,19.7), null);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXg6IAagsIEVCoIgXAlg");
	this.shape.setTransform(15.15,10.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,30.3,20.5), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUhAIAbgqIEOCxIgXAkg");
	this.shape.setTransform(14.925,10.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,29.9,21.4), null);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiShFIAdgpIEIC6IgYAjg");
	this.shape.setTransform(14.7,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,29.4,22.2), null);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPhKIAdgoIECDCIgZAjg");
	this.shape.setTransform(14.425,11.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,28.9,23), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiNhOIAfgoID8DLIgbAig");
	this.shape.setTransform(14.175,11.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,28.4,23.8), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKhTIAggmID1DTIgcAgg");
	this.shape.setTransform(13.9,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,27.8,24.5), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiHhYIAhglIDuDbIgdAgg");
	this.shape.setTransform(13.575,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,27.2,25.2), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiEhcIAjgkIDmDiIgeAfg");
	this.shape.setTransform(13.3,12.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,26.6,25.9), null);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBhhIAkgjIDfDqIgfAeg");
	this.shape.setTransform(12.95,13.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,25.9,26.5), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9hlIAlgiIDWDyIggAdg");
	this.shape.setTransform(12.625,13.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,25.3,27.2), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6hpIAmghIDPD5IghAcg");
	this.shape.setTransform(12.275,13.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,24.6,27.7), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2huIAngfIDGEAIgiAag");
	this.shape.setTransform(11.9,14.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,23.8,28.3), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyhxIAogeIC9EGIgiAZg");
	this.shape.setTransform(11.525,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,23.1,28.8), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahuh1IApgdIC0EMIgjAZg");
	this.shape.setTransform(11.125,14.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,22.3,29.4), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahqh5IApgbICsESIgkAXg");
	this.shape.setTransform(10.725,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,21.5,29.8), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahmh9IAqgZICjEXIglAWg");
	this.shape.setTransform(10.325,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,20.7,30.2), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiiAIAsgYICZEcIglAVg");
	this.shape.setTransform(9.875,15.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,19.8,30.7), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheiDIAtgXICPEiIglATg");
	this.shape.setTransform(9.45,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,18.9,31), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZiHIAtgVICGEnIgmASg");
	this.shape.setTransform(9.025,15.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,18.1,31.3), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhViJIAugUIB9EqIgnARg");
	this.shape.setTransform(8.55,15.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,17.1,31.7), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQiNIAvgSIByEvIgoAPg");
	this.shape.setTransform(8.1,15.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,16.2,31.9), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLiPIAvgRIBoEyIgoAPg");
	this.shape.setTransform(7.625,16.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,15.3,32.1), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHiRIAwgQIBfE2IgqANg");
	this.shape.setTransform(7.15,16.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,14.3,32.4), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCiUIAwgNIBVE4IgqALg");
	this.shape.setTransform(6.65,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,13.3,32.5), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9iWIAxgMIBKE7IgqAKg");
	this.shape.setTransform(6.15,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,12.3,32.6), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4iYIAxgLIBAE+IgqAJg");
	this.shape.setTransform(5.65,16.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,11.3,32.8), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyiaIAxgJIA0E/IgqAIg");
	this.shape.setTransform(5.125,16.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,10.3,32.8), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgticIAwgHIArFAIgqAHg");
	this.shape.setTransform(4.625,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,9.3,32.8), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoieIAwgFIAhFCIgpAFg");
	this.shape.setTransform(4.1,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,8.2,32.8), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjifIAxgEIAWFDIgqADg");
	this.shape.setTransform(3.575,16.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,7.2,32.7), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeigIAygCIALFDIgqACg");
	this.shape.setTransform(3.05,16.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,6.1,32.7), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYihIAxgBIAAFEIgqAAg");
	this.shape.setTransform(2.5,16.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,5,32.5), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaCiIAElEIAxABIgLFEg");
	this.shape.setTransform(2.675,16.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,5.4,32.6), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfChIAOlDIAxADIgWFCg");
	this.shape.setTransform(3.2,16.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,6.4,32.7), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCgIAZlDIAwAFIggFCg");
	this.shape.setTransform(3.725,16.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,7.5,32.8), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqCeIAklBIAxAGIgrFBg");
	this.shape.setTransform(4.275,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,8.6,32.8), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvCdIAulAIAxAIIg1E/g");
	this.shape.setTransform(4.775,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,9.6,32.8), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0CcIA4k/IAxAKIg/E9g");
	this.shape.setTransform(5.3,16.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,10.6,32.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5CaIBCk9IAxALIhKE7g");
	this.shape.setTransform(5.825,16.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,11.7,32.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CYIBNk6IAwANIhUE4g");
	this.shape.setTransform(6.325,16.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,12.7,32.6), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDCWIBXk3IAwAOIheE1g");
	this.shape.setTransform(6.8,16.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,13.6,32.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhICUIBik0IAvAPIhoEyg");
	this.shape.setTransform(7.275,16.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,14.6,32.3), null);


(lib.click_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.008)").s().p("AwZXcMAAAgu3MAgzAAAMAAAAu3g");
	this.shape.setTransform(105,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.click_mc, new cjs.Rectangle(0,0,210,300), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.vong();
	this.instance.parent = this;
	this.instance.setTransform(800,450,1,1,0,0,0,800,450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,1600,900), null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(800,450,1,1,0,0,0,800,450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__84
	this.instance = new lib.Path_84();
	this.instance.parent = this;
	this.instance.setTransform(867.5,493.75,1.114,1.114,36.6115,0,0,12.3,14.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({_off:true},10).wait(64));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__83
	this.instance = new lib.Path_83();
	this.instance.parent = this;
	this.instance.setTransform(865.8,486.15,1.114,1.114,36.6115,0,0,12.6,13.7);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({_off:true},10).wait(64));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__82
	this.instance = new lib.Path_82();
	this.instance.parent = this;
	this.instance.setTransform(864.2,478.45,1.114,1.114,36.6115,0,0,12.8,13.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({_off:true},10).wait(64));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__81
	this.instance = new lib.Path_81();
	this.instance.parent = this;
	this.instance.setTransform(863.1,470.95,1.114,1.114,36.6115,0,0,13.3,13.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({_off:true},12).wait(63));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__80
	this.instance = new lib.Path_80();
	this.instance.parent = this;
	this.instance.setTransform(862.1,463.25,1.114,1.114,36.6115,0,0,13.6,12.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({_off:true},12).wait(63));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__79
	this.instance = new lib.Path_79();
	this.instance.parent = this;
	this.instance.setTransform(861.2,455.55,1.114,1.114,36.6115,0,0,13.9,12.5);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({_off:true},13).wait(63));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__78
	this.instance = new lib.Path_78();
	this.instance.parent = this;
	this.instance.setTransform(860.7,448,1.114,1.114,36.6115,0,0,14.2,12.2);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({_off:true},14).wait(62));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__77
	this.instance = new lib.Path_77();
	this.instance.parent = this;
	this.instance.setTransform(860.3,440.05,1.114,1.114,36.6115,0,0,14.3,11.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({_off:true},15).wait(62));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__76
	this.instance = new lib.Path_76();
	this.instance.parent = this;
	this.instance.setTransform(860.55,432.35,1.114,1.114,36.6115,0,0,14.7,11.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({_off:false},0).to({_off:true},15).wait(62));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__75
	this.instance = new lib.Path_75();
	this.instance.parent = this;
	this.instance.setTransform(860.7,424.65,1.114,1.114,36.6115,0,0,14.8,10.9);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({_off:true},17).wait(61));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__74
	this.instance = new lib.Path_74();
	this.instance.parent = this;
	this.instance.setTransform(861.45,416.8,1.114,1.114,36.6115,0,0,15.2,10.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({_off:true},17).wait(61));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__73
	this.instance = new lib.Path_73();
	this.instance.parent = this;
	this.instance.setTransform(862.15,409.35,1.114,1.114,36.6115,0,0,15.4,10.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({_off:true},18).wait(61));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__72
	this.instance = new lib.Path_72();
	this.instance.parent = this;
	this.instance.setTransform(863.1,401.5,1.114,1.114,36.6115,0,0,15.5,9.7);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({_off:true},19).wait(60));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__71
	this.instance = new lib.Path_71();
	this.instance.parent = this;
	this.instance.setTransform(864.4,393.95,1.114,1.114,36.6115,0,0,15.7,9.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({_off:true},20).wait(60));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__70
	this.instance = new lib.Path_70();
	this.instance.parent = this;
	this.instance.setTransform(865.9,386.25,1.114,1.114,36.6115,0,0,15.8,8.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({_off:true},20).wait(60));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__69
	this.instance = new lib.Path_69();
	this.instance.parent = this;
	this.instance.setTransform(867.7,378.6,1.114,1.114,36.6115,0,0,15.8,8.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({_off:true},22).wait(59));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__68
	this.instance = new lib.Path_68();
	this.instance.parent = this;
	this.instance.setTransform(869.75,371.45,1.114,1.114,36.6115,0,0,16.2,8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({_off:true},23).wait(59));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__67
	this.instance = new lib.Path_67();
	this.instance.parent = this;
	this.instance.setTransform(872.1,363.95,1.114,1.114,36.6115,0,0,16.3,7.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({_off:true},24).wait(59));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__66
	this.instance = new lib.Path_66();
	this.instance.parent = this;
	this.instance.setTransform(874.5,356.65,1.114,1.114,36.6115,0,0,16.5,6.9);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({_off:true},26).wait(58));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__65
	this.instance = new lib.Path_65();
	this.instance.parent = this;
	this.instance.setTransform(877.3,349.4,1.114,1.114,36.6115,0,0,16.5,6.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({_off:true},27).wait(58));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__64
	this.instance = new lib.Path_64();
	this.instance.parent = this;
	this.instance.setTransform(880.25,342.3,1.114,1.114,36.6115,0,0,16.5,6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({_off:true},28).wait(58));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__63
	this.instance = new lib.Path_63();
	this.instance.parent = this;
	this.instance.setTransform(883.5,335.3,1.114,1.114,36.6115,0,0,16.6,5.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({_off:true},29).wait(58));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__62
	this.instance = new lib.Path_62();
	this.instance.parent = this;
	this.instance.setTransform(886.95,328.3,1.114,1.114,36.6115,0,0,16.4,4.9);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).to({_off:true},31).wait(57));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__61
	this.instance = new lib.Path_61();
	this.instance.parent = this;
	this.instance.setTransform(890.75,321.5,1.114,1.114,36.6115,0,0,16.6,4.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({_off:true},32).wait(57));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__60
	this.instance = new lib.Path_60();
	this.instance.parent = this;
	this.instance.setTransform(894.6,314.85,1.114,1.114,36.6115,0,0,16.5,3.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({_off:true},33).wait(57));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__59
	this.instance = new lib.Path_59();
	this.instance.parent = this;
	this.instance.setTransform(898.7,308.25,1.114,1.114,36.6115,0,0,16.5,3.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({_off:true},34).wait(57));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__58
	this.instance = new lib.Path_58();
	this.instance.parent = this;
	this.instance.setTransform(903.05,301.85,1.114,1.114,36.6115,0,0,16.4,2.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({_off:true},36).wait(56));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__57
	this.instance = new lib.Path_57();
	this.instance.parent = this;
	this.instance.setTransform(907.75,295.4,1.114,1.114,36.6115,0,0,16.3,2.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({_off:true},37).wait(56));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__56
	this.instance = new lib.Path_56();
	this.instance.parent = this;
	this.instance.setTransform(912.55,289.15,1.114,1.114,36.6115,0,0,16.4,2.9);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({_off:true},38).wait(56));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__55
	this.instance = new lib.Path_55();
	this.instance.parent = this;
	this.instance.setTransform(917.5,283.25,1.114,1.114,36.6115,0,0,16.5,3.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true},39).wait(56));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__54
	this.instance = new lib.Path_54();
	this.instance.parent = this;
	this.instance.setTransform(922.7,277.4,1.114,1.114,36.6115,0,0,16.4,4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true},41).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__53
	this.instance = new lib.Path_53();
	this.instance.parent = this;
	this.instance.setTransform(928.05,271.8,1.114,1.114,36.6115,0,0,16.5,4.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({_off:true},42).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__52
	this.instance = new lib.Path_52();
	this.instance.parent = this;
	this.instance.setTransform(933.6,266.25,1.114,1.114,36.6115,0,0,16.5,5);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({_off:true},43).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__51
	this.instance = new lib.Path_51();
	this.instance.parent = this;
	this.instance.setTransform(939.45,261.2,1.114,1.114,36.6115,0,0,16.6,5.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).to({_off:true},44).wait(55));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__50
	this.instance = new lib.Path_50();
	this.instance.parent = this;
	this.instance.setTransform(945.25,256,1.114,1.114,36.6115,0,0,16.5,6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({_off:true},46).wait(54));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__49
	this.instance = new lib.Path_49();
	this.instance.parent = this;
	this.instance.setTransform(951.15,251.2,1.114,1.114,36.6115,0,0,16.4,6.5);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true},47).wait(54));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__48
	this.instance = new lib.Path_48();
	this.instance.parent = this;
	this.instance.setTransform(957.45,246.55,1.114,1.114,36.6115,0,0,16.3,7);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).to({_off:true},48).wait(54));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__47
	this.instance = new lib.Path_47();
	this.instance.parent = this;
	this.instance.setTransform(963.5,242.3,1.114,1.114,36.6115,0,0,16.2,7.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({_off:true},49).wait(54));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__46
	this.instance = new lib.Path_46();
	this.instance.parent = this;
	this.instance.setTransform(970.05,238.05,1.114,1.114,36.6115,0,0,16.1,8.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({_off:true},51).wait(53));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__45
	this.instance = new lib.Path_45();
	this.instance.parent = this;
	this.instance.setTransform(976.8,234,1.114,1.114,36.6115,0,0,16.1,8.5);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({_off:true},52).wait(53));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__44
	this.instance = new lib.Path_44();
	this.instance.parent = this;
	this.instance.setTransform(983.45,230.2,1.114,1.114,36.6115,0,0,15.8,9);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({_off:true},53).wait(53));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__43
	this.instance = new lib.Path_43();
	this.instance.parent = this;
	this.instance.setTransform(990.5,226.55,1.114,1.114,36.6115,0,0,15.8,9.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({_off:true},54).wait(53));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__42
	this.instance = new lib.Path_42();
	this.instance.parent = this;
	this.instance.setTransform(997.3,223,1.114,1.114,36.6115,0,0,15.3,9.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({_off:true},56).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__41
	this.instance = new lib.Path_41();
	this.instance.parent = this;
	this.instance.setTransform(1004.4,220.1,1.114,1.114,36.6115,0,0,15.3,10.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({_off:true},57).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__40
	this.instance = new lib.Path_40();
	this.instance.parent = this;
	this.instance.setTransform(1011.6,217.3,1.114,1.114,36.6115,0,0,15.2,10.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},58).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__39
	this.instance = new lib.Path_39();
	this.instance.parent = this;
	this.instance.setTransform(1018.75,214.6,1.114,1.114,36.6115,0,0,14.9,11.2);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({_off:true},59).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__38
	this.instance = new lib.Path_38();
	this.instance.parent = this;
	this.instance.setTransform(1026.25,212.15,1.114,1.114,36.6115,0,0,14.6,11.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true},60).wait(52));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__37
	this.instance = new lib.Path_37();
	this.instance.parent = this;
	this.instance.setTransform(1033.8,209.9,1.114,1.114,36.6115,0,0,14.4,11.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({_off:true},62).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__36
	this.instance = new lib.Path_36();
	this.instance.parent = this;
	this.instance.setTransform(1041.2,208.05,1.114,1.114,36.6115,0,0,14.1,12.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({_off:true},63).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__35
	this.instance = new lib.Path_35();
	this.instance.parent = this;
	this.instance.setTransform(1048.7,206.35,1.114,1.114,36.6115,0,0,13.7,12.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({_off:true},64).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__34
	this.instance = new lib.Path_34();
	this.instance.parent = this;
	this.instance.setTransform(1056.35,204.9,1.114,1.114,36.6115,0,0,13.5,12.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({_off:true},65).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__33
	this.instance = new lib.Path_33();
	this.instance.parent = this;
	this.instance.setTransform(1064.1,203.75,1.114,1.114,36.6115,0,0,13.1,13.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({_off:true},66).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__32
	this.instance = new lib.Path_32();
	this.instance.parent = this;
	this.instance.setTransform(1071.85,202.9,1.114,1.114,36.6115,0,0,12.8,13.5);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({_off:true},67).wait(51));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__31
	this.instance = new lib.Path_31();
	this.instance.parent = this;
	this.instance.setTransform(1079.4,202.25,1.114,1.114,36.6115,0,0,12.4,13.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({_off:true},69).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__30
	this.instance = new lib.Path_30();
	this.instance.parent = this;
	this.instance.setTransform(1087.05,201.95,1.114,1.114,36.6115,0,0,12,14.2);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true},70).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__29
	this.instance = new lib.Path_29();
	this.instance.parent = this;
	this.instance.setTransform(1094.85,201.75,1.114,1.114,36.6115,0,0,11.7,14.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true},71).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__28
	this.instance = new lib.Path_28();
	this.instance.parent = this;
	this.instance.setTransform(1102.65,201.85,1.114,1.114,36.6115,0,0,11.3,14.6);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({_off:true},72).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__27
	this.instance = new lib.Path_27();
	this.instance.parent = this;
	this.instance.setTransform(1110.45,202.35,1.114,1.114,36.6115,0,0,11,14.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({_off:true},73).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__26
	this.instance = new lib.Path_26();
	this.instance.parent = this;
	this.instance.setTransform(1118.15,202.85,1.114,1.114,36.6115,0,0,10.5,15);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({_off:true},74).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__25
	this.instance = new lib.Path_25();
	this.instance.parent = this;
	this.instance.setTransform(1125.75,203.8,1.114,1.114,36.6115,0,0,10.1,15.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({_off:true},76).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__24
	this.instance = new lib.Path_24();
	this.instance.parent = this;
	this.instance.setTransform(1133.4,205.05,1.114,1.114,36.6115,0,0,9.6,15.5);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({_off:true},77).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__23
	this.instance = new lib.Path_23();
	this.instance.parent = this;
	this.instance.setTransform(1140.9,206.5,1.114,1.114,36.6115,0,0,9.2,15.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({_off:true},78).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__22
	this.instance = new lib.Path_22();
	this.instance.parent = this;
	this.instance.setTransform(1148.55,208,1.114,1.114,36.6115,0,0,8.7,15.8);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({_off:true},79).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__21
	this.instance = new lib.Path_21();
	this.instance.parent = this;
	this.instance.setTransform(1155.95,209.95,1.114,1.114,36.6115,0,0,8.3,16);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({_off:true},80).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__20
	this.instance = new lib.Path_20();
	this.instance.parent = this;
	this.instance.setTransform(1163.35,212,1.114,1.114,36.6115,0,0,7.7,16);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({_off:true},81).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__19
	this.instance = new lib.Path_19();
	this.instance.parent = this;
	this.instance.setTransform(1170.8,214.45,1.114,1.114,36.6115,0,0,7.3,16.2);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},83).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__18
	this.instance = new lib.Path_18();
	this.instance.parent = this;
	this.instance.setTransform(1178.2,217.05,1.114,1.114,36.6115,0,0,6.9,16.1);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true},84).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__17
	this.instance = new lib.Path_17();
	this.instance.parent = this;
	this.instance.setTransform(1185.35,219.95,1.114,1.114,36.6115,0,0,6.3,16.2);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({_off:true},85).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__16
	this.instance = new lib.Path_16();
	this.instance.parent = this;
	this.instance.setTransform(1192.2,223,1.114,1.114,36.6115,0,0,5.7,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({_off:true},86).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__15
	this.instance = new lib.Path_15();
	this.instance.parent = this;
	this.instance.setTransform(1199.25,226.3,1.114,1.114,36.6115,0,0,5.2,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true},87).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__14
	this.instance = new lib.Path_14();
	this.instance.parent = this;
	this.instance.setTransform(1206.15,229.9,1.114,1.114,36.6115,0,0,4.8,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},88).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__13
	this.instance = new lib.Path_13();
	this.instance.parent = this;
	this.instance.setTransform(1212.9,233.75,1.114,1.114,36.6115,0,0,4.3,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({_off:true},90).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__12
	this.instance = new lib.Path_12();
	this.instance.parent = this;
	this.instance.setTransform(1219.5,237.7,1.114,1.114,36.6115,0,0,3.6,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},91).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__11
	this.instance = new lib.Path_11();
	this.instance.parent = this;
	this.instance.setTransform(1226.15,242.1,1.114,1.114,36.6115,0,0,3.4,16.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},92).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__10
	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(1232.3,246.45,1.114,1.114,36.6115,0,0,2.8,16.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},93).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__9
	this.instance = new lib.Path_9();
	this.instance.parent = this;
	this.instance.setTransform(1238.8,251.25,1.114,1.114,36.6115,0,0,2.7,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},94).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__8
	this.instance = new lib.Path_8();
	this.instance.parent = this;
	this.instance.setTransform(1244.85,256.15,1.114,1.114,36.6115,0,0,3.3,16.3);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},95).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__7
	this.instance = new lib.Path_7();
	this.instance.parent = this;
	this.instance.setTransform(1250.7,261.2,1.114,1.114,36.6115,0,0,3.9,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},97).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__6
	this.instance = new lib.Path_6();
	this.instance.parent = this;
	this.instance.setTransform(1256.45,266.4,1.114,1.114,36.6115,0,0,4.4,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},98).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__5
	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(1262,271.8,1.114,1.114,36.6115,0,0,4.9,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},99).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__4
	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(1267.35,277.4,1.114,1.114,36.6115,0,0,5.5,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},100).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__3
	this.instance = new lib.Path_3();
	this.instance.parent = this;
	this.instance.setTransform(1272.45,283.3,1.114,1.114,36.6115,0,0,6,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},101).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__2
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(1277.4,289.1,1.114,1.114,36.6115,0,0,6.4,16.2);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},102).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path__1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path__1
	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(1282.05,295.35,1.114,1.114,36.6115,0,0,7,16.4);
	this.instance.alpha = 0.7383;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},103).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_5__Path_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _Path_
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(1286.75,301.55,1.114,1.114,36.6115,0,0,7.5,16.1);
	this.instance.alpha = 0.7383;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},104).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_2_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(786.35,450,1,1,0,0,0,800,450);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:800,alpha:1},14).wait(191).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_2_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(616.9,777.65,1.5823,1.5823,44.9988,0,0,616.9,777.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regY:777.7,scaleX:1,scaleY:1,rotation:0,y:777.7},10).wait(186).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-338.05,-23.15,1.1,1.1,0,0,0,113.5,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:-337.15,y:-41.9,alpha:1},10).wait(242));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-137.15,107.75,0.72,0.72,0,0,0,173.4,173.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(197.15,37.1,0.9,0.9,0,0,0,34.6,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// click
	this.click_mc = new lib.click_mc();
	this.click_mc.name = "click_mc";
	this.click_mc.parent = this;
	this.click_mc.setTransform(560,122.95,5.3333,0.8465,0,0,0,105,149.9);
	new cjs.ButtonHelper(this.click_mc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.click_mc).wait(260));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_229 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(229).call(this.frame_229).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_2_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(230));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AjND6QAAgKgBABIAAnhQABAAAAgKIGaAAQABAKABAAIAAHhQgBgBgBAKg");
	var mask_graphics_6 = new cjs.Graphics().p("Ak+DxIAAnhQACAAAAgKIJ5AAIACHrIp7AJQAAgKgCABg");
	var mask_graphics_7 = new cjs.Graphics().p("AmuDxIAAnhQADAAAAgKINXAAIADHrItaAJQAAgKgDABg");
	var mask_graphics_8 = new cjs.Graphics().p("AodDxIAAnhQACAAAAgKIQ2AAIADHrIw5AJQAAgKgCABg");
	var mask_graphics_9 = new cjs.Graphics().p("AqNDxIAAnhQADAAAAgKIUVAAIADHrI0YAJQAAgKgDABg");
	var mask_graphics_10 = new cjs.Graphics().p("Ar9DxIAAnhQAEAAAAgKIXzAAIAEHrI33AJQAAgKgEABg");
	var mask_graphics_11 = new cjs.Graphics().p("AttDxIAAnhQAFAAAAgKIbRAAIAFHrI7WAJQAAgKgFABg");
	var mask_graphics_12 = new cjs.Graphics().p("AvdDxIAAnhQAFAAAAgKIewAAIAGHrI+2AJQAAgKgFABg");
	var mask_graphics_13 = new cjs.Graphics().p("AxNDxIAAnhQAGAAAAgKMAiOAAAIAHHrMgiVAAJQAAgKgGABg");
	var mask_graphics_14 = new cjs.Graphics().p("Ay9DxIAAnhQAHAAAAgKMAltAAAIAHHrMgl0AAJQAAgKgHABg");
	var mask_graphics_15 = new cjs.Graphics().p("A0tDxIAAnhQAIAAAAgKMApLAAAIAIHrMgpTAAJQAAgKgIABg");
	var mask_graphics_16 = new cjs.Graphics().p("A2dDxIAAnhQAIAAAAgKMAsqAAAIAJHrMgszAAJQAAgKgIABg");
	var mask_graphics_17 = new cjs.Graphics().p("A4MDxIAAnhQAIAAAAgKMAwJAAAIAJHrMgwSAAJQAAgKgIABg");
	var mask_graphics_18 = new cjs.Graphics().p("A58DxIAAnhQAJAAAAgKMAznAAAIAKHrMgzxAAJQAAgKgJABg");
	var mask_graphics_19 = new cjs.Graphics().p("A7iD6QAAgKgKABIAAnhQAKAAAAgKMA3FAAAQAAAKAKAAIAAHhQgKgBAAAKg");
	var mask_graphics_210 = new cjs.Graphics().p("A7iD6QAAgKgKABIAAnhQAKAAAAgKMA3FAAAQAAAKAKAAIAAHhQgKgBAAAKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:259.35,y:771}).wait(1).to({graphics:mask_graphics_6,x:270.575,y:771}).wait(1).to({graphics:mask_graphics_7,x:281.775,y:771}).wait(1).to({graphics:mask_graphics_8,x:293,y:771}).wait(1).to({graphics:mask_graphics_9,x:304.2,y:771}).wait(1).to({graphics:mask_graphics_10,x:315.425,y:771}).wait(1).to({graphics:mask_graphics_11,x:326.625,y:771}).wait(1).to({graphics:mask_graphics_12,x:337.875,y:771}).wait(1).to({graphics:mask_graphics_13,x:349.1,y:771}).wait(1).to({graphics:mask_graphics_14,x:360.3,y:771}).wait(1).to({graphics:mask_graphics_15,x:371.525,y:771}).wait(1).to({graphics:mask_graphics_16,x:382.725,y:771}).wait(1).to({graphics:mask_graphics_17,x:393.95,y:771}).wait(1).to({graphics:mask_graphics_18,x:405.15,y:771}).wait(1).to({graphics:mask_graphics_19,x:416.375,y:771}).wait(191).to({graphics:mask_graphics_210,x:416.375,y:771}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_3_obj_
	this.Layer_3 = new lib.Symbol_2_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 1
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(230));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjEE+IAAgKIAApnIAAgKIGJAAQAAAKABAAIAAJnQgBAAAAAKg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AltE0IAApnQACAAAAgKILXAAIACJxIrZAKQAAgKgCAAg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AoVE0IAApnQACAAAAgKIQnAAIACJxIwpAKQAAgKgCAAg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Aq9E0IAApnQACAAAAgKIV3AAIADJxI16AKQAAgKgCAAg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AtmE0IAApnQADAAAAgKIbGAAIAEJxI7KAKQAAgKgDAAg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AwOE0IAApnQAEAAAAgKMAgVAAAIAEJxMggZAAKQAAgKgEAAg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ay2E0IAApnQAFAAgBgKMAlkAAAIAFJxMglpAAKQABgKgFAAg");
	var mask_1_graphics_7 = new cjs.Graphics().p("A1eE0IAApnQAFAAAAgKMAqzAAAIAFJxMgq4AAKQAAgKgFAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("A4HE0IAApnQAGAAAAgKMAwDAAAIAGJxMgwJAAKQAAgKgGAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("A6vE0IAApnQAHAAgBgKMA1SAAAIAHJxMg1ZAAKQABgKgHAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("A9XE0IAApnQAHAAAAgKMA6hAAAIAHJxMg6oAAKQAAgKgHAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EggAAE0IAApnQAIAAAAgKMA/xAAAIAHJxMg/4AAKQAAgKgIAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgifAE+QAAgKgJAAIAApnQAJAAAAgKMBE/AAAQAAAKAJAAIAAJnQgJAAAAAKg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EgifAE+QAAgKgJAAIAApnQAJAAAAgKMBE/AAAQAAAKAJAAIAAJnQgJAAAAAKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_1,x:445.325,y:771.95}).wait(1).to({graphics:mask_1_graphics_2,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_3,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_4,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_5,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_6,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_7,x:445.325,y:771.95}).wait(1).to({graphics:mask_1_graphics_8,x:445.325,y:771.95}).wait(1).to({graphics:mask_1_graphics_9,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_10,x:445.325,y:771.95}).wait(1).to({graphics:mask_1_graphics_11,x:445.35,y:771.95}).wait(1).to({graphics:mask_1_graphics_12,x:445.325,y:771.95}).wait(198).to({graphics:mask_1_graphics_210,x:445.325,y:771.95}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(800,450,1,1,0,0,0,800,450);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 2
	this.Layer_1.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.6,-782.6,2806.5,2797.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// Layer_6_obj_
	this.Layer_6 = new lib.Symbol_5_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 0
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(150));

	// Layer_7_obj_
	this.Layer_7 = new lib.Symbol_5_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 1
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(99).to({_off:true},2).wait(49));

	// Layer_4_obj_
	this.Layer_4 = new lib.Symbol_5_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 2
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(150));

	// Layer_5_obj_
	this.Layer_5 = new lib.Symbol_5_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 3
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(71).to({_off:true},2).wait(77));

	// Layer_3_obj_
	this.Layer_3 = new lib.Symbol_5_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 4
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(43).to({_off:true},2).wait(105));

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_5_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 5
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(43).to({_off:true},2).wait(105));

	// Layer_92_obj_
	this.Layer_92 = new lib.Symbol_5_Layer_92();
	this.Layer_92.name = "Layer_92";
	this.Layer_92.parent = this;
	this.Layer_92.depth = 0;
	this.Layer_92.isAttachedToCamera = 0
	this.Layer_92.isAttachedToMask = 0
	this.Layer_92.layerDepth = 0
	this.Layer_92.layerIndex = 6
	this.Layer_92.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_92).wait(99).to({_off:true},1).wait(50));

	// Layer_93_obj_
	this.Layer_93 = new lib.Symbol_5_Layer_93();
	this.Layer_93.name = "Layer_93";
	this.Layer_93.parent = this;
	this.Layer_93.depth = 0;
	this.Layer_93.isAttachedToCamera = 0
	this.Layer_93.isAttachedToMask = 0
	this.Layer_93.layerDepth = 0
	this.Layer_93.layerIndex = 7
	this.Layer_93.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_93).wait(99).to({_off:true},1).wait(50));

	// flash0_ai_obj_
	this.flash0_ai = new lib.Symbol_5_flash0_ai();
	this.flash0_ai.name = "flash0_ai";
	this.flash0_ai.parent = this;
	this.flash0_ai.depth = 0;
	this.flash0_ai.isAttachedToCamera = 0
	this.flash0_ai.isAttachedToMask = 0
	this.flash0_ai.layerDepth = 0
	this.flash0_ai.layerIndex = 8
	this.flash0_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash0_ai).wait(71).to({_off:true},1).wait(78));

	// Layer_91_obj_
	this.Layer_91 = new lib.Symbol_5_Layer_91();
	this.Layer_91.name = "Layer_91";
	this.Layer_91.parent = this;
	this.Layer_91.depth = 0;
	this.Layer_91.isAttachedToCamera = 0
	this.Layer_91.isAttachedToMask = 0
	this.Layer_91.layerDepth = 0
	this.Layer_91.layerIndex = 9
	this.Layer_91.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_91).wait(71).to({_off:true},1).wait(78));

	// Layer_89_obj_
	this.Layer_89 = new lib.Symbol_5_Layer_89();
	this.Layer_89.name = "Layer_89";
	this.Layer_89.parent = this;
	this.Layer_89.depth = 0;
	this.Layer_89.isAttachedToCamera = 0
	this.Layer_89.isAttachedToMask = 0
	this.Layer_89.layerDepth = 0
	this.Layer_89.layerIndex = 10
	this.Layer_89.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_89).wait(43).to({_off:true},1).wait(106));

	// Layer_90_obj_
	this.Layer_90 = new lib.Symbol_5_Layer_90();
	this.Layer_90.name = "Layer_90";
	this.Layer_90.parent = this;
	this.Layer_90.depth = 0;
	this.Layer_90.isAttachedToCamera = 0
	this.Layer_90.isAttachedToMask = 0
	this.Layer_90.layerDepth = 0
	this.Layer_90.layerIndex = 11
	this.Layer_90.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_90).wait(43).to({_off:true},1).wait(106));

	// _Path__obj_
	this._Path_ = new lib.Symbol_5__Path_();
	this._Path_.name = "_Path_";
	this._Path_.parent = this;
	this._Path_.setTransform(1286.5,301.4,1,1,0,0,0,1286.5,301.4);
	this._Path_.depth = 0;
	this._Path_.isAttachedToCamera = 0
	this._Path_.isAttachedToMask = 0
	this._Path_.layerDepth = 0
	this._Path_.layerIndex = 12
	this._Path_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path_).wait(150));

	// _Path__1_obj_
	this._Path__1 = new lib.Symbol_5__Path__1();
	this._Path__1.name = "_Path__1";
	this._Path__1.parent = this;
	this._Path__1.depth = 0;
	this._Path__1.isAttachedToCamera = 0
	this._Path__1.isAttachedToMask = 0
	this._Path__1.layerDepth = 0
	this._Path__1.layerIndex = 13
	this._Path__1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__1).wait(150));

	// _Path__2_obj_
	this._Path__2 = new lib.Symbol_5__Path__2();
	this._Path__2.name = "_Path__2";
	this._Path__2.parent = this;
	this._Path__2.depth = 0;
	this._Path__2.isAttachedToCamera = 0
	this._Path__2.isAttachedToMask = 0
	this._Path__2.layerDepth = 0
	this._Path__2.layerIndex = 14
	this._Path__2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__2).wait(150));

	// _Path__3_obj_
	this._Path__3 = new lib.Symbol_5__Path__3();
	this._Path__3.name = "_Path__3";
	this._Path__3.parent = this;
	this._Path__3.depth = 0;
	this._Path__3.isAttachedToCamera = 0
	this._Path__3.isAttachedToMask = 0
	this._Path__3.layerDepth = 0
	this._Path__3.layerIndex = 15
	this._Path__3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__3).wait(150));

	// _Path__4_obj_
	this._Path__4 = new lib.Symbol_5__Path__4();
	this._Path__4.name = "_Path__4";
	this._Path__4.parent = this;
	this._Path__4.depth = 0;
	this._Path__4.isAttachedToCamera = 0
	this._Path__4.isAttachedToMask = 0
	this._Path__4.layerDepth = 0
	this._Path__4.layerIndex = 16
	this._Path__4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__4).wait(150));

	// _Path__5_obj_
	this._Path__5 = new lib.Symbol_5__Path__5();
	this._Path__5.name = "_Path__5";
	this._Path__5.parent = this;
	this._Path__5.depth = 0;
	this._Path__5.isAttachedToCamera = 0
	this._Path__5.isAttachedToMask = 0
	this._Path__5.layerDepth = 0
	this._Path__5.layerIndex = 17
	this._Path__5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__5).wait(150));

	// _Path__6_obj_
	this._Path__6 = new lib.Symbol_5__Path__6();
	this._Path__6.name = "_Path__6";
	this._Path__6.parent = this;
	this._Path__6.depth = 0;
	this._Path__6.isAttachedToCamera = 0
	this._Path__6.isAttachedToMask = 0
	this._Path__6.layerDepth = 0
	this._Path__6.layerIndex = 18
	this._Path__6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__6).wait(150));

	// _Path__7_obj_
	this._Path__7 = new lib.Symbol_5__Path__7();
	this._Path__7.name = "_Path__7";
	this._Path__7.parent = this;
	this._Path__7.depth = 0;
	this._Path__7.isAttachedToCamera = 0
	this._Path__7.isAttachedToMask = 0
	this._Path__7.layerDepth = 0
	this._Path__7.layerIndex = 19
	this._Path__7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__7).wait(150));

	// _Path__8_obj_
	this._Path__8 = new lib.Symbol_5__Path__8();
	this._Path__8.name = "_Path__8";
	this._Path__8.parent = this;
	this._Path__8.depth = 0;
	this._Path__8.isAttachedToCamera = 0
	this._Path__8.isAttachedToMask = 0
	this._Path__8.layerDepth = 0
	this._Path__8.layerIndex = 20
	this._Path__8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__8).wait(150));

	// _Path__9_obj_
	this._Path__9 = new lib.Symbol_5__Path__9();
	this._Path__9.name = "_Path__9";
	this._Path__9.parent = this;
	this._Path__9.depth = 0;
	this._Path__9.isAttachedToCamera = 0
	this._Path__9.isAttachedToMask = 0
	this._Path__9.layerDepth = 0
	this._Path__9.layerIndex = 21
	this._Path__9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__9).wait(150));

	// _Path__10_obj_
	this._Path__10 = new lib.Symbol_5__Path__10();
	this._Path__10.name = "_Path__10";
	this._Path__10.parent = this;
	this._Path__10.depth = 0;
	this._Path__10.isAttachedToCamera = 0
	this._Path__10.isAttachedToMask = 0
	this._Path__10.layerDepth = 0
	this._Path__10.layerIndex = 22
	this._Path__10.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__10).wait(150));

	// _Path__11_obj_
	this._Path__11 = new lib.Symbol_5__Path__11();
	this._Path__11.name = "_Path__11";
	this._Path__11.parent = this;
	this._Path__11.depth = 0;
	this._Path__11.isAttachedToCamera = 0
	this._Path__11.isAttachedToMask = 0
	this._Path__11.layerDepth = 0
	this._Path__11.layerIndex = 23
	this._Path__11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__11).wait(150));

	// _Path__12_obj_
	this._Path__12 = new lib.Symbol_5__Path__12();
	this._Path__12.name = "_Path__12";
	this._Path__12.parent = this;
	this._Path__12.depth = 0;
	this._Path__12.isAttachedToCamera = 0
	this._Path__12.isAttachedToMask = 0
	this._Path__12.layerDepth = 0
	this._Path__12.layerIndex = 24
	this._Path__12.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__12).wait(150));

	// _Path__13_obj_
	this._Path__13 = new lib.Symbol_5__Path__13();
	this._Path__13.name = "_Path__13";
	this._Path__13.parent = this;
	this._Path__13.depth = 0;
	this._Path__13.isAttachedToCamera = 0
	this._Path__13.isAttachedToMask = 0
	this._Path__13.layerDepth = 0
	this._Path__13.layerIndex = 25
	this._Path__13.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__13).wait(150));

	// _Path__14_obj_
	this._Path__14 = new lib.Symbol_5__Path__14();
	this._Path__14.name = "_Path__14";
	this._Path__14.parent = this;
	this._Path__14.depth = 0;
	this._Path__14.isAttachedToCamera = 0
	this._Path__14.isAttachedToMask = 0
	this._Path__14.layerDepth = 0
	this._Path__14.layerIndex = 26
	this._Path__14.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__14).wait(150));

	// _Path__15_obj_
	this._Path__15 = new lib.Symbol_5__Path__15();
	this._Path__15.name = "_Path__15";
	this._Path__15.parent = this;
	this._Path__15.depth = 0;
	this._Path__15.isAttachedToCamera = 0
	this._Path__15.isAttachedToMask = 0
	this._Path__15.layerDepth = 0
	this._Path__15.layerIndex = 27
	this._Path__15.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__15).wait(150));

	// _Path__16_obj_
	this._Path__16 = new lib.Symbol_5__Path__16();
	this._Path__16.name = "_Path__16";
	this._Path__16.parent = this;
	this._Path__16.depth = 0;
	this._Path__16.isAttachedToCamera = 0
	this._Path__16.isAttachedToMask = 0
	this._Path__16.layerDepth = 0
	this._Path__16.layerIndex = 28
	this._Path__16.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__16).wait(150));

	// _Path__17_obj_
	this._Path__17 = new lib.Symbol_5__Path__17();
	this._Path__17.name = "_Path__17";
	this._Path__17.parent = this;
	this._Path__17.depth = 0;
	this._Path__17.isAttachedToCamera = 0
	this._Path__17.isAttachedToMask = 0
	this._Path__17.layerDepth = 0
	this._Path__17.layerIndex = 29
	this._Path__17.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__17).wait(150));

	// _Path__18_obj_
	this._Path__18 = new lib.Symbol_5__Path__18();
	this._Path__18.name = "_Path__18";
	this._Path__18.parent = this;
	this._Path__18.depth = 0;
	this._Path__18.isAttachedToCamera = 0
	this._Path__18.isAttachedToMask = 0
	this._Path__18.layerDepth = 0
	this._Path__18.layerIndex = 30
	this._Path__18.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__18).wait(150));

	// _Path__19_obj_
	this._Path__19 = new lib.Symbol_5__Path__19();
	this._Path__19.name = "_Path__19";
	this._Path__19.parent = this;
	this._Path__19.depth = 0;
	this._Path__19.isAttachedToCamera = 0
	this._Path__19.isAttachedToMask = 0
	this._Path__19.layerDepth = 0
	this._Path__19.layerIndex = 31
	this._Path__19.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__19).wait(150));

	// _Path__20_obj_
	this._Path__20 = new lib.Symbol_5__Path__20();
	this._Path__20.name = "_Path__20";
	this._Path__20.parent = this;
	this._Path__20.depth = 0;
	this._Path__20.isAttachedToCamera = 0
	this._Path__20.isAttachedToMask = 0
	this._Path__20.layerDepth = 0
	this._Path__20.layerIndex = 32
	this._Path__20.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__20).wait(150));

	// _Path__21_obj_
	this._Path__21 = new lib.Symbol_5__Path__21();
	this._Path__21.name = "_Path__21";
	this._Path__21.parent = this;
	this._Path__21.depth = 0;
	this._Path__21.isAttachedToCamera = 0
	this._Path__21.isAttachedToMask = 0
	this._Path__21.layerDepth = 0
	this._Path__21.layerIndex = 33
	this._Path__21.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__21).wait(150));

	// _Path__22_obj_
	this._Path__22 = new lib.Symbol_5__Path__22();
	this._Path__22.name = "_Path__22";
	this._Path__22.parent = this;
	this._Path__22.depth = 0;
	this._Path__22.isAttachedToCamera = 0
	this._Path__22.isAttachedToMask = 0
	this._Path__22.layerDepth = 0
	this._Path__22.layerIndex = 34
	this._Path__22.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__22).wait(150));

	// _Path__23_obj_
	this._Path__23 = new lib.Symbol_5__Path__23();
	this._Path__23.name = "_Path__23";
	this._Path__23.parent = this;
	this._Path__23.depth = 0;
	this._Path__23.isAttachedToCamera = 0
	this._Path__23.isAttachedToMask = 0
	this._Path__23.layerDepth = 0
	this._Path__23.layerIndex = 35
	this._Path__23.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__23).wait(150));

	// _Path__24_obj_
	this._Path__24 = new lib.Symbol_5__Path__24();
	this._Path__24.name = "_Path__24";
	this._Path__24.parent = this;
	this._Path__24.depth = 0;
	this._Path__24.isAttachedToCamera = 0
	this._Path__24.isAttachedToMask = 0
	this._Path__24.layerDepth = 0
	this._Path__24.layerIndex = 36
	this._Path__24.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__24).wait(150));

	// _Path__25_obj_
	this._Path__25 = new lib.Symbol_5__Path__25();
	this._Path__25.name = "_Path__25";
	this._Path__25.parent = this;
	this._Path__25.depth = 0;
	this._Path__25.isAttachedToCamera = 0
	this._Path__25.isAttachedToMask = 0
	this._Path__25.layerDepth = 0
	this._Path__25.layerIndex = 37
	this._Path__25.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__25).wait(150));

	// _Path__26_obj_
	this._Path__26 = new lib.Symbol_5__Path__26();
	this._Path__26.name = "_Path__26";
	this._Path__26.parent = this;
	this._Path__26.depth = 0;
	this._Path__26.isAttachedToCamera = 0
	this._Path__26.isAttachedToMask = 0
	this._Path__26.layerDepth = 0
	this._Path__26.layerIndex = 38
	this._Path__26.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__26).wait(150));

	// _Path__27_obj_
	this._Path__27 = new lib.Symbol_5__Path__27();
	this._Path__27.name = "_Path__27";
	this._Path__27.parent = this;
	this._Path__27.depth = 0;
	this._Path__27.isAttachedToCamera = 0
	this._Path__27.isAttachedToMask = 0
	this._Path__27.layerDepth = 0
	this._Path__27.layerIndex = 39
	this._Path__27.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__27).wait(150));

	// _Path__28_obj_
	this._Path__28 = new lib.Symbol_5__Path__28();
	this._Path__28.name = "_Path__28";
	this._Path__28.parent = this;
	this._Path__28.depth = 0;
	this._Path__28.isAttachedToCamera = 0
	this._Path__28.isAttachedToMask = 0
	this._Path__28.layerDepth = 0
	this._Path__28.layerIndex = 40
	this._Path__28.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__28).wait(150));

	// _Path__29_obj_
	this._Path__29 = new lib.Symbol_5__Path__29();
	this._Path__29.name = "_Path__29";
	this._Path__29.parent = this;
	this._Path__29.depth = 0;
	this._Path__29.isAttachedToCamera = 0
	this._Path__29.isAttachedToMask = 0
	this._Path__29.layerDepth = 0
	this._Path__29.layerIndex = 41
	this._Path__29.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__29).wait(150));

	// _Path__30_obj_
	this._Path__30 = new lib.Symbol_5__Path__30();
	this._Path__30.name = "_Path__30";
	this._Path__30.parent = this;
	this._Path__30.depth = 0;
	this._Path__30.isAttachedToCamera = 0
	this._Path__30.isAttachedToMask = 0
	this._Path__30.layerDepth = 0
	this._Path__30.layerIndex = 42
	this._Path__30.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__30).wait(150));

	// _Path__31_obj_
	this._Path__31 = new lib.Symbol_5__Path__31();
	this._Path__31.name = "_Path__31";
	this._Path__31.parent = this;
	this._Path__31.depth = 0;
	this._Path__31.isAttachedToCamera = 0
	this._Path__31.isAttachedToMask = 0
	this._Path__31.layerDepth = 0
	this._Path__31.layerIndex = 43
	this._Path__31.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__31).wait(150));

	// _Path__32_obj_
	this._Path__32 = new lib.Symbol_5__Path__32();
	this._Path__32.name = "_Path__32";
	this._Path__32.parent = this;
	this._Path__32.depth = 0;
	this._Path__32.isAttachedToCamera = 0
	this._Path__32.isAttachedToMask = 0
	this._Path__32.layerDepth = 0
	this._Path__32.layerIndex = 44
	this._Path__32.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__32).wait(150));

	// _Path__33_obj_
	this._Path__33 = new lib.Symbol_5__Path__33();
	this._Path__33.name = "_Path__33";
	this._Path__33.parent = this;
	this._Path__33.depth = 0;
	this._Path__33.isAttachedToCamera = 0
	this._Path__33.isAttachedToMask = 0
	this._Path__33.layerDepth = 0
	this._Path__33.layerIndex = 45
	this._Path__33.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__33).wait(150));

	// _Path__34_obj_
	this._Path__34 = new lib.Symbol_5__Path__34();
	this._Path__34.name = "_Path__34";
	this._Path__34.parent = this;
	this._Path__34.depth = 0;
	this._Path__34.isAttachedToCamera = 0
	this._Path__34.isAttachedToMask = 0
	this._Path__34.layerDepth = 0
	this._Path__34.layerIndex = 46
	this._Path__34.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__34).wait(150));

	// _Path__35_obj_
	this._Path__35 = new lib.Symbol_5__Path__35();
	this._Path__35.name = "_Path__35";
	this._Path__35.parent = this;
	this._Path__35.depth = 0;
	this._Path__35.isAttachedToCamera = 0
	this._Path__35.isAttachedToMask = 0
	this._Path__35.layerDepth = 0
	this._Path__35.layerIndex = 47
	this._Path__35.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__35).wait(150));

	// _Path__36_obj_
	this._Path__36 = new lib.Symbol_5__Path__36();
	this._Path__36.name = "_Path__36";
	this._Path__36.parent = this;
	this._Path__36.depth = 0;
	this._Path__36.isAttachedToCamera = 0
	this._Path__36.isAttachedToMask = 0
	this._Path__36.layerDepth = 0
	this._Path__36.layerIndex = 48
	this._Path__36.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__36).wait(150));

	// _Path__37_obj_
	this._Path__37 = new lib.Symbol_5__Path__37();
	this._Path__37.name = "_Path__37";
	this._Path__37.parent = this;
	this._Path__37.depth = 0;
	this._Path__37.isAttachedToCamera = 0
	this._Path__37.isAttachedToMask = 0
	this._Path__37.layerDepth = 0
	this._Path__37.layerIndex = 49
	this._Path__37.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__37).wait(150));

	// _Path__38_obj_
	this._Path__38 = new lib.Symbol_5__Path__38();
	this._Path__38.name = "_Path__38";
	this._Path__38.parent = this;
	this._Path__38.depth = 0;
	this._Path__38.isAttachedToCamera = 0
	this._Path__38.isAttachedToMask = 0
	this._Path__38.layerDepth = 0
	this._Path__38.layerIndex = 50
	this._Path__38.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__38).wait(150));

	// _Path__39_obj_
	this._Path__39 = new lib.Symbol_5__Path__39();
	this._Path__39.name = "_Path__39";
	this._Path__39.parent = this;
	this._Path__39.depth = 0;
	this._Path__39.isAttachedToCamera = 0
	this._Path__39.isAttachedToMask = 0
	this._Path__39.layerDepth = 0
	this._Path__39.layerIndex = 51
	this._Path__39.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__39).wait(150));

	// _Path__40_obj_
	this._Path__40 = new lib.Symbol_5__Path__40();
	this._Path__40.name = "_Path__40";
	this._Path__40.parent = this;
	this._Path__40.depth = 0;
	this._Path__40.isAttachedToCamera = 0
	this._Path__40.isAttachedToMask = 0
	this._Path__40.layerDepth = 0
	this._Path__40.layerIndex = 52
	this._Path__40.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__40).wait(150));

	// _Path__41_obj_
	this._Path__41 = new lib.Symbol_5__Path__41();
	this._Path__41.name = "_Path__41";
	this._Path__41.parent = this;
	this._Path__41.depth = 0;
	this._Path__41.isAttachedToCamera = 0
	this._Path__41.isAttachedToMask = 0
	this._Path__41.layerDepth = 0
	this._Path__41.layerIndex = 53
	this._Path__41.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__41).wait(150));

	// _Path__42_obj_
	this._Path__42 = new lib.Symbol_5__Path__42();
	this._Path__42.name = "_Path__42";
	this._Path__42.parent = this;
	this._Path__42.depth = 0;
	this._Path__42.isAttachedToCamera = 0
	this._Path__42.isAttachedToMask = 0
	this._Path__42.layerDepth = 0
	this._Path__42.layerIndex = 54
	this._Path__42.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__42).wait(150));

	// _Path__43_obj_
	this._Path__43 = new lib.Symbol_5__Path__43();
	this._Path__43.name = "_Path__43";
	this._Path__43.parent = this;
	this._Path__43.depth = 0;
	this._Path__43.isAttachedToCamera = 0
	this._Path__43.isAttachedToMask = 0
	this._Path__43.layerDepth = 0
	this._Path__43.layerIndex = 55
	this._Path__43.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__43).wait(150));

	// _Path__44_obj_
	this._Path__44 = new lib.Symbol_5__Path__44();
	this._Path__44.name = "_Path__44";
	this._Path__44.parent = this;
	this._Path__44.depth = 0;
	this._Path__44.isAttachedToCamera = 0
	this._Path__44.isAttachedToMask = 0
	this._Path__44.layerDepth = 0
	this._Path__44.layerIndex = 56
	this._Path__44.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__44).wait(150));

	// _Path__45_obj_
	this._Path__45 = new lib.Symbol_5__Path__45();
	this._Path__45.name = "_Path__45";
	this._Path__45.parent = this;
	this._Path__45.depth = 0;
	this._Path__45.isAttachedToCamera = 0
	this._Path__45.isAttachedToMask = 0
	this._Path__45.layerDepth = 0
	this._Path__45.layerIndex = 57
	this._Path__45.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__45).wait(150));

	// _Path__46_obj_
	this._Path__46 = new lib.Symbol_5__Path__46();
	this._Path__46.name = "_Path__46";
	this._Path__46.parent = this;
	this._Path__46.depth = 0;
	this._Path__46.isAttachedToCamera = 0
	this._Path__46.isAttachedToMask = 0
	this._Path__46.layerDepth = 0
	this._Path__46.layerIndex = 58
	this._Path__46.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__46).wait(150));

	// _Path__47_obj_
	this._Path__47 = new lib.Symbol_5__Path__47();
	this._Path__47.name = "_Path__47";
	this._Path__47.parent = this;
	this._Path__47.depth = 0;
	this._Path__47.isAttachedToCamera = 0
	this._Path__47.isAttachedToMask = 0
	this._Path__47.layerDepth = 0
	this._Path__47.layerIndex = 59
	this._Path__47.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__47).wait(150));

	// _Path__48_obj_
	this._Path__48 = new lib.Symbol_5__Path__48();
	this._Path__48.name = "_Path__48";
	this._Path__48.parent = this;
	this._Path__48.depth = 0;
	this._Path__48.isAttachedToCamera = 0
	this._Path__48.isAttachedToMask = 0
	this._Path__48.layerDepth = 0
	this._Path__48.layerIndex = 60
	this._Path__48.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__48).wait(150));

	// _Path__49_obj_
	this._Path__49 = new lib.Symbol_5__Path__49();
	this._Path__49.name = "_Path__49";
	this._Path__49.parent = this;
	this._Path__49.depth = 0;
	this._Path__49.isAttachedToCamera = 0
	this._Path__49.isAttachedToMask = 0
	this._Path__49.layerDepth = 0
	this._Path__49.layerIndex = 61
	this._Path__49.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__49).wait(150));

	// _Path__50_obj_
	this._Path__50 = new lib.Symbol_5__Path__50();
	this._Path__50.name = "_Path__50";
	this._Path__50.parent = this;
	this._Path__50.depth = 0;
	this._Path__50.isAttachedToCamera = 0
	this._Path__50.isAttachedToMask = 0
	this._Path__50.layerDepth = 0
	this._Path__50.layerIndex = 62
	this._Path__50.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__50).wait(150));

	// _Path__51_obj_
	this._Path__51 = new lib.Symbol_5__Path__51();
	this._Path__51.name = "_Path__51";
	this._Path__51.parent = this;
	this._Path__51.depth = 0;
	this._Path__51.isAttachedToCamera = 0
	this._Path__51.isAttachedToMask = 0
	this._Path__51.layerDepth = 0
	this._Path__51.layerIndex = 63
	this._Path__51.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__51).wait(150));

	// _Path__52_obj_
	this._Path__52 = new lib.Symbol_5__Path__52();
	this._Path__52.name = "_Path__52";
	this._Path__52.parent = this;
	this._Path__52.depth = 0;
	this._Path__52.isAttachedToCamera = 0
	this._Path__52.isAttachedToMask = 0
	this._Path__52.layerDepth = 0
	this._Path__52.layerIndex = 64
	this._Path__52.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__52).wait(150));

	// _Path__53_obj_
	this._Path__53 = new lib.Symbol_5__Path__53();
	this._Path__53.name = "_Path__53";
	this._Path__53.parent = this;
	this._Path__53.depth = 0;
	this._Path__53.isAttachedToCamera = 0
	this._Path__53.isAttachedToMask = 0
	this._Path__53.layerDepth = 0
	this._Path__53.layerIndex = 65
	this._Path__53.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__53).wait(150));

	// _Path__54_obj_
	this._Path__54 = new lib.Symbol_5__Path__54();
	this._Path__54.name = "_Path__54";
	this._Path__54.parent = this;
	this._Path__54.depth = 0;
	this._Path__54.isAttachedToCamera = 0
	this._Path__54.isAttachedToMask = 0
	this._Path__54.layerDepth = 0
	this._Path__54.layerIndex = 66
	this._Path__54.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__54).wait(150));

	// _Path__55_obj_
	this._Path__55 = new lib.Symbol_5__Path__55();
	this._Path__55.name = "_Path__55";
	this._Path__55.parent = this;
	this._Path__55.depth = 0;
	this._Path__55.isAttachedToCamera = 0
	this._Path__55.isAttachedToMask = 0
	this._Path__55.layerDepth = 0
	this._Path__55.layerIndex = 67
	this._Path__55.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__55).wait(150));

	// _Path__56_obj_
	this._Path__56 = new lib.Symbol_5__Path__56();
	this._Path__56.name = "_Path__56";
	this._Path__56.parent = this;
	this._Path__56.depth = 0;
	this._Path__56.isAttachedToCamera = 0
	this._Path__56.isAttachedToMask = 0
	this._Path__56.layerDepth = 0
	this._Path__56.layerIndex = 68
	this._Path__56.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__56).wait(150));

	// _Path__57_obj_
	this._Path__57 = new lib.Symbol_5__Path__57();
	this._Path__57.name = "_Path__57";
	this._Path__57.parent = this;
	this._Path__57.depth = 0;
	this._Path__57.isAttachedToCamera = 0
	this._Path__57.isAttachedToMask = 0
	this._Path__57.layerDepth = 0
	this._Path__57.layerIndex = 69
	this._Path__57.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__57).wait(150));

	// _Path__58_obj_
	this._Path__58 = new lib.Symbol_5__Path__58();
	this._Path__58.name = "_Path__58";
	this._Path__58.parent = this;
	this._Path__58.depth = 0;
	this._Path__58.isAttachedToCamera = 0
	this._Path__58.isAttachedToMask = 0
	this._Path__58.layerDepth = 0
	this._Path__58.layerIndex = 70
	this._Path__58.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__58).wait(150));

	// _Path__59_obj_
	this._Path__59 = new lib.Symbol_5__Path__59();
	this._Path__59.name = "_Path__59";
	this._Path__59.parent = this;
	this._Path__59.depth = 0;
	this._Path__59.isAttachedToCamera = 0
	this._Path__59.isAttachedToMask = 0
	this._Path__59.layerDepth = 0
	this._Path__59.layerIndex = 71
	this._Path__59.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__59).wait(150));

	// _Path__60_obj_
	this._Path__60 = new lib.Symbol_5__Path__60();
	this._Path__60.name = "_Path__60";
	this._Path__60.parent = this;
	this._Path__60.depth = 0;
	this._Path__60.isAttachedToCamera = 0
	this._Path__60.isAttachedToMask = 0
	this._Path__60.layerDepth = 0
	this._Path__60.layerIndex = 72
	this._Path__60.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__60).wait(150));

	// _Path__61_obj_
	this._Path__61 = new lib.Symbol_5__Path__61();
	this._Path__61.name = "_Path__61";
	this._Path__61.parent = this;
	this._Path__61.depth = 0;
	this._Path__61.isAttachedToCamera = 0
	this._Path__61.isAttachedToMask = 0
	this._Path__61.layerDepth = 0
	this._Path__61.layerIndex = 73
	this._Path__61.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__61).wait(150));

	// _Path__62_obj_
	this._Path__62 = new lib.Symbol_5__Path__62();
	this._Path__62.name = "_Path__62";
	this._Path__62.parent = this;
	this._Path__62.depth = 0;
	this._Path__62.isAttachedToCamera = 0
	this._Path__62.isAttachedToMask = 0
	this._Path__62.layerDepth = 0
	this._Path__62.layerIndex = 74
	this._Path__62.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__62).wait(150));

	// _Path__63_obj_
	this._Path__63 = new lib.Symbol_5__Path__63();
	this._Path__63.name = "_Path__63";
	this._Path__63.parent = this;
	this._Path__63.depth = 0;
	this._Path__63.isAttachedToCamera = 0
	this._Path__63.isAttachedToMask = 0
	this._Path__63.layerDepth = 0
	this._Path__63.layerIndex = 75
	this._Path__63.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__63).wait(150));

	// _Path__64_obj_
	this._Path__64 = new lib.Symbol_5__Path__64();
	this._Path__64.name = "_Path__64";
	this._Path__64.parent = this;
	this._Path__64.depth = 0;
	this._Path__64.isAttachedToCamera = 0
	this._Path__64.isAttachedToMask = 0
	this._Path__64.layerDepth = 0
	this._Path__64.layerIndex = 76
	this._Path__64.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__64).wait(150));

	// _Path__65_obj_
	this._Path__65 = new lib.Symbol_5__Path__65();
	this._Path__65.name = "_Path__65";
	this._Path__65.parent = this;
	this._Path__65.depth = 0;
	this._Path__65.isAttachedToCamera = 0
	this._Path__65.isAttachedToMask = 0
	this._Path__65.layerDepth = 0
	this._Path__65.layerIndex = 77
	this._Path__65.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__65).wait(150));

	// _Path__66_obj_
	this._Path__66 = new lib.Symbol_5__Path__66();
	this._Path__66.name = "_Path__66";
	this._Path__66.parent = this;
	this._Path__66.depth = 0;
	this._Path__66.isAttachedToCamera = 0
	this._Path__66.isAttachedToMask = 0
	this._Path__66.layerDepth = 0
	this._Path__66.layerIndex = 78
	this._Path__66.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__66).wait(150));

	// _Path__67_obj_
	this._Path__67 = new lib.Symbol_5__Path__67();
	this._Path__67.name = "_Path__67";
	this._Path__67.parent = this;
	this._Path__67.depth = 0;
	this._Path__67.isAttachedToCamera = 0
	this._Path__67.isAttachedToMask = 0
	this._Path__67.layerDepth = 0
	this._Path__67.layerIndex = 79
	this._Path__67.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__67).wait(150));

	// _Path__68_obj_
	this._Path__68 = new lib.Symbol_5__Path__68();
	this._Path__68.name = "_Path__68";
	this._Path__68.parent = this;
	this._Path__68.depth = 0;
	this._Path__68.isAttachedToCamera = 0
	this._Path__68.isAttachedToMask = 0
	this._Path__68.layerDepth = 0
	this._Path__68.layerIndex = 80
	this._Path__68.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__68).wait(150));

	// _Path__69_obj_
	this._Path__69 = new lib.Symbol_5__Path__69();
	this._Path__69.name = "_Path__69";
	this._Path__69.parent = this;
	this._Path__69.depth = 0;
	this._Path__69.isAttachedToCamera = 0
	this._Path__69.isAttachedToMask = 0
	this._Path__69.layerDepth = 0
	this._Path__69.layerIndex = 81
	this._Path__69.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__69).wait(150));

	// _Path__70_obj_
	this._Path__70 = new lib.Symbol_5__Path__70();
	this._Path__70.name = "_Path__70";
	this._Path__70.parent = this;
	this._Path__70.depth = 0;
	this._Path__70.isAttachedToCamera = 0
	this._Path__70.isAttachedToMask = 0
	this._Path__70.layerDepth = 0
	this._Path__70.layerIndex = 82
	this._Path__70.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__70).wait(150));

	// _Path__71_obj_
	this._Path__71 = new lib.Symbol_5__Path__71();
	this._Path__71.name = "_Path__71";
	this._Path__71.parent = this;
	this._Path__71.depth = 0;
	this._Path__71.isAttachedToCamera = 0
	this._Path__71.isAttachedToMask = 0
	this._Path__71.layerDepth = 0
	this._Path__71.layerIndex = 83
	this._Path__71.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__71).wait(150));

	// _Path__72_obj_
	this._Path__72 = new lib.Symbol_5__Path__72();
	this._Path__72.name = "_Path__72";
	this._Path__72.parent = this;
	this._Path__72.depth = 0;
	this._Path__72.isAttachedToCamera = 0
	this._Path__72.isAttachedToMask = 0
	this._Path__72.layerDepth = 0
	this._Path__72.layerIndex = 84
	this._Path__72.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__72).wait(150));

	// _Path__73_obj_
	this._Path__73 = new lib.Symbol_5__Path__73();
	this._Path__73.name = "_Path__73";
	this._Path__73.parent = this;
	this._Path__73.depth = 0;
	this._Path__73.isAttachedToCamera = 0
	this._Path__73.isAttachedToMask = 0
	this._Path__73.layerDepth = 0
	this._Path__73.layerIndex = 85
	this._Path__73.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__73).wait(150));

	// _Path__74_obj_
	this._Path__74 = new lib.Symbol_5__Path__74();
	this._Path__74.name = "_Path__74";
	this._Path__74.parent = this;
	this._Path__74.depth = 0;
	this._Path__74.isAttachedToCamera = 0
	this._Path__74.isAttachedToMask = 0
	this._Path__74.layerDepth = 0
	this._Path__74.layerIndex = 86
	this._Path__74.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__74).wait(150));

	// _Path__75_obj_
	this._Path__75 = new lib.Symbol_5__Path__75();
	this._Path__75.name = "_Path__75";
	this._Path__75.parent = this;
	this._Path__75.depth = 0;
	this._Path__75.isAttachedToCamera = 0
	this._Path__75.isAttachedToMask = 0
	this._Path__75.layerDepth = 0
	this._Path__75.layerIndex = 87
	this._Path__75.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__75).wait(150));

	// _Path__76_obj_
	this._Path__76 = new lib.Symbol_5__Path__76();
	this._Path__76.name = "_Path__76";
	this._Path__76.parent = this;
	this._Path__76.depth = 0;
	this._Path__76.isAttachedToCamera = 0
	this._Path__76.isAttachedToMask = 0
	this._Path__76.layerDepth = 0
	this._Path__76.layerIndex = 88
	this._Path__76.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__76).wait(150));

	// _Path__77_obj_
	this._Path__77 = new lib.Symbol_5__Path__77();
	this._Path__77.name = "_Path__77";
	this._Path__77.parent = this;
	this._Path__77.depth = 0;
	this._Path__77.isAttachedToCamera = 0
	this._Path__77.isAttachedToMask = 0
	this._Path__77.layerDepth = 0
	this._Path__77.layerIndex = 89
	this._Path__77.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__77).wait(150));

	// _Path__78_obj_
	this._Path__78 = new lib.Symbol_5__Path__78();
	this._Path__78.name = "_Path__78";
	this._Path__78.parent = this;
	this._Path__78.depth = 0;
	this._Path__78.isAttachedToCamera = 0
	this._Path__78.isAttachedToMask = 0
	this._Path__78.layerDepth = 0
	this._Path__78.layerIndex = 90
	this._Path__78.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__78).wait(150));

	// _Path__79_obj_
	this._Path__79 = new lib.Symbol_5__Path__79();
	this._Path__79.name = "_Path__79";
	this._Path__79.parent = this;
	this._Path__79.depth = 0;
	this._Path__79.isAttachedToCamera = 0
	this._Path__79.isAttachedToMask = 0
	this._Path__79.layerDepth = 0
	this._Path__79.layerIndex = 91
	this._Path__79.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__79).wait(150));

	// _Path__80_obj_
	this._Path__80 = new lib.Symbol_5__Path__80();
	this._Path__80.name = "_Path__80";
	this._Path__80.parent = this;
	this._Path__80.depth = 0;
	this._Path__80.isAttachedToCamera = 0
	this._Path__80.isAttachedToMask = 0
	this._Path__80.layerDepth = 0
	this._Path__80.layerIndex = 92
	this._Path__80.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__80).wait(150));

	// _Path__81_obj_
	this._Path__81 = new lib.Symbol_5__Path__81();
	this._Path__81.name = "_Path__81";
	this._Path__81.parent = this;
	this._Path__81.depth = 0;
	this._Path__81.isAttachedToCamera = 0
	this._Path__81.isAttachedToMask = 0
	this._Path__81.layerDepth = 0
	this._Path__81.layerIndex = 93
	this._Path__81.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__81).wait(150));

	// _Path__82_obj_
	this._Path__82 = new lib.Symbol_5__Path__82();
	this._Path__82.name = "_Path__82";
	this._Path__82.parent = this;
	this._Path__82.depth = 0;
	this._Path__82.isAttachedToCamera = 0
	this._Path__82.isAttachedToMask = 0
	this._Path__82.layerDepth = 0
	this._Path__82.layerIndex = 94
	this._Path__82.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__82).wait(150));

	// _Path__83_obj_
	this._Path__83 = new lib.Symbol_5__Path__83();
	this._Path__83.name = "_Path__83";
	this._Path__83.parent = this;
	this._Path__83.depth = 0;
	this._Path__83.isAttachedToCamera = 0
	this._Path__83.isAttachedToMask = 0
	this._Path__83.layerDepth = 0
	this._Path__83.layerIndex = 95
	this._Path__83.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__83).wait(150));

	// _Path__84_obj_
	this._Path__84 = new lib.Symbol_5__Path__84();
	this._Path__84.name = "_Path__84";
	this._Path__84.parent = this;
	this._Path__84.depth = 0;
	this._Path__84.isAttachedToCamera = 0
	this._Path__84.isAttachedToMask = 0
	this._Path__84.layerDepth = 0
	this._Path__84.layerIndex = 96
	this._Path__84.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this._Path__84).wait(150));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(800,450,1,1,0,0,0,800,450);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 97
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_258 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(258).call(this.frame_258).wait(1));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("AokAYIAAgvIRJAAIAAAvg");
	var mask_graphics_8 = new cjs.Graphics().p("AokAfIAAg8IRJAAIAAA8g");
	var mask_graphics_9 = new cjs.Graphics().p("AokAlIAAhJIRJAAIAABJg");
	var mask_graphics_10 = new cjs.Graphics().p("AokArIAAhVIRJAAIAABVg");
	var mask_graphics_11 = new cjs.Graphics().p("AokAyIAAhiIRJAAIAABig");
	var mask_graphics_12 = new cjs.Graphics().p("AokA4IAAhvIRJAAIAABvg");
	var mask_graphics_13 = new cjs.Graphics().p("AokA+IAAh7IRJAAIAAB7g");
	var mask_graphics_14 = new cjs.Graphics().p("AokBEIAAiHIRJAAIAACHg");
	var mask_graphics_15 = new cjs.Graphics().p("AokBLIAAiVIRJAAIAACVg");
	var mask_graphics_16 = new cjs.Graphics().p("AokBRIAAihIRJAAIAAChg");
	var mask_graphics_17 = new cjs.Graphics().p("AokBXIAAitIRJAAIAACtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:-183.525,y:16.1}).wait(1).to({graphics:mask_graphics_8,x:-183.525,y:15.45}).wait(1).to({graphics:mask_graphics_9,x:-183.525,y:14.825}).wait(1).to({graphics:mask_graphics_10,x:-183.525,y:14.175}).wait(1).to({graphics:mask_graphics_11,x:-183.525,y:13.55}).wait(1).to({graphics:mask_graphics_12,x:-183.525,y:12.925}).wait(1).to({graphics:mask_graphics_13,x:-183.525,y:12.25}).wait(1).to({graphics:mask_graphics_14,x:-183.525,y:11.625}).wait(1).to({graphics:mask_graphics_15,x:-183.525,y:10.975}).wait(1).to({graphics:mask_graphics_16,x:-183.525,y:10.35}).wait(1).to({graphics:mask_graphics_17,x:-183.525,y:9.7}).wait(242));

	// Layer_7_obj_
	this.Layer_7 = new lib.Symbol_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 0
	this.Layer_7.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(259));

	// Layer_16 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().p("AAQA7QgDAJgEAAQgFAAgEgMQgCAMgGAAQgEAAgDgJQgDAJgEAAQgHAAgEgUQgEgUgBgcQABgbAEgUQAEgUAHAAQAEAAADAJQADgJAEAAQAGAAACANQAEgNAFAAQAEAAADAJQAEgJADAAQAHAAAEAUQAFAUAAAbQAAAcgFAUQgEAUgHAAQgDAAgEgJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AwLBFQgFAIgGAAQgJAAgHgUIgDgLQgGANgHAAQgGAAgFgJQgFAJgGAAQgIAAgFgMQgGAMgHAAQgGAAgFgJQgFAJgGAAQgJAAgHgUQgGgUAAgbQAAgcAGgUQAHgUAJAAQAGAAAFAJQAFgJAGAAQAHAAAGANQAFgNAIAAQAGAAAFAJQAFgJAGAAQAJAAAGAUIAEAMQAFgOAIAAQAGAAAFAJQAFgJAGAAQAJAAAHAUQAGAUAAAbQAAAcgGAUQgHAUgJAAQgGAAgFgIg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AD0BFQgQAIgSAAQgdAAgUgUIgEgFIgGAFQgTAUgcAAQgTAAgPgIQgPAIgTAAQgcAAgTgUIgKgLQgRANgYAAQgSAAgPgJQgQAJgTAAQgWAAgRgMQgRAMgXAAQgSAAgPgJQgQAJgSAAQgcAAgVgUQgTgUgBgbQABgcATgUQAVgUAcAAQASAAAQAJQAPgJASAAQAXAAARANQARgNAWAAQATAAAQAJQAPgJASAAQAdAAATAUIAKAMQARgOAXAAQATAAAPAJQAPgJATAAQAcAAATAUIAGAFIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAAUAUQAVAUAAAbQAAAcgVAUQgUAUgcAAQgTAAgOgIg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AFOBFQgQAIgSAAQgcAAgVgUIgIgJIgIAJQgUAUgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgSAAgOgIQgQAIgTAAQgcAAgUgUIgJgLQgSANgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgMQgRAMgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgUQgUgUAAgbQAAgcAUgUQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgOAXAAQATAAAQAJQAOgJASAAQAcAAAUAUIAFAFIAEgFQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAAUAUIAIAKIAIgKQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgSAAgPgIg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjVBFIgNAGIgVACQgTAAgPgIQgPAIgTAAQgbAAgUgTQgTATgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgIgJIgIAJQgUAUgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgIQgQAIgTAAQgcAAgUgUIgJgLQgSANgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgMQgRAMgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgUQgUgUAAgbQAAgcAUgUQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgOAXAAQATAAAQAJQAOgJATAAQAcAAAUAUIAFAFIAEgFQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAAUAUIAIAKIAIgKQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAATATQAUgTAbAAQATAAAPAJIAGgDIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIAEQAPgJATAAQAcAAATAUQAVAUAAAbQAAAcgVAUQgTAUgcAAQgTAAgPgIg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjVBFIgNAGIgVACQgTAAgPgIQgPAIgTAAQgbAAgUgTQgTATgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgIgJIgIAJQgUAUgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgIQgQAIgTAAQgcAAgUgUIgJgLQgSANgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgMQgRAMgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgUQgUgUAAgbQAAgcAUgUQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgOAXAAQATAAAQAJQAOgJATAAQAcAAAUAUIAFAFIAEgFQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAAUAUIAIAKIAIgKQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAATATQAUgTAbAAQATAAAPAJIAGgDIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIAEQAPgJATAAQAQAAANAHIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAATAUQAUAUAAAcQAAAbgUAUQgTAUgcAAQgTAAgOgJQgQAJgSAAQgQAAgOgGIgFAEQgTAUgcAAQgTAAgPgIg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AIyCSQgPAJgTAAQgcAAgUgVQgUgTAAgcIAAgCQgQgEgNgNQgUgUAAgdQAAgWAPgTIgGgCIgFAEQgTAUgcAAQgTAAgPgIIgNAGIgVACQgTAAgPgIQgPAIgTAAQgbAAgUgTQgTATgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgIgJIgIAJQgTAUgcAAQgSAAgPgIQgQAIgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgIQgQAIgTAAQgcAAgUgUIgJgLQgSANgYAAQgSABgPgKQgPAKgTgBQgXAAgRgMQgRAMgWAAQgTABgPgKQgPAKgTgBQgcABgUgVQgUgTAAgcQAAgdAUgUQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgOAXAAQATAAAQAJQAOgJATAAQAcAAAUAUIAFAGIAEgGQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAATAUIAIAKIAIgKQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAATATQAUgTAbAAQATAAAPAJIAGgCIALgFQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJAEIABABIAIADQAPgJATAAQAQABANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAAUAUQAUAUAAAdQAAAXgOASQANAFALALQAUAUAAAbIAAACQAQAEANANQAUAVAAAcQAAAcgUATQgUAVgcAAQgTAAgPgJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AGbCfQgPAJgTAAQgcAAgUgUQgUgUAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJIAHgDQgHgOAAgQQAAgXAPgTIgGgCIgFAFQgTAUgcAAQgTAAgPgJIgNAGIgVADQgTAAgPgJQgPAJgTAAQgbAAgUgTQgTATgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgIgKIgIAKQgTAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgJQgQAJgTAAQgcAAgUgUIgJgMQgSAOgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgNQgRANgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgVQgUgTAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAQAIQAOgIATAAQAcAAAUATIAFAGIAEgGQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATATIAIAKIAIgKQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATASQAUgSAbAAQATAAAPAIIAGgCIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAPgIATAAQAQAAANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAAUAUQAUAVAAAcQAAAYgOASQANAEALALQAUAVAAAbIAAABQAQAFANAMQAUAVAAAcQAAAcgUAUQgUAUgcAAQgTAAgPgJQgPAJgTAAQgOAAgMgFIgKALQgTAUgcAAQgTAAgPgJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiICfQgPAJgTAAQgcAAgUgUIgJgLQgRALgVAAQgSAAgPgJQgQAJgSAAQgcAAgVgUQgUgUAAgcQAAgcAUgVQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAKALQAQgLAVAAQATAAAPAJIAHgDQgHgOAAgQQAAgXAPgTIgGgCIgFAFQgTAUgcAAQgTAAgPgJIgNAGIgVADQgTAAgPgJQgPAJgTAAQgbAAgUgTQgTATgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgIgKIgIAKQgUAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgJQgQAJgTAAQgcAAgUgUIgJgMQgSAOgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgNQgRANgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgVQgUgTAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAQAIQAOgIATAAQAcAAAUATIAFAGIAEgGQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAIAKIAIgKQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATASQAUgSAbAAQATAAAPAIIAGgCIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAPgIATAAQAQAAANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAATAUQAUAVAAAcQAAAYgOASQANAEALALQAUAVAAAbIAAABQAQAFANAMQAUAVAAAcQAAAcgUAUQgUAUgcAAQgTAAgPgJQgOAJgTAAQgOAAgMgFIgKALQgTAUgcAAQgTAAgPgJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AiICfQgPAJgTAAQgcAAgUgUIgJgLQgRALgVAAQgSAAgPgJQgQAJgSAAQgcAAgUgUQgUAUgcAAQgTAAgPgJQgPAJgTAAQgcAAgUgUQgUgUAAgcQAAgcAUgVQAUgTAcAAQATAAAPAIQAPgIATAAQAcAAAUATQAUgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAKALQAQgLAVAAQATAAAPAJIAHgDQgHgOAAgQQAAgXAPgTIgGgCIgFAFQgTAUgcAAQgTAAgPgJIgNAGIgVADQgTAAgPgJQgPAJgTAAQgbAAgUgTQgTATgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgIgKIgIAKQgUAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgJQgQAJgTAAQgcAAgUgUIgJgMQgSAOgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgNQgRANgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgVQgUgTAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAQAIQAOgIATAAQAcAAAUATIAFAGIAEgGQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAIAKIAIgKQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATASQAUgSAbAAQATAAAPAIIAGgCIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAPgIATAAQAQAAANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAATAUQAUAVAAAcQAAAYgOASQANAEALALQAUAVAAAbIAAABQAQAFANAMQAUAVAAAcQAAAcgUAUQgUAUgcAAQgTAAgPgJQgOAJgTAAQgOAAgMgFIgKALQgTAUgcAAQgTAAgPgJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AiICfQgPAJgTAAQgcAAgUgUIgJgLQgRALgVAAQgSAAgPgJQgQAJgSAAQgcAAgUgUQgUAUgcAAQgTAAgPgJQgPAJgTAAQgUAAgQgKIgJAKQgUAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUQgTgUAAgcQAAgcATgVQAVgUAcAAQASAAAQAJQAPgJASAAQAVAAAQALQADgGAFgFQAUgTAcAAQATAAAPAIQAPgIATAAQAcAAAUATQAUgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAKALQAQgLAVAAQATAAAPAJIAHgDQgHgOAAgQQAAgXAPgTIgGgCIgFAFQgTAUgcAAQgTAAgPgJIgNAGIgVADQgTAAgPgJQgPAJgTAAQgbAAgUgTQgTATgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgIgKIgIAKQgUAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgJQgQAJgTAAQgcAAgUgUIgJgMQgSAOgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgNQgRANgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgVQgUgTAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAQAIQAOgIATAAQAcAAAUATIAFAGIAEgGQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAIAKIAIgKQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATASQAUgSAbAAQATAAAPAIIAGgCIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAPgIATAAQAQAAANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAATAUQAUAVAAAcQAAAYgOASQANAEALALQAUAVAAAbIAAABQAQAFANAMQAUAVAAAcQAAAcgUAUQgUAUgcAAQgTAAgPgJQgOAJgTAAQgOAAgMgFIgKALQgTAUgcAAQgTAAgPgJg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AiICfQgPAJgTAAQgcAAgUgUIgJgLQgRALgVAAQgSAAgPgJQgQAJgSAAQgcAAgUgUQgUAUgcAAQgTAAgPgJQgPAJgTAAQgUAAgQgKIgJAKQgUAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgDgEQgOAHgRAAQgSAAgPgJQgQAJgSAAQgcAAgVgVQgUgTAAgcQAAgcAUgVQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAAUAUIAEAFQAOgIARAAQASAAAQAJQAPgJASAAQAVAAAQALQADgGAFgFQAUgTAcAAQATAAAPAIQAPgIATAAQAcAAAUATQAUgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAKALQAQgLAVAAQATAAAPAJIAHgDQgHgOAAgQQAAgXAPgTIgGgCIgFAFQgTAUgcAAQgTAAgPgJIgNAGIgVADQgTAAgPgJQgPAJgTAAQgbAAgUgTQgTATgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgIgKIgIAKQgUAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgJQgQAJgTAAQgcAAgUgUIgJgMQgSAOgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgNQgRANgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgVQgUgTAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAQAIQAOgIATAAQAcAAAUATIAFAGIAEgGQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAIAKIAIgKQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATASQAUgSAbAAQATAAAPAIIAGgCIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAPgIATAAQAQAAANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAATAUQAUAVAAAcQAAAYgOASQANAEALALQAUAVAAAbIAAABQAQAFANAMQAUAVAAAcQAAAcgUAUQgUAUgcAAQgTAAgPgJQgOAJgTAAQgOAAgMgFIgKALQgTAUgcAAQgTAAgPgJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AGbCfQgPAJgTAAQgcAAgUgUIgJgLQgRALgVAAQgSAAgPgJQgQAJgSAAQgcAAgUgUQgUAUgcAAQgTAAgPgJQgPAJgTAAQgUAAgQgKIgJAKQgTAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgDgEQgOAHgRAAQgSAAgPgJQgQAJgSAAQgXAAgSgNIgIAKQgUAUgcAAQgTAAgPgJQgPAJgTAAQgcAAgUgUQgUgUAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAASAOIAIgLQAVgUAcAAQASAAAQAJQAPgJASAAQAcAAAUAUIAEAFQAOgIARAAQASAAAQAJQAPgJASAAQAVAAAQALQADgGAEgFQAUgTAcAAQATAAAPAIQAPgIATAAQAcAAAUATQAUgTAcAAQASAAAQAIQAPgIASAAQAcAAAUATIAKALQAQgLAVAAQATAAAPAJIAHgDQgHgOAAgQQAAgXAPgTIgGgCIgFAFQgTAUgcAAQgTAAgPgJIgNAGIgVADQgTAAgPgJQgPAJgTAAQgbAAgUgTQgTATgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgIgKIgIAKQgTAUgcAAQgSAAgPgJQgQAJgSAAQgcAAgVgUIgEgFIgFAFQgUAUgcAAQgTAAgOgJQgQAJgTAAQgcAAgUgUIgJgMQgSAOgYAAQgSAAgPgJQgPAJgTAAQgXAAgRgNQgRANgWAAQgTAAgPgJQgPAJgTAAQgcAAgUgVQgUgTAAgcQAAgcAUgVQAUgUAcAAQATAAAPAJQAPgJATAAQAWAAARANQARgNAXAAQATAAAPAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAQAIQAOgIATAAQAcAAAUATIAFAGIAEgGQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATATIAIAKIAIgKQAVgTAcAAQASAAAQAIQAPgIASAAQAcAAATASQAUgSAbAAQATAAAPAIIAGgCIALgEQAIgCAJAAIABAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAPgIATAAQAQAAANAGIAEgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAAUAUQAUAVAAAcQAAAYgOASQANAEALALQAUAVAAAbIAAABQAQAFANAMQAUAVAAAcQAAAcgUAUQgUAUgcAAQgTAAgPgJQgPAJgTAAQgOAAgMgFIgKALQgTAUgcAAQgTAAgPgJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AGkCfQgQAJgSAAQgcAAgVgUIgJgLQgQALgVAAQgTAAgOgJQgQAJgSAAQgcAAgVgUQgTAUgdAAQgSAAgPgJQgPAJgTAAQgUAAgQgKIgJAKQgTAUgcAAQgTAAgOgJQgQAJgSAAQgdAAgUgUIgDgEQgPAHgQAAQgSAAgPgJQgQAJgTAAQgWAAgSgNIgIAKQgVAUgcAAQgSAAgPgJQgPAJgTAAQgcAAgVgUQgIgJgEgJQgFAJgIAJQgUAUgcAAQgTAAgPgJQgPAJgTAAQgcAAgVgUQgTgUAAgcQAAgcATgVQAVgUAcAAQATAAAPAJQAPgJATAAQAcAAAUAUQAIAJAFAJQAEgJAIgJQAVgUAcAAQATAAAPAJQAPgJASAAQAXAAASAOIAIgLQAVgUAbAAQATAAAQAJQAPgJASAAQAcAAAUAUIADAFQAPgIARAAQASAAAQAJQAOgJATAAQAUAAAPALQAEgGAEgFQAVgTAcAAQATAAAPAIQAPgIASAAQAdAAATATQAVgTAcAAQASAAAQAIQAOgIATAAQAcAAAUATIAKALQAQgLAVAAQASAAAQAJIAHgDQgHgOAAgQQAAgXAOgTIgFgCIgFAFQgUAUgbAAQgUAAgOgJIgNAGIgWADQgSAAgPgJQgPAJgTAAQgbAAgVgTQgSATgcAAQgTAAgOgJQgQAJgSAAQgdAAgUgUIgIgKIgIAKQgTAUgcAAQgTAAgOgJQgQAJgSAAQgdAAgUgUIgEgFIgGAFQgTAUgcAAQgTAAgPgJQgPAJgTAAQgcAAgUgUIgKgMQgRAOgYAAQgSAAgPgJQgQAJgTAAQgWAAgRgNQgRANgXAAQgSAAgPgJQgQAJgSAAQgcAAgVgVQgTgTgBgcQABgcATgVQAVgUAcAAQASAAAQAJQAPgJASAAQAXAAARANQARgNAWAAQATAAAQAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAPAIQAPgIATAAQAcAAATATIAGAGIAEgGQAUgTAdAAQASAAAQAIQAOgIATAAQAcAAATATIAIAKIAIgKQAUgTAdAAQASAAAQAIQAOgIATAAQAcAAASASQAVgSAbAAQATAAAPAIIAGgCIAKgEQAJgCAIAAIACAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAOgIAUAAQAPAAANAGIAFgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAAUAUQAUAVAAAcQAAAYgPASQANAEALALQAVAVAAAbIAAABQAQAFAMAMQAVAVAAAcQAAAcgVAUQgTAUgdAAQgSAAgPgJQgQAJgSAAQgOAAgMgFIgKALQgTAUgdAAQgSAAgPgJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AHOCfQgQAJgSAAQgcAAgVgUIgJgLQgQALgVAAQgTAAgOgJQgQAJgSAAQgcAAgVgUQgTAUgdAAQgSAAgPgJQgPAJgTAAQgUAAgQgKIgJAKQgUAUgcAAQgSAAgOgJQgQAJgSAAQgdAAgUgUIgDgEQgPAHgQAAQgSAAgPgJQgQAJgTAAQgWAAgSgNIgIAKQgVAUgcAAQgSAAgPgJQgPAJgTAAQgcAAgVgUQgIgJgEgJQgFAJgIAJQgUAUgcAAQgTAAgPgJQgPAJgTAAQgcAAgVgUQgTgUAAgcQAAgQAGgMQgKADgMAAQgcAAgVgUQgTgUAAgcQAAgaASgTQgFgLAAgNQAAgcAVgUQATgUAdAAQANAAAMAFQAFgMAJgKQAVgUAcAAQASAAAQAJQAPgJASAAQAXAAARANQARgNAWAAQATAAAQAJQAPgJASAAQAdAAATAUIAKAMQASgNAXAAQATAAAPAIQAPgIATAAQAcAAATATIAGAGIAEgGQAUgTAdAAQASAAAQAIQAOgIASAAQAcAAAUATIAIAKIAIgKQAUgTAdAAQASAAAQAIQAOgIATAAQAcAAASASQAVgSAbAAQATAAAPAIIAGgCIAKgEQAJgCAIAAIACAAIABAAIACAAIABAAIABAAIABAAQAJABAJADIABABIAIADQAOgIAUAAQAPAAANAGIAFgFQAUgUAdAAQASAAAQAJQAOgJATAAQAcAAAUAUQAUAVAAAcQAAAYgPASQANAEALALQAVAVAAAbIAAABQAQAFAMAMQAVAVAAAcQAAAcgVAUQgTAUgdAAQgSAAgPgJQgQAJgSAAQgOAAgMgFIgKALQgTAUgdAAQgSAAgPgJgAm+AzQAIAJAFAJQAEgJAIgJQAVgUAcAAQATAAAPAJQAPgJASAAQAXAAASAOIAIgLQAVgUAbAAQATAAAQAJQAPgJASAAQAcAAAUAUIADAFQAPgIARAAQASAAAQAJQAOgJASAAQAUAAAQALQAEgGAEgFQAVgTAcAAQATAAAPAIQAPgIASAAQAdAAATATQAVgTAcAAQASAAAQAIQAOgIATAAQAcAAAUATIAKALQAQgLAVAAQASAAAQAJIAHgDQgHgOAAgQQAAgXAOgTIgFgCIgFAFQgUAUgbAAQgUAAgOgJIgNAGIgWADQgSAAgPgJQgPAJgTAAQgbAAgVgTQgSATgcAAQgTAAgOgJQgQAJgSAAQgdAAgUgUIgIgKIgIAKQgUAUgcAAQgSAAgOgJQgQAJgSAAQgdAAgUgUIgEgFIgGAFQgTAUgcAAQgTAAgPgJQgPAJgTAAQgcAAgUgUIgKgMQgRAOgYAAQgSAAgPgJQgQAJgTAAQgWAAgRgNQgRANgXAAQgOAAgLgFQgFAKgHAJQAEALAAAMQAAAPgGANQAKgEAMAAQAcAAAUAUg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:-238.15,y:-0.325}).wait(1).to({graphics:mask_1_graphics_3,x:-117.1494,y:0.575}).wait(1).to({graphics:mask_1_graphics_4,x:-207.9,y:0.575}).wait(1).to({graphics:mask_1_graphics_5,x:-198.925,y:0.575}).wait(1).to({graphics:mask_1_graphics_6,x:-121.225,y:0.575}).wait(1).to({graphics:mask_1_graphics_7,x:-121.225,y:0.575}).wait(1).to({graphics:mask_1_graphics_8,x:-176.025,y:8.35}).wait(1).to({graphics:mask_1_graphics_9,x:-176.025,y:9.625}).wait(1).to({graphics:mask_1_graphics_10,x:-121.225,y:9.625}).wait(1).to({graphics:mask_1_graphics_11,x:-121.225,y:9.625}).wait(1).to({graphics:mask_1_graphics_12,x:-121.225,y:9.625}).wait(1).to({graphics:mask_1_graphics_13,x:-121.225,y:9.625}).wait(1).to({graphics:mask_1_graphics_14,x:-176.025,y:9.625}).wait(1).to({graphics:mask_1_graphics_15,x:-176.9,y:9.625}).wait(1).to({graphics:mask_1_graphics_16,x:-181.1,y:9.625}).wait(243));

	// Layer_5_obj_
	this.Layer_5 = new lib.Symbol_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 1
	this.Layer_5.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(259));

	// Layer_6_obj_
	this.Layer_6 = new lib.Symbol_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 2
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(259));

	// flash0_ai_obj_
	this.flash0_ai = new lib.Symbol_1_flash0_ai();
	this.flash0_ai.name = "flash0_ai";
	this.flash0_ai.parent = this;
	this.flash0_ai.depth = 0;
	this.flash0_ai.isAttachedToCamera = 0
	this.flash0_ai.isAttachedToMask = 0
	this.flash0_ai.layerDepth = 0
	this.flash0_ai.layerIndex = 3
	this.flash0_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash0_ai).wait(259));

	// flash0_ai_obj_
	this.flash0_ai_1 = new lib.Symbol_1_flash0_ai_1();
	this.flash0_ai_1.name = "flash0_ai_1";
	this.flash0_ai_1.parent = this;
	this.flash0_ai_1.depth = 0;
	this.flash0_ai_1.isAttachedToCamera = 0
	this.flash0_ai_1.isAttachedToMask = 0
	this.flash0_ai_1.layerDepth = 0
	this.flash0_ai_1.layerIndex = 4
	this.flash0_ai_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash0_ai_1).wait(259));

	// Layer_18 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_29 = new cjs.Graphics().p("AhlBmQgqgrAAg7QAAg6AqgrQArgqA6AAQA8AAApAqQArArAAA6QAAA7grArQgpAqg8AAQg6AAgrgqg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AhlCbQgqhBAAhaQAAhaAqhBQArg/A6gBQA8ABApA/QArBBAABaQAABagrBBQgpBBg8gBQg6ABgrhBg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AhlDQQgqhWAAh6QAAh5AqhXQArhWA6AAQA8AAApBWQArBXAAB5QAAB6grBWQgpBXg8AAQg6AAgrhXg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AhlEFQgqhsAAiZQAAiYAqhuQArhsA6AAQA8AAApBsQArBuAACYQAACZgrBsQgpBtg8ABQg6gBgrhtg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AhlE6QgqiCAAi4QAAi3AqiEQAriCA6AAQA8AAApCCQArCEAAC3QAAC4grCCQgpCEg8AAQg6AAgriEg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AhlFvQgqiXAAjYQAAjXAqiZQAriYA6AAQA8AAApCYQArCZAADXQAADYgrCXQgpCbg8gBQg6ABgribg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AhlGlQgqivAAj2QAAj2AqiwQAriuA6AAQA8AAApCuQArCwAAD2QAAD2grCvQgpCwg8AAQg6AAgriwg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AhlHaQgqjEAAkWQAAkVAqjGQArjFA6ABQA8gBApDFQArDGAAEVQAAEWgrDEQgpDHg8gBQg6ABgrjHg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AhlIPQgqjaAAk1QAAk0AqjcQArjbA6AAQA8AAApDbQArDcAAE0QAAE1grDaQgpDdg8AAQg6AAgrjdg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AhlJEQgqjwAAlUQAAlTAqjzQArjxA6AAQA8AAApDxQArDzAAFTQAAFUgrDwQgpDzg8AAQg6AAgrjzg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AhlJ6QgqkGAAl0QAAlyAqkJQArkHA6AAQA8AAApEHQArEJAAFyQAAF0grEGQgpEJg8AAQg6AAgrkJg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AhlKvQgqkdAAmSQAAmSAqkfQArkdA6AAQA8AAApEdQArEfAAGSQAAGSgrEdQgpEfg8AAQg6AAgrkfg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AimK5QhUkXgKmSQgLmRBFkkQBGkhBsgGQBrgHBTEYQBVEaAKGSQALGRhGEhQhFEjhsAHIgFAAQhoAAhSkUg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AjnLEQh+kSgVmSQgVmQBgkoQBhklCcgOQCcgNB9ESQB/EWAVGRQAVGQhhEmQhfEoidANIgOABQiTAAh5kJg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AkoLPQinkOggmRQgfmPB6ktQB8kpDNgUQDMgUCnENQCpEQAfGRQAgGQh8EpQh6EtjNAUIgcABQi8AAidj9g");
	var mask_2_graphics_44 = new cjs.Graphics().p("AlpLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAqGQiXEuQiVEwj+AbQgXADgWAAQjjAAi/jzg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AlpLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAiFJhgEHQATAIAQAQQAkAkAAAyQAAAygkAjQgjAkgyAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAi/jzg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AmlLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAdEVhADmQAyAAAjAkQAbAaAHAjIAJAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgVAAQjjAAjAjzg");
	var mask_2_graphics_47 = new cjs.Graphics().p("Am3LZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAIBLABBIQAxABAjAjQAjAjAAAyQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgVAAQjjAAjAjzg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Am3LZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQIACAbIAFAAQAyAAAkAkQAjAiAAAyQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgVAAQjjAAjAjzg");
	var mask_2_graphics_49 = new cjs.Graphics().p("ApHLZQjRkJgqmQQgqmPCVkxQCYkuD9gaQD+gbDPEIQDTELAqGQIADAbIAFAAQAMAAALACIgBgGQAAgyAkgkQAjgjAyAAQAyAAAkAjIACACIAGgHQAkgjAyAAQAyAAAjAjQAkAkAAAyQAAAxgkAjQgjAkgyAAQgyAAgkgkIgCgCIgGAHQgkAkgyAAQgLAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygkAkIgGAGQAXAJAUATQAjAkAAAyQAAAygjAjQgWAWgcAJIAEAOIAJAIQAkAkAAAyQAAAygkAjQgjAkgyAAQgfAAgZgOQgcASgkAAQggAAgagPQiIDLjMAWQgXADgXAAQjjAAjAjzg");
	var mask_2_graphics_50 = new cjs.Graphics().p("Ap4LZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDQEIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABQAighAxAAQAyAAAjAjQAkAkAAAyQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjMAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AqLLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDQEIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAkgjAyAAQAyAAAjAjQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjMAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AqqLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDQEIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAyAAAjAkQAkAjAAAyQAAAygkAkQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiIDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AtaLZQjRkJgqmQQgqmPCVkxQCYkuD9gaQD+gbDQEIQDSELAqGQIADAbIAFAAQALAAALACIAAgGQAAgyAkgkQAjgjAyAAQAyAAAkAjIACACIAGgHQAkgjAyAAIAQABIABgBIgBgTQAAgyAkgkQAUgUAZgJQgZgIgUgVQgkgjAAgyQAAgyAkgkQAPgPARgIQgGgSAAgVQAAgyAkgjQAjgkAyAAQAkAAAcASQAIgcAXgWQAjgkAyAAQAyAAAkAkQAjAjAAAyIgBARQAXgLAcAAQAyAAAkAkQAjAjAAAyQAAAygjAkQgkAjgyAAQgyAAgjgjQgkgkAAgyIABgRQgXALgcAAQgjAAgdgSQgIAcgWAXQgPAPgSAIQAGASAAAVQAAAygjAjQgVAVgZAIQAZAJAVAUQAjAkAAAyQAAAygjAjIgEAEIABATQAAAygjAiQgkAkgyAAIgQgBQgjAhgwAAQgyAAgkgkIgCgCIgGAHQgkAkgyAAQgMAAgLgCIABAGQAAAigQAbQAQAbAAAhQAAAygkAkIgHAGQAYAJAUATQAjAkAAAyQAAAygjAjQgWAWgcAJIAEAOIAJAIQAkAkAAAyQAAAygkAjQgjAkgyAAQgfAAgagOQgcASgjAAQgfAAgagPQiIDLjNAWQgXADgXAAQjjAAjAjzg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AujLZQjRkJgqmQQgqmPCVkxQCYkuD9gaQD+gbDQEIQDSELAqGQIADAbIAFAAQAMAAALACIgBgGQAAgyAkgkQAjgjAyAAQAyAAAkAjIACACIAGgHQAkgjAyAAIAQABIACgBIgCgTQAAgyAkgkQAUgUAZgJQgZgIgUgVQgkgjAAgyQAAgyAkgkQAPgPARgIQgGgSAAgVQAAgyAkgjQAjgkAyAAQAkAAAcASQAIgcAXgWQAjgkAyAAQAyAAAkAkQAjAjAAAyIgBARQAYgLAbAAQAyAAAkAkQAUAUAIAYQAPgEARAAQAyAAAjAjQAkAkAAAyQAAAygkAjQgjAkgyAAQgbAAgWgKQgfAXgoAAQgyAAgkgkQgjgjAAgyIABgNQgbghAAgrIABgRQgXALgcAAQgjAAgcgSQgJAcgWAXQgPAPgSAIQAGASAAAVQAAAygjAjQgUAVgZAIQAZAJAUAUQAjAkAAAyQAAAygjAjIgEAEIABATQAAAygjAiQgkAkgyAAIgQgBQgjAhgwAAQgyAAgkgkIgCgCIgGAHQgkAkgyAAQgLAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygkAkIgGAGQAXAJAUATQAjAkAAAyQAAAygjAjQgWAWgcAJIAEAOIAJAIQAkAkAAAyQAAAygkAjQgjAkgyAAQgfAAgYgOQgcASgkAAQggAAgagPQiIDLjNAWQgXADgXAAQjjAAjAjzg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AvpLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAAKACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAygkAjQgjAkgyAAQgyAAgkgkQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgxAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AxILZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIADAbIAEAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAVgUAZgJQgZgIgVgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAdASQAIgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngWAfQAKAHAJAJQAeAeAFApQASAJAPAPQAbAbAHAjQAfAIAYAYQAjAkAAAyQAAAygjAjQgkAkgyAAQgyAAgjgkQgcgbgGgkQgfgIgYgYQgegegFgpQgSgJgPgPQgkgjAAgyQAAgnAXgfQgKgHgKgJQgjgjAAgyQAAgUAFgRQgOgRgIgUIgEAAQgaAAgXgKQgeAXgpAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgXALgcAAQgkAAgcgSQgIAcgXAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgDAEIABATQAAAygkAiQgjAkgyAAIgRgBQgiAhgxAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigPAbQAPAbAAAhQAAAygiAkIgHAGQAYAJASATQAkAkAAAyQAAAygkAjQgVAWgbAJIAEAOIAJAIQAiAkAAAyQAAAygiAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgkAjgyAAQgyAAgjgjQgkgkAAgyQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgfAegpAFQAHATAAAWQAAAygkAjQgjAkgyAAQgyAAgkgkQgjgjAAgyQAAgyAjgkQAfgeApgEQgHgUAAgWQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgfAegpAFQAHATAAAWQAAAygkAjQgjAkgyAAQgyAAgkgkIgGgGQgYALgcAAQgyAAgjgkQgkgjAAgyIABgMQgtgDggghQgkgjAAgyQAAgyAkgkQAjgjAyAAQAyAAAkAjQAjAkAAAyIAAAMQAsADAhAgIAGAHQASgIAUgCQgHgUAAgWQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgfAegpAFQAHATAAAWQAAAygkAjQgjAkgyAAQgyAAgkgkIgGgGQgYALgcAAQgyAAgjgkQgkgjAAgyIABgMQgtgDggghQgkgjAAgyQAAgbAKgWQgxgBgigjQgRgRgJgUQgngFgdgdQgjgkAAgyIAAgDIgJAAQgyAAgkgjQgjgkAAgyQAAgyAjgjQAkgkAyAAQAyAAAjAkQAkAjAAAyIAAAEIAJgBQAyAAAjAkQARARAJAUQAnAFAdAdQAjAkAAAyQAAAagKAXQAxABAjAiQAjAkAAAyIAAAMQAsADAhAgIAGAHQASgIAUgCQgHgUAAgWQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_2_graphics_29,x:-227.95,y:26.1}).wait(1).to({graphics:mask_2_graphics_30,x:-227.95,y:32.6}).wait(1).to({graphics:mask_2_graphics_31,x:-227.95,y:39.05}).wait(1).to({graphics:mask_2_graphics_32,x:-227.95,y:45.55}).wait(1).to({graphics:mask_2_graphics_33,x:-227.95,y:52.05}).wait(1).to({graphics:mask_2_graphics_34,x:-227.95,y:58.5}).wait(1).to({graphics:mask_2_graphics_35,x:-227.95,y:65}).wait(1).to({graphics:mask_2_graphics_36,x:-227.95,y:71.45}).wait(1).to({graphics:mask_2_graphics_37,x:-227.95,y:77.95}).wait(1).to({graphics:mask_2_graphics_38,x:-227.95,y:84.45}).wait(1).to({graphics:mask_2_graphics_39,x:-227.95,y:90.9}).wait(1).to({graphics:mask_2_graphics_40,x:-227.95,y:97.4}).wait(1).to({graphics:mask_2_graphics_41,x:-231.3259,y:104.2249}).wait(1).to({graphics:mask_2_graphics_42,x:-234.7266,y:111.0475}).wait(1).to({graphics:mask_2_graphics_43,x:-238.1042,y:117.8494}).wait(1).to({graphics:mask_2_graphics_44,x:-241.5048,y:124.6696}).wait(1).to({graphics:mask_2_graphics_45,x:-241.5048,y:124.6696}).wait(1).to({graphics:mask_2_graphics_46,x:-235.5368,y:124.6696}).wait(1).to({graphics:mask_2_graphics_47,x:-233.7118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_48,x:-233.7118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_49,x:-219.3868,y:124.6696}).wait(1).to({graphics:mask_2_graphics_50,x:-214.4118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_51,x:-212.5118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_52,x:-209.4118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_53,x:-191.8618,y:124.6696}).wait(1).to({graphics:mask_2_graphics_54,x:-184.5868,y:124.6696}).wait(1).to({graphics:mask_2_graphics_55,x:-177.5118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_56,x:-168.0368,y:124.6696}).wait(1).to({graphics:mask_2_graphics_57,x:-166.6118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_58,x:-166.6118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_59,x:-166.6118,y:124.6696}).wait(1).to({graphics:mask_2_graphics_60,x:-166.6118,y:124.6696}).wait(199));

	// Layer_3_obj_
	this.Layer_3 = new lib.Symbol_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 5
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(259));

	// Layer_17 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_21 = new cjs.Graphics().p("AhlBmQgqgrAAg7QAAg6AqgrQArgqA6AAQA8AAApAqQArArAAA6QAAA7grArQgpAqg8AAQg6AAgrgqg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AhlCbQgqhBAAhaQAAhaAqhBQArg/A6gBQA8ABApA/QArBBAABaQAABagrBBQgpBBg8gBQg6ABgrhBg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AhlDQQgqhWAAh6QAAh5AqhXQArhWA6AAQA8AAApBWQArBXAAB5QAAB6grBWQgpBXg8AAQg6AAgrhXg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AhlEFQgqhsAAiZQAAiYAqhuQArhsA6AAQA8AAApBsQArBuAACYQAACZgrBsQgpBtg8ABQg6gBgrhtg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AhlE6QgqiCAAi4QAAi3AqiEQAriCA6AAQA8AAApCCQArCEAAC3QAAC4grCCQgpCEg8AAQg6AAgriEg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AhlFvQgqiXAAjYQAAjXAqiZQAriYA6AAQA8AAApCYQArCZAADXQAADYgrCXQgpCbg8gBQg6ABgribg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AhlGlQgqivAAj2QAAj2AqiwQAriuA6AAQA8AAApCuQArCwAAD2QAAD2grCvQgpCwg8AAQg6AAgriwg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AhlHaQgqjEAAkWQAAkVAqjGQArjFA6ABQA8gBApDFQArDGAAEVQAAEWgrDEQgpDHg8gBQg6ABgrjHg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AhlIPQgqjaAAk1QAAk0AqjcQArjbA6AAQA8AAApDbQArDcAAE0QAAE1grDaQgpDdg8AAQg6AAgrjdg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AhlJEQgqjwAAlUQAAlTAqjzQArjxA6AAQA8AAApDxQArDzAAFTQAAFUgrDwQgpDzg8AAQg6AAgrjzg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AhlJ6QgqkGAAl0QAAlyAqkJQArkHA6AAQA8AAApEHQArEJAAFyQAAF0grEGQgpEJg8AAQg6AAgrkJg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AhlKvQgqkdAAmSQAAmSAqkfQArkdA6AAQA8AAApEdQArEfAAGSQAAGSgrEdQgpEfg8AAQg6AAgrkfg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AimK5QhUkXgKmSQgLmRBFkkQBGkhBsgGQBrgHBTEYQBVEaAKGSQALGRhGEhQhFEjhsAHIgFAAQhoAAhSkUg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AjnLEQh+kSgVmSQgVmQBgkoQBhklCcgOQCcgNB9ESQB/EWAVGRQAVGQhhEmQhfEoidANIgOABQiTAAh5kJg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AkoLPQinkOggmRQgfmPB6ktQB8kpDNgUQDMgUCnENQCpEQAfGRQAgGQh8EpQh6EtjNAUIgcABQi8AAidj9g");
	var mask_3_graphics_36 = new cjs.Graphics().p("AlpLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAqGQiXEuQiVEwj+AbQgXADgWAAQjjAAi/jzg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AlpLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAiFJhgEHQATAIAQAQQAkAkAAAyQAAAygkAjQgjAkgyAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAi/jzg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AmlLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAdEVhADmQAyAAAjAkQAbAaAHAjIAJAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgVAAQjjAAjAjzg");
	var mask_3_graphics_39 = new cjs.Graphics().p("Am3LZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQQAIBLABBIQAxABAjAjQAjAjAAAyQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgVAAQjjAAjAjzg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Am3LZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD8gbDREIQDTELAqGQIACAbIAFAAQAyAAAkAkQAjAiAAAyQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgVAAQjjAAjAjzg");
	var mask_3_graphics_41 = new cjs.Graphics().p("ApHLZQjRkJgqmQQgqmPCVkxQCYkuD9gaQD+gbDPEIQDTELAqGQIADAbIAFAAQAMAAALACIgBgGQAAgyAkgkQAjgjAyAAQAyAAAkAjIACACIAGgHQAkgjAyAAQAyAAAjAjQAkAkAAAyQAAAxgkAjQgjAkgyAAQgyAAgkgkIgCgCIgGAHQgkAkgyAAQgLAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygkAkIgGAGQAXAJAUATQAjAkAAAyQAAAygjAjQgWAWgcAJIAEAOIAJAIQAkAkAAAyQAAAygkAjQgjAkgyAAQgfAAgZgOQgcASgkAAQggAAgagPQiIDLjMAWQgXADgXAAQjjAAjAjzg");
	var mask_3_graphics_42 = new cjs.Graphics().p("Ap4LZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDQEIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABQAighAxAAQAyAAAjAjQAkAkAAAyQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjMAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AqLLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDQEIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAkgjAyAAQAyAAAjAjQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjMAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AqqLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDQEIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAyAAAjAkQAkAjAAAyQAAAygkAkQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiIDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AtaLZQjRkJgqmQQgqmPCVkxQCYkuD9gaQD+gbDQEIQDSELAqGQIADAbIAFAAQALAAALACIAAgGQAAgyAkgkQAjgjAyAAQAyAAAkAjIACACIAGgHQAkgjAyAAIAQABIABgBIgBgTQAAgyAkgkQAUgUAZgJQgZgIgUgVQgkgjAAgyQAAgyAkgkQAPgPARgIQgGgSAAgVQAAgyAkgjQAjgkAyAAQAkAAAcASQAIgcAXgWQAjgkAyAAQAyAAAkAkQAjAjAAAyIgBARQAXgLAcAAQAyAAAkAkQAjAjAAAyQAAAygjAkQgkAjgyAAQgyAAgjgjQgkgkAAgyIABgRQgXALgcAAQgjAAgdgSQgIAcgWAXQgPAPgSAIQAGASAAAVQAAAygjAjQgVAVgZAIQAZAJAVAUQAjAkAAAyQAAAygjAjIgEAEIABATQAAAygjAiQgkAkgyAAIgQgBQgjAhgwAAQgyAAgkgkIgCgCIgGAHQgkAkgyAAQgMAAgLgCIABAGQAAAigQAbQAQAbAAAhQAAAygkAkIgHAGQAYAJAUATQAjAkAAAyQAAAygjAjQgWAWgcAJIAEAOIAJAIQAkAkAAAyQAAAygkAjQgjAkgyAAQgfAAgagOQgcASgjAAQgfAAgagPQiIDLjNAWQgXADgXAAQjjAAjAjzg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AujLZQjRkJgqmQQgqmPCVkxQCYkuD9gaQD+gbDQEIQDSELAqGQIADAbIAFAAQAMAAALACIgBgGQAAgyAkgkQAjgjAyAAQAyAAAkAjIACACIAGgHQAkgjAyAAIAQABIACgBIgCgTQAAgyAkgkQAUgUAZgJQgZgIgUgVQgkgjAAgyQAAgyAkgkQAPgPARgIQgGgSAAgVQAAgyAkgjQAjgkAyAAQAkAAAcASQAIgcAXgWQAjgkAyAAQAyAAAkAkQAjAjAAAyIgBARQAYgLAbAAQAyAAAkAkQAUAUAIAYQAPgEARAAQAyAAAjAjQAkAkAAAyQAAAygkAjQgjAkgyAAQgbAAgWgKQgfAXgoAAQgyAAgkgkQgjgjAAgyIABgNQgbghAAgrIABgRQgXALgcAAQgjAAgcgSQgJAcgWAXQgPAPgSAIQAGASAAAVQAAAygjAjQgUAVgZAIQAZAJAUAUQAjAkAAAyQAAAygjAjIgEAEIABATQAAAygjAiQgkAkgyAAIgQgBQgjAhgwAAQgyAAgkgkIgCgCIgGAHQgkAkgyAAQgLAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygkAkIgGAGQAXAJAUATQAjAkAAAyQAAAygjAjQgWAWgcAJIAEAOIAJAIQAkAkAAAyQAAAygkAjQgjAkgyAAQgfAAgYgOQgcASgkAAQggAAgagPQiIDLjNAWQgXADgXAAQjjAAjAjzg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AvpLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAAKACIAAgGQAAgyAjgkQAkgjAyAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAygkAjQgjAkgyAAQgyAAgkgkQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAkAkAAAyQAAAygkAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgxAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AxILZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIADAbIAEAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAVgUAZgJQgZgIgVgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAdASQAIgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngWAfQAKAHAJAJQAeAeAFApQASAJAPAPQAbAbAHAjQAfAIAYAYQAjAkAAAyQAAAygjAjQgkAkgyAAQgyAAgjgkQgcgbgGgkQgfgIgYgYQgegegFgpQgSgJgPgPQgkgjAAgyQAAgnAXgfQgKgHgKgJQgjgjAAgyQAAgUAFgRQgOgRgIgUIgEAAQgaAAgXgKQgeAXgpAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgXALgcAAQgkAAgcgSQgIAcgXAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgDAEIABATQAAAygkAiQgjAkgyAAIgRgBQgiAhgxAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgLgCIAAAGQAAAigPAbQAPAbAAAhQAAAygiAkIgHAGQAYAJASATQAkAkAAAyQAAAygkAjQgVAWgbAJIAEAOIAJAIQAiAkAAAyQAAAygiAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgkAjgyAAQgyAAgjgjQgkgkAAgyQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgfAegpAFQAHATAAAWQAAAygkAjQgjAkgyAAQgyAAgkgkQgjgjAAgyQAAgyAjgkQAfgeApgEQgHgUAAgWQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgfAegpAFQAHATAAAWQAAAygkAjQgjAkgyAAQgyAAgkgkIgGgGQgYALgcAAQgyAAgjgkQgkgjAAgyIABgMQgtgDggghQgkgjAAgyQAAgyAkgkQAjgjAyAAQAyAAAkAjQAjAkAAAyIAAAMQAsADAhAgIAGAHQASgIAUgCQgHgUAAgWQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AxWLZQjRkJgqmQQgqmPCVkxQCXkuD+gaQD9gbDREIQDTELAqGQIACAbIAFAAQAMAAALACIAAgGQAAgyAjgkQAkgjAxAAQAyAAAjAjIACACIAHgHQAjgjAyAAIARABIABgBIgBgTQAAgyAjgkQAUgUAZgJQgZgIgUgVQgjgjAAgyQAAgyAjgkQAPgPASgIQgGgSAAgVQAAgyAjgjQAkgkAyAAQAjAAAcASQAJgcAWgWQAkgkAyAAQAyAAAjAkQAkAjAAAyIgBARQAXgLAcAAQAyAAAjAkQAUAUAJAYQAPgEAQAAQAyAAAkAjQATAUAJAXIAEAAQAyAAAjAkQAkAjAAAyQAAAUgGASQAeAhAAAuQAAAngXAfQAKAHAKAJQAeAeAEApQASAJAQAPQAbAbAGAjQAfAIAZAYQAjAkAAAyQAAAygjAjQgJAJgKAHQAaAIAVAVQAkAkAAAyQAAAygkAjQgjAjgxABQACALAAALQAAAigQAbQAQAbAAAhQAAAygjAkQgfAegpAFQAHATAAAWQAAAygkAjQgjAkgyAAQgyAAgkgkIgGgGQgYALgcAAQgyAAgjgkQgkgjAAgyIABgMQgtgDggghQgkgjAAgyQAAgbAKgWQgxgBgigjQgRgRgJgUQgngFgdgdQgjgkAAgyIAAgDIgJAAQgyAAgkgjQgjgkAAgyQAAgyAjgjQAkgkAyAAQAyAAAjAkQAkAjAAAyIAAAEIAJgBQAyAAAjAkQARARAJAUQAnAFAdAdQAjAkAAAyQAAAagKAXQAxABAjAiQAjAkAAAyIAAAMQAsADAhAgIAGAHQASgIAUgCQgHgUAAgWQAAghAQgbQgQgbAAgiQAAgyAkgjQAjgjAxgBQgCgLAAgLQAAgyAjgkQAJgJAKgGQgagJgVgVQgcgbgGgkQgfgIgYgYQgfgegEgpQgSgJgPgPQgkgjAAgyQAAgnAWgfQgKgHgJgJQgjgjAAgyQAAgUAFgRQgPgRgHgUIgEAAQgaAAgXgKQgfAXgoAAQgyAAgjgkQgkgjAAgyIABgNQgaghAAgrIABgRQgYALgbAAQgkAAgcgSQgJAcgWAXQgPAPgRAIQAGASAAAVQAAAygkAjQgUAVgZAIQAZAJAUAUQAkAkAAAyQAAAygkAjIgEAEIACATQAAAygkAiQgjAkgyAAIgRgBQgjAhgwAAQgyAAgjgkIgCgCIgHAHQgjAkgyAAQgMAAgKgCIAAAGQAAAigQAbQAQAbAAAhQAAAygjAkIgHAGQAYAJATATQAjAkAAAyQAAAygjAjQgWAWgbAJIADAOIAKAIQAjAkAAAyQAAAygjAjQgkAkgyAAQgfAAgZgOQgcASgjAAQggAAgagPQiJDLjNAWQgXADgWAAQjjAAjAjzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_3_graphics_21,x:-227.95,y:26.1}).wait(1).to({graphics:mask_3_graphics_22,x:-227.95,y:32.6}).wait(1).to({graphics:mask_3_graphics_23,x:-227.95,y:39.05}).wait(1).to({graphics:mask_3_graphics_24,x:-227.95,y:45.55}).wait(1).to({graphics:mask_3_graphics_25,x:-227.95,y:52.05}).wait(1).to({graphics:mask_3_graphics_26,x:-227.95,y:58.5}).wait(1).to({graphics:mask_3_graphics_27,x:-227.95,y:65}).wait(1).to({graphics:mask_3_graphics_28,x:-227.95,y:71.45}).wait(1).to({graphics:mask_3_graphics_29,x:-227.95,y:77.95}).wait(1).to({graphics:mask_3_graphics_30,x:-227.95,y:84.45}).wait(1).to({graphics:mask_3_graphics_31,x:-227.95,y:90.9}).wait(1).to({graphics:mask_3_graphics_32,x:-227.95,y:97.4}).wait(1).to({graphics:mask_3_graphics_33,x:-231.3259,y:104.2249}).wait(1).to({graphics:mask_3_graphics_34,x:-234.7266,y:111.0475}).wait(1).to({graphics:mask_3_graphics_35,x:-238.1042,y:117.8494}).wait(1).to({graphics:mask_3_graphics_36,x:-241.5048,y:124.6696}).wait(1).to({graphics:mask_3_graphics_37,x:-241.5048,y:124.6696}).wait(1).to({graphics:mask_3_graphics_38,x:-235.5368,y:124.6696}).wait(1).to({graphics:mask_3_graphics_39,x:-233.7118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_40,x:-233.7118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_41,x:-219.3868,y:124.6696}).wait(1).to({graphics:mask_3_graphics_42,x:-214.4118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_43,x:-212.5118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_44,x:-209.4118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_45,x:-191.8618,y:124.6696}).wait(1).to({graphics:mask_3_graphics_46,x:-184.5868,y:124.6696}).wait(1).to({graphics:mask_3_graphics_47,x:-177.5118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_48,x:-168.0368,y:124.6696}).wait(1).to({graphics:mask_3_graphics_49,x:-166.6118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_50,x:-166.6118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_51,x:-166.6118,y:124.6696}).wait(1).to({graphics:mask_3_graphics_52,x:-166.6118,y:124.6696}).wait(207));

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 6
	this.Layer_2.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(259));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-137.1,107.9,1,1,0,0,0,-137.1,107.9);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 7
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(259));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-17,249.9,249.9);


(lib.Scene_1_vong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vong
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(150.1,143.4,0.1251,0.1251,0,0,0,1096.2,436.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({regX:1095.9,regY:436.7,scaleX:0.224,scaleY:0.224,rotation:-45,x:150.15,y:143.35,alpha:1},11,cjs.Ease.get(1)).to({rotation:0,x:150.1,y:143.4},189).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Symbol2_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(88.65,230.25,0.323,0.323,0,0,0,445.4,771.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(211));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(415.5,165.5,1,1,0,0,0,153.5,145.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(259));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._250x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.click_mc = this.click.click_mc;
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
	this.frame_259 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(259).call(this.frame_259).wait(1));

	// click_obj_
	this.click = new lib.Scene_1_click();
	this.click.name = "click";
	this.click.parent = this;
	this.click.setTransform(560,123,1,1,0,0,0,560,123);
	this.click.depth = 0;
	this.click.isAttachedToCamera = 0
	this.click.isAttachedToMask = 0
	this.click.layerDepth = 0
	this.click.layerIndex = 0
	this.click.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.click).wait(260));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 1
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(260));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 2
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(260));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(197.1,37.1,1,1,0,0,0,197.1,37.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 3
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(260));

	// vong_obj_
	this.vong = new lib.Scene_1_vong();
	this.vong.name = "vong";
	this.vong.parent = this;
	this.vong.depth = 0;
	this.vong.isAttachedToCamera = 0
	this.vong.isAttachedToMask = 0
	this.vong.layerDepth = 0
	this.vong.layerIndex = 4
	this.vong.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.vong).wait(260));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(125,125,1,1,0,0,0,125,125);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 5
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-146.6,1121.2,778.3000000000001);
// library properties:
lib.properties = {
	id: '7849F830E33CD34D9A4B81550FE5813C',
	width: 250,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg250x250.jpg?1604638109628", id:"bg250x250"},
		{src:"images/Line.png?1604638109628", id:"Line"},
		{src:"images/Line2.png?1604638109628", id:"Line2"},
		{src:"images/logopngcopy.png?1604638109628", id:"logopngcopy"},
		{src:"images/model.png?1604638109628", id:"model"},
		{src:"images/r1.png?1604638109628", id:"r1"},
		{src:"images/t3.png?1604638109628", id:"t3"},
		{src:"images/tk.png?1604638109628", id:"tk"},
		{src:"images/tk2.png?1604638109628", id:"tk2"},
		{src:"images/v.png?1604638109628", id:"v"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7849F830E33CD34D9A4B81550FE5813C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
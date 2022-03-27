console.clear();
var log = console.log.bind(console);

var baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/";

var vw = 630;
var vh = 410;

var app = new PIXI.Application(vw, vh, {
  view: document.getElementById("canvas")
});

var loader = new PIXI.loaders.Loader(baseUrl)
  .add("displacementMap", "displacementmap2.png?v=1")
  .add("rocks", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/300px-PNG_transparency_demonstration_1.png")
  .add("fish", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/300px-PNG_transparency_demonstration_1.png")
  .load(init);

function init(loader, resources) {
  
  var container = new PIXI.Container();
  var background = new PIXI.Sprite(resources.rocks.texture);
  var fish = new PIXI.Sprite(resources.fish.texture);
  var displacementSprite = new PIXI.Sprite(resources.displacementMap.texture);
  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    
  fish.position.set(200, 100);
  fish.interactive = true;
  fish.buttonMode = true;
  
  fish
    .on("pointerdown", onDragStart)
    .on("pointerup", onDragEnd)
    .on("pointerupoutside", onDragEnd)
    .on("pointermove", onDragMove);  
  
  container.filterArea = new PIXI.Rectangle(0, 0, vw - 20, vh - 20);
  container.filters = [displacementFilter];
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  
  container.position.set(-10);  
  container.addChild(background);
  container.addChild(fish);
  container.addChild(displacementSprite);
  app.stage.addChild(container);
    
  TweenMax.to(displacementSprite, 5, {
    ease: Linear.easeNone,
    repeat: -1,
    x: 512,
    y: 512
  });
}

function onDragStart(event) {
  this.data = event.data;  
  this.lastPosition = this.data.getLocalPosition(this.parent);
}

function onDragMove() {

  if (this.lastPosition) {

    var newPosition = this.data.getLocalPosition(this.parent);    
    this.position.x += (newPosition.x - this.lastPosition.x);
    this.position.y += (newPosition.y - this.lastPosition.y);
    this.lastPosition = newPosition;
  }
}

function onDragEnd() {
  this.data = null;
  this.lastPosition = null;
}
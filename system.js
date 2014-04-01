var you; //you
var time = 0;
var treasure;
var foundTreasure = 0;
var maxTreasureCash = Math.floor(Math.random() * 11) + 1
var bMenu = 0;
var rockPlace = 0;
var dayCount = 0;

var health = 100;
var money = 15;
var flowers = 0;
var spades = 0;
var hammers = 0;
var buckets = 0;
var waters = 0;
var wood = 0;
var iron = 0;
var stone = 0;
var fseeds = 0;
var tseeds = 0;
var gpotion = 0;
var coal = 0;
var fish = 0;

var points = flowers * money;
var zombieTimer;
var zombieMoveTime = 150; //zombie movement speed
var maxZombieAttack = 25;

var zombiesAlive = 0;

//player starting position
var playerX = 4;
var playerY = 3;

var darken = 0;

var map = Array( //land
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
	[2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,0,0,0,0,0,0,0,10,10,1,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,10,1,10,10,0,0,0,0,0,10,10,1,1,1,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2],
	[2,2,1,0,0,0,0,0,0,10,10,10,10,1,1,10,10,1,1,1,10,10,10,10,10,10,10,1,1,2,1,1,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2],
	[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
);

var tmpStatusHTML = '';
var hideMenus = 0;

//zombie start
var zombieX = Math.floor(Math.random() * map[0].length);
var zombieY = Math.floor(Math.random() * map[0].length);

var objectMap = Array( //walkable
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
	[2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
	[2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,3,1,1,2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,2,1,1,0,0,0,0,0,0,0,9,7,0,0,0,0,0,7,0,0,0,0,0,9,3,1,1,2,2,1,1,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,9,3,9,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,0,0,7,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,9,3,1,1,2,1,0,0,0,0,0,0,0,0,0,0,0,9,3,9,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,9,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,7,0,0,0,0,0,0,1,2],
	[2,1,0,0,7,7,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7,1,1,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,7,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,1,2],
	[2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,9,7,3,3,3,3,7,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,7,0,0,0,0,0,0,1,2],
	[2,1,1,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,1,1,0,3,0,0,0,0,0,0,0,0,7,0,0,5,5,5,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,5,0,0,0,7,0,0,0,0,3,0,0,0,0,0,0,0,7,0,3,1,1,1,3,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,3,3,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,7,7,0,3,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,0,0,7,0,0,0,1,1,1,0,0,0,0,0,0,0,7,0,0,0,0,7,0,0,0,0,0,7,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,7,0,0,0,0,7,3,0,0,3,0,0,7,0,0,0,0,0,0,0,0,1,1,0,0,0,0,7,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2],
	[2,1,0,0,0,0,0,7,0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],
	[2,1,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,1,1,2,1,1,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,7,7,1,1,2,1,1,9,0,7,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,0,0,0,5,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,7,0,0,7,1,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,7,0,0,0,0,4,1,1,9,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,7,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,7,5,7,0,7,0,0,0,0,0,0,0,7,7,1,1,2,2,1,1,0,0,0,7,0,0,0,0,0,0,7,0,0,0,0,0,7,7,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,5,0,0,0,0,7,1,1,1,1,1,9,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,7,7,7,0,0,0,0,0,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,7,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,1,1,2],
	[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,9,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,3,0,1,1,2],
	[2,1,0,0,9,0,0,0,7,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,1,1,2],
	[2,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,3,9,0,0,0,0,0,7,7,0,0,0,0,0,0,0,9,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,3,3,9,9,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,7,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,3,3,3,3,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,5,0,0,0,1,2],
	[2,1,3,3,3,3,3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,1,9,3,3,3,9,0,0,3,0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,1,2],
	[2,1,1,3,9,3,3,9,0,0,0,0,0,5,0,0,0,0,0,5,5,5,0,0,0,7,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1,2],
	[2,1,9,3,3,9,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
	[2,1,3,3,9,3,0,3,3,3,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,3,3,9,0,0,0,0,0,7,0,0,0,0,0,0,0,0,1,1,2,2],
	[2,2,1,0,0,0,3,0,3,3,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,3,9,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2],
	[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
	[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
);

//A bit of randomisation never hurt anyone... right...?
for (var i = 0; i < map.length; i++) {
	for (var x = 0; x < map.length; x++) {
		if (objectMap[i][x] == 7) {
			var t = Math.floor(Math.random() * 3) + 1;
			if (t==1) { 
				objectMap[i][x] = 7;
			} else if (t==2) {
				objectMap[i][x] = 12;
			} else if (t==3) {
				objectMap[i][x] = 13;
			}
		}
	}
}

var tileDict = Array("tiles/land.png","tiles/water.png","tiles/deepwater.png","tiles/land-road-up.png","tiles/land-road-down.png","tiles/land-road-corner1.png","tiles/soil.png","tiles/land-seeded.png","tiles/land-seeded.png","tiles/bridge-up.png","tiles/sand.png");
var charDict = Array("tiles/mario.png", "tiles/zombie.png");
var objectDict = Array("tiles/blank.png","tiles/blank.png","tiles/rock.png","tiles/hut.png","tiles/flowers.png","tiles/golden-flowers.png","tiles/treelarge.png","tiles/bricks.png","tiles/broken-rock.png","tiles/light.png","tiles/trap.png","tiles/treelarge2.png","tiles/treelarge3.png"); //value +1
var objectImg = new Array();
var charImg = new Array();
var shadowDict = Array("tiles/blank.png","tiles/25.png","tiles/50.png","tiles/75.png");
var shadowImg = new Array();
var tileImg = new Array();
var loaded = 0;
var loadTimer;
var ymouse;
var xmouse;

function loadImg(){ //preload images and calculate the total loading time
    for(var i=0;i<tileDict.length;i++){    
        tileImg[i] = new Image();
        tileImg[i].src = tileDict[i];
        tileImg[i].onload = function(){
            loaded++;
        }
    }
    i = 0;
    for(var i=0;i<charDict.length;i++){
        charImg[i] = new Image();
        charImg[i].src = charDict[i];
        charImg[i].onload = function(){
            loaded++;
        }
    }
    i = 0;
    for(var i=0;i<objectDict.length;i++){
        objectImg[i] = new Image();
        objectImg[i].src = objectDict[i];
        objectImg[i].onload = function(){
            loaded++;
        }
    }
	i = 0;
    for(var i=0;i<shadowDict.length;i++){
        shadowImg[i] = new Image();
        shadowImg[i].src = shadowDict[i];
        shadowImg[i].onload = function(){
            loaded++;
        }
    }
}

function checkKeycode(event) { //key pressed
    var keycode;
    if(event == null) {
        keyCode = window.event.keyCode;
    } else {
        keyCode = event.keyCode;
    }
	checkHealth();
    //document.title = keyCode;
    switch(keyCode) {
		case 9: //(tab) to hide menus
			if (hideMenus == 0) {
				$('#infoKey').stop().animate({
					left: '-300px'
				}, 350, function() {
					$('#achTab').css({'color':'orange'});
				});
				$('#status').stop().animate({
					height: '17px',
					width: '375px'
				}, 350);
				$('#main').animate({'width':$(window).width()+'px','height':$(window).height()-50+'px'},350, function() {
					$('#canvasCover').css({'width':$('#main').width(),'height':$('#main').height(),'left':'0px','top':'70px'});
				});
				hideMenus = 1;
				return false;
			} else if (hideMenus == 1) {
				$('#infoKey').stop().animate({
					left: '5px'
				}, 350);
				$('#status').stop().animate({
					height: '175px',
					width: '200px'
				}, 350);
				$('#main').animate({'width':'904px','height':'400px'},350, function() {
					$('#canvasCover').css({'width':$('#main').width(),'height':$('#main').height()+6,'left':$('#main').offset().left,'top':'70px'});
				});
				hideMenus = 0;
				return false;
			}
			break;
        case 38: //left
            if(!objectMap[playerX-1][playerY] > 0){
                playerX--;
            }
			if(objectMap[playerX-1][playerY] == 4) {
				sellTreasure();
			} else if(objectMap[playerX-1][playerY] == 9) {
				stone++;
				playerX--;
				objectMap[playerX][playerY] = 0;
				updateDisplay();
			}
            break;
        case 40: //right
            if(!objectMap[playerX+1][playerY] > 0){
				playerX++;
            }
			if(objectMap[playerX+1][playerY] == 4) {
				sellTreasure();
			} else if(objectMap[playerX+1][playerY] == 9) {
				stone++;
				playerX++;
				objectMap[playerX][playerY] = 0;
				updateDisplay();
			}
            break;
        case 39: //up
            if(!objectMap[playerX][playerY-1] > 0){
                playerY--;
            }
			if(objectMap[playerX][playerY-1] == 4) {
				sellTreasure();
			} else if(objectMap[playerX][playerY-1] == 9) {
				stone++;
				playerY--;
				objectMap[playerX][playerY] = 0;
				updateDisplay();
			}
            break;
        case 37: //down
            if(!objectMap[playerX][playerY+1] > 0){
                playerY++;
            }
			if(objectMap[playerX][playerY+1] == 4) {
				sellTreasure();
			} else if(objectMap[playerX][playerY+1] == 9) {
				stone++;
				playerY++;
				objectMap[playerX][playerY] = 0;
				updateDisplay();
			}
            break;
		case 32: //(space) Build Menu
			if (bMenu == 0) {
				buildMenu(0);
			} else {
				buildMenu(1);
			}
			break;
		case 66: //use (b)ucket
			if (objectMap[playerX-1][playerY] == 1 || objectMap[playerX+1][playerY] == 1 || objectMap[playerX][playerY-1] == 1 || objectMap[playerX][playerY+1] == 1) {
				getWater();				
			} else {
				status('There\'s no water around here');
			}
			break;
		case 67:
			placeLight();
			break;
		case 68: //(d)ig
			setTimeout('digHere()',100);
			break;
		case 70: //go (f)ishing
            if (objectMap[playerX-1][playerY] == 1 || objectMap[playerX+1][playerY] == 1 || objectMap[playerX][playerY-1] == 1 || objectMap[playerX][playerY+1] == 1) {
				goFishing();				
			} else {
				eatFish();
			}
            break;
		case 71: //use (g)rowing potion
			if (gpotion > 0) {
				if (map[playerX][playerY] == 7) {
					setTimeout('useGrowPotion(0)',100);
				}
				if (map[playerX-1][playerY] == 7) {
					setTimeout('useGrowPotion(1)',100);
				}
				if (map[playerX+1][playerY] == 7) {
					setTimeout('useGrowPotion(2)',100);
				}
				if (map[playerX][playerY-1] == 7) {
					setTimeout('useGrowPotion(3)',100);
				}
				if (map[playerX][playerY+1] == 7) {
					setTimeout('useGrowPotion(4)',100);
				}
			} else {
				status('You haven\'t any potions.');
			}
			break;
		case 72: //(h)ammer
			rockPlace = 0;
			if (objectMap[playerX-1][playerY] == 3) {
				if (hammers > 0) {
					breakRock(1);	
					rockPlace = 1;				
				} else { status('You need a hammer!'); }
			}
			if (objectMap[playerX+1][playerY] == 3) {
				if (hammers > 0) {
					breakRock(2);		
					rockPlace = 1;					
				} else { status('You need a hammer!'); }
			}
			if (objectMap[playerX][playerY-1] == 3) {
				if (hammers > 0) {
					breakRock(3);		
					rockPlace = 1;					
				} else { status('You need a hammer!'); }
			}
			if (objectMap[playerX][playerY+1] == 3) {
				if (hammers > 0) {
					breakRock(4);		
					rockPlace = 1;					
				} else { status('You need a hammer!'); }
			}
			if (rockPlace == 0) {
				if (stone > 0) {
					setTimeout('placeRock()',100);
				} else {
					status('You need more resources.');
				}
			}
			break;
		case 77:
			$('#map').click();
			break
		case 84: //break (t)ree
			if (objectMap[playerX-1][playerY] == 7 || objectMap[playerX-1][playerY] == 12 || objectMap[playerX-1][playerY] == 13) {
				breakTree(1);				
			}
			if (objectMap[playerX+1][playerY] == 7 || objectMap[playerX+1][playerY] == 12 || objectMap[playerX+1][playerY] == 13) {
				breakTree(2);				
			}
			if (objectMap[playerX][playerY-1] == 7 || objectMap[playerX][playerY-1] == 12 || objectMap[playerX][playerY-1] == 13) {
				breakTree(3);				
			}
			if (objectMap[playerX][playerY+1] == 7 || objectMap[playerX][playerY+1] == 12 || objectMap[playerX][playerY+1] == 13) {
				breakTree(4);				
			}
			break;
		case 80: //(p)ick flower
			if (objectMap[playerX-1][playerY] == 5) {
				pickFlower(1);				
			}
			if (objectMap[playerX+1][playerY] == 5) {
				pickFlower(2);				
			}
			if (objectMap[playerX][playerY-1] == 5) {
				pickFlower(3);				
			}
			if (objectMap[playerX][playerY+1] == 5) {
				pickFlower(4);				
			}
			break;
		case 87: //(w)ater
			if (map[playerX][playerY] == 0) {
				placeWater();
			} else if (map[playerX][playerY] == 1) {
				placeWater();
			} else {
				status('You can\'t place water here...');
			}
			break;
		case 88:
			placeTrap();
			break;
		case 83:
			plantSeed();
			break;
        default:
            break;
    }
    tmpEle = document.getElementById("coords");
    tmpCoord = playerX + ", " + playerY;
    tmpEle.value = tmpCoord;
}

function sellTreasure() {
	var sellIt = confirm("Do you want to sell all your treasure?");
	if (sellit == true) {
		extraCash = foundTreasure * maxTreasureCash;
		money = money + extraCash;
		status("You sold all your treasure for "+extraCash);
		updateDisplay();
	} else {
		status("Don't waste my time...");
	}
}

function placeLight() {
	if (coal > 0 && wood > 0) {
		wood--;
		coal--;
		objectMap[playerX][playerY] = 10;
		$('#achCandle').css({'color':'orange'});
	} else {
		status("You don't have the resources (1w &amp; 1c).");
	}
}

function placeTrap() {
	if (stone > 0 && wood > 1) {
		wood = wood - 2;
		stone--;
		objectMap[playerX][playerY] = 11;
		points = points + 10;
		$('#achTrap').css({'color':'orange'});
	} else {
		status("You don't have the resources (2w &amp; 1s).");
	}
}

function useGrowPotion(dir) {
	gpotion--;
	if (dir == 0) {
		map[playerX][playerY] = 0;
		objectMap[playerX][playerY] = 5;
	} else if (dir == 1) {
		map[playerX-1][playerY] = 0;
		objectMap[playerX-1][playerY] = 5;
	} else if (dir == 2) {
		map[playerX+1][playerY] = 0;
		objectMap[playerX+1][playerY] = 5;
	} else if (dir == 3) {
		map[playerX][playerY-1] = 0;
		objectMap[playerX][playerY-1] = 5;
	} else if (dir == 4) {
		map[playerX][playerY+1] = 0;
		objectMap[playerX][playerY+1] = 5;
	}
}

function plantSeed() {
	var seedType = null;
	$('#status').html(
		'What type of seed?'
		+'<hr>'
		+'<a href="#" id="plantFlowerSeed" class="planting">Flower</a><br />'
		+'<a href="#" id="plantTreeSeed" class="planting">Tree</a><br />'
	);
}

$('#plantFlowerSeed').live('click', function() {
	$('#status').html('');
	if (fseeds > 0) {
		fseeds--;
		map[playerX][playerY] = 7;
		var growTime = Math.floor(Math.random() * 35000) + 1500;
		setTimeout('growSeed('+playerX+','+playerY+')', growTime);
		$('#achSeed').css({'color':'orange'});
		updateDisplay();
	} else {
		alert("You have no flower seeds.");
	}
	return false;
});
$('#plantTreeSeed').live('click', function() {
	$('#status').html('');
	if (tseeds > 0) {
		tseeds--;
		map[playerX][playerY] = 8;
		var growTime = Math.floor(Math.random() * 65000) + 11500;
		setTimeout('growTree('+playerX+','+playerY+')', growTime);
		$('#achSeed').css({'color':'orange'});
		updateDisplay();
	} else {
		alert("You have no tree seeds.");
	}
	return false;
});

function growSeed(x,y) {
	map[x][y] = 0;
	objectMap[x][y] = 5;
}

function growTree(x,y) {
	map[x][y] = 0;
	objectMap[x][y] = 7;
}

function placeWater() {
	if (waters > 0) {
		if (map[playerX][playerY] == 0) {
			waters--;
			map[playerX][playerY] = 1;
			objectMap[playerX][playerY] = 1;
		} else {
			waters--;
			map[playerX][playerY] = 2;
			objectMap[playerX][playerY] = 2;	
		}
	}
}

function getWater() {
	if (buckets > 0) {
		buckets--;
		waters++;
		$('#achBucket').css({'color':'orange'});
		updateDisplay();
	} else {
		status('You haven\'t got a bucket to use!');
	}
}

function eatFish() {
	if (fish > 0) {
		fish--;
		health = health + 25;
		checkHealth();
		updateDisplay();
		status('Yum! You eat a fish, gain 25 health!');
	}
}

function placeRock() {
	objectMap[playerX][playerY] = 8;
	stone--;
	updateDisplay();
}

function buildMenu(which) {
	var statusW = $('#status').width();
	var statusH = $('#status').height();
	var infoW = $('#infoKey').width();
	var infoH = $('#infoKey').height();
	tmpStatusHTML = $('#status').html();
	if (which == 0) {
		//document.onkeydown = null;
		$('#status').animate({
			width: statusW*2,
			height: statusH*2
		}, 350, function() {
			$(this).html(
				'BUILD MENU<br /><br />'
				+'<hr>'
				+'<br />'
				+'<input type="button" value="+5" id="spades" class="buy" /> Spades: 2w<br />'
				+'<input type="button" value="+2" id="hammers" class="buy" /> Hammers: 2w 1s<br />'
				+'<input type="button" value="+2" id="buckets" class="buy" /> Buckets: 3i<br />'
				+'<br />'
				+'<input type="button" value="+1" id="fseeds" class="buy" /> Flower Seeds: 10 money<br />'
				+'<input type="button" value="+1" id="tseeds" class="buy" /> Tree Seeds: 20 money<br />'
				+'<input type="button" value="+1" id="growPotion" class="buy" /> Grow Potion: 15 money<br />'
			);
			bMenu = 1;
		});
	} else {
		//document.onkeydown = checkKeyCode;
		$('#status').html('');
		$('#status').animate({
			width: statusW/2,
			height: statusH/2
		}, 350, function() {
			bMenu = 0;
		});
	}
}

$('#spades').live('click',function() {
	if (wood > 1) {
		spades = spades + 5;
		wood = wood - 2;
		$('#achBuild').css({'color':'orange'});
		updateDisplay();
	} else {
		alert("You need more resources");
	}
});
$('#hammers').live('click',function() {
	if (wood > 1 && stone > 0) {
		stone--;
		wood = wood - 2;
		hammers = hammers + 2;
		$('#achBuild').css({'color':'orange'});
		updateDisplay();
	} else {
		alert("You need more resources");
	}
});
$('#buckets').live('click',function() {
	if (iron > 2) {
		buckets = buckets + 2;
		iron = iron - 3;
		$('#achBuild').css({'color':'orange'});
		updateDisplay();
	} else {
		alert("You need more resources");
	}
});
$('#fseeds').live('click',function() {
	if (money > 9) {
		fseeds++;
		money = money - 10;
		updateDisplay();
	} else {
		alert("You need more resources");
	}
});
$('#tseeds').live('click',function() {
	if (money > 19) {
		tseeds++;
		money = money - 19;
		updateDisplay();
	} else {
		alert("You need more resources");
	}
});
$('#growPotion').live('click',function() {
	if (money > 14 && flowers > 1) {
		gpotion++;
		flowers = flowers - 2;
		money = money - 15;
		updateDisplay();
	} else {
		alert("You need more resources");
	}
});

function digHere() {
	if (map[playerX][playerY] == 0 && spades > 0) {
		map[playerX][playerY] = 6;
		$('#achDig').css({'color':'orange'});
		var rndTreasure = Math.floor(Math.random() * 10) + 1;
		if (rndTreasure > 7) {
			foundSomeTreasure();
		} else {
			status('You found nothing');
		}
		repairLand(playerX,playerY);
		spades--;
		updateDisplay();
	} else if (map[playerX][playerY] == 6 && spades > 0) {
		map[playerX][playerY] = 1;
		objectMap[playerX][playerY] = 1;
		var rndTreasure = Math.floor(Math.random() * 10) + 1;
		if (rndTreasure > 7) {
			foundSomeTreasure();
		} else {
			status('You found nothing');
		}
		spades--;
		updateDisplay();
	} else {
		status('Can\'t Dig!');
	}
}

function foundSomeTreasure() {
	var rndType = Math.floor(Math.random() * 4) + 1;
	if (rndType == 1) {
		var someMoney = Math.floor(Math.random() * 30) + 1;
		money = money + someMoney;
		status("You found " + someMoney + " money!");
	} else if (rndType == 2) {
		status("You found some Iron ore");
		iron++;
	} else if (rndType == 3) {
		status("Treasure! Sell it!");
		$('#achTreasure').css({'color':'orange'});
		foundTreasure++;
	} else if (rndType == 4) {
		status("Some Coal!");
		coal++;
	}
	updateDisplay();
}

function repairLand(x,y) {
	var grassTime = Math.floor(Math.random() * 45000) + 10000;
	setTimeout('grassLand('+x+','+y+')', grassTime);
}

function grassLand(x,y) {
	map[x][y] = 0;
}

function goFishing() {
	document.onkeydown = null;
	status('Now Fishing...');
	var fishTime = Math.floor(Math.random() * 1600) + 450;
	setTimeout('catchFish()', fishTime);
}

function catchFish() {
	var fishChance = Math.floor(Math.random() * 100) + 1;
	if (fishChance > 85) {
		status('<font style="color: lightgreen;">Yeah, you caught a fish!</font>');
		fish++;
		$('#achFish').css({'color':'orange'});
		updateDisplay();
	} else {
		status('No luck this time...');
	}
	document.onkeydown = checkKeycode;
}

function pickFlower(dir) {
	status('You picked a flower.');
	if (dir == 1) {
		objectMap[playerX-1][playerY] = 0;
		flowers++;
	} else if (dir == 2) {
		objectMap[playerX+1][playerY] = 0;
		flowers++;
	} else if (dir == 3) {
		objectMap[playerX][playerY-1] = 0;
		flowers++;
	} else if (dir == 4) {
		objectMap[playerX][playerY+1] = 0;
		flowers++;
	}
	$('#achFlower').css({'color':'orange'});
	
	updateDisplay();
}

function breakTree(dir) { //start tree break
	document.onkeydown = null;
	status('Breaking down a tree...');
	if (dir == 1) {
		var tmpTimeout = Math.floor(Math.random() * 1750) + 350;
		setTimeout('felledTree(1)', tmpTimeout);
	} else if (dir == 2) {
		var tmpTimeout = Math.floor(Math.random() * 1750) + 350;
		setTimeout('felledTree(2)', tmpTimeout);
	} else if (dir == 3) {
		var tmpTimeout = Math.floor(Math.random() * 1750) + 350;
		setTimeout('felledTree(3)', tmpTimeout);
	} else if (dir == 4) {
		var tmpTimeout = Math.floor(Math.random() * 1750) + 350;
		setTimeout('felledTree(4)', tmpTimeout);
	}
}

function felledTree(dir) { //finish tree break
	if (dir == 1) {
		if (objectMap[playerX-1][playerY] == 7 || objectMap[playerX-1][playerY] == 12 || objectMap[playerX-1][playerY] == 13) {
			objectMap[playerX-1][playerY] = 0;
			document.onkeydown = checkKeycode;
			$('#achTree').css({'color':'orange'});
			wood++;
			updateDisplay();
			status('Tree felled!');
		}
	} else if (dir == 2) {
		if (objectMap[playerX+1][playerY] == 7 || objectMap[playerX+1][playerY] == 12 || objectMap[playerX+1][playerY] == 13) {
			objectMap[playerX+1][playerY] = 0;
			document.onkeydown = checkKeycode;
			$('#achTree').css({'color':'orange'});
			wood++;
			updateDisplay();
			status('Tree felled!');
		}
	} else if (dir == 3) {
		if (objectMap[playerX][playerY-1] == 7 || objectMap[playerX][playerY-1] == 12 || objectMap[playerX][playerY-1] == 13) {
			objectMap[playerX][playerY-1] = 0;
			document.onkeydown = checkKeycode;
			$('#achTree').css({'color':'orange'});
			wood++;
			updateDisplay();
			status('Tree felled!');
		}
	} else if (dir == 4) {
		if (objectMap[playerX][playerY+1] == 7 || objectMap[playerX][playerY+1] == 12 || objectMap[playerX][playerY+1] == 13) {
			objectMap[playerX][playerY+1] = 0;
			document.onkeydown = checkKeycode;
			$('#achTree').css({'color':'orange'});
			wood++;
			updateDisplay();
			status('Tree felled!');
		}
	}
}

function breakRock(dir) { //start tree break
	document.onkeydown = null;
	status('Breaking down a rock...');
	if (dir == 1) {
		var tmpTimeout = Math.floor(Math.random() * 2450) + 650;
		setTimeout('felledRock(1)', tmpTimeout);
	} else if (dir == 2) {
		var tmpTimeout = Math.floor(Math.random() * 2450) + 650;
		setTimeout('felledRock(2)', tmpTimeout);
	} else if (dir == 3) {
		var tmpTimeout = Math.floor(Math.random() * 2450) + 650;
		setTimeout('felledRock(3)', tmpTimeout);
	} else if (dir == 4) {
		var tmpTimeout = Math.floor(Math.random() * 2450) + 650;
		setTimeout('felledRock(4)', tmpTimeout);
	}
}

function felledRock(dir) { //finish rock break
	if (dir == 1) {
		if (objectMap[playerX-1][playerY] = 3) {
			objectMap[playerX-1][playerY] = 0;
			document.onkeydown = checkKeycode;
			stone = stone + 2;
			hammers--;
			if (hammers < 0) { hammers = 0; }
			$('#achRock').css({'color':'orange'});
			updateDisplay();
			status('Rock felled!');
		}
	} else if (dir == 2) {
		if (objectMap[playerX+1][playerY] = 3) {
			objectMap[playerX+1][playerY] = 0;
			document.onkeydown = checkKeycode;
			stone = stone + 2;
			hammers--;
			if (hammers < 0) { hammers = 0; }
			$('#achRock').css({'color':'orange'});
			updateDisplay();
			status('Rock felled!');
		}
	} else if (dir == 3) {
		if (objectMap[playerX1][playerY-1] = 3) {
			objectMap[playerX][playerY-1] = 0;
			document.onkeydown = checkKeycode;
			stone = stone + 2;
			hammers--;
			if (hammers < 0) { hammers = 0; }
			$('#achRock').css({'color':'orange'});
			updateDisplay();
			status('Rock felled!');
		}
	} else if (dir == 4) {
		if (objectMap[playerX][playerY+1] = 3) {
			objectMap[playerX][playerY+1] = 0;
			document.onkeydown = checkKeycode;
			stone = stone + 2;
			hammers--;
			if (hammers < 0) { hammers = 0; }
			$('#achRock').css({'color':'orange'});
			updateDisplay();
			status('Rock felled!');
		}
	}
}

function status(txt) {
	var tmpStatusHTML = $('#status').html();
	$('#status').html(txt+"<br/>"+tmpStatusHTML);
}

function loadAll(){ //load the game
    if(loaded == tileDict.length + charDict.length + objectDict.length + shadowDict.length){
        clearInterval(loadTimer);
        loadTimer = setInterval(gameUpdate,50);
    }
}
 
function drawMap(){ //draw the map (in intervals)
    var tileH = 25;
    var tileW = 50;
    mapX = 80;
    mapY = 10;
	
    ctx.save();
    var testx = (playerX-playerY)*tileH + mapX*4.5;
    var testy = (playerX+playerY)*tileH/2+ mapY*3.0;
    ctx.translate(-testx + (350), -testy +(125)); // some offset that you need to figure out
    
    for(i=0;i<map.length;i++){
        for(j=0;j<map[i].length;j++){
            var drawTile= map[i][j];
            var drawObj = objectMap[i][j];
            var xpos = (i-j)*tileH + mapX*4.5;
            var ypos = (i+j)*tileH/2+ mapY*3.0;
			
            ctx.drawImage(tileImg[drawTile],xpos,ypos);
            if (drawObj){
                if (drawObj > 0) {
                    ctx.drawImage(objectImg[drawObj-1],xpos,ypos-(objectImg[drawObj-1].height/2));
                }
            }
			if (darken > 2) {
				if(i == zombieX && j == zombieY){
					//if (zombiesalive == 0) { 
						//IF ZOMBIES ARE DEAD (again...) THEN CHANGE THE IMAGE TO THE DEAD ZOMBIE PIC
					//}
					zombie = ctx.drawImage(charImg[1],xpos,ypos-(charImg[0].height/2));
				}
			} else {
				
			}
            if(i == playerX && j == playerY){
                you = ctx.drawImage(charImg[0],xpos,ypos-(charImg[0].height/2));
            }
        }
    }
	ctx.restore();
}
 
function init(){ //initialise the main functions and even handlers
    setInterval('updateClock()',1000);
    ctx = document.getElementById('main').getContext('2d');
	//ctx.globalAlpha = 0.5
    loadImg();
    loadTimer = setInterval(loadAll,100);
    //document.getElementById("main").addEventListener("mousemove", mouseCheck, false);
    //document.getElementById("main").addEventListener("mousedown", mouseClick, false);
    document.onkeydown = checkKeycode;
    tmpEle = document.getElementById("coords");
    tmpCoord = playerX + ", " + playerY;
    tmpEle.value = tmpCoord;
	updateDisplay();
	var dayNight = setInterval(function() {
		darkenLight();
	}, 50000); //1000,10000,100000
	var disasterTimer = setInterval(function() {
		runDisaster();
	}, Math.floor(Math.random() * 180000) + 25000);
}

function runDisaster() {
	var disaster = Math.floor(Math.random() * 3);
	if (disaster == 0) {
		status('*** EARTHQUAKE! ***')
		$('#main').vibrate();
		if (objectMap[playerX-1][playerY] > 2 || objectMap[playerX+1][playerY] > 2 || objectMap[playerX][playerY-1] > 2 || objectMap[playerX][playerY+1] > 2) {
			health = health - 25;
			updateDisplay();
		}
		for(i=0;i<map.length;i++){
			for(j=0;j<map[i].length;j++){
				if (objectMap[i][j] == 3) {
					var r = Math.floor(Math.random() * 2);
					if (r == 0) {
						objectMap[i][j] = 9;
					}
				} else if (objectMap[i][j] == 7 || objectMap[i][j] == 12 || objectMap[i][j] == 13) {
					var r = Math.floor(Math.random() * 2);
					if (r == 0) {
						objectMap[i][j] = 0;
					}
				}
			}
		}
	}
}

function darkenLight() {
	if (darken == 0) {
		$('#canvasCover').css({'background-image':'url('+shadowDict[1]+')'});
		darken++;
		$('#canvasCover').html("<h1>TIME: DUSK</h1>");
		setTimeout('fadeH1()',1500);
	} else if (darken == 1) {
		$('#canvasCover').css({'background-image':'url('+shadowDict[2]+')'});	
		darken++;
	} else if (darken == 2) {
		$('#canvasCover').css({'background-image':'url('+shadowDict[3]+')'});	
		darken++;
		$('#canvasCover').html("<h1>TIME: MIDNIGHT</h1>");
		setTimeout('fadeH1()',1500);
		if (zombiesAlive == 0) {
			zombieTimer = setInterval(function() {
				zombieMoveToYou();
			},zombieMoveTime);
			zombiesAlive = 1;
		}
	} else if (darken == 3) {
		$('#canvasCover').css({'background-image':'url('+shadowDict[2]+')'});
		darken++;
	} else if (darken == 4) {
		$('#canvasCover').css({'background-image':'url('+shadowDict[1]+')'});	
		darken++;
		$('#canvasCover').html("<h1>TIME: DAWN</h1>");
		setTimeout('fadeH1()',1500);
	} else if (darken == 5) {
		$('#canvasCover').css({'background-image':'url('+shadowDict[0]+')'});	
		darken = 0;
		$('#canvasCover').html("<h1>TIME: NOON</h1>");
		dayCount++;
		setTimeout('fadeH1()',1500);
		clearTimeout(zombieTimer);
		zombieX = Math.floor(Math.random() * map[0].length);
		zombieY = Math.floor(Math.random() * map[0].length);
		zombiesAlive = 0;
	}
}

function fadeH1() {
	$('#canvasCover h1').fadeOut(1000, function() {
		$(this).remove();
	});
}

function zombieMoveToYou() { //traditional following zombies
	if (playerX < zombieX) {
		rndZa = 0;
	}
	if (playerX > zombieX) {
		rndZa = 1;
	}
	if (playerY < zombieY) {
		rndZa = 2;
	}
	if (playerY > zombieY) {
		rndZa = 3;
	}
	if (rndZa == 0 && zombiesAlive == 1) {
		if (objectMap[zombieX-1][zombieY] > 0) {
			
		} else {
			zombieX--;
			if (zombieX == playerX && zombieY == playerY) {
				var zAttack = Math.floor(Math.random() * maxZombieAttack) + 1;
				health = health - zAttack;
				checkHealth();
				status('*** ATTACKED! -'+zAttack+' health!');
			}
			if (zombieX < 0) {
				zombieX++;
			}
			if (objectMap[zombieX-1][zombieY] == 11 || objectMap[zombieX+1][zombieY] == 11 || objectMap[zombieX][zombieY-1] == 11 || objectMap[zombieX][zombieY+1] == 11 ) {
				//zombie trapped
				points = points + 10;
				$('#achTrapZom').css({'color':'orange'});
				zombiesAlive = 0;
			}
		}
	}
	if (rndZa == 1 && zombiesAlive == 1) {
		if (objectMap[zombieX+1][zombieY] > 0) {
						
		} else {
			zombieX++;
			if (zombieX == playerX && zombieY == playerY) {
				var zAttack = Math.floor(Math.random() * maxZombieAttack) + 1;
				health = health - zAttack;
				checkHealth();
				status('*** ATTACKED! -'+zAttack+' health!');
			}
		}
		if (objectMap[zombieX-1][zombieY] == 11 || objectMap[zombieX+1][zombieY] == 11 || objectMap[zombieX][zombieY-1] == 11 || objectMap[zombieX][zombieY+1] == 11 ) {
			//zombie trapped
			points = points + 10;
			$('#achTrapZom').css({'color':'orange'});
			zombiesAlive = 0;
		}
	}
	if (rndZa == 2 && zombiesAlive == 1) {
		if (objectMap[zombieX][zombieY-1] > 0) {
			
		} else {
			zombieY--;
			if (zombieX == playerX && zombieY == playerY) {
				var zAttack = Math.floor(Math.random() * maxZombieAttack) + 1;
				health = health - zAttack;
				checkHealth();
				status('*** ATTACKED! -'+zAttack+' health!');
			}
			if (zombieY < 0) {
				zombieY++;
			}
			if (objectMap[zombieX-1][zombieY] == 11 || objectMap[zombieX+1][zombieY] == 11 || objectMap[zombieX][zombieY-1] == 11 || objectMap[zombieX][zombieY+1] == 11 ) {
				//zombie trapped
				points = points + 10;
				$('#achTrapZom').css({'color':'orange'});
				zombiesAlive = 0;
			}
		}
	}
	if (rndZa == 3 && zombiesAlive == 1) {
		if (objectMap[zombieX][zombieY+1] > 0) {
			
		} else {
			zombieY++;
			if (zombieX == playerX && zombieY == playerY) {
				var zAttack = Math.floor(Math.random() * maxZombieAttack) + 1;
				health = health - zAttack;
				checkHealth();
				status('*** ATTACKED! -'+zAttack+' health!');
			}
		}
		if (objectMap[zombieX-1][zombieY] == 11 || objectMap[zombieX+1][zombieY] == 11 || objectMap[zombieX][zombieY-1] == 11 || objectMap[zombieX][zombieY+1] == 11 ) {
			//zombie trapped
			points = points + 10;
			$('#achTrapZom').css({'color':'orange'});
			zombiesAlive = 0;
		}
	}
	updateDisplay();
}

function checkHealth() {
	if (health < 1) {
		$('#main,#canvasCover,#infoKey,#status').remove();
		clearTimeout(zombieTimer);
		$('body').append(
			'<div id="results">'
				+'<br /><br /><strong>YOU SURVIVED '+dayCount+' DAYS RESULTS</strong><br /><br />'
				+'Money ------------ '+money+'<br />'
				+'Wood ------------ '+wood+'<br />'
				+'Iron ------------ '+iron+'<br />'
				+'Stone ------------ '+stone+'<br />'
				+'Wood ------------ '+wood+'<br />'
				+'Hammers ------------ '+hammers+'<br />'
				+'Water ------------ '+waters+'<br />'
				+'Buckets ------------ '+buckets+'<br />'
				+'Flowers ------------ '+flowers+'<br />'
				+'Buckets ------------ '+buckets+'<br />'
				+'Treasure ------------ '+foundTreasure+'<br />'
				+'Points ------------ '+(points * dayCount)+'<br />'
				+'<br />'
			+'</div>'
		)
	}
	if (health > 100) {
		health = 100;
		updateDisplay();
	}
	if (health < 25) {
		$('#healthD').css({'color':'red'})
	} else if (health < 50) {
		$('#healthD').css({'color':'orange'})
	} else if (health < 75) {
		$('#healthD').css({'color':'green'})
	} else {
		$('#healthD').css({'color':'lightblue'})
	}
}

function runDay() {
	
}

function updatePoints() {
	points = ((flowers * money) + iron + (wood * spades) + (hammers * stone) + (waters * buckets));
	if (foundTreasure > 0) {
		points = points * foundTreasure
	}
}

function updateDisplay() {
	updatePoints();
	document.getElementById("healthD").value = health;
	document.getElementById("moneyD").value = money;
	document.getElementById("pointsD").value = points;
    document.getElementById("treasureD").value = foundTreasure;
	document.getElementById("spadeD").value = spades;
    document.getElementById("hammerD").value = hammers;
    document.getElementById("bucketD").value = buckets;
    document.getElementById("waterD").value = waters;
    document.getElementById("woodD").value = wood;
    document.getElementById("ironD").value = iron;
    document.getElementById("coalD").value = coal;
    document.getElementById("stoneD").value = stone;
    document.getElementById("flowersD").value = flowers;
    document.getElementById("fishD").value = fish;
    document.getElementById("fseedD").value = fseeds;
    document.getElementById("tseedD").value = tseeds;
    document.getElementById("gpotionD").value = gpotion;
}

function gameUpdate() { //update the game, clear canvas etc
    ctx.clearRect(0,0,904,460);
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; //assign color
    drawMap();
}

function updateClock() {
    time++;
    document.getElementById("time").value = time;
}
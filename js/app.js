var mazeMap = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];

var maze = {
    matrix: undefined, // representa el mapa del laberinto
    startX: undefined,  // posición x inicial del laberinto
    startY: undefined,  // posición y inicial del laberinto
    endX: undefined,  // posición x que representa la salida
    endY: undefined,// posición y que representa la salida
    startOrientation: undefined // orientación inicial
};

var player  = {
    x: undefined, // posición x actual del jugador
    y: undefined, // posición x actual del jugador
    orientation: undefined // orientación actual del jugador
};

var ORIENTATION = {
  LEFT: 1,
  UP: 2,
  RIGHT: 3,
  DOWN: 4
};

// representa la inferfaz usando DOM del laberinto
var mazeInterface = [];

// dibujar laberinto
function renderMaze(maze, player);
// establecer estilo en la posición x, y
function setStyleAt(maze, x, y, style);

// preguntar si (x,y) representa un muro, es decir  '*'
function isWall(maze, x, y);
// preguntar si (x,y) representa un espacio vacio, es decir  '_'
function isSpace(maze, x, y);
// preguntar si (x,y) representa la salida del laberinto, es decir 'W'
function isEnd(maze, x, y);

//  rotar a la izquierda
function turnLeft(player) ;
//  rotar a la derecha
function turnRight(player) ;
//  mover una posición hacia adelante en la dirección de player.direction
function moveForward(player) ;

// algoritmo de búsqueda para encontrar un camino de salida para un
// laberinto cualquiera
function exitMaze(player);

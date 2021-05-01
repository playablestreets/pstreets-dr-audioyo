var squareBehindTop = document.getElementById("square-top");
var squareBehindBottom = document.getElementById("square-bottom");
var foldDuration = '1s';
var foldDelay = '1s';
//this should be the total time for transitions to complete
var destroyFlippersDelay = 3000;
var currentPageTitle = "blank"

preloadImages();

//called after assets have loaded
function startInteraction(){
  setSquareBackgroundImages(getPageByTitle("home"));  
  document.getElementById("loading-screen").style.top = '110vh';
  setTimeout( ()=> {
    document.getElementById("loading-screen").style.display = "none";
  }, 3000);
}

function goToPage(nextPageTitle){
  var lastPage = getPageByTitle(currentPageTitle);
  var nextPage = getPageByTitle(nextPageTitle);
  
  overlayFlippers(lastPage.topImageSrc, lastPage.bottomImageSrc);
  setSquareBackgroundImages(nextPage);
  setTimeout(foldFlippers, 0);
  setTimeout( destroyFlippers, destroyFlippersDelay );

  currentPageTitle = nextPageTitle;
}

function setSquareBackgroundImages(page){
  squareBehindTop.style.backgroundImage = "url('" + page.topImageSrc + "')";
  squareBehindBottom.style.backgroundImage = "url('" + page.bottomImageSrc + "')";
}

// function home(){
//   content.style.backgroundImage = "url('images/home/home.jpg')";
// }

function overlayFlippers(topImage, bottomImage){
  createFlippers();

  var flipperTop = document.getElementById("flipper-top");
  var flipperBottom = document.getElementById("flipper-bottom");

  //set front squares with current pages
  flipperTop.style.backgroundImage = "url('" + topImage + "')";
  flipperBottom.style.backgroundImage = "url('" + bottomImage + "')";
}

function createFlippers(){
  var flipper = document.createElement('div');
  flipper.className = "square flipper";
  flipper.id = "flipper-top";
  flipper.style.transform = "rotateX(0deg)"
  flipper.style.transformOrigin = "bottom center";
  flipper.style.perspectiveOrigin = "top center";
  squareBehindTop.appendChild(flipper);

  flipper = document.createElement('div');
  flipper.className = "square flipper";
  flipper.id = "flipper-bottom";
  flipper.style.transform = "rotateY(0deg)"
  flipper.style.transformOrigin = "center left";
  flipper.style.perspectiveOrigin = "center right";
  squareBehindBottom.appendChild(flipper);
}


function foldFlippers(){
  console.log("flipping");
  var flipperTop = document.getElementById("flipper-top");
  var flipperBottom = document.getElementById("flipper-bottom");

  flipperTop.style.transitionDuration = foldDuration;
  flipperBottom.style.transitionDuration = foldDuration;
  flipperBottom.style.transitionDelay = foldDelay;
  flipperTop.style.transform = "rotateX(-90deg)";
  flipperBottom.style.transform = "rotateY(-90deg)";
}

function destroyFlippers(){
  console.log("destroying flippers");
  var flippers = document.getElementsByClassName("flipper");
  while(flippers.length > 0){
    flippers[0].parentNode.removeChild(flippers[0]);
  }
}
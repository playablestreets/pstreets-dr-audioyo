var squareBehindTop = document.getElementById("square-top");
var squareBehindBottom = document.getElementById("square-bottom");
var foldDuration = '2s';
var foldDelay = '2s';
//this should be the total time for transitions to complete
var destroyFlippersDelay = 4500;
var currentPageTitle = "home"

imagePreloader.preloadImages(startInteraction);

//called after assets have loaded
function startInteraction(){
  setSquaresToPage(getPageByTitle("home"));  
  document.getElementById("loading-screen").style.top = '110vh';
  setTimeout( ()=> {
    document.getElementById("loading-screen").style.display = "none";
  }, 3000);
}

function goToPage(nextPageTitle){
  var lastPage = getPageByTitle(currentPageTitle);
  var nextPage = getPageByTitle(nextPageTitle);
  
  overlayFlippers(lastPage);
  setSquaresToPage(nextPage);
  setTimeout(foldFlippers, 0);
  setTimeout( destroyFlippers, destroyFlippersDelay );
  currentPageTitle = nextPageTitle;
}

function setSquaresToPage(page){
  setSquaresBackgroundImages(page);
  setSquaresInnerHTML(page);
}

function setSquaresBackgroundImages(page){
  squareBehindTop.style.backgroundImage = "url('" + page.topImageSrc + "')";
  squareBehindBottom.style.backgroundImage = "url('" + page.bottomImageSrc + "')";
}

function setSquaresInnerHTML(page){
  destroyElementsByClassName("innerContainer");

  var squareInnerContainer = document.createElement('div');
  squareInnerContainer.className = "square innerContainer";
  squareInnerContainer.id = "square-inner-top";
  squareInnerContainer.innerHTML = page.topInnerHTML;
  squareBehindTop.appendChild(squareInnerContainer);

  squareInnerContainer = document.createElement('div');
  squareInnerContainer.className = "square innerContainer";
  squareInnerContainer.id = "square-inner-bottom";
  squareInnerContainer.innerHTML = page.bottomInnerHTML;
  squareBehindBottom.appendChild(squareInnerContainer);
}

function overlayFlippers(page){
  createFlippers();
  var flipperTop = document.getElementById("flipper-top");
  var flipperBottom = document.getElementById("flipper-bottom");
  //set front squares with current pages
  flipperTop.style.backgroundImage = "url('" + page.topImageSrc + "')";
  flipperBottom.style.backgroundImage = "url('" + page.bottomImageSrc + "')";
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
  var flipperTop = document.getElementById("flipper-top");
  var flipperBottom = document.getElementById("flipper-bottom");
  flipperTop.style.transitionDuration = foldDuration;
  flipperBottom.style.transitionDuration = foldDuration;
  flipperBottom.style.transitionDelay = foldDelay;
  flipperTop.style.transform = "rotateX(-90deg)";
  flipperBottom.style.transform = "rotateY(-90deg)";
}

function destroyElementsByClassName(className){
  var flippers = document.getElementsByClassName(className);
  while(flippers.length > 0){
    flippers[0].parentNode.removeChild(flippers[0]);
  }
}

function destroyFlippers(){
  destroyElementsByClassName("flipper");
}
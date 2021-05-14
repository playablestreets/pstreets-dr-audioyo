var squareBehindTop = document.getElementById("square-top");
var squareBehindBottom = document.getElementById("square-bottom");
var foldDuration = '1.5s';
var foldDelay = '1.5s';
//this should be the total time for transitions to complete
var destroyFlippersDelay = 2500;
var soundInTopDelay = 800;
var soundInBottomDelay = 2100;
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

function goToTheRoom(){
  stopSounds();
  playSound("dj");
  goToPage("page03", true);
}

function goToPage(nextPageTitle, silent = false){
  var lastPage = getPageByTitle(currentPageTitle);
  var nextPage = getPageByTitle(nextPageTitle);
  
  if(!silent){
    stopSounds();
    playSound(lastPage.soundOut);
  }

  overlayFlippers(lastPage);
  setSquaresToPage(nextPage);

  setTimeout(foldFlippers, 0);
  setTimeout( destroyFlippers, destroyFlippersDelay );

  if(!silent){
    setTimeout( () => playSound(nextPage.soundInTop), soundInTopDelay);
    setTimeout( () => playSound(nextPage.soundInBottom), soundInBottomDelay);
  }
  currentPageTitle = nextPageTitle;
}

function setSquaresToPage(page){
  setSquaresBackgroundImages(page);
  setSquaresInnerHTML(page);
  setRectangleInnerHTML(page);
}

function setSquaresBackgroundImages(page){
  if(page.hideSquareBackgrounds){
    squareBehindTop.style.backgroundImage = "";
    squareBehindBottom.style.backgroundImage = "";
  
  }else{
    squareBehindTop.style.backgroundImage = "url('" + page.topImageSrc + "')";
    squareBehindBottom.style.backgroundImage = "url('" + page.bottomImageSrc + "')";
  
  }
}

function setSquaresInnerHTML(page){
  destroyElementsByClassName("inner-container");

  var squareInnerContainer = document.createElement('div');
  squareInnerContainer.className = "square inner-container";
  squareInnerContainer.id = "square-inner-top";
  squareInnerContainer.innerHTML = page.topInnerHTML;
  squareBehindTop.appendChild(squareInnerContainer);

  squareInnerContainer = document.createElement('div');
  squareInnerContainer.className = "square inner-container";
  squareInnerContainer.id = "square-inner-bottom";
  squareInnerContainer.innerHTML = page.bottomInnerHTML;
  squareBehindBottom.appendChild(squareInnerContainer);
}

function setRectangleInnerHTML(page){
  var innerHTML = page.rectangleInnerHTML;
  var rectangle = document.getElementById("rectangle");
  rectangle.innerHTML = innerHTML;
};


function overlayFlippers(page){
  createFlippers();
  var flipperTop = document.getElementById("flipper-top");
  var flipperBottom = document.getElementById("flipper-bottom");
  //set front squares with current pages
  flipperTop.style.backgroundImage = "url('" + page.topImageSrc + "')";
  // flipperTop.style.innerHTML = "url('" + page.topInnerHTML + "')";
  flipperBottom.style.backgroundImage = "url('" + page.bottomImageSrc + "')";
  // flipperBottom.style.innerHTML = "url('" + page.bottomInnerHTML + "')";


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
  flipperTop.style.opacity = "0";
  flipperBottom.style.transform = "rotateY(-90deg)";
  flipperBottom.style.opacity = "0";
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

const appHeight = () => {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
  document.documentElement.style.setProperty('--ah', `${window.innerHeight * 0.01}px`);
}
  window.addEventListener('resize', appHeight)
appHeight()
class Panel{
  constructor(title, topImage, bottomImage){
    this.title = title;
    this.topImageSrc = topImage;
    this.bottomImageSrc = bottomImage;
  }
}

const preloadDiv = document.getElementById("preload");
const panels = [];

panels.push( new Panel("home", "images/home/home-top.jpg", "images/home/home-bottom.jpg"));
panels.push( new Panel("page01", "images/comic/p00light.jpg", "images/comic/p01.jpg"));
panels.push( new Panel("page02", "images/comic/p02.jpg", "images/comic/p03.jpg"));
panels.push( new Panel("page03", "images/comic/p04.jpg", "images/comic/p05.jpg"));
panels.push( new Panel("page04", "images/comic/p06.jpg", "images/comic/p07.jpg"));
panels.push( new Panel("page05", "images/comic/p12.jpg", "images/comic/p13.jpg"));
panels.push( new Panel("page06", "images/comic/p08.jpg", "images/comic/p09.jpg"));
panels.push( new Panel("page07", "images/comic/p10.jpg", "images/comic/p11.jpg"));
panels.push( new Panel("page08", "images/comic/p14.jpg", "images/comic/p15.jpg"));
panels.push( new Panel("page09", "images/comic/p16.jpg", "images/comic/p17.jpg"));
panels.push( new Panel("page10", "images/comic/p18.jpg", "images/comic/p00dark.jpg"));
panels.push( new Panel("bumbag", "images/bumbag/bumbag-top.jpg", "images/bumbag/bumbag-bottom.jpg"));
panels.push( new Panel("blank", "images/comic/p00light.jpg", "images/comic/p00light.jpg"));

var numImagesLoaded = 0;
var numImages = panels.length * 2;
function tallyLoadedImage(){
  numImagesLoaded++;
  console.log('num images loaded = ' + numImagesLoaded);
  if(numImagesLoaded == numImages){
    onAllImagesPreloaded();
  }
}

preloadImages();

function preloadImages(){
  console.log(numImages + " to load...");
  panels.forEach( p =>{
    var imgId = p.title + "-image-top"; 
    var topImage = new Image();
    topImage.id = imgId;
    topImage.className = 'preloaded-image';
    topImage.src = p.topImageSrc;
    topImage.onload = tallyLoadedImage;
    preloadDiv.appendChild(topImage);

    imgId = p.title + "-image-bottom"; 
    var bottomImage = new Image();
    bottomImage.id = imgId;
    bottomImage.className = 'preloaded-image';
    bottomImage.src = p.bottomImageSrc;
    bottomImage.onload = tallyLoadedImage;
    preloadDiv.appendChild(bottomImage); 
  })
}

function getPanelByTitle(title){
  return panels.filter(p => {
    return p.title === title;
  })[0];
}

function onAllImagesPreloaded(){
  console.log('all images have loaded');
  // document.getElementById("loading-screen").style.opacity = 0.0;

  setTimeout( () => {
    //after 3 seconds slide loading screen down
    document.getElementById("loading-screen").style.top = '110vh';

    //then disable 2 seconds later (probably not needed)
    setTimeout( () =>{
      document.getElementById("loading-screen").style.display = "none";
    },
    2000);

  }, 3000);

}
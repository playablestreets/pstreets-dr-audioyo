class Page{
  constructor(title, topImage, bottomImage){
    this.title = title;
    this.topImageSrc = topImage;
    this.bottomImageSrc = bottomImage;
  }
}

const pages = [];
pages.push( new Page("home", "images/home/home-top.jpg", "images/home/home-bottom.jpg"));
pages.push( new Page("page01", "images/comic/p00light.jpg", "images/comic/p01.jpg"));
pages.push( new Page("page02", "images/comic/p02.jpg", "images/comic/p03.jpg"));
pages.push( new Page("page03", "images/comic/p04.jpg", "images/comic/p05.jpg"));
pages.push( new Page("page04", "images/comic/p06.jpg", "images/comic/p07.jpg"));
pages.push( new Page("page05", "images/comic/p12.jpg", "images/comic/p13.jpg"));
pages.push( new Page("page06", "images/comic/p08.jpg", "images/comic/p09.jpg"));
pages.push( new Page("page07", "images/comic/p10.jpg", "images/comic/p11.jpg"));
pages.push( new Page("page08", "images/comic/p14.jpg", "images/comic/p15.jpg"));
pages.push( new Page("page09", "images/comic/p16.jpg", "images/comic/p17.jpg"));
pages.push( new Page("page10", "images/comic/p18.jpg", "images/comic/p00dark.jpg"));
pages.push( new Page("bumbag", "images/bumbag/bumbag-top.jpg", "images/bumbag/bumbag-bottom.jpg"));
pages.push( new Page("blank", "images/comic/p00light.jpg", "images/comic/p00light.jpg"));

function getPageByTitle(title){
  return pages.filter(p => {
    return p.title === title;
  })[0];
}



//Image preloading --------------------------------------------
var imagePreloader = {
  numImagesLoaded: 0,
  numImages: pages.length * 2,
  onAllLoaded: null,

  preloadImages(onAllLoadedCallback){
    this.onAllLoaded = onAllLoadedCallback;
    let preloadDiv = document.getElementById("preload");
  
    console.log(this.numImages + " to load...");
    pages.forEach( p =>{
      var imgId = p.title + "-image-top"; 
      var topImage = new Image();
      topImage.id = imgId;
      topImage.className = 'preloaded-image';
      topImage.src = p.topImageSrc;
      topImage.onload = this.tallyLoadedImage(this);
      preloadDiv.appendChild(topImage);
  
      imgId = p.title + "-image-bottom"; 
      var bottomImage = new Image();
      bottomImage.id = imgId;
      bottomImage.className = 'preloaded-image';
      bottomImage.src = p.bottomImageSrc;
      bottomImage.onload = this.tallyLoadedImage(this);
      preloadDiv.appendChild(bottomImage); 
    })
  },

  tallyLoadedImage(that){
    that.numImagesLoaded++;
    if(that.numImagesLoaded == that.numImages){
      console.log('all images have loaded');
      setTimeout( () => {
        that.onAllLoaded();
      }, 2000);    }
  }
}
const smallerAssets = [
  "images\\bumbag\\back.png",
  "images\\bumbag\\background.jpg",
  "images\\bumbag\\bass.png",
  "images\\bumbag\\bumbag-bottom.jpg",
  "images\\bumbag\\bumbag-top.jpg",
  "images\\bumbag\\bumbag.png",
  "images\\bumbag\\buttons.png",
  "images\\bumbag\\cats.png",
  "images\\bumbag\\drums.png",
  "images\\bumbag\\guitar.png",
  "images\\bumbag\\lips.png",
  "images\\bumbag\\record.png",
  "images\\bumbag\\title.png",
  "images\\bumbag\\trumpet.png",
  "images\\home\\background.jpg",
  "images\\home\\building-bg.jpg",
  "images\\home\\building-bottom.png",
  "images\\home\\building-top.png",
  "images\\home\\bus.png",
  "images\\home\\door.png",
  "images\\home\\giant.png",
  "images\\home\\home-back.jpg",
  "images\\home\\home-bottom.jpg",
  "images\\home\\home-front.jpg",
  "images\\home\\home-top.jpg",
  "images\\home\\home.jpg",
  "images\\home\\moon.jpg",
  "images\\home\\pavement.jpg",
  "images\\home\\smoke.PNG",
  "images\\home\\title-smoke.jpg",
  "images\\home\\title.png",
  "images\\home\\window01.png",
  "images\\home\\window02.png",
  "images\\home\\window03.png",
  "images\\home\\window04.png",
  "images\\comic\\arrow-down01.png",
  "images\\comic\\arrow-down02.png",
  "images\\comic\\arrow-down03.png",
  "images\\comic\\arrow-left01.png",
  "images\\comic\\arrow-right01.png",
  "images\\comic\\arrow-up01.png",
  "images\\comic\\arrow-up02.png"
  ];

//Image preloading --------------------------------------------
var imagePreloader = {
  numImagesLoaded: 0,
  numImages: pages.length * 2 + smallerAssets.length,
  onAllLoaded: null,

  preloadImages(onAllLoadedCallback){
    this.onAllLoaded = onAllLoadedCallback;
    let preloadDiv = document.getElementById("preload");
  
    console.log(this.numImages + " assets to preload...");
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
    });

    smallerAssets.forEach( asset =>{
      var assetImage = new Image();
      assetImage.className = 'preloaded-image';
      assetImage.src = asset;
      assetImage.onload = this.tallyLoadedImage(this);
      preloadDiv.appendChild(assetImage);
    });




  },

  tallyLoadedImage(that){
    //check all pages are loaded
    that.numImagesLoaded++;

    if(that.numImagesLoaded == that.numImages){
      console.log('all images have loaded');
      // while(!sounds.hasLoaded){};
      // console.log('all sounds have loaded!');
      setTimeout( () => {
        that.onAllLoaded();
      }, 2000);    }
  }


}



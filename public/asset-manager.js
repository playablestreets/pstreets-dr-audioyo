
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
      // while(!sounds.hasLoaded){};
      // console.log('all sounds have loaded!');
      setTimeout( () => {
        that.onAllLoaded();
      }, 2000);    }
  }
}
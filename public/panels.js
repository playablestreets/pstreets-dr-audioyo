class Panel{
  constructor(title, topImage, bottomImage){
    this.title = title;
    this.topImage = topImage;
    this.bottomImage = bottomImage;
  }
}

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
panels.push( new Panel("bumbag", "images/bumbag/bumbag.jpg", "images/bumbag/bumbag.jpg"));
panels.push( new Panel("blank", "images/comic/p00light.jpg", "images/comic/p00light.jpg"));


function getPanelByTitle(title){
  return panels.filter(p => {
    return p.title === title;
  })[0];
}
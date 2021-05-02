class Page{
  constructor(title, topImage, bottomImage, topInnerHTML, bottomInnerHTML){
    this.title = title;
    this.topImageSrc = topImage;
    this.bottomImageSrc = bottomImage;
    this.topInnerHTML = topInnerHTML;
    this.bottomInnerHTML = bottomInnerHTML;
  }
}

const pages = [];
// home
pages.push( new Page(
  "home", 
  "images/home/home-top.jpg", 
  "images/home/home-bottom.jpg",
  "<p onclick=goToPage(\"page01\")>👉</p>",
  ""
));

// page01
pages.push( new Page(
  "page01", 
  "images/comic/p00light.jpg", 
  "images/comic/p01.jpg",
  "",
  "<p onclick=goToPage(\"page02\")>👆</p>"
));

// page02
pages.push( new Page(
  "page02", 
  "images/comic/p02.jpg", 
  "images/comic/p03.jpg",
  "",
  "<p onclick=goToPage(\"page03\")>👇</p>"
));

// page03
pages.push( new Page(
  "page03", 
  "images/comic/p04.jpg", 
  "images/comic/p05.jpg",
  "",
  "<p onclick=goToPage(\"page04\")>👈</p>\
  <p onclick=goToPage(\"bumbag\")>🎶</p>\
  <p onclick=goToPage(\"page05\")>👉</p>"
));

// page04
pages.push( new Page(
  "page04", 
  "images/comic/p06.jpg", 
  "images/comic/p07.jpg",
  "",
  "<p onclick=goToPage(\"page07\")>👇</p>\
  <p onclick=goToPage(\"page06\")>👆</p>"
));

// page05
pages.push( new Page(
  "page05", 
  "images/comic/p12.jpg", 
  "images/comic/p13.jpg",
  "",
  "<p onclick=goToPage(\"page08\")>👆</p>\
  <p onclick=goToPage(\"page09\")>👇</p>"
));

// page06
pages.push( new Page(
  "page06", 
  "images/comic/p08.jpg", 
  "images/comic/p09.jpg",
  "",
  "<p onclick=goToPage(\"page10\")>👍</p>"
));

// page07
pages.push( new Page(
  "page07", 
  "images/comic/p10.jpg", 
  "images/comic/p11.jpg",
  "",
  "<p onclick=goToPage(\"page10\")>👍</p>"
));

// page08
pages.push( new Page(
  "page08", 
  "images/comic/p14.jpg", 
  "images/comic/p15.jpg",
  "",
  "<p onclick=goToPage(\"page10\")>👍</p>"
));

// page09
pages.push( new Page(
  "page09", 
  "images/comic/p16.jpg", 
  "images/comic/p17.jpg",
  "",
  "<p onclick=goToPage(\"page10\")>👍</p>"
));

// page10
pages.push( new Page(
  "page10", 
  "images/comic/p18.jpg", 
  "images/comic/p00dark.jpg",
  "",
  "<p onclick=goToPage(\"home\")>🏠</p>"
));

// bumbag
pages.push( new Page(
  "bumbag", 
  "images/bumbag/bumbag-top.jpg", 
  "images/bumbag/bumbag-bottom.jpg",
  "<p onclick=goToPage(\"page03\")>🔙</p>",
  ""
));

// blank
pages.push( new Page(
  "blank", 
  "images/comic/p00light.jpg", 
  "images/comic/p00light.jpg",
  "",
  ""
));

function getPageByTitle(title){
  return pages.filter(p => {
    return p.title === title;
  })[0];
}
class Page{
  constructor(title, topImage, bottomImage, topInnerHTML, bottomInnerHTML,  soundInTop, soundInBottom, soundOut,){
    this.title = title;
    this.topImageSrc = topImage;
    this.bottomImageSrc = bottomImage;
    this.topInnerHTML = topInnerHTML;
    this.bottomInnerHTML = bottomInnerHTML;
    this.soundInTop = soundInTop;
    this.soundInBottom = soundInBottom;
    this.soundOut = soundOut;
  }
}

const pages = [];
// home
pages.push( new Page(
  "home", 
  "images/home/home-top.jpg", 
  "images/home/home-bottom.jpg",
  "<div class=\"window03 window\" onclick=playSound(\"trumpet\")></div>\
  <div class=\"window04 window\" onclick=goToTheRoom()></div>",
  "<div class=\"window01 window\" onclick=playSound(\"singer\")></div>\
  <div class=\"window02 window\" onclick=playSound(\"guitar\")></div>\
  <div class=\"door\" onclick=goToPage(\"page01\")></div>",
  "",
  "",
  ""
));

// page01
pages.push( new Page(
  "page01", 
  "images/comic/p00light.jpg", 
  "images/comic/p01.jpg",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"page02\")></div>",
  "", "knock", ""
));

// page02
pages.push( new Page(
  "page02", 
  "images/comic/p02.jpg", 
  "images/comic/p03.jpg",
  "",
  "<div class=\"p02-arrow-down arrow\" onclick=goToPage(\"page03\")></div>",
  "hello", "", "click"
));

// page03
pages.push( new Page(
  "page03", 
  "images/comic/p04.jpg", 
  "images/comic/p05.jpg",
  "",
  "<div class=\"p03-arrow-left arrow\" onclick=goToPage(\"page04\")></div>\
  <div class=\"bumbag-button\" onclick=goToPage(\"bumbag\")></div>\
  <div class=\"p03-arrow-right arrow\" onclick=goToPage(\"page05\")></div>",
  "clack", "hmm", ""
));

// page04
pages.push( new Page(
  "page04", 
  "images/comic/p06.jpg", 
  "images/comic/p07.jpg",
  "",
  "<div class=\"p04-arrow-down arrow\" onclick=goToPage(\"page07\")></div>\
   <div class=\"p04-arrow-up arrow\" onclick=goToPage(\"page06\")></div>",
   "streetscape1", "streetscape2", ""
));

// page05
pages.push( new Page(
  "page05", 
  "images/comic/p12.jpg", 
  "images/comic/p13.jpg",
  "",
  "<div class=\"p05-arrow-down arrow\" onclick=goToPage(\"page09\")></div>\
   <div class=\"p05-arrow-up arrow\" onclick=goToPage(\"page08\")></div>",
   "meow", "wind", ""
));

// page06
pages.push( new Page(
  "page06", 
  "images/comic/p08.jpg", 
  "images/comic/p09.jpg",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "edge", "jump", ""
));

// page07
pages.push( new Page(
  "page07", 
  "images/comic/p10.jpg", 
  "images/comic/p11.jpg",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "smash", "laugh", ""
));

// page08
pages.push( new Page(
  "page08", 
  "images/comic/p14.jpg", 
  "images/comic/p15.jpg",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "purr", "cat", ""
));

// page09
pages.push( new Page(
  "page09", 
  "images/comic/p16.jpg", 
  "images/comic/p17.jpg",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "fall", "splat", ""
));

// credits
pages.push( new Page(
  "credits", 
  "images/comic/credits-top.jpg",
  "images/comic/credits-bottom.jpg", 
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"home\")></div>",
  "", "", ""
));

// bumbag
pages.push( new Page(
  "bumbag", 
  "images/bumbag/bumbag-top.jpg", 
  "images/bumbag/bumbag-bottom.jpg",
  "<p onclick=goToPage(\"page03\")>🔙</p>",
  "",
  "", "", ""
));

// blank
pages.push( new Page(
  "blank", 
  "images/comic/p00light.jpg", 
  "images/comic/p00light.jpg",
  "",
  "",
  "", "", ""
));

function getPageByTitle(title){
  return pages.filter(p => {
    return p.title === title;
  })[0];
}
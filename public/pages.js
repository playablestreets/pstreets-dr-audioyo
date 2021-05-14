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
    this.rectangleInnerHTML = "";
    this.hideSquareBackgrounds = false;
  }
}

const pages = [];
// home
const home = new Page(
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
)

home.hideSquareBackgrounds = true;
home.rectangleInnerHTML = "<div class=\"rectangle-bg\" style=\"background-image:url(\'images/home/home-back.jpg\')\"></div>\<div class=\"rectangle-bg\" style=\"background-image:url(\'images/home/pavement.jpg\')\"></div>\
<div class=\"rectangle-bg title-giant\" style=\"background-image:url(\'images/home/giant.png\')\"></div>\
<div class=\"rectangle-bg\" style=\"background-image:url(\'images/home/home-front.jpg\')\"></div>\
<div class=\"rectangle-bg title-smoke\" style=\"background-image:url(\'images/home/title-smoke.jpg\')\"></div>\
<div class=\"rectangle-bg title-bus\" onclick=playSound(\"bus\") style=\"background-image:url(\'images/home/bus.png\')\"></div>";
pages.push( home );

// page01
pages.push( new Page(
  "page01", 
  // "images/comic/p00title.jpg", 
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
const bumbag = new Page(
  "bumbag", 
  "images/bumbag/bumbag-top.jpg", 
  "images/bumbag/bumbag-bottom.jpg",
  "",
  "",
  "", "", ""
);

bumbag.hideSquareBackgrounds = true;
bumbag.rectangleInnerHTML = "\
<div class=\"bumbag-item\" style=\"background-image:url(\'images/bumbag/background.jpg\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-back\" onclick=goToPage(\"page03\") style=\"background-image:url(\'images/bumbag/back.png\')\"></div>\
<div class=\"bumbag-item bumbag\" style=\"background-image:url(\'images/bumbag/bumbag.png\')\"></div>\
<div class=\"bumbag-item bumbag-buttons\" style=\"background-image:url(\'images/bumbag/buttons.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-bass\" style=\"background-image:url(\'images/bumbag/bass.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-cats\" style=\"background-image:url(\'images/bumbag/cats.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-drums\" style=\"background-image:url(\'images/bumbag/drums.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-guitar\" style=\"background-image:url(\'images/bumbag/guitar.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-lips\" style=\"background-image:url(\'images/bumbag/lips.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-record\" style=\"background-image:url(\'images/bumbag/record.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-trumpet\" style=\"background-image:url(\'images/bumbag/trumpet.png\')\"></div>\
<div class=\"bumbag-item bumbag-title\" style=\"background-image:url(\'images/bumbag/title.png\')\"></div>";

pages.push(bumbag);
  
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
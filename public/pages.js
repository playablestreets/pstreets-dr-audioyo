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
  "images/home/home-top.png", 
  "images/home/home-bottom.png",
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
home.rectangleInnerHTML = "<div class=\"rectangle-bg\" style=\"background-image:url(\'images/home/home-back.png\')\"></div>\
<div class=\"rectangle-bg title-giant\" style=\"background-image:url(\'images/home/giant.png\')\"></div>\
<div class=\"rectangle-bg\" style=\"background-image:url(\'images/home/home-front.png\')\"></div>\
<div class=\"rectangle-bg title-smoke\" style=\"background-image:url(\'images/home/title-smoke.png\')\"></div>\
<div class=\"rectangle-bg title-bus\" onclick=playSound(\"bus\") style=\"background-image:url(\'images/home/bus.png\')\"></div>";
pages.push( home );

// page01
pages.push( new Page(
  "page01", 
  // "images/comic/p00title.jpg", 
  "images/comic/p00light.png", 
  "images/comic/p01.png",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"page02\")></div>",
  "", "knock", ""
));

// page02
pages.push( new Page(
  "page02", 
  "images/comic/p02.png", 
  "images/comic/p03.png",
  "<div class=\"bumbag-panel-button-page02\" onclick=goToBumbag()></div>",
  "<div class=\"p02-arrow-down arrow\" onclick=goToPage(\"page03\")></div>",
  "hello", "", "click"
));

// page03
pages.push( new Page(
  "page03", 
  "images/comic/p04.png", 
  "images/comic/p05.png",
  "<div class=\"bumbag-panel-button-page03-top\" onclick=goToBumbag()></div>",
  "<div class=\"p03-arrow-left arrow\" onclick=goToPage(\"page04\")></div>\
  <div class=\"bumbag-panel-button-page03-bottom\" onclick=goToBumbag()></div>\
  <div class=\"p03-arrow-right arrow\" onclick=goToPage(\"page05\")></div>",
  "clack", "hmm", ""
));

// page04
pages.push( new Page(
  "page04", 
  "images/comic/p06.png", 
  "images/comic/p07.png",
  "<div class=\"bumbag-panel-button-page04-top\" onclick=goToBumbag()></div>",
  "<div class=\"p04-arrow-down arrow\" onclick=goToPage(\"page07\")></div>\
   <div class=\"p04-arrow-up arrow\" onclick=goToPage(\"page06\")></div>",
   "streetscape1", "streetscape2", ""
));

// page05
pages.push( new Page(
  "page05", 
  "images/comic/p12.png", 
  "images/comic/p13.png",
  "<div class=\"bumbag-panel-button-page05-top\" onclick=goToBumbag()></div>",
  "<div class=\"p05-arrow-down arrow\" onclick=goToPage(\"page09\")></div>\
   <div class=\"p05-arrow-up arrow\" onclick=goToPage(\"page08\")></div>",
   "meow", "wind", ""
));

// page06
pages.push( new Page(
  "page06", 
  "images/comic/p08.png", 
  "images/comic/p09.png",
  "<div class=\"bumbag-panel-button-page06-top\" onclick=goToBumbag()></div>",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>\
  <div class=\"bumbag-panel-button-page06-bottom\" onclick=goToBumbag()></div>",
  "edge", "jump", ""
));

// page07
pages.push( new Page(
  "page07", 
  "images/comic/p10.png", 
  "images/comic/p11.png",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "smash", "laugh", ""
));

// page08
pages.push( new Page(
  "page08", 
  "images/comic/p14.png", 
  "images/comic/p15.png",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "purr", "cat", ""
));

// page09
pages.push( new Page(
  "page09", 
  "images/comic/p16.png", 
  "images/comic/p17.png",
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"credits\")></div>",
  "fall", "splat", ""
));

// credits
pages.push( new Page(
  "credits", 
  "images/comic/credits-top.png",
  "images/comic/credits-bottom.png", 
  "",
  "<div class=\"panel-button\" onclick=goToPage(\"home\")></div>",
  "", "", ""
));

// bumbag
const bumbag = new Page(
  "bumbag", 
  "", 
  "",
  "",
  "",
  "", "", ""
);

bumbag.hideSquareBackgrounds = true;
bumbag.rectangleInnerHTML = "\
<div class=\"bumbag-item\" style=\"background-image:url(\'images/bumbag/background.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-back\" onclick=returnFromBumbag() style=\"background-image:url(\'images/bumbag/back.png\')\"></div>\
<div class=\"bumbag-item bumbag\" id=\"bumbag\" style=\"background-image:url(\'images/bumbag/bumbag.png\')\"></div>\
<div class=\"bumbag-item bumbag-buttons\" id=\"bumbag-buttons\" style=\"background-image:url(\'images/bumbag/buttons.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-bass\" onClick=toggleLoopMute(\"bumbag-bass\") style=\"background-image:url(\'images/bumbag/bass.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-cats\" onClick=toggleLoopMute(\"bumbag-cats\") style=\"background-image:url(\'images/bumbag/cats.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-drums\" onClick=toggleLoopMute(\"bumbag-drums\") style=\"background-image:url(\'images/bumbag/drums.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-guitar\" onClick=toggleLoopMute(\"bumbag-guitar\") style=\"background-image:url(\'images/bumbag/guitar.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-lips\" onClick=toggleLoopMute(\"bumbag-lips\") style=\"background-image:url(\'images/bumbag/lips.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-record\" onClick=toggleLoopMute(\"bumbag-record\") style=\"background-image:url(\'images/bumbag/record.png\')\"></div>\
<div class=\"bumbag-item bumbag-clickable bumbag-instrument\" id=\"bumbag-trumpet\" onClick=toggleLoopMute(\"bumbag-trumpet\") style=\"background-image:url(\'images/bumbag/trumpet.png\')\"></div>\
<div class=\"bumbag-item bumbag-title\" style=\"background-image:url(\'images/bumbag/title.png\')\"></div>";

pages.push(bumbag);
  
// blank
pages.push( new Page(
  "blank", 
  "images/comic/p00light.png", 
  "images/comic/p00light.png",
  "",
  "",
  "", "", ""
));

function getPageByTitle(title){
  return pages.filter(p => {
    return p.title === title;
  })[0];
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const lis = document.querySelectorAll("li");
const lbs = document.querySelectorAll(".lb");
const ul = document.querySelector("ul");
const lineDash = document.querySelector(".line-dash");


var dashOrigin = -35; //pixels
var selectedLi = -35; //pixels
var speed = 500; //move this many pixels in one second.
var distance = 0;
var time = 0;

// initial animation and class for HOME
TweenLite.to(lbs[0], 0.6, {
          y: -43,
          ease: Bounce.easeOut,
          delay: 1
        });

lis[0].classList.add("active");

//push all the bottom lines down.
function pushDownLb() {
  for(let k = 0; k < lbs.length; ++k)
    TweenLite.to(lbs[k], 0.5, {
          y: 0,
          ease:  Power3.easeOut
        });
}

ul.addEventListener(
  "mouseleave",
  function(e) {
    // to avoid a bug in chrome that sometimes triggers mouseleave on click
    // and the relatedTarget comes up null
    if (e.relatedTarget) {
      distance = Math.abs(dashOrigin - selectedLi);
      time = distance / speed;
      dashOrigin = selectedLi;
      if (time) {
        // overlaping tweens would give a zero time
        TweenLite.to(lineDash, time, {
          strokeDashoffset: selectedLi,
          ease: Bounce.easeOut
        });
      } //if
    } //if
  },
  false
);

for (let i = 0; i < 4; ++i) {
  lis[i].addEventListener("mouseover", function() {
    distance = Math.abs(-250 * i - 35 - dashOrigin);
    time = distance / speed;
    dashOrigin = -250 * i - 35;
    if (time) {
      TweenLite.to(lineDash, time, {
        strokeDashoffset: -250 * i - 35,
        ease: Bounce.easeOut
      });
    } //if
  });

  lis[i].addEventListener("click", function() {
    selectedLi = -250 * i - 35;
    pushDownLb();
    let current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    lis[i].classList.add("active");
    TweenLite.to(lbs[i], 0.5, {
          y: -43,
          ease: Bounce.easeOut
        });
  });
}

jQuery360098647059155525361: {events: {…}, handle: ƒ}
accessKey: ""
ariaAtomic: null
ariaAutoComplete: null
ariaBusy: null
ariaChecked: null
ariaColCount: null
ariaColIndex: null
ariaColSpan: null
ariaCurrent: null
ariaDescription: null
ariaDisabled: null
ariaExpanded: null
ariaHasPopup: null
ariaHidden: null
ariaKeyShortcuts: null
ariaLabel: null
ariaLevel: null
ariaLive: null
ariaModal: null
ariaMultiLine: null
ariaMultiSelectable: null
ariaOrientation: null
ariaPlaceholder: null
ariaPosInSet: null
ariaPressed: null
ariaReadOnly: null
ariaRelevant: null
ariaRequired: null
ariaRoleDescription: null
ariaRowCount: null
ariaRowIndex: null
ariaRowSpan: null
ariaSelected: null
ariaSetSize: null
ariaSort: null
ariaValueMax: null
ariaValueMin: null
ariaValueNow: null
ariaValueText: null
assignedSlot: null
attributeStyleMap: StylePropertyMap {size: 0}
attributes: NamedNodeMap {0: href, 1: title, href: href, title: title, length: 2}
autocapitalize: ""
autofocus: false
baseURI: "https://en.wikipedia.org/wiki/Stephen_King"
charset: ""
childElementCount: 0
childNodes: NodeList [text]
children: HTMLCollection []
classList: DOMTokenList [value: '']
className: ""
clientHeight: 0
clientLeft: 0
clientTop: 0
clientWidth: 0
contentEditable: "inherit"
coords: ""
dataset: DOMStringMap {}
dir: ""
download: ""
draggable: true
elementTiming: ""
enterKeyHint: ""
firstChild: text
firstElementChild: null
hash: ""
hidden: false
host: "wikipedia.org"
hostname: "wikipedia.org"
href: "https://en.wikipedia.org/wiki/Stephen_King"
hrefTranslate: ""
hreflang: ""
id: ""
innerHTML: "Stephen King"
innerText: "Stephen King"
inputMode: ""
isConnected: true
isContentEditable: false
lang: ""
lastChild: text
lastElementChild: null
localName: "a"
name: ""
namespaceURI: "http://www.w3.org/1999/xhtml"
nextElementSibling: a
nextSibling: text
nodeName: "A"
nodeType: 1
nodeValue: null
nonce: ""
offsetHeight: 18
offsetLeft: 359
offsetParent: main.page__main
offsetTop: 2402
offsetWidth: 117
onabort: null
onanimationend: null
onanimationiteration: null
onanimationstart: null
onauxclick: null
onbeforecopy: null
onbeforecut: null
onbeforepaste: null
onbeforexrselect: null
onblur: null
oncancel: null
oncanplay: null
oncanplaythrough: null
onchange: null
onclick: null
onclose: null
oncontextlost: null
oncontextmenu: null
oncontextrestored: null
oncopy: null
oncuechange: null
oncut: null
ondblclick: null
ondrag: null
ondragend: null
ondragenter: null
ondragleave: null
ondragover: null
ondragstart: null
ondrop: null
ondurationchange: null
onemptied: null
onended: null
onerror: null
onfocus: null
onformdata: null
onfullscreenchange: null
onfullscreenerror: null
ongotpointercapture: null
oninput: null
oninvalid: null
onkeydown: null
onkeypress: null
onkeyup: null
onload: null
onloadeddata: null
onloadedmetadata: null
onloadstart: null
onlostpointercapture: null
onmousedown: null
onmouseenter: null
onmouseleave: null
onmousemove: null
onmouseout: null
onmouseover: null
onmouseup: null
onmousewheel: null
onpaste: null
onpause: null
onplay: null
onplaying: null
onpointercancel: null
onpointerdown: null
onpointerenter: null
onpointerleave: null
onpointermove: null
onpointerout: null
onpointerover: null
onpointerrawupdate: null
onpointerup: null
onprogress: null
onratechange: null
onreset: null
onresize: null
onscroll: null
onsearch: null
onsecuritypolicyviolation: null
onseeked: null
onseeking: null
onselect: null
onselectionchange: null
onselectstart: null
onslotchange: null
onstalled: null
onsubmit: null
onsuspend: null
ontimeupdate: null
ontoggle: null
ontransitioncancel: null
ontransitionend: null
ontransitionrun: null
ontransitionstart: null
onvolumechange: null
onwaiting: null
onwebkitanimationend: null
onwebkitanimationiteration: null
onwebkitanimationstart: null
onwebkitfullscreenchange: null
onwebkitfullscreenerror: null
onwebkittransitionend: null
onwheel: null
origin: "https://all-aikatsu.fandom.com"
outerHTML: "<a href=\"/wiki/Stephen_King\" title=\"Stephen King\">Stephen King</a>"
outerText: "Stephen King"
ownerDocument: document
parentElement: p
parentNode: p
part: DOMTokenList [value: '']
password: ""
pathname: "/wiki/Stephen_King"
ping: ""
port: ""
prefix: null
previousElementSibling: span
previousSibling: text
protocol: "https:"
referrerPolicy: ""
rel: ""
relList: DOMTokenList [value: '']
rev: ""
scrollHeight: 0
scrollLeft: 0
scrollTop: 0
scrollWidth: 0
search: ""
shadowRoot: null
shape: ""
slot: ""
spellcheck: true
style: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex: 0
tagName: "A"
target: ""
text: "Stephen King"
textContent: "Stephen King"
title: "Stephen King"
translate: true
type: ""
username: ""
virtualKeyboardPolicy: ""

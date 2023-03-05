//載入語系包
import { content_zhTW } from "./zh-TW.js";
import { content_EN } from "./en.js";
console.log(content_zhTW);
console.log(content_EN);

//console.log(document.querySelectorAll('.translation a'))
var translation = document.querySelector(".translation a");

document.querySelectorAll(".translation-selection a").forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(link.innerHTML);
    translation.innerHTML = link.innerHTML;
    if (link.innerHTML == "中文") {
      Object.keys(content_zhTW).forEach((key) => {
        document.querySelector("#" + key).innerHTML = content_zhTW[key];
      });
    } else {
      Object.keys(content_EN).forEach((key) => {
        document.querySelector("#" + key).innerHTML = content_EN[key];
      });
    }
  });
});

/*載入中圖示*/
let preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
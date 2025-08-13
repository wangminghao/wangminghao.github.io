var loadPatchPlayer = function() {
  var patchvideo = document.querySelector("#patchvideo");
  var options = {
    url: patchvideo.attributes["target"].value,
    maxwidth: 980,
    playinline: false,
    byline: false,
    title: false,
    portrait: false
  };

  var player = new Vimeo.Player(patchvideo, options);
}

window.addEventListener("load", loadPatchPlayer());

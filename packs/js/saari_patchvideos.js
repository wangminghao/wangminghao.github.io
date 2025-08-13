var loadAllPlayers = function() {

  ["#empty-pivot", "#cross", "#working-dakini", "#men-chorus", "#tongue", "#parking-in-the-where", "#tuomas"].forEach(function(videodiv) {
    loadPlayer(videodiv);
  })
}

var loadPlayer = function(div_class) {
  var patchvideo = document.querySelector(div_class);
  var options = {
    url: patchvideo.attributes["target"].value,
    maxwidth: 340,
    playinline: false,
    byline: false,
    title: false,
    portrait: false,
    responsive: true
  };

  var player = new Vimeo.Player(patchvideo, options);
  return player;
}

window.addEventListener("load", loadAllPlayers());

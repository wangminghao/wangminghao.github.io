var play_pause = 0;

var loadAllPlayers = function() {
  var green_player = loadPlayer("#green_knife");
  var blue_player = loadPlayer("#blue_knife");
  var white_player = loadPlayer("#white_knife");
  var red_player = loadPlayer("#red_knife");
  var yellow_player = loadPlayer("#yellow_knife");

  allPlayers = [green_player, blue_player, white_player, red_player, yellow_player];
  document.querySelector(".play-all").onclick = function() { playAll(allPlayers) };
}

var loadPlayer = function(div_class) {
  var patchvideo = document.querySelector(div_class);
  var options = {
    url: patchvideo.attributes["target"].value,
    maxwidth: 400,
    playinline: false,
    byline: false,
    title: false,
    portrait: false
  };

  var player = new Vimeo.Player(patchvideo, options);
  return player;
}

var playAll = function(allPlayers) {
  if (play_pause == 0) {
    allPlayers.forEach(function (player) {
      player.play();
    });
    play_pause = 1;
  } else {
    allPlayers.forEach(function (player) {
      player.pause();
    });
    play_pause = 0;
  }
}

window.addEventListener("load", loadAllPlayers());

var $autoplay = $('.autoplay');
$autoplay.on('mouseenter',function () {
  $autoplay.get(0).play();
});

$autoplay.on('mouseout',function(){
  $autoplay.get(0).pause;
});

// スクロールすると出現する。


$(window).scroll(function() {
  var dreamPosition = $('#navstu').offset().top - $(window).height() / 2;
  var position = $(this).scrollTop();

  // スクロール位置がある程度下がったら、#image2を表示する
  if (position > dreamPosition) {
    $('.stuimg').fadeIn(1000);
    $('#slide-in').addClass('show');
  }
});





// ２番目の画像をスクロールすることについて

  
$(window).scroll(function() {
  var dreamPosition = $('#navdre').offset().top - $(window).height() + $('#navdre').outerHeight();
  var position = $(this).scrollTop();

  if (position > dreamPosition) {
    $('#image2').fadeIn(1000);
    $('#slide-in2').addClass('show');
  }
});
  

// スクロールすると、#image3がフェードインされて、#slide-in3がshowされる


$(window).scroll(function() {
  var footerPosition = $('footer').offset().top - $(window).height();
  var position = $(this).scrollTop();

  // スクロール位置がある程度下がったら、#image3を表示する
  if (position > footerPosition) {
    $('#image3').fadeIn(1000);
    $('#slide-in3').addClass('show');
  }
});









// スマホ版



$(document).ready(function() {
  // 「学生時代」の文字が表示されたら画像を表示する
    $(".studentexplain,.stuimg").fadeIn(1000);
});




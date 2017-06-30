var resizeTimer = null;
var scrollTimer = null;

$(window).on({
    'load': function(){
        //読み込み終了した時の処理
    },
    'resize': function(){
        //ウインドウリサイズした時の処理
        clearTimeout( resizeTimer );
        resizeTimer = setTimeout(function() {
            windowSize();
        }, 300 );
    },
    'scroll': function(){
        clearTimeout( scrollTimer );
        scrollTimer = setTimeout(function() {
            //スクロールした時の処理
        }, 300 );
    }
});

$(function(){
    //ページ内スムーススクロール
    $('a[href^=#]').on({
        'click': function(){
            var href= $(this).attr("href");
            if ( href !== '#' || href !== '' ) {
                var target = $( href == "#" || href == "" ? 'html' : href );
                var position = target.offset().top;
                $('body,html').animate( {scrollTop:position}, 700, 'swing' );
                return false;
            }
        }
    });
});//$function

function windowSize(){
    var w =  $(window).width();
    //ウインドウサイズ変化
    if( w <= 600 ){
        //600px以下の場合の処理
    }else if( w >= 601 && w <= 960 ){
        //601-960pxの場合の処理
    }else if( w >= 961 && w <= 1200 ){
        //961-1200pxの場合の処理
    }else{
        //それ意外（1201以上）の場合の処理
    }
}//windowSize
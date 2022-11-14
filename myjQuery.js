

$(function(){
    function fixOverflow(){
        $('body,html').animate({scrollTop:0},200);
        if($(window).height()>=626){
            $('body').css('overflow-y','hidden');
        }else{
            $('body').css('overflow-y','auto');
        }
    }
    function resizeW(){
        var $wid=$(window).width();
        $('ul#scroll li').width($wid);
    }
    function tuyenngon(){
        $('#tuyenngon').css({'top':($(window).height()-500)/2,'left':($(window).width()-960)/2})
    }
    fixOverflow();resizeW();tuyenngon();$(window).resize(function(){resizeW();fixOverflow();tuyenngon()});
    $('#enter2').click(function(){
        $(this).fadeOut(function(){
            $('#scroll').stop().animate({marginLeft:'-'+$(window).width()+'px'},5000,'easeInOutQuart');//5 giây đạp xe
            $('#menu').animate({opacity:1},5000,function(){
                $('#copy embed').remove();
            });
        });
    });
    $('#menu li a').click(function(){
        var $hre=$(this).attr('href');
        var $index=$($hre).index();
        $('#scroll').stop().animate({marginLeft:'-'+$(window).width()*$index+'px'},3000,'easeOutQuint');
        $('#menu li a').removeClass('active');
        $(this).addClass('active');
        if($hre=='#vk' || $hre == '#mom' || $hre == '#friends'){
            $('img[alt="*"]').fadeIn();
        }else $('img[alt="*"]').hide();
        return false;
    });
    $('img[alt="*"]').parent().css('z-index','9999');
    $('#friends span.more').click(function(){
        $('#tuyenngon').fadeIn();
    })
    $('#close').click(function(){
        $('#tuyenngon').hide();
    });
})
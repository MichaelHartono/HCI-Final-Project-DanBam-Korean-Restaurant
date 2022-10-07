// $('.container').append('hi')

// $(()=>{
//     $('.container').append('hello');
// })
function looper() {
    $(()=>{
        // let toggleBtn = true;
        $('.slider-content').slideDown(500);
        let slideCount = $('.slides').length;
        let slideWidth = $('.slide').width;
        let totalWidth = slideCount * slideWidth;
        // let marginLeft = $('.slides').margin-left;
    
        // $('.slider-content').hide();
        $('.slides').css({
            width: totalWidth,
            marginLeft: - slideWidth
        });
        // $('.slide:last-child').prependTo('.slides');
  
    
        $('.slides').animate({left: + slideWidth}, 500, function(){
            $('.slide:last-child').prependTo('.slides')
            $('.slides').css({left: 0})
        })
        
            
        // $('#show-btn').click(function () {
        //     if(toggleBtn) {
        //         $(this).text('Stop');
        //         $('.slider-content').slideDown(500);
        //         toggleBtn = !toggleBtn
        //     } else {
        //         $(this).text('Start');
        //         $('.slider-content').slideUp(500);
        //         toggleBtn = !toggleBtn
        //     }
        // });
    
    
    })
    setTimeout(looper, 5000)
}


looper();

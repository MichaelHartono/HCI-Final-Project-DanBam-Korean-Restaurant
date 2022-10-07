$(()=> {
    
    let toggle = true;

    $('#button-food').click(function (e) { 
        if (toggle == false) {
            $(this).text('Hide');
            $('.menu').slideDown();
            toggle = !toggle;
        } else {
            $(this).text('View All Menu');
            $('.menu').slideUp();
            toggle = !toggle;
        }
        
    });



    let slides = $('.slide')
    slides.hide()
    console.log(slides)
    var curr = 0;
    var max = slides.length - 1

    // slides[0].show(); ---> gk bisa
    slides.eq(0).show();
    $('#slide-left').click(function (e) { 
        e.preventDefault();
        slides.eq(curr).hide();
        if (curr == 0) {
            slides.eq(max).fadeIn();
            curr = max;
        } else {
            curr -=1;
            slides.eq(curr).fadeIn();
        }
    });

    $('#slide-right').click(function (e) { 
        e.preventDefault();
        slides.eq(curr).hide();
        if (curr == max) {
            slides.eq(0).fadeIn();
            curr = 0;
        } else {
            curr +=1;
            slides.eq(curr).fadeIn();
        }
    });

    $('.slider-container').mouseenter(function(){
        $('.slide-text'),animate({
            'padding-bottom' : 10
        })
    })

    $('.order-btn').click(function (e) { 
        e.preventDefault();
        alert('Order Confirmed');
    });

})
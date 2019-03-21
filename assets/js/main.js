function main (){
    $('.close.a').hide();
    $('.close.b').hide();
    $('.close.c').hide();
    $('.inv').hide();
    // Making the Web design box the width of the entire container
    $('.text.a').on('click', function(){
        $('.web').removeClass('col-md-3');
        $('.web').addClass('col-md-12');
        $('.photo').hide();
        $('.contact').hide();
        $('.text').hide();
        $('.close.a').show();
        $('.inv').show();
});
// Making the Web design box implode
    $('.close.a').on('click', function(){
        console.log("inside close cb")
        $('.inv').hide();
        $('.web').addClass('col-sm-3');
        $('.web').removeClass('col-md-12');
        $('.photo').show();
        $('.contact').show();
        $(this).hide();
        $('.text').show();
        $('.text').css('top', '40%');
    });
// Making the Photography box the width of the entire container
    $('.text.b').on ('click', function(){
        $('.photo').removeClass('col-md-3');
        $('.photo').addClass('col-md-12');
        $('.web').hide();
        $('.contact').hide();
        $('.text').hide();
        $('.close.b').show();
        
});
// Making the Photography box implode
    $('.close.b').on('click', function(){
        console.log("inside close cb")
        $('.inv').hide();
        $('.photo').addClass('col-sm-3');
        $('.photo').removeClass('col-md-12');
        $('.web').show();
        $('.contact').show();
        $(this).hide();
        $('.text').show();
        $('.text').css('top', '40%');
    });
// Making the Contact info box the width of the entire container
    $('.text.c').on ('click', function(){
        $('.contact').removeClass('col-md-3');
        $('.contact').addClass('col-md-12');
        $('.web').hide();
        $('.photo').hide();
        $('.text').hide();
        $('.close.c').show();
});

// Making the Photography box implode
    $('.close.c').on('click', function(){
        console.log("inside close cb")
        $('.inv').hide();
        $('.contact').addClass('col-sm-3');
        $('.contact').removeClass('col-md-12');
        $('.web').show();
        $('.photo').show();
        $(this).hide();
        $('.text').show();
        $('.text').css('top', '40%');
    });
    
};

$(document).ready(main);
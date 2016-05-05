$(document).ready(function(){
    
    //Switching between PURCHASE AND SALE and RENT, SF, EM on the create-lot page
    $('.contract-terms-select').change( function () {
        switch( $(this).val() ) {
            case '0':
                $('.create-form').removeClass('rent');
                break;
            case '1':
                $('.create-form').addClass('rent');
                break;
        };
    });

    //Tabs between Description lot and Specification lot
    $('.descript-btn').click(function() {
        $('.specif-btn').removeClass('active');
        $(this).addClass('active');
        $('.specification-text').removeClass('active');
        $('.description-text').addClass('active');
    });
    $('.specif-btn').click(function() {
        $('.descript-btn').removeClass('active');
        $(this).addClass('active');
        $('.description-text').removeClass('active');
        $('.specification-text').addClass('active');
    });
    
});


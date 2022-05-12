$(document).ready(function(){
    $('.num').click(function(){
        var number = $('#screen').val();
        $('#screen').val( number + $(this).val() );
    });
    $('.clear').click(function(){
        $('#screen').val('');
    });
    $('.total').click(function(){
        var total = $('#screen').val();
        $('#screen').val(eval(total));
    });
});
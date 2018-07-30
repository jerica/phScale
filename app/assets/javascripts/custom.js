$("body").click(function(){
    $(".circle input[type='radio']").parent().css('background', '#da552f');
    $(".circle input[type='radio']").parent().removeClass('myAnswers');
    $(".circle input[type='radio']:checked").parent().css('background', 'black');
    $(".circle input[type='radio']:checked").parent().css('color', 'white');
    $(".circle input[type='radio']:checked").parent().addClass('myAnswers');
    
})
